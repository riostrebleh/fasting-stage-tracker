import { useEffect, useMemo, useState, useRef } from 'react'
import './App.css'
import { englishContent } from './content/fasting.en'
import { portugueseContent } from './content/fasting.pt'

const contents = {
  en: englishContent,
  pt: portugueseContent
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function formatDuration(hoursFloat) {
  const totalMinutes = Math.max(0, Math.floor(hoursFloat * 60))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${pad(hours)}h ${pad(minutes)}m`
}

function addHours(dateValue, hours) {
  const date = new Date(dateValue)
  date.setMinutes(date.getMinutes() + hours * 60)
  return date
}

function formatDateTime(date, language) {
  if (Number.isNaN(date.getTime())) return '--'

  return new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

function getStage(hours, stages) {
  return stages.find((stage) => hours >= stage.from && hours < stage.to) || stages[stages.length - 1]
}

function getStageStatus(stage, fastingHours, currentStage) {
  if (stage.title === currentStage.title) return 'active'
  if (fastingHours >= stage.to) return 'passed'
  return 'upcoming'
}

function getLocalDateTimeValue() {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  const local = new Date(now.getTime() - offset * 60000)
  return local.toISOString().slice(0, 16)
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('fasting-language') || 'pt')
  const [dietMode, setDietMode] = useState(() => localStorage.getItem('fasting-diet-mode') || 'ketogenic')
  const [startTime, setStartTime] = useState(
    () => localStorage.getItem('fasting-start-time') || getLocalDateTimeValue()
  )
  const [now, setNow] = useState(new Date())
  const [activeTab, setActiveTab] = useState('tips')
  const activeStageRef = useRef(null)

  const content = contents[language]
  const t = content.ui
  const stages = dietMode === 'ketogenic' ? content.ketogenicStages : content.standardStages

  const fastingHours = useMemo(() => {
    const started = new Date(startTime)
    if (Number.isNaN(started.getTime())) return 0
    return Math.max(0, (now.getTime() - started.getTime()) / 36e5)
  }, [startTime, now])

  const currentStage = getStage(fastingHours, stages)
  const nextStage = stages.find((stage) => stage.from >= currentStage.to)

  const bibleVerse = useMemo(() => {
    if (!content.bibleVerses || content.bibleVerses.length === 0) return null

    // Usar uma semente que combina o título do estágio e a hora atual do dia
    // para que o versículo mude ocasionalmente, mas não a cada segundo.
    const hourSeed = new Date().getHours()
    const stageSeed = currentStage.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const seed = stageSeed + hourSeed

    const index = seed % content.bibleVerses.length
    return content.bibleVerses[index]
  }, [currentStage, content])

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    localStorage.setItem('fasting-start-time', startTime)
  }, [startTime])

  useEffect(() => {
    localStorage.setItem('fasting-language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('fasting-diet-mode', dietMode)
  }, [dietMode])

  useEffect(() => {
    if (activeStageRef.current) {
      activeStageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [currentStage.title])

  const stageProgress = Math.min(
    100,
    Math.max(0, ((fastingHours - currentStage.from) / (currentStage.to - currentStage.from)) * 100)
  )

  const totalProgress = Math.min(100, (fastingHours / 36) * 100)

  const elapsedInStage = Math.max(0, fastingHours - currentStage.from)
  const stageDuration = currentStage.to - currentStage.from
  const elapsedTicks = Math.min(60, Math.floor((elapsedInStage / stageDuration) * 60))

  function startNow() {
    setStartTime(getLocalDateTimeValue())
    setNow(new Date())
  }

  return (
    <main className="page">
      <section className="topLanguage">
        <label>
          <span>{t.language}</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>
        </label>
      </section>

      <section className="hero">
        <div className="badge">{t.badge}</div>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="panel controls">
        <label>
          <span>{t.startedAt}</span>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </label>

        <label>
          <span>{t.dietMode}</span>
          <select value={dietMode} onChange={(event) => setDietMode(event.target.value)}>
            <option value="ketogenic">{t.ketogenic}</option>
            <option value="standard">{t.standard}</option>
          </select>
        </label>

        <button type="button" onClick={startNow}>
          {t.startNow}
        </button>
      </section>

      <section className="grid">
        <div className={`panel current phase-${currentStage.phase.match(/\d/)?.[0] || '1'}`}>
          <p className="eyebrow">{t.currentPhase}</p>
          <h2>{currentStage.phase}</h2>
          <h3>{currentStage.title}</h3>

          <div className="stats">
            <div>
              <span>{t.elapsed}</span>
              <strong>{formatDuration(fastingHours)}</strong>
            </div>

            <div>
              <span>{t.stageRange}</span>
              <strong>{currentStage.phaseFrom}–{currentStage.phaseTo}h</strong>
            </div>

            <div>
              <span>{t.nextStage}</span>
              <strong className="nextStageInfo">
                {nextStage ? (
                  <>
                    <span className="nextTime">{nextStage.from}h</span>
                    <span className="nextTitle">{nextStage.title}</span>
                  </>
                ) : (
                  '36h+'
                )}
              </strong>
            </div>
          </div>

          <div className="progressBlock">
            <div className="progressLabel">
              <span>{t.progressInStage}</span>
              <span>{Math.round(stageProgress)}%</span>
            </div>

            <div className="progress">
              <div style={{ width: `${stageProgress}%` }} />
            </div>
          </div>

          <div className="minuteBlock">
            <div className="progressLabel">
              <span>{t.minuteBar}</span>
              <span>{formatDuration(elapsedInStage)}</span>
            </div>

            <div className="minuteRail">
              {Array.from({ length: 60 }, (_, index) => (
                <i
                  key={index}
                  className={[
                    'minuteTick',
                    index < elapsedTicks ? 'active' : '',
                    index === elapsedTicks ? 'currentMinute' : ''
                  ].join(' ')}
                  title={`${Math.round((index / 60) * stageDuration * 60)} min`}
                />
              ))}
            </div>
          </div>

          <div className="tabs">
            <button
              type="button"
              className={activeTab === 'tips' ? 'active' : ''}
              onClick={() => setActiveTab('tips')}
            >
              {t.tabs.tips}
            </button>
            <button
              type="button"
              className={activeTab === 'science' ? 'active' : ''}
              onClick={() => setActiveTab('science')}
            >
              {t.tabs.science}
            </button>
            <button
              type="button"
              className={activeTab === 'bible' ? 'active' : ''}
              onClick={() => setActiveTab('bible')}
            >
              {t.tabs.bible}
            </button>
          </div>

          {activeTab === 'tips' && (
            <div className="tabContent">
              <p className="summary">{currentStage.summary}</p>
              <p className="feeling">{currentStage.feeling}</p>
              <ul className="detailsList">
                {currentStage.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'science' && (
            <div className="tabContent">
              <ul className="detailsList scienceList">
                {currentStage.scientific?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'bible' && (
            <div className="tabContent bibleContent">
              {bibleVerse ? (
                <blockquote>
                  <p>"{bibleVerse.text}"</p>
                  <cite>— {bibleVerse.reference}</cite>
                </blockquote>
              ) : (
                <p>...</p>
              )}
            </div>
          )}
        </div>

        <aside className="panel timeline">
          <h2>{t.timeline}</h2>

          <div className="progressBlock totalProgressBlock">
            <div className="progressLabel">
              <span>{t.overallProgress}</span>
              <span>{Math.round(totalProgress)}%</span>
            </div>

            <div className="progress">
              <div style={{ width: `${totalProgress}%` }} />
            </div>
          </div>

          <div className="legend">
            <span>
              <i className="dot passedDot" /> {t.passed}
            </span>
            <span>
              <i className="dot activeDot" /> {t.active}
            </span>
            <span>
              <i className="dot upcomingDot" /> {t.upcoming}
            </span>
          </div>

          <div className="stageList">
            {stages.map((stage) => {
              const status = getStageStatus(stage, fastingHours, currentStage)
              const phaseStart = addHours(startTime, stage.from)
              const phaseNumber = stage.phase.match(/\d/)?.[0] || '1'

              const hint = [
                stage.title,
                stage.phase,
                `${stage.from}–${stage.to}h`,
                `${t.starts}: ${formatDateTime(phaseStart, language)}`,
                '',
                stage.summary,
                '',
                stage.feeling,
                '',
                ...stage.details.map((detail) => `• ${detail}`)
              ].join('\n')

              return (
                <div
                  key={stage.title}
                  ref={status === 'active' ? activeStageRef : null}
                  className={`stage ${status} phase-${phaseNumber}`}
                  title={hint}
                >
                  <div className="stageHeader">
                    <span>{stage.from}–{stage.to}h</span>
                    <em>{t[status]}</em>
                  </div>

                  <small>{stage.phase}</small>
                  <strong>{stage.title}</strong>

                  <div className="stageTime">
                    <span>{t.starts}</span>
                    <b>{formatDateTime(phaseStart, language)}</b>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </section>

      <section className="warning">
        <p>
          <strong>{t.healthNoteTitle}</strong> {t.healthNote}
        </p>
      </section>
    </main>
  )
}

export default App
