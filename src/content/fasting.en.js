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
      'These phases are estimates. Real metabolism varies with diet, physical activity, sleep, hydration, medication and health conditions.'
  },

  standardStages: [
    {
      from: 0,
      to: 4,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'The Fed State Transition',
      phase: 'Phase 1 — Glycogen Depletion',
      summary:
        'Insulin begins to fall while your body still uses recently available glucose and stored glycogen.',
      feeling:
        'You may feel totally normal here. Your body is still running on the last meal. No drama yet 😄💧 Stay calm and keep the plan.',
      details: [
        'Insulin declines toward baseline.',
        'The body still has available glucose from the previous meal.',
        'Muscle glycogen is mostly preserved for muscular activity.',
        'Liver glycogen begins supporting blood glucose between meals.'
      ]
    },
    {
      from: 4,
      to: 8,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'The Metabolic Shift Begins',
      phase: 'Phase 1 — Glycogen Depletion',
      summary:
        'The liver increasingly breaks down glycogen into glucose to maintain stable blood sugar.',
      feeling:
        'The snack voice may start whispering, but you do not need to obey every craving 😄⚙️ Drink water and let your body shift gears.',
      details: [
        'Glycogenolysis converts stored glycogen into glucose.',
        'Liver glycogen starts decreasing more noticeably.',
        'Insulin continues trending downward.',
        'Fat oxidation begins to increase gradually.'
      ]
    },
    {
      from: 8,
      to: 12,
      phaseFrom: 0,
      phaseTo: 12,
      title: 'The Hunger Games',
      phase: 'Phase 1 — Glycogen Depletion',
      summary:
        'Hunger hormones may rise in waves while liver glycogen continues to decrease.',
      feeling:
        'This phase is very mental. Hunger comes like a wave: annoying, intense, and then it passes 🌊💪 Breathe and keep going.',
      details: [
        'Ghrelin may rise around habitual meal times.',
        'Hunger often appears in waves lasting 30–60 minutes.',
        'Liver glycogen may already be significantly reduced.',
        'Hydration and electrolytes can strongly affect how this phase feels.'
      ]
    },
    {
      from: 12,
      to: 15,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'From Sugar Mode to Fat Mode',
      phase: 'Phase 2 — The Metabolic Switch',
      summary:
        'Your body begins shifting from glucose dependence toward greater fat oxidation.',
      feeling:
        'Energy may feel unstable for a bit. This is adaptation, not failure 🔄🔥 Your metabolism is learning to use another fuel.',
      details: [
        'Liver glycogen may be substantially reduced.',
        'Lower insulin makes fat mobilization easier.',
        'CPT1 helps transport fatty acids into mitochondria.',
        'Ketone production begins becoming more relevant.'
      ]
    },
    {
      from: 15,
      to: 18,
      phaseFrom: 12,
      phaseTo: 18,
      title: 'Ketone Production Begins',
      phase: 'Phase 2 — The Metabolic Switch',
      summary:
        'The liver starts producing more ketones as glucose availability declines.',
      feeling:
        'Ketones are joining the game 🧠⚡ You may start feeling steadier or mentally clearer. Keep moving forward.',
      details: [
        'Fatty acids are converted into ketone bodies.',
        'Beta-hydroxybutyrate and acetoacetate begin rising.',
        'Ghrelin may begin decreasing after earlier hunger waves.',
        'The body becomes less dependent on frequent eating.'
      ]
    },
    {
      from: 18,
      to: 21,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Ketone Ramp-Up',
      phase: 'Phase 3 — Deep Ketosis and Autophagy Activation',
      summary:
        'Ketone production becomes more important as fat oxidation increases.',
      feeling:
        'This is where your body starts accepting fat as serious fuel 🔥🏆 Nice work — you already crossed a difficult part.',
      details: [
        'Ketones may approach nutritional ketosis.',
        'The brain can begin using ketones more meaningfully.',
        'Fat oxidation becomes a major energy pathway.',
        'Mental clarity may improve in some people.'
      ]
    },
    {
      from: 21,
      to: 24,
      phaseFrom: 18,
      phaseTo: 24,
      title: 'Cellular Cleanup Mode',
      phase: 'Phase 3 — Deep Ketosis and Autophagy Activation',
      summary:
        'Fasting-related cellular cleanup processes may become more active.',
      feeling:
        'Less food noise, more internal maintenance 🧹✨ Quiet progress is still progress.',
      details: [
        'Autophagy may increase during nutrient scarcity.',
        'Growth hormone may rise and help preserve lean tissue.',
        'Insulin remains low compared with the fed state.',
        'Repair pathways may become more active.'
      ]
    },
    {
      from: 24,
      to: 27,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Maximum Fat Oxidation',
      phase: 'Phase 4 — Peak Metabolic Transformation',
      summary:
        'Fat burning may be strongly elevated compared with the fed state.',
      feeling:
        'This is a strong fat-oxidation window 🔥🧂 Hydrate, manage electrolytes and stay smart.',
      details: [
        'Fat oxidation may become the dominant energy source.',
        'Ketones may continue rising.',
        'Low insulin supports continued fat mobilization.',
        'Electrolyte balance becomes more important.'
      ]
    },
    {
      from: 27,
      to: 30,
      phaseFrom: 24,
      phaseTo: 30,
      title: 'Repair and Adaptation Peak',
      phase: 'Phase 4 — Peak Metabolic Transformation',
      summary:
        'Hormonal and cellular adaptations may become more pronounced.',
      feeling:
        'Advanced fasting zone ⚡🧘 Respect your body, but be proud of your discipline. You came far.',
      details: [
        'Growth hormone may be elevated.',
        'Norepinephrine may support alertness and fat mobilization.',
        'Cortisol may rise moderately to support glucose production.',
        'Autophagy-related markers may be more active, but this varies.'
      ]
    },
    {
      from: 30,
      to: 33,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'Metabolic Flexibility Peak',
      phase: 'Phase 5 — The Reset and Recovery',
      summary:
        'Your body becomes more efficient at switching between glucose, fat and ketones.',
      feeling:
        'You are training metabolic flexibility 🏁🔥 This is where consistency starts paying off. Just do not turn confidence into excess.',
      details: [
        'Fat oxidation remains elevated.',
        'Ketone use continues.',
        'Glucose is maintained mainly through gluconeogenesis.',
        'Refeeding should be planned, not chaotic.'
      ]
    },
    {
      from: 33,
      to: 36,
      phaseFrom: 30,
      phaseTo: 36,
      title: 'Preparation for Refeeding',
      phase: 'Phase 5 — The Reset and Recovery',
      summary:
        'Your body approaches refeeding, and digestion should restart carefully.',
      feeling:
        'Almost there 🍽️😄 Victory is not attacking the whole fridge. Refeed calmly and stay in control.',
      details: [
        'Digestion should be restarted carefully.',
        'Avoid a huge carbohydrate load immediately.',
        'A moderate protein-based meal is usually easier.',
        'Very large meals may feel heavy after extended fasting.'
      ]
    }
  ]
}

englishContent.ketogenicStages = englishContent.standardStages.map((stage, index) => {
  const ketoOverrides = [
    {
      title: 'Low-Carb Fed Transition',
      phase: 'Keto Phase 1 — Digestive Refeed, Not Full Reset',
      summary:
        'Food enters the system, but with very low carbs your body may remain closer to fat-burning mode.',
      feeling:
        'You are not fasting anymore, but metabolically you may not have reset to zero 😉 That is the low-carb trick: digestion is active, but there is no big glucose reset.'
    },
    {
      title: 'Keto Stabilization',
      phase: 'Keto Phase 1 — Digestive Refeed, Not Full Reset',
      summary:
        'Digestion continues while glucose availability remains limited.',
      feeling:
        'You may feel full from protein and fat, but not necessarily sleepy like after a carb bomb 😴🔥 Stay in control.'
    },
    {
      title: 'Fast Return to Fat Mode',
      phase: 'Keto Phase 2 — Accelerated Metabolic Switch',
      summary:
        'Because glycogen was not fully restored, your body may return to fat use faster.',
      feeling:
        'Hunger may be calmer 🐺💪 Low carb often makes the appetite monster less dramatic. You are making your body work for you.'
    }
  ]

  return {
    ...stage,
    phaseFrom: stage.phaseFrom,
    phaseTo: stage.phaseTo,
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