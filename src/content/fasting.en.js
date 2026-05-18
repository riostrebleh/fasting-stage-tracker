export const englishContent = {
  ui: {
    badge: 'Fasting Stage Tracker',
    language: 'Language',
    title: 'What fasting phase are you in?',
    subtitle:
      'Track your estimated metabolic phase based on fasting time, diet type, elapsed time and the next stage. Keep going — one stage at a time 🚀',
    startedAt: 'Fasting started at',
    dietMode: 'Diet mode',
    ketogenic: 'Ketogenic / low carb',
    standard: 'Standard / non-ketogenic',
    startNow: 'Start now',
    currentPhase: 'Current phase',
    elapsed: 'Elapsed',
    stageRange: 'Interval',
    nextStage: 'Next stage',
    progressInStage: 'Progress in this stage',
    minuteBar: 'Minutes of the hour',
    transition: 'Stage',
    timeline: '36-hour timeline',
    overallProgress: 'Overall progress',
    passed: 'Passed',
    active: 'Active',
    upcoming: 'Upcoming',
    starts: 'Starts',
    healthNoteTitle: 'Scientific note:',
    healthNote:
      'These phases are estimates. Real metabolism varies with diet, physical activity, sleep, hydration, medication and health conditions.',
    tabs: {
      tips: 'Tips & Feelings',
      science: 'Scientific Data',
      bible: 'Word of Comfort'
    }
  },

  standardStages: [
    {
      from: 0,
      to: 4,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'Bye Bye, Snacks!',
      phase: 'Phase 1 — Glycogen Depletion',
      summary:
        'Insulin starts to drop while your body still runs on the energy from your last meal and stored glycogen.',
      feeling:
        'You probably feel totally normal and confident. Your body is chilling, using what you just ate. Enjoy the peace before the (hunger) storm 😄💧 Stick to the plan!',
      details: [
        'Insulin declines toward baseline levels.',
        'Circulating glucose from the last meal is still available.',
        'Muscle glycogen is safely tucked away for emergencies.',
        'The liver starts releasing glucose to keep your brain happy.'
      ],
      scientific: [
        '1,600–2,000 calories of stored energy are available.',
        'Insulin declines toward baseline.',
        'Your body stores about 400–500 grams of glycogen in your muscles.',
        'Your body stores about 100–120 grams of glycogen in your liver.'
      ],
      bible: [
        { reference: 'Matthew 4:4', text: 'Man shall not live by bread alone, but by every word that comes from the mouth of God.' },
        { reference: 'Philippians 4:13', text: 'I can do all things through Christ who strengthens me.' }
      ]
    },
    {
      from: 4,
      to: 8,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'First Metabolic Gear',
      phase: 'Phase 1 — Glycogen Depletion',
      summary:
        'The liver begins breaking down more glycogen into glucose to keep your energy stable.',
      feeling:
        'The "snack voice" might start whispering in your ear. It is just your brain being dramatic 🙄⚙️ Drink some water and let your body shift gears on its own.',
      details: [
        'Glycogenolysis: turning storage into real-time energy.',
        'Liver glycogen starts decreasing significantly.',
        'Insulin continues its downward trend.',
        'Fat burning is taking its first baby steps.'
      ],
      scientific: [
        'Glycogenolysis is the metabolic process in which glycogen is broken down into glucose.',
        'Liver glycogen is depleted at a rate of about 10–15 grams per hour during fasting.',
        'After 8 hours, around 120 grams of glycogen may have been used.',
        'Growth hormone starts to increase, promoting fat breakdown (lipolysis).'
      ],
      bible: [
        { reference: 'Psalm 37:5', text: 'Commit your way to the Lord; trust in him and he will do this.' },
        { reference: 'Isaiah 40:31', text: 'But those who hope in the Lord will renew their strength.' }
      ]
    },
    {
      from: 8,
      to: 12,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'The Talking Stomach Challenge',
      phase: 'Phase 1 — Glycogen Depletion',
      summary:
        'Hunger hormones rise in waves as your liver glycogen stores are running low.',
      feeling:
        'Hunger comes like a wave: it is annoying, it feels like it might swallow you, but it ALWAYS passes 🌊💪 Take a deep breath—it is not real hunger, just habit. You are the boss here!',
      details: [
        'Ghrelin (the hunger hormone) is at its peak right now.',
        'Hunger usually lasts 30–60 minutes, then your body settles down.',
        'Glycogen stores are almost empty (almost there!).',
        'Ice-cold water right now feels like a hug for your stomach.'
      ],
      scientific: [
        'Liver glycogen is around 60–70% depleted.',
        'Ghrelin (hunger hormone) peaks around 30–40% higher.',
        'Hunger usually comes in waves lasting around 30–60 minutes.'
      ],
      bible: [
        { reference: '1 Corinthians 10:13', text: 'God is faithful; he will not let you be tempted beyond what you can bear.' },
        { reference: 'Psalm 34:10', text: 'Those who seek the Lord lack no good thing.' }
      ]
    },
    {
      from: 12,
      to: 15,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Switching to Fat Mode',
      phase: 'Phase 2 — The Metabolic Switch',
      summary:
        'Your body starts relying less on sugar and more on burning your stored fat.',
      feeling:
        'Energy might fluctuate. It is your metabolism learning to use a new fuel 🔄🔥 Imagine your cells taking a recycling course. You are becoming more efficient!',
      details: [
        'Liver glycogen is practically exhausted.',
        'Low insulin opens the gates for fat burning.',
        'Fat transporters (CPT1) are working overtime.',
        'Initial ketone production is being prepared.'
      ],
      scientific: [
        'Liver glycogen is around 70–80% depleted.',
        'From an initial 100–120g of liver glycogen, around 20–30g may remain.',
        'CPT1 enzyme helps transport fatty acids into the mitochondria to be burned.'
      ],
      bible: [
        { reference: 'Proverbs 16:3', text: 'Commit to the Lord whatever you do, and he will establish your plans.' },
        { reference: '2 Corinthians 12:9', text: 'My power is made perfect in weakness.' }
      ]
    },
    {
      from: 15,
      to: 18,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Premium Fuel Activated',
      phase: 'Phase 2 — The Metabolic Switch',
      summary:
        'The liver starts producing more ketones—the super-fuel for your brain.',
      feeling:
        'Ketones have entered the chat! 🧠⚡ You might feel a "click" of mental clarity or steady energy. The hunger monster is being tamed.',
      details: [
        'Fatty acids are converted into ketone bodies.',
        'Beta-hydroxybutyrate levels begin to rise in the blood.',
        'Hunger tends to decrease as ketones go up.',
        'Your body is discovering it does not need to eat all the time.'
      ],
      scientific: [
        'The liver starts producing ketones, an efficient fuel source for the brain.',
        'Through beta-oxidation, fatty acids are converted into acetoacetate and beta-hydroxybutyrate.',
        'Ghrelin levels begin to decrease.'
      ],
      bible: [
        { reference: 'Joshua 1:9', text: 'Have I not commanded you? Be strong and courageous. The Lord your God will be with you.' },
        { reference: 'Psalm 23:1', text: 'The Lord is my shepherd, I lack nothing.' }
      ]
    },
    {
      from: 18,
      to: 21,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Ketone Turbo',
      phase: 'Phase 3 — Deep Ketosis and Autophagy Activation',
      summary:
        'Ketone production accelerates and fat burning becomes your primary energy pathway.',
      feeling:
        'Your body has finally accepted that fat is life! 🔥🏆 You crossed the "Hunger Valley" and now you are in the clear. Feel the power of energy autonomy!',
      details: [
        'Entering the true nutritional ketosis zone.',
        'The brain starts running on clean energy (ketones).',
        'Fat oxidation is at full speed.',
        'Focus and concentration usually hit a new level here.'
      ],
      scientific: [
        'Ketone production increases significantly.',
        'Blood ketone levels may climb toward 1.5–2.0 mmol/L (nutritional ketosis).',
        'The brain starts using ketones as a major energy source.'
      ],
      bible: [
        { reference: 'Matthew 6:33', text: 'But seek first his kingdom and his righteousness.' },
        { reference: 'Psalm 121:1-2', text: 'I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord.' }
      ]
    },
    {
      from: 21,
      to: 24,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Cellular Spa Day',
      phase: 'Phase 3 — Deep Ketosis and Autophagy Activation',
      summary:
        'The body starts recycling old and damaged cellular components.',
      feeling:
        'Less food noise, more internal maintenance 🧹✨ It is the Marie Kondo of your cells: "Does this still spark joy? No? Then recycle it!".',
      details: [
        'Autophagy increases: recycling old proteins.',
        'Growth hormone (hGH) rises to protect your muscles.',
        'Insulin is in the basement, which is great for longevity.',
        'Intense cellular repair happening while you stay strong.'
      ],
      scientific: [
        'Autophagy (cellular cleanup) begins to increase.',
        'Growth hormone may increase to help reduce the risk of muscle loss.',
        'Metabolic processes continue shifting toward fat oxidation and cellular repair.'
      ],
      bible: [
        { reference: '2 Corinthians 5:17', text: 'If anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
        { reference: 'Psalm 51:10', text: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.' }
      ]
    },
    {
      from: 24,
      to: 27,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Metabolic Bonfire',
      phase: 'Phase 4 — Peak Metabolic Transformation',
      summary:
        'Fat burning reaches extremely high levels compared to the fed state.',
      feeling:
        'You are basically a human torch now 🔥🧂 Your fat stores are being evaporated. Keep up with your electrolytes to keep that glow!',
      details: [
        'Lipid oxidation is dominant: you are a fat-burning machine.',
        'Ketone levels continue to rise steadily.',
        'Visceral fat mobilization is eased by low insulin.',
        'Salt and magnesium are your best friends in this phase.'
      ],
      scientific: [
        'Fat burning may peak during this phase.',
        'Fat oxidation rises significantly.',
        'Blood ketones may rise to around 2.0–3.5 mmol/L.'
      ],
      bible: [
        { reference: 'Galatians 6:9', text: 'Let us not become weary in doing good, for at the proper time we will reap.' },
        { reference: 'Romans 12:12', text: 'Be joyful in hope, patient in affliction, faithful in prayer.' }
      ]
    },
    {
      from: 27,
      to: 30,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Jedi Level Fasting',
      phase: 'Phase 4 — Peak Metabolic Transformation',
      summary:
        'Deep hormonal and cellular adaptations are in full effect.',
      feeling:
        'Elite zone! ⚡🧘 Look back and see how much you have achieved. Your body is operating in a high-performance, resilient mode.',
      details: [
        'Peak growth hormone for tissue preservation.',
        'Adrenaline and norepinephrine keep focus and alertness high.',
        'The body manages necessary glucose via gluconeogenesis.',
        'Deep repair processes are at their peak.'
      ],
      scientific: [
        'Autophagy markers such as LC3-II may increase.',
        'Brain-Derived Neurotrophic Factor (BDNF) may increase.',
        'Insulin may be 50–70% lower.',
        'Cortisol may be moderately elevated to support gluconeogenesis.',
        'Norepinephrine may increase, supporting alertness and fat mobilization.'
      ],
      bible: [
        { reference: 'Ephesians 6:10', text: 'Finally, be strong in the Lord and in his mighty power.' },
        { reference: 'Psalm 18:32', text: 'It is God who arms me with strength and shined my way perfect.' }
      ]
    },
    {
      from: 30,
      to: 33,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'Master of Flexibility',
      phase: 'Phase 5 — The Reset and Recovery',
      summary:
        'Your body masters the art of switching between different energy sources with total efficiency.',
      feeling:
        'Metabolic flexibility at its max! 🏁🔥 You proved your body is a hybrid. Don’t let self-confidence make you devour the fridge tomorrow.',
      details: [
        'Maximum efficiency in transitioning between fat and ketones.',
        'Insulin signaling reset and sensitivity increased.',
        'Total control over food impulses.',
        'The digestive system is rested and ready for a fresh start.'
      ],
      scientific: [
        'The body becomes more efficient at switching between glucose and fat.',
        'Ketone use continues to increase.',
        'Fat oxidation remains elevated.'
      ],
      bible: [
        { reference: 'Lamentations 3:22-23', text: 'Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning.' },
        { reference: 'Psalm 30:5', text: 'Weeping may stay for the night, but rejoicing comes in the morning.' }
      ]
    },
    {
      from: 33,
      to: 36,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'The Grand Finale (Get Your Fork Ready)',
      phase: 'Phase 5 — The Reset and Recovery',
      summary:
        'Your body prepares for the return of food. Digestion should wake up slowly.',
      feeling:
        'Almost at the finish line! 🍽️😄 Winning the game isn’t about eating a whole cow in the first minute. Plan an elegant and mindful break-fast.',
      details: [
        'Wake up your digestive system with something light (broth or protein).',
        'Avoid sugar explosions right away to not shock the system.',
        'Your first meal is going to taste like the best thing ever!',
        'Respect your new satiety—you need less than you think.'
      ],
      scientific: [
        'The body prepares for refeeding.',
        'The first meal should be moderate and not extremely high in carbohydrates.',
        'Never consume more than 300 grams of carbohydrates immediately after an extended fast.'
      ],
      bible: [
        { reference: 'Ecclesiastes 9:7', text: 'Go, eat your food with gladness, and drink your wine with a joyful heart.' },
        { reference: '1 Corinthians 10:31', text: 'So whether you eat or drink or whatever you do, do it all for the glory of God.' }
      ]
    }
  ]
}

englishContent.ketogenicStages = englishContent.standardStages.map((stage, index) => {
  const ketoOverrides = [
    {
      title: 'Smart Refeed (Low Carb)',
      phase: 'Keto Phase 1 — The Metabolic Trick',
      summary:
        'Food is back, but without the carb tsunami, your body keeps one foot in fat-burning mode.',
      feeling:
        'You stopped fasting, but you didn’t stop ketosis 😉 It is like refueling without turning off the engine. Active digestion, but focus remains high!'
    },
    {
      title: 'Energy Stabilization',
      phase: 'Keto Phase 1 — The Metabolic Trick',
      summary:
        'Digestion is happening, but glucose and insulin levels stay well-behaved.',
      feeling:
        'Feeling full without feeling sleepy? That is the power of fat and protein 😴🔥 No "food coma" here. You remain in command!'
    },
    {
      title: 'Express to Fat Mode',
      phase: 'Keto Phase 2 — Metabolic Shortcut',
      summary:
        'Since you didn’t refill glycogen stores, your body goes back to using fat as primary fuel in the blink of an eye.',
      feeling:
        'The hunger monster didn’t even have time to wake up 🐺💪 In low carb, fasting is almost a natural state. Your body already knows what to do!'
    }
  ]

  return {
    ...stage,
    phaseFrom: stage.phaseFrom,
    phaseTo: stage.phaseTo,
    scientific: stage.scientific,
    bible: stage.bible,
    ...(ketoOverrides[index] || {
      phase: stage.phase.replace('Phase', 'Keto Phase'),
      feeling: `${stage.feeling} On low carb, this phase may arrive faster than in the standard cycle ⚡`
    }),
    details: [
      ...stage.details,
      'Ketogenic adjustment: low carbohydrate intake limits rapid glycogen restoration.',
      'Protein and fat break the digestive fast, but may not fully reset fat metabolism.'
    ]
  }
})