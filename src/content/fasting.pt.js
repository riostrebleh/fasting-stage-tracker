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
      'Essas fases são estimativas. O metabolismo real varia conforme dieta, atividade física, sono, hidratação, medicamentos e condições de saúde.',
    tabs: {
      tips: 'Dicas e Sensações',
      science: 'Dados Científicos',
      bible: 'Palavra de Conforto'
    }
  },

  standardStages: [
    {
      from: 0,
      to: 4,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'Adeus, Comidinha!',
      phase: 'Fase 1 — Depleção de Glicogênio',
      summary:
        'A insulina começa a cair enquanto seu corpo ainda usa a energia da última refeição e o glicogênio estocado.',
      feeling:
        'Você provavelmente ainda se sente normal e confiante. O corpo está de boa, usando o que você comeu. Aproveite a paz antes da tempestade (de fome) 😄💧 Siga o plano!',
      details: [
        'A insulina começa a cair para níveis basais.',
        'Ainda existe glicose circulante da última refeição.',
        'O glicogênio muscular está guardadinho para emergências.',
        'O fígado começa a liberar glicose para manter o cérebro feliz.'
      ],
      scientific: [
        '1.600–2.000 calorias de energia armazenada estão disponíveis.',
        'A insulina declina em direção ao nível basal.',
        'O corpo armazena cerca de 400–500 gramas de glicogênio nos músculos.',
        'O corpo armazena cerca de 100–120 gramas de glicogênio no fígado.'
      ],
      bible: [
        { reference: 'Mateus 4:4', text: 'Nem só de pão viverá o homem, mas de toda palavra que sai da boca de Deus.' },
        { reference: 'Filipenses 4:13', text: 'Tudo posso naquele que me fortalece.' }
      ]
    },
    {
      from: 4,
      to: 8,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'A Primeira Marcha Metabólica',
      phase: 'Fase 1 — Depleção de Glicogênio',
      summary:
        'O fígado passa a quebrar mais glicogênio em glicose para manter sua energia estável.',
      feeling:
        'A "voz do lanchinho" pode começar a sussurrar no seu ouvido. É só o seu cérebro sendo dramático 🙄⚙️ Beba água e deixe o corpo trocar de marcha sozinho.',
      details: [
        'Glicogenólise: transformando estoque em energia real.',
        'O glicogênio hepático começa a baixar de verdade.',
        'A insulina continua em queda livre.',
        'A queima de gordura começa a dar os primeiros passos.'
      ],
      scientific: [
        'A glicogenólise é o processo metabólico no qual o glicogênio é quebrado em glicose.',
        'O glicogênio hepático é esgotado a uma taxa de cerca de 10–15 gramas por hora durante o jejum.',
        'Após 8 horas, cerca de 120 gramas de glicogênio podem ter sido usados.',
        'O hormônio do crescimento começa a aumentar, promovendo a quebra de gordura (lipólise).'
      ],
      bible: [
        { reference: 'Salmos 37:5', text: 'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.' },
        { reference: 'Isaías 40:31', text: 'Mas os que esperam no Senhor renovarão as suas forças.' }
      ]
    },
    {
      from: 8,
      to: 12,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'O Desafio do Estômago Falante',
      phase: 'Fase 1 — Depleção de Glicogênio',
      summary:
        'Hormônios da fome sobem em ondas enquanto o estoque de glicogênio do fígado vai chegando ao fim.',
      feeling:
        'A fome vem como uma onda: incomoda, parece que vai te engolir, mas ela SEMPRE passa 🌊💪 Respire fundo, não é fome real, é só hábito. Você é o chefe aqui!',
      details: [
        'A grelina pode subir nos horários habituais de refeição.',
        'A fome costuma durar de 30 a 60 minutos, depois o corpo se aquieta.',
        'O estoque de glicogênio está quase no fim (quase lá!).',
        'Beber água gelada agora é como um abraço no estômago.'
      ],
      scientific: [
        'O glicogênio hepático está cerca de 60–70% esgotado.',
        'Os picos de grelina (hormônio da fome) estão 30–40% mais altos.',
        'A fome geralmente vem em ondas que duram cerca de 30–60 minutos.'
      ],
      bible: [
        { reference: '1 Coríntios 10:13', text: 'Deus é fiel e não permitirá que sejais tentados além das vossas forças.' },
        { reference: 'Salmos 34:10', text: 'Os que buscam ao Senhor de nada têm falta.' }
      ]
    },
    {
      from: 12,
      to: 15,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Virando a Chave: Modo Gordura',
      phase: 'Fase 2 — Virada Metabólica',
      summary:
        'Seu corpo começa a depender menos de açúcar e mais da queima das suas gordurinhas estocadas.',
      feeling:
        'A energia pode oscilar. É o seu metabolismo aprendendo a usar um combustível novo 🔄🔥 Imagine suas células fazendo um curso de reciclagem. Você está ficando mais eficiente!',
      details: [
        'O glicogênio do fígado está praticamente esgotado.',
        'Insulina baixa abre as portas para a queima de gordura.',
        'Transportadores de gordura (CPT1) começam a trabalhar dobrado.',
        'A produção inicial de cetonas está sendo preparada.'
      ],
      scientific: [
        'O glicogênio hepático está cerca de 70–80% esgotado.',
        'Dos 100–120g iniciais de glicogênio hepático, restam apenas cerca de 20–30g.',
        'A enzima CPT1 ajuda a transportar ácidos graxos para as mitocôndrias para serem queimados.'
      ],
      bible: [
        { reference: 'Provérbios 16:3', text: 'Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.' },
        { reference: '2 Coríntios 12:9', text: 'O meu poder se aperfeiçoa na fraqueza.' }
      ]
    },
    {
      from: 15,
      to: 18,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Combustível Premium Ativado',
      phase: 'Fase 2 — Virada Metabólica',
      summary:
        'O fígado começa a produzir mais cetonas — o supercombustível para o seu cérebro.',
      feeling:
        'As cetonas entraram no chat! 🧠⚡ Você pode sentir um "clique" de clareza mental ou energia estável. O monstro da fome está sendo domado.',
      details: [
        'Ácidos graxos se transformam em corpos cetônicos.',
        'Níveis de beta-hidroxibutirato começam a subir no sangue.',
        'A fome tende a diminuir conforme as cetonas sobem.',
        'Seu corpo está descobrindo que não precisa comer toda hora.'
      ],
      scientific: [
        'O fígado produz cetonas, uma fonte de combustível eficiente para o cérebro.',
        'Através da beta-oxidação, ácidos graxos são convertidos em acetoacetato e beta-hidroxibutirato.',
        'Os níveis de grelina começam a diminuir.'
      ],
      bible: [
        { reference: 'Josué 1:9', text: 'Não fui eu que lhe ordenei? Seja forte e corajoso! O Senhor, o seu Deus, estará com você.' },
        { reference: 'Salmos 23:1', text: 'O Senhor é o meu pastor; de nada terei falta.' }
      ]
    },
    {
      from: 18,
      to: 21,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Turbo de Cetonas',
      phase: 'Fase 3 — Cetose Profunda e Ativação da Autofagia',
      summary:
        'A produção de cetonas acelera e a queima de gordura se torna sua via principal de energia.',
      feeling:
        'Seu corpo finalmente aceitou que gordura é vida! 🔥🏆 Você atravessou o "Vale da Fome" e agora está no lucro. Sinta o poder da autonomia energética!',
      details: [
        'Entrando na zona de cetose nutricional de verdade.',
        'O cérebro começa a rodar com energia limpa (cetonas).',
        'A oxidação de gordura está em plena velocidade.',
        'Foco e concentração costumam atingir um novo nível aqui.'
      ],
      scientific: [
        'A produção de cetonas aumenta significativamente.',
        'Os níveis de cetonas no sangue podem subir para 1,5–2,0 mmol/L (cetose nutricional).',
        'O cérebro usa cetonas como fonte primária de energia.'
      ],
      bible: [
        { reference: 'Mateus 6:33', text: 'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça.' },
        { reference: 'Salmos 121:1-2', text: 'Elevo os meus olhos para os montes; de onde vem o meu socorro? O meu socorro vem do Senhor.' }
      ]
    },
    {
      from: 21,
      to: 24,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Spa Celular (Faxina Geral)',
      phase: 'Fase 3 — Cetose Profunda e Ativação da Autofagia',
      summary:
        'O corpo começa a reciclar componentes celulares velhos e danificados.',
      feeling:
        'Menos barulho de comida, mais manutenção interna 🧹✨ É a Marie Kondo das suas células: "Isso aqui ainda me traz alegria? Não? Então recicla!".',
      details: [
        'A autofagia aumenta: reciclagem de proteínas velhas.',
        'Hormônio do crescimento (hGH) sobe para proteger seus músculos.',
        'A insulina está no porão, o que é ótimo para a longevidade.',
        'Reparo celular intenso acontecendo enquanto você segue firme.'
      ],
      scientific: [
        'A autofagia (limpeza celular) começa a aumentar.',
        'O hormônio do crescimento aumenta para reduzir o risco de perda muscular.',
        'Processos metabólicos focam na oxidação de gordura e reparo celular.'
      ],
      bible: [
        { reference: '2 Coríntios 5:17', text: 'Se alguém está em Cristo, é nova criação; as coisas antigas já passaram.' },
        { reference: 'Salmos 51:10', text: 'Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito estável.' }
      ]
    },
    {
      from: 24,
      to: 27,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Fogueira Metabólica',
      phase: 'Fase 4 — Transformação Metabólica',
      summary:
        'A queima de gordura atinge níveis altíssimos em comparação ao estado alimentado.',
      feeling:
        'Você é basicamente uma tocha humana agora 🔥🧂 Suas gordurinhas estão sendo evaporadas. Mantenha os eletrólitos em dia para não perder o brilho!',
      details: [
        'Oxidação lipídica dominante: você é uma máquina de queimar gordura.',
        'Níveis de cetona continuam a subir de forma constante.',
        'Mobilização de gordura visceral facilitada pela insulina baixa.',
        'Sal e magnésio são seus melhores amigos nesta fase.'
      ],
      scientific: [
        'A queima de gordura atinge o pico nesta fase.',
        'A oxidação de gordura aumenta significativamente.',
        'Cetonas no sangue podem chegar a 2,0–3,5 mmol/L.'
      ],
      bible: [
        { reference: 'Gálatas 6:9', text: 'E não nos cansemos de fazer o bem, pois no tempo próprio colheremos.' },
        { reference: 'Romanos 12:12', text: 'Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.' }
      ]
    },
    {
      from: 27,
      to: 30,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Nível Jedi de Jejum',
      phase: 'Fase 4 — Transformação Metabólica',
      summary:
        'Adaptações hormonais e celulares profundas estão em pleno vigor.',
      feeling:
        'Zona de elite! ⚡🧘 Olhe para trás e veja o quanto você conquistou. Seu corpo está operando em um modo de alta performance e resiliência.',
      details: [
        'Pico de hormônio do crescimento para preservação tecidual.',
        'Adrenalina e noradrenalina mantêm o foco e o alerta altos.',
        'O corpo gerencia a glicose necessária via gliconeogênese.',
        'Processos de reparo profundo estão no ápice.'
      ],
      scientific: [
        'Marcadores de autofagia como LC3-II aumentam.',
        'O fator neurotrófico derivado do cérebro (BDNF) pode aumentar.',
        'Insulina pode estar 50–70% mais baixa que o normal.',
        'O cortisol pode estar moderadamente elevado para apoiar a gliconeogênese.',
        'A norepinefrina pode aumentar, apoiando o alerta e a mobilização de gordura.'
      ],
      bible: [
        { reference: 'Efésios 6:10', text: 'Finalmente, fortaleçam-se no Senhor e no seu forte poder.' },
        { reference: 'Salmos 18:32', text: 'Ele é o Deus que me reveste de força e torna perfeito o meu caminho.' }
      ]
    },
    {
      from: 30,
      to: 33,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'Mestre da Flexibilidade',
      phase: 'Fase 5 — Reset e Recuperação',
      summary:
        'Seu corpo domina a arte de trocar entre diferentes fontes de energia com eficiência total.',
      feeling:
        'Flexibilidade metabólica nível máximo! 🏁🔥 Você provou que seu corpo é híbrido. Não deixe a autoconfiança te fazer devorar a geladeira amanhã.',
      details: [
        'Eficiência máxima na transição entre gordura e cetonas.',
        'Sinalização de insulina resetada e sensibilidade aumentada.',
        'Controle total sobre impulsos alimentares.',
        'O sistema digestivo está descansado e pronto para um recomeço.'
      ],
      scientific: [
        'O corpo torna-se mais eficiente em alternar entre glicose e gordura.',
        'O uso de cetonas continua a aumentar.',
        'A oxidação de gordura permanece elevada.'
      ],
      bible: [
        { reference: 'Lamentações 3:22-23', text: 'As misericórdias do Senhor são a causa de não sermos consumidos; elas se renovam cada manhã.' },
        { reference: 'Salmos 30:5', text: 'O choro pode persistir uma noite, mas de manhã irrompe a alegria.' }
      ]
    },
    {
      from: 33,
      to: 36,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'O Grand Finale (Prepare o Garfo)',
      phase: 'Fase 5 — Reset e Recuperação',
      summary:
        'Seu corpo se prepara para o retorno da comida. A digestão deve acordar devagar.',
      feeling:
        'Quase na linha de chegada! 🍽️😄 Ganhar o jogo não é comer um boi inteiro no primeiro minuto. Planeje uma quebra de jejum elegante e consciente.',
      details: [
        'Acorde o sistema digestivo com algo leve (caldo ou proteína).',
        'Evite explosões de açúcar logo de cara para não chocar o sistema.',
        'Sua primeira refeição vai ter o melhor sabor do mundo!',
        'Respeite sua nova saciedade — você precisa de menos do que imagina.'
      ],
      scientific: [
        'O corpo prepara-se para a realimentação.',
        'A primeira refeição deve ser moderada e baixa em carboidratos.',
        'Nunca consuma mais de 300g de carboidratos imediatamente após um jejum prolongado.'
      ],
      bible: [
        { reference: 'Eclesiastes 9:7', text: 'Vá, coma a sua comida com alegria e beba o seu vinho com o coração contente.' },
        { reference: '1 Coríntios 10:31', text: 'Assim, quer vocês comam, quer bebam, façam tudo para a glória de Deus.' }
      ]
    }
  ]
}

portugueseContent.ketogenicStages = portugueseContent.standardStages.map((stage, index) => {
  const ketoOverrides = [
    {
      title: 'Recarga Inteligente (Low Carb)',
      phase: 'Fase Cetogênica 1 — O Truque Metabólico',
      summary:
        'A comida entrou, mas sem o tsunami de carboidratos seu corpo continua com um pé no modo queima de gordura.',
      feeling:
        'Você saiu do jejum, mas não saiu da cetose 😉 É como abastecer o carro sem desligar o motor. Digestão ativa, mas o foco continua alto!'
    },
    {
      title: 'Estabilização de Energia',
      phase: 'Fase Cetogênica 1 — O Truque Metabólico',
      summary:
        'A digestão está acontecendo, mas os níveis de glicose e insulina continuam comportados.',
      feeling:
        'Sentir-se satisfeito sem sentir sono? Esse é o poder da gordura e proteína 😴🔥 Nada de "coma alimentar" por aqui. Você continua no comando!'
    },
    {
      title: 'Express para o Modo Gordura',
      phase: 'Fase Cetogênica 2 — Atalho Metabólico',
      summary:
        'Como você não lotou o estoque de glicogênio, seu corpo volta a usar gordura como fonte principal num piscar de olhos.',
      feeling:
        'O monstro da fome nem teve tempo de acordar 🐺💪 Em low carb, o jejum é quase um estado natural. Seu corpo já sabe o que fazer!'
    }
  ]

  return {
    ...stage,
    phaseFrom: stage.phaseFrom,
    phaseTo: stage.phaseTo,
    scientific: stage.scientific,
    bible: stage.bible,
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