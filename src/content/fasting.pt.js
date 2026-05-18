export const portugueseContent = {
  ui: {
    badge: 'Rastreador de Fases do Jejum',
    language: 'Linguagem',
    title: 'Em qual fase do jejum você está?',
    subtitle:
      'Acompanhe sua fase metabólica estimada com base no tempo de jejum, tipo de dieta, tempo decorrido e próximo estágio. Continue firme — um estágio de cada vez 🚀',
    startedAt: 'Jejum começou em',
    dietMode: 'Tipo de dieta',
    ketogenic: 'Cetogênica / low carb',
    standard: 'Padrão / não cetogênica',
    startNow: 'Iniciar agora',
    currentPhase: 'Fase atual',
    elapsed: 'Tempo',
    stageRange: 'Intervalo',
    nextStage: 'Próximo estágio',
    progressInStage: 'Progresso neste estágio',
    minuteBar: 'Minutos da hora',
    transition: 'Estágio',
    timeline: 'Linha do tempo de 36 horas',
    overallProgress: 'Progresso geral',
    passed: 'Concluída',
    active: 'Atual',
    upcoming: 'Próxima',
    starts: 'Início',
    healthNoteTitle: 'Nota científica:',
    healthNote:
      'Essas fases são estimativas. O metabolismo real varia conforme dieta, atividade física, sono, hidratação, medicamentos e condições de saúde.'
  },

  standardStages: [
    {
      from: 0,
      to: 4,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'Transição do Estado Alimentado',
      phase: 'Fase 1 — Depleção de Glicogênio',
      summary:
        'A insulina começa a cair enquanto seu corpo ainda usa glicose recente e glicogênio armazenado.',
      feeling:
        'Você provavelmente ainda se sente normal. O corpo está usando energia da última refeição. Sem drama ainda 😄💧 Continue tranquilo e só mantenha o plano.',
      details: [
        'A insulina começa a voltar para níveis mais baixos.',
        'Ainda existe glicose disponível da refeição anterior.',
        'O glicogênio muscular fica mais preservado para atividade física.',
        'O glicogênio do fígado começa a sustentar a glicose no sangue.'
      ]
    },
    {
      from: 4,
      to: 8,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'A Virada Metabólica Começa',
      phase: 'Fase 1 — Depleção de Glicogênio',
      summary:
        'O fígado passa a quebrar mais glicogênio em glicose para manter a glicemia estável.',
      feeling:
        'A voz do lanchinho pode começar a sussurrar, mas você não precisa obedecer toda vontade 😄⚙️ Beba água e deixe o corpo trocar de marcha.',
      details: [
        'Glicogenólise é a conversão de glicogênio armazenado em glicose.',
        'O glicogênio hepático começa a cair de forma mais perceptível.',
        'A insulina continua em tendência de queda.',
        'A oxidação de gordura começa a aumentar gradualmente.'
      ]
    },
    {
      from: 8,
      to: 12,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'Jogos Vorazes da Fome',
      phase: 'Fase 1 — Depleção de Glicogênio',
      summary:
        'Hormônios da fome podem subir em ondas enquanto o glicogênio do fígado continua diminuindo.',
      feeling:
        'Essa fase é muito mental. A fome vem como onda: incomoda, parece forte, mas depois passa 🌊💪 Respire e siga firme.',
      details: [
        'A grelina pode subir nos horários habituais de refeição.',
        'A fome costuma aparecer em ondas de 30 a 60 minutos.',
        'O glicogênio do fígado pode já estar bastante reduzido.',
        'Hidratação e eletrólitos mudam bastante a sensação nessa fase.'
      ]
    },
    {
      from: 12,
      to: 15,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Do Modo Açúcar para o Modo Gordura',
      phase: 'Fase 2 — Virada Metabólica',
      summary:
        'Seu corpo começa a depender menos de glicose e mais da oxidação de gordura.',
      feeling:
        'A energia pode oscilar um pouco. Isso é adaptação, não fracasso 🔄🔥 Seu metabolismo está aprendendo a usar outro combustível.',
      details: [
        'O glicogênio hepático pode estar substancialmente reduzido.',
        'Insulina mais baixa facilita a mobilização de gordura.',
        'A CPT1 ajuda a transportar ácidos graxos para dentro das mitocôndrias.',
        'A produção de cetonas começa a ganhar relevância.'
      ]
    },
    {
      from: 15,
      to: 18,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Produção de Cetonas Começa',
      phase: 'Fase 2 — Virada Metabólica',
      summary:
        'O fígado começa a produzir mais cetonas conforme a disponibilidade de glicose diminui.',
      feeling:
        'As cetonas estão entrando no jogo 🧠⚡ Você pode começar a se sentir mais estável ou mais claro mentalmente. Continue firme.',
      details: [
        'Ácidos graxos são convertidos em corpos cetônicos.',
        'Beta-hidroxibutirato e acetoacetato começam a subir.',
        'A grelina pode começar a cair após as ondas de fome.',
        'O corpo fica menos dependente de comer com frequência.'
      ]
    },
    {
      from: 18,
      to: 21,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Subida das Cetonas',
      phase: 'Fase 3 — Cetose Profunda e Ativação da Autofagia',
      summary:
        'A produção de cetonas fica mais importante conforme a oxidação de gordura aumenta.',
      feeling:
        'Aqui seu corpo começa a aceitar gordura como combustível sério 🔥🏆 Boa! Você já passou por uma parte difícil.',
      details: [
        'As cetonas podem se aproximar da faixa de cetose nutricional.',
        'O cérebro pode começar a usar cetonas de forma mais relevante.',
        'A oxidação de gordura se torna uma via importante de energia.',
        'Algumas pessoas sentem melhora na clareza mental.'
      ]
    },
    {
      from: 21,
      to: 24,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Modo Limpeza Celular',
      phase: 'Fase 3 — Cetose Profunda e Ativação da Autofagia',
      summary:
        'Processos de limpeza celular relacionados ao jejum podem ficar mais ativos.',
      feeling:
        'Menos barulho de comida, mais manutenção interna 🧹✨ Progresso silencioso também é progresso.',
      details: [
        'A autofagia pode aumentar durante escassez de nutrientes.',
        'O hormônio do crescimento pode subir e ajudar a preservar massa magra.',
        'A insulina permanece baixa em relação ao estado alimentado.',
        'Vias de reparo celular podem ficar mais ativas.'
      ]
    },
    {
      from: 24,
      to: 27,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Oxidação Máxima de Gordura',
      phase: 'Fase 4 — Transformação Metabólica',
      summary:
        'A queima de gordura pode estar bem elevada em comparação ao estado alimentado.',
      feeling:
        'Essa é uma janela forte de oxidação de gordura 🔥🧂 Hidrate, cuide dos eletrólitos e continue inteligente.',
      details: [
        'A oxidação de gordura pode se tornar a principal fonte de energia.',
        'As cetonas podem continuar subindo.',
        'Insulina baixa favorece mobilização contínua de gordura.',
        'O equilíbrio de eletrólitos fica mais importante.'
      ]
    },
    {
      from: 27,
      to: 30,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Pico de Reparo e Adaptação',
      phase: 'Fase 4 — Transformação Metabólica',
      summary:
        'Adaptações hormonais e celulares podem ficar mais pronunciadas.',
      feeling:
        'Zona avançada de jejum ⚡🧘 Respeite seu corpo, mas tenha orgulho da disciplina. Você chegou longe.',
      details: [
        'O hormônio do crescimento pode estar elevado.',
        'A noradrenalina pode apoiar alerta e mobilização de gordura.',
        'O cortisol pode subir moderadamente para apoiar a produção de glicose.',
        'Marcadores ligados à autofagia podem estar mais ativos, mas isso varia.'
      ]
    },
    {
      from: 30,
      to: 33,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'Pico de Flexibilidade Metabólica',
      phase: 'Fase 5 — Reset e Recuperação',
      summary:
        'Seu corpo fica mais eficiente em alternar entre glicose, gordura e cetonas.',
      feeling:
        'Você está treinando flexibilidade metabólica 🏁🔥 Aqui a consistência começa a pagar. Só não transforme confiança em exagero.',
      details: [
        'A oxidação de gordura continua elevada.',
        'O uso de cetonas continua ativo.',
        'A glicose é mantida principalmente por gliconeogênese.',
        'A realimentação deve ser planejada, não caótica.'
      ]
    },
    {
      from: 33,
      to: 36,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'Preparação para Realimentação',
      phase: 'Fase 5 — Reset e Recuperação',
      summary:
        'Seu corpo se aproxima da realimentação e a digestão deve ser reiniciada com cuidado.',
      feeling:
        'Quase lá 🍽️😄 Vitória não é atacar a geladeira inteira. Realimente com calma e mantenha o controle.',
      details: [
        'A digestão deve ser reiniciada cuidadosamente.',
        'Evite uma carga enorme de carboidrato logo de cara.',
        'Uma refeição moderada baseada em proteína costuma ser mais fácil.',
        'Refeições muito grandes podem pesar após jejum prolongado.'
      ]
    }
  ]
}

portugueseContent.ketogenicStages = portugueseContent.standardStages.map((stage, index) => {
  const ketoOverrides = [
    {
      title: 'Transição Alimentada Low Carb',
      phase: 'Fase Cetogênica 1 — Realimentação Digestiva, Não Reset Total',
      summary:
        'A comida entrou, mas com muito pouco carboidrato seu corpo pode continuar próximo do modo gordura.',
      feeling:
        'Você não está mais em jejum, mas metabolicamente talvez não tenha voltado ao zero 😉 Esse é o ponto do low carb: digestão ativa, mas sem grande reset glicêmico.'
    },
    {
      title: 'Estabilização Cetogênica',
      phase: 'Fase Cetogênica 1 — Realimentação Digestiva, Não Reset Total',
      summary:
        'A digestão continua enquanto a disponibilidade de glicose permanece limitada.',
      feeling:
        'Você pode se sentir cheio pela proteína e gordura, mas não necessariamente sonolento como depois de uma bomba de carboidrato 😴🔥 Continue no controle.'
    },
    {
      title: 'Retorno Rápido ao Modo Gordura',
      phase: 'Fase Cetogênica 2 — Virada Metabólica Acelerada',
      summary:
        'Como o glicogênio não foi totalmente restaurado, seu corpo pode voltar ao uso de gordura mais rápido.',
      feeling:
        'A fome pode ficar mais calma 🐺💪 Low carb costuma deixar o monstro da fome menos dramático. Você está fazendo o corpo trabalhar a seu favor.'
    }
  ]

  return {
    ...stage,
    phaseFrom: stage.phaseFrom,
    phaseTo: stage.phaseTo,
    ...(ketoOverrides[index] || {
      phase: stage.phase.replace('Fase', 'Fase Cetogênica'),
      feeling: `${stage.feeling} Em low carb, essa fase pode chegar mais rápido do que no ciclo padrão ⚡`
    }),
    details: [
      ...stage.details,
      'Ajuste cetogênico: pouco carboidrato limita a restauração rápida do glicogênio.',
      'Proteína e gordura quebram o jejum digestivo, mas podem não resetar totalmente o metabolismo de gordura.'
    ]
  }
})