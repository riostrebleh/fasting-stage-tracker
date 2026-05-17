import { useEffect, useMemo, useState } from 'react'
import './App.css'

const stages = [
  {
    from: 0,
    to: 4,
    title: 'The Fed State Transition',
    phase: 'Phase 1 — Glycogen Depletion',
    summary: 'Insulin declines toward baseline while the body still uses recently available energy.',
    details: [
      '1,600–2,000 calories of stored energy.',
      'Insulin declines toward baseline.',
      'Your body stores about 400–500 grams of glycogen in your muscles.',
      'Your body stores about 100–120 grams of glycogen in your liver.'
    ]
  },
  {
    from: 4,
    to: 8,
    title: 'The Metabolic Shift Begins',
    phase: 'Phase 1 — Glycogen Depletion',
    summary: 'The body increasingly uses stored glycogen, especially from the liver.',
    details: [
      'Glycogenolysis is the metabolic process in which glycogen is broken down into glucose.',
      'Liver glycogen is depleted at about 10–15 grams per hour during fasting.',
      'After 8 hours, around 120 grams of glycogen may have been used.',
      'Growth hormone starts to increase and supports metabolism, protein synthesis and lipolysis.'
    ]
  },
  {
    from: 8,
    to: 12,
    title: 'The Hunger Games',
    phase: 'Phase 1 — Glycogen Depletion',
    summary: 'Hunger may peak in waves while liver glycogen continues to decrease.',
    details: [
      'Liver glycogen may be around 60–70% used.',
      'Ghrelin may peak around 30–40% higher.',
      'Hunger usually comes in waves lasting around 30–60 minutes.'
    ]
  },
  {
    from: 12,
    to: 15,
    title: 'The Point of No Return',
    phase: 'Phase 2 — The Metabolic Switch',
    summary: 'The body shifts from sugar mode toward fat-burning mode.',
    details: [
      'Liver glycogen may be around 70–80% used.',
      'From 100–120 grams of liver glycogen, around 20–30 grams may remain.',
      'CPT1 stands for Carnitine Palmitoyltransferase I.',
      'CPT1 helps transport fatty acids into the mitochondria to be burned for energy.'
    ]
  },
  {
    from: 15,
    to: 18,
    title: 'Ketone Production Begins',
    phase: 'Phase 2 — The Metabolic Switch',
    summary: 'The liver starts producing ketones as an efficient alternative fuel.',
    details: [
      'Ketones become useful fuel for the brain and body when glucose availability is reduced.',
      'Beta-oxidation produces acetoacetate, beta-hydroxybutyrate and acetone.',
      'Ghrelin may begin to decrease.'
    ]
  },
  {
    from: 18,
    to: 21,
    title: 'The Ketone Explosion',
    phase: 'Phase 3 — Deep Ketosis & Autophagy Activation',
    summary: 'Ketone production rises compared to the fed state.',
    details: [
      'Ketone production may increase significantly compared to the fed state.',
      'Blood ketone levels may climb toward 1.5–2.0 mmol/L.',
      'The brain may start using ketones as a major energy source instead of relying mostly on glucose.'
    ]
  },
  {
    from: 21,
    to: 24,
    title: 'Autophagy',
    phase: 'Phase 3 — Deep Ketosis & Autophagy Activation',
    summary: 'Cellular cleanup processes may become more active.',
    details: [
      'Autophagy begins to increase as the body shifts deeper into fasting.',
      'Growth hormone may increase, helping reduce the risk of muscle loss.',
      'Metabolic processes continue shifting toward fat oxidation and cellular repair.'
    ]
  },
  {
    from: 24,
    to: 27,
    title: 'Maximum Fat Oxidation',
    phase: 'Phase 4 — Peak Metabolic Transformation',
    summary: 'Fat burning may peak during this phase.',
    details: [
      'Fat oxidation can rise significantly compared to the fed state.',
      'Blood ketones may rise to around 2.0–3.5 mmol/L.',
      'This is a strong signal that the body is using fat for fuel.'
    ]
  },
  {
    from: 27,
    to: 30,
    title: 'Cellular Regeneration Peaks',
    phase: 'Phase 4 — Peak Metabolic Transformation',
    summary: 'Repair and adaptation processes may become more active during extended fasting.',
    details: [
      'Key autophagy markers such as LC3-II may increase.',
      'p62, a marker associated with cellular waste, may decrease.',
      'BDNF may increase during fasting.',
      'Growth hormone may rise significantly.',
      'Insulin may be 50–70% lower.',
      'Cortisol may be moderately elevated to support gluconeogenesis.',
      'Norepinephrine may increase, supporting alertness and fat mobilization.'
    ]
  },
  {
    from: 30,
    to: 33,
    title: 'Metabolic Flexibility Peak',
    phase: 'Phase 5 — The Reset & Recovery',
    summary: 'The body becomes more efficient at switching between glucose, fat and ketones.',
    details: [
      'Fat oxidation remains elevated.',
      'Ketone use continues.',
      'The body becomes more adapted to using fat and ketones as fuel.'
    ]
  },
  {
    from: 33,
    to: 36,
    title: 'The Preparation Phase',
    phase: 'Phase 5 — The Reset & Recovery',
    summary: 'The body approaches the refeeding point and digestion should be restarted carefully.',
    details: [
      'The body prepares for refeeding.',
      'The first meal after fasting should be moderate.',
      'Avoid a very large carbohydrate load immediately after an extended fast.',
      'Never consume more than 300 grams of carbohydrates immediately after an extended fast.'
    ]
  }
]

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

function formatDateTime(date) {
  if (Number.isNaN(date.getTime())) return '--'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

function getStage(hours) {
  return stages.find((stage) => hours >= stage.from && hours < stage.to) || stages[stages.length - 1]
}

function getStageStatus(stage, fastingHours, currentStage) {
  if (stage.title === currentStage.title) return 'active'
  if (fastingHours >= stage.to) return 'passed'
  return 'upcoming'
}

function App() {
  const [startTime, setStartTime] = useState(() => {
    const saved = localStorage.getItem('fasting-start-time')
    if (saved) return saved

    const now = new Date()
    return now.toISOString().slice(0, 16)
  })

  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    localStorage.setItem('fasting-start-time', startTime)
  }, [startTime])

  const fastingHours = useMemo(() => {
    const started = new Date(startTime)
    if (Number.isNaN(started.getTime())) return 0
    return Math.max(0, (now.getTime() - started.getTime()) / 36e5)
  }, [startTime, now])

  const currentStage = getStage(fastingHours)
  const nextStage = stages.find((stage) => stage.from >= currentStage.to)

  const stageProgress = Math.min(
    100,
    Math.max(0, ((fastingHours - currentStage.from) / (currentStage.to - currentStage.from)) * 100)
  )

  const totalProgress = Math.min(100, (fastingHours / 36) * 100)

  function startNow() {
    const current = new Date().toISOString().slice(0, 16)
    setStartTime(current)
    setNow(new Date())
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="badge">Fasting Stage Tracker</div>
        <h1>What fasting phase am I in?</h1>
        <p>
          Enter the fasting start time and track the estimated metabolic phase,
          elapsed time and next transition.
        </p>
      </section>

      <section className="panel controls">
        <label>
          <span>Fasting started at</span>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </label>

        <button type="button" onClick={startNow}>
          Start now
        </button>
      </section>

      <section className="grid">
        <div className="panel current">
          <p className="eyebrow">Current phase</p>
          <h2>{currentStage.title}</h2>
          <h3>{currentStage.phase}</h3>

          <div className="stats">
            <div>
              <span>Elapsed</span>
              <strong>{formatDuration(fastingHours)}</strong>
            </div>
            <div>
              <span>Stage range</span>
              <strong>{currentStage.from}–{currentStage.to}h</strong>
            </div>
            <div>
              <span>Next stage</span>
              <strong>{nextStage ? `${nextStage.from}h` : '36h+'}</strong>
            </div>
          </div>

          <div className="progressBlock">
            <div className="progressLabel">
              <span>Progress in this stage</span>
              <span>{Math.round(stageProgress)}%</span>
            </div>
            <div className="progress">
              <div style={{ width: `${stageProgress}%` }} />
            </div>
          </div>

          <p className="summary">{currentStage.summary}</p>

          <ul>
            {currentStage.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <aside className="panel timeline">
          <h2>36-hour timeline</h2>

          <div className="progressBlock">
            <div className="progressLabel">
              <span>Overall progress</span>
              <span>{Math.round(totalProgress)}%</span>
            </div>
            <div className="progress">
              <div style={{ width: `${totalProgress}%` }} />
            </div>
          </div>

          <div className="legend">
            <span><i className="dot passedDot" /> Passed</span>
            <span><i className="dot activeDot" /> Active</span>
            <span><i className="dot upcomingDot" /> Upcoming</span>
          </div>

          <div className="stageList">
            {stages.map((stage) => {
              const status = getStageStatus(stage, fastingHours, currentStage)
              const phaseStart = addHours(startTime, stage.from)
              const phaseEnd = addHours(startTime, stage.to)

              const hint = [
                `${stage.title}`,
                `${stage.phase}`,
                `Hour ${stage.from}–${stage.to}`,
                `Starts: ${formatDateTime(phaseStart)}`,
                `Ends: ${formatDateTime(phaseEnd)}`,
                '',
                stage.summary,
                '',
                ...stage.details.map((detail) => `• ${detail}`)
              ].join('\n')

              return (
                <div key={stage.title} className={`stage ${status}`} title={hint}>
                  <div className="stageHeader">
                    <span>{stage.from}–{stage.to}h</span>
                    <em>{status}</em>
                  </div>

                  <strong>{stage.title}</strong>
                  <small>{stage.phase}</small>

                  <div className="stageTime">
                    <span>Starts</span>
                    <b>{formatDateTime(phaseStart)}</b>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </section>

      <section className="warning">
        <strong>Health note:</strong> these phases are estimates based on elapsed time.
        Real glycogen depletion, ketosis and autophagy vary by diet, activity, sleep,
        hydration, medications and health conditions.
      </section>
    </main>
  )
}

export default App