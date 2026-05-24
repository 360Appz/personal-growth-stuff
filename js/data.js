// ============================================================
// data.js — All content from Personal Growth Playbook (n1, n2, n3)
// Word-for-word from source files. No duplicates.
// ============================================================

export const META = {
  title: "Growth Quest",
  subtitle: "Your comprehensive playbook for self-awareness, discipline, communication, proactivity, emotional maturity, career growth, and long-term character.",
  coreN1: `Personal growth is not "fixing your personality." It is building better awareness, systems, emotional regulation, communication, and responsibility around your existing personality. The strongest growth comes from combining clear goals, feedback loops, small repeatable behaviors, and honest reflection rather than relying on motivation alone.`,
  coreN2: `Personal growth is not "becoming a perfect person." It is the ongoing process of increasing self-awareness, emotional regulation, competence, integrity, resilience, relational maturity, and contribution while reducing self-sabotage, avoidance, impulsivity, and blind spots.`,
  updated: "May 24, 2026"
};

// ────────────────────────────────────────────────────────────
// QUOTES — memorable lines from the playbook
// ────────────────────────────────────────────────────────────
export const QUOTES = [
  { text: "Behavior is the receipt.", source: "Playbook" },
  { text: "You do not rise to your intentions. You fall to your systems.", source: "Playbook" },
  { text: "Personality explains your tendencies. It does not excuse your patterns.", source: "Playbook" },
  { text: "Knowing your weakness is not the same as changing it.", source: "Playbook" },
  { text: "Ownership gives you leverage.", source: "Playbook" },
  { text: "Growth = Awareness × Ownership × Skill × Repetition × Environment × Feedback", source: "Playbook" },
  { text: "You are not fully in control of your life, but you are rarely powerless.", source: "Playbook" },
  { text: "You can become more successful and still become less mature.", source: "Playbook" },
  { text: "Confidence usually follows evidence.", source: "Playbook" },
  { text: "Character is who you become through repeated choices.", source: "Playbook" },
  { text: "Discipline means doing what matters when your mood changes.", source: "Playbook" },
  { text: "Attention is your life.", source: "Playbook" },
  { text: "Resilience is not never falling. It is returning with wisdom.", source: "Playbook" },
  { text: "You become what you repeatedly prove to yourself.", source: "Playbook" },
  { text: "Become useful, not just impressive.", source: "Playbook" },
  { text: "Tell the truth sooner.", source: "Playbook" },
  { text: "Let feedback mature you.", source: "Playbook" },
  { text: "Without stability, growth becomes fragile.", source: "Playbook" },
  { text: "Habits are servants, not gods.", source: "Playbook" },
  { text: "Grief that is faced tends to deepen people. Grief that is avoided tends to show up sideways.", source: "Playbook" },
  { text: "Use AI to lower the threshold for starting hard things. Do not use it to avoid the hard things altogether.", source: "Playbook" },
  { text: "Self-compassion predicts better motivation and more sustained behavior change — not less.", source: "Playbook" },
  { text: "The goal is not to force a neurodivergent brain into neurotypical systems. The goal is to design systems that work with how the brain actually functions.", source: "Playbook" },
  { text: "Post-traumatic growth is transformation through adversity — emerging with new capacities, perspectives, or depth that did not exist before the suffering.", source: "Playbook" },
  { text: "Effort, strategies, feedback, and consistency meaningfully affect what you can do. Biology, opportunity, and circumstance also matter. Neither is the whole story.", source: "Playbook" },
  { text: "Protect community investment the same way you protect financial investment — proactively, before you feel the loss.", source: "Playbook" },
  { text: "Rest without guilt. Serve beyond yourself.", source: "Playbook" },
  { text: "Shame leads to hiding. Guilt leads to repair.", source: "Playbook" },
  { text: "The faster you repair, the less damage your weakness causes.", source: "Playbook" },
  { text: "A good growth system is built on: clear values, honest feedback, stable routines, deliberate skill practice, healthy relationships, physical health, emotional maturity, and periodic course correction.", source: "Playbook" },
  { text: "Personal growth should increase agency without denying reality.", source: "Playbook" },
  { text: "Goals give direction. Systems produce results.", source: "Playbook" },
  { text: "What repeatedly captures your attention shapes your desires, beliefs, mood, expectations, identity, time use, and relationships.", source: "Playbook" },
  { text: "Make invisible work visible. People trust what they can see.", source: "Playbook" },
  { text: "Choose humility over image. The person who can say 'I need to improve this' grows faster than the person protecting their ego.", source: "Playbook" },
  { text: "Think in consequences. Ask: what does my behavior make easier or harder for others?", source: "Playbook" },
  { text: "Accountability means seeing what went wrong and correcting it. Self-compassion means you do not need to suffer indefinitely as proof that you take it seriously.", source: "Playbook" },
  { text: "Going to bed at 11 p.m. one night and 2 a.m. the next — even if you sleep 8 hours both times — still disrupts your circadian biology.", source: "Playbook" },
  { text: "Financial chaos maintains chronic low-grade stress that undermines everything else.", source: "Playbook" },
  { text: "Small financial wins produce measurable mood improvements and increase the confidence to take the next step.", source: "Playbook" }
];

// ────────────────────────────────────────────────────────────
// QUESTIONS — for rapid fire, question of the day
// ────────────────────────────────────────────────────────────
export const QUESTIONS = [
  // Self-Awareness Audit
  { text: "Do I notice my patterns before others point them out?", category: "Self-Awareness", type: "audit" },
  { text: "Can I stay calm when misunderstood, corrected, delayed, or criticized?", category: "Emotional Regulation", type: "audit" },
  { text: "Do people usually know what I am thinking, doing, and needing?", category: "Communication", type: "audit" },
  { text: "Do I act before being chased?", category: "Proactivity", type: "audit" },
  { text: "Do I own outcomes, not just intentions?", category: "Responsibility", type: "audit" },
  { text: "Do I repeat good behavior when nobody is watching?", category: "Consistency", type: "audit" },
  { text: "Do I seek feedback without becoming defensive?", category: "Learning", type: "audit" },
  { text: "Do I finish what I start?", category: "Execution", type: "audit" },
  { text: "Do I review my life regularly?", category: "Reflection", type: "audit" },
  { text: "Do people feel safer, clearer, and stronger after interacting with me?", category: "Relationships", type: "audit" },
  // Deep self-audit
  { text: "What do I keep avoiding?", category: "Self-Awareness", type: "reflection" },
  { text: "What emotion controls me most often?", category: "Emotional Regulation", type: "reflection" },
  { text: "What criticism makes me defensive because it might be true?", category: "Feedback", type: "reflection" },
  { text: "What do people repeatedly misunderstand about me?", category: "Communication", type: "reflection" },
  { text: "What do I secretly want but refuse to admit?", category: "Self-Awareness", type: "reflection" },
  { text: "What do I judge in others that I also do?", category: "Self-Awareness", type: "reflection" },
  { text: "What situations bring out my worst self?", category: "Emotional Regulation", type: "reflection" },
  { text: "What situations bring out my best self?", category: "Self-Awareness", type: "reflection" },
  { text: "What am I good at but underusing?", category: "Competence", type: "reflection" },
  { text: "What am I bad at but pretending is fine?", category: "Self-Awareness", type: "reflection" },
  // Ownership questions
  { text: "If I were fully responsible for improving this situation, what would I do differently next time?", category: "Ownership", type: "reflection" },
  { text: "What outcome did my behavior create?", category: "Ownership", type: "reflection" },
  { text: "What did I fail to clarify?", category: "Communication", type: "reflection" },
  { text: "What should I have anticipated?", category: "Proactivity", type: "reflection" },
  { text: "What system would prevent this next time?", category: "Systems", type: "reflection" },
  { text: "What did this reveal about my maturity?", category: "Self-Awareness", type: "reflection" },
  // Anti-delusion practice
  { text: "Where am I overestimating myself?", category: "Humility", type: "monthly" },
  { text: "Where am I underestimating myself?", category: "Self-Worth", type: "monthly" },
  { text: "Where am I blaming others too much?", category: "Ownership", type: "monthly" },
  { text: "What evidence am I ignoring?", category: "Self-Awareness", type: "monthly" },
  { text: "What would my critics say?", category: "Feedback", type: "monthly" },
  { text: "What would my wisest friend say?", category: "Guidance", type: "monthly" },
  // Big Five questions
  { text: "Am I curious, adaptable, and willing to learn?", category: "Openness", type: "reflection" },
  { text: "Am I reliable, disciplined, and organized?", category: "Conscientiousness", type: "reflection" },
  { text: "Do I manage energy and social initiative well?", category: "Extraversion", type: "reflection" },
  { text: "Am I kind without being passive?", category: "Agreeableness", type: "reflection" },
  { text: "Can I regulate anxiety, anger, shame, and sensitivity?", category: "Neuroticism", type: "reflection" },
  // Meaning questions
  { text: "What kind of person am I becoming?", category: "Identity", type: "quarterly" },
  { text: "What do I believe is good?", category: "Meaning", type: "reflection" },
  { text: "What is worth sacrificing for?", category: "Values", type: "reflection" },
  { text: "Who benefits from my growth?", category: "Contribution", type: "reflection" },
  { text: "What do I want my life to stand for?", category: "Legacy", type: "reflection" },
  { text: "What would make success feel empty?", category: "Meaning", type: "reflection" },
  // Relationship audit
  { text: "Do people feel safe being honest with me?", category: "Relationships", type: "reflection" },
  { text: "Do I repair well after conflict?", category: "Conflict", type: "reflection" },
  { text: "Do I listen, or just prepare my defense?", category: "Communication", type: "reflection" },
  { text: "Do I remember what matters to others?", category: "Empathy", type: "reflection" },
  { text: "Do I apologize cleanly?", category: "Repair", type: "reflection" },
  { text: "Do I only communicate when I need something?", category: "Relationships", type: "reflection" },
  { text: "Do I celebrate others without jealousy?", category: "Character", type: "reflection" },
  { text: "Do I give people clarity?", category: "Communication", type: "reflection" },
  { text: "Who makes me more honest?", category: "Relationships", type: "reflection" },
  { text: "Who drains me but never grows?", category: "Relationships", type: "reflection" },
  { text: "Who do I perform around?", category: "Authenticity", type: "reflection" },
  { text: "Who can correct me?", category: "Accountability", type: "reflection" },
  { text: "Who do I need to forgive?", category: "Repair", type: "reflection" },
  { text: "Who do I need boundaries with?", category: "Boundaries", type: "reflection" },
  { text: "Who should I invest in more intentionally?", category: "Relationships", type: "reflection" },
  // Work/Career
  { text: "Am I reliable at work?", category: "Career", type: "audit" },
  { text: "Do I communicate early, before being chased?", category: "Communication", type: "audit" },
  { text: "Do I improve my skills deliberately?", category: "Learning", type: "audit" },
  { text: "Do I understand value creation, not just task completion?", category: "Career", type: "reflection" },
  { text: "Do I take ownership of outcomes, not just inputs?", category: "Ownership", type: "audit" },
  // Money
  { text: "Do I know my monthly spending?", category: "Money", type: "audit" },
  { text: "Do I save consistently?", category: "Money", type: "audit" },
  { text: "Do I spend emotionally?", category: "Money", type: "reflection" },
  { text: "Do I confuse looking rich with becoming stable?", category: "Money", type: "reflection" },
  // Character/Integrity
  { text: "Am I honest under pressure?", category: "Integrity", type: "audit" },
  { text: "Do I keep promises I make to myself?", category: "Discipline", type: "audit" },
  { text: "Do I act differently when unseen?", category: "Character", type: "reflection" },
  { text: "Do I use people?", category: "Character", type: "reflection" },
  { text: "Do I repair harm I cause?", category: "Repair", type: "audit" },
  // Health / Mind
  { text: "What do I read — and does it make me wiser or just entertained?", category: "Mind", type: "reflection" },
  { text: "Can I think deeply, or do I only skim?", category: "Mind", type: "reflection" },
  { text: "Do I change my mind with evidence?", category: "Mind", type: "reflection" },
  { text: "Can I concentrate without checking my phone?", category: "Focus", type: "reflection" },
  // Digital
  { text: "What apps make me worse as a person?", category: "Digital", type: "reflection" },
  { text: "What content makes me envious vs. wiser?", category: "Digital", type: "reflection" },
  { text: "What do I consume when lonely? Is it helping?", category: "Digital", type: "reflection" },
  { text: "Who profits from my distraction?", category: "Digital", type: "reflection" },
  // Daily/Weekly/Monthly rhythms
  { text: "What is the most responsible next action right now?", category: "Daily", type: "daily" },
  { text: "Where am I drifting this week?", category: "Weekly", type: "weekly" },
  { text: "What is life trying to teach me repeatedly this month?", category: "Monthly", type: "monthly" },
  { text: "What kind of person am I becoming this quarter?", category: "Quarterly", type: "quarterly" },
  // Growth metrics / character check
  { text: "Do people trust my word?", category: "Trust", type: "character" },
  { text: "Do I hide mistakes less than I did before?", category: "Growth", type: "character" },
  { text: "Do I recover faster from setbacks?", category: "Resilience", type: "character" },
  { text: "Do I blame others less?", category: "Ownership", type: "character" },
  { text: "Do I repair conflict more quickly?", category: "Repair", type: "character" },
  { text: "Do I tell the truth sooner?", category: "Integrity", type: "character" },
  { text: "Do I act with more courage?", category: "Courage", type: "character" },
  { text: "Do I need less external validation and applause?", category: "Self-Worth", type: "character" },
  // Feedback questions to ask others
  { text: "What is one strength I should keep using? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  { text: "What is one weakness that affects others? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  { text: "When do I become difficult? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  { text: "What do I not notice about myself? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  { text: "What should I do more consistently? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  { text: "Where do I have potential but lack discipline? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  { text: "What is one behavior that would make me easier to trust? (ask someone who knows you)", category: "Feedback", type: "feedback" },
  // Decision framework
  { text: "What problem am I actually solving?", category: "Decision-Making", type: "framework" },
  { text: "What are the real options in front of me?", category: "Decision-Making", type: "framework" },
  { text: "What are the trade-offs I am not acknowledging?", category: "Decision-Making", type: "framework" },
  { text: "What happens if I do nothing?", category: "Decision-Making", type: "framework" },
  { text: "What choice aligns with my values?", category: "Values", type: "framework" },
  { text: "What is reversible vs. irreversible about this decision?", category: "Decision-Making", type: "framework" },
  { text: "How will I feel about this in 10 minutes, 10 months, and 10 years?", category: "Decision-Making", type: "framework" },
  // ACT framework
  { text: "What would I do right now if I trusted myself to handle the discomfort?", category: "ACT", type: "reflection" },
  // Leadership
  { text: "What matters most this week? (ask your team)", category: "Leadership", type: "leadership" },
  { text: "What is unclear that needs clarity?", category: "Leadership", type: "leadership" },
  { text: "What is blocked that I have not addressed?", category: "Leadership", type: "leadership" },
  { text: "What risk are we ignoring?", category: "Leadership", type: "leadership" },
  { text: "Who needs support right now?", category: "Leadership", type: "leadership" },
  { text: "What decision must be made that I have been avoiding?", category: "Leadership", type: "leadership" },
  { text: "What should we stop doing?", category: "Leadership", type: "leadership" },
  // n3 additions
  { text: "If you need an alarm on weekdays but not weekends, or sleep in more than 90 minutes on weekends — do you have social jetlag?", category: "Sleep", type: "health" },
  { text: "Are you using self-punishment as a substitute for discipline?", category: "Self-Compassion", type: "reflection" },
  { text: "When you fail or fall short, do you offer yourself the same basic decency you would give a struggling friend?", category: "Self-Compassion", type: "reflection" },
  { text: "How much time do you spend outdoors in natural settings each week?", category: "Nature", type: "health" },
  { text: "If you have been implementing growth systems diligently for years and repeatedly failing the same ways — have you ruled out executive dysfunction?", category: "Neurodivergence", type: "health" },
  { text: "Are you using AI to avoid the hard things, or to lower the threshold for starting them?", category: "AI Tools", type: "reflection" }
];

// ────────────────────────────────────────────────────────────
// GROWTH LAYERS (two sets)
// ────────────────────────────────────────────────────────────
export const GROWTH_LAYERS_N1 = [
  { name: "Awareness", desc: "What am I actually like under pressure?" },
  { name: "Ownership", desc: "What part of this is mine to improve?" },
  { name: "System", desc: "What structure makes better behavior easier?" },
  { name: "Identity", desc: "What kind of person am I becoming through repetition?" }
];

export const GROWTH_LAYERS_N2 = [
  { name: "Stability", desc: "Before 'high performance,' build stability: sleep, exercise, nutrition, basic finances, emotional safety, clean environment, reduced chaos, reliable routines. Without stability, growth becomes fragile." },
  { name: "Self-awareness", desc: "You need to know: what triggers you, what you avoid, what you overcompensate for, what you are naturally good at, what you keep repeating, what feedback you keep rejecting." },
  { name: "Skill-building", desc: "Growth requires trainable skills: communication, focus, planning, emotional regulation, leadership, money management, learning, conflict resolution, decision-making." },
  { name: "Integration", desc: "This is where growth becomes character: You do the right thing when tired. You repair after conflict. You keep promises. You adapt without losing your values. You are useful under pressure." }
];

// ────────────────────────────────────────────────────────────
// FIVE PILLARS (from n1)
// ────────────────────────────────────────────────────────────
export const PILLARS = [
  {
    number: 1,
    title: "Self-Awareness",
    summary: "You know what energizes you, drains you, triggers defensiveness, what you avoid, what people repeatedly complain about, what you overuse, and what you admire in others but haven't built in yourself.",
    practice: "Pattern tracking: For 30 days, write Situation / My reaction / What I wanted / What I avoided / What it cost / Better response next time. You are looking for repeated loops.",
    patterns: [
      { pattern: "Avoiding updates", issue: "Fear of scrutiny, laziness, or low ownership" },
      { pattern: "Zoning out after fixing something", issue: "Outcome focus without maintenance mindset" },
      { pattern: "Waiting for instructions", issue: "Low proactivity or fear of overstepping" },
      { pattern: "Getting defensive", issue: "Ego protection" },
      { pattern: "Overpromising", issue: "Approval seeking" },
      { pattern: "Under-communicating", issue: "Assuming others know what you know" }
    ]
  },
  {
    number: 2,
    title: "Ownership",
    summary: "Ownership means you stop overusing: 'But I didn't mean it that way.' / 'Nobody told me.' / 'I thought it was obvious.' / 'That's just how I am.' / 'I already fixed it.' / 'They should have known.'",
    practice: "Replace with: 'What outcome did my behavior create?' / 'What did I fail to clarify?' / 'What should I have anticipated?' / 'What system would prevent this next time?' / 'What did this reveal about my maturity?'",
    test: "Ask: 'If I were fully responsible for improving this situation, what would I do differently next time?' Not because everything is your fault. Because ownership gives you leverage."
  },
  {
    number: 3,
    title: "Emotional Regulation",
    summary: "Emotional regulation is the ability to behave according to your values, not your mood. Resilience means adapting well through mental, emotional, and behavioral flexibility during difficulty.",
    practice: "The 90-second pause: 1. Breathe. 2. Name the emotion. 3. Name the threat. 4. Ask: 'What response helps future me?' 5. Speak only after your ego cools down.",
    triggers: [
      { trigger: "Criticism", immature: "Defend immediately", mature: "Ask: 'What part is true?'" },
      { trigger: "Delay", immature: "Complain", mature: "Re-plan" },
      { trigger: "Misunderstanding", immature: "Blame", mature: "Clarify" },
      { trigger: "Failure", immature: "Hide", mature: "Review" },
      { trigger: "Success", immature: "Coast", mature: "Maintain" },
      { trigger: "Stress", immature: "Disappear", mature: "Communicate early" },
      { trigger: "Conflict", immature: "Attack or avoid", mature: "Address directly" }
    ]
  },
  {
    number: 4,
    title: "Systems",
    summary: "You do not rise to your intentions. You fall to your systems. If-then plans help convert goals into action with a medium-to-large effect on goal achievement.",
    practice: "Bad goal: 'I will communicate better.' Better system: 'If I complete a task, then I send a short update: done, issue, next step.' Every Monday morning, identify the top three risks for the week.",
    template: "Growth area / Trigger / Desired behavior / If-then plan / Measurement / Review day / Accountability person"
  },
  {
    number: 5,
    title: "Feedback",
    summary: "Feedback is painful because it attacks your self-image. But feedback is also data. Behavior-change research identifies goal setting, self-monitoring, feedback, and goal review as common self-regulatory techniques.",
    practice: "Do not argue. Take notes. Say thank you. Reflect later. Ask: 1. What is one strength I should keep using? 2. What is one weakness that affects others? 3. When do I become difficult? 4. What do I not notice about myself? 5. What should I do more consistently? 6. Where do I have potential but lack discipline? 7. What is one behavior that would make me easier to trust?",
    types: [
      { type: "Performance feedback", question: "How well did I do?" },
      { type: "Pattern feedback", question: "What do I repeatedly do?" },
      { type: "Character feedback", question: "What is it like to work or live with me?" }
    ]
  }
];

// ────────────────────────────────────────────────────────────
// GROWTH AREAS — deep playbook (A–H from n1)
// ────────────────────────────────────────────────────────────
export const GROWTH_AREAS = [
  {
    key: "A",
    title: "Communication Growth",
    summary: "Communication is not just talking more. It is reducing uncertainty for others.",
    goodCommunicationAnswers: [
      "What is happening?",
      "What changed?",
      "What do you need from me?",
      "What are you doing next?",
      "When should I expect an update?"
    ],
    weaknesses: [
      { weakness: "Under-updating", experience: "\"I don't know what's going on.\"" },
      { weakness: "Vague answers", experience: "\"Can I trust this person?\"" },
      { weakness: "Late disclosure", experience: "\"Why am I only hearing this now?\"" },
      { weakness: "Avoiding bad news", experience: "\"They hide problems.\"" },
      { weakness: "Too much detail", experience: "\"They cannot summarize.\"" },
      { weakness: "Passive tone", experience: "\"They lack ownership.\"" }
    ],
    formula: "Status / What changed / Risk or problem / Next action / When I'll update again"
  },
  {
    key: "B",
    title: "Proactivity Growth",
    summary: "Proactivity means acting before the cost appears. It is not 'doing random extra work.' It is anticipating: Risks / Needs / Next steps / Dependencies / Questions / Failure points / Opportunities.",
    habit: "Every morning ask: 1. What could go wrong? 2. Who needs clarity? 3. What can I prepare before being asked?",
    method: "For every task: Step 1 — What am I doing now? Step 2 — What happens after this? Step 3 — What problem might appear after that? Proactive people do not just close the issue. They reduce recurrence."
  },
  {
    key: "C",
    title: "Follow-Through Growth",
    summary: "Many people are good at starting, reacting, or fixing emergencies. Fewer are good at maintaining.",
    checklist: [
      "Is the root cause clear?",
      "Could this happen again?",
      "Who needs to know?",
      "Is there documentation?",
      "Is there a follow-up date?",
      "Did I communicate closure?",
      "What prevention system is needed?"
    ]
  },
  {
    key: "D",
    title: "Discipline Growth",
    summary: "Discipline is not harshness. It is self-trust. You build self-trust by repeatedly doing what you said you would do.",
    killers: ["Too many goals", "No tracking", "No deadlines", "No consequence", "No environment design", "Depending on mood", "Starting too big", "No recovery rhythm"],
    keystoneHabitExamples: [
      "Sleep by 11:30 PM",
      "Walk 30 minutes daily",
      "Send daily work update",
      "Read 10 pages",
      "Review finances every Sunday",
      "No phone for first 30 minutes after waking"
    ],
    twoMinuteRule: "When resistance is high, do only the entry behavior: Open the document. Put on shoes. Write one sentence. Send one update. Read one page. Wash one plate. Starting is often the bottleneck."
  },
  {
    key: "E",
    title: "Emotional Maturity Growth",
    summary: "Emotional maturity means: You do not punish people for your feelings. You can hear hard truth. You apologize without drama. You communicate needs directly. You do not make others guess your mood. You can be disappointed without becoming destructive. You can separate intention from impact.",
    language: [
      { immature: "\"You made me feel…\"", mature: "\"I felt…\"" },
      { immature: "\"That's just how I am.\"", mature: "\"That's a pattern I need to work on.\"" },
      { immature: "\"Whatever.\"", mature: "\"I need time to process, but I'll come back to this.\"" },
      { immature: "\"I already said sorry.\"", mature: "\"What would repair look like?\"" },
      { immature: "\"Nobody told me.\"", mature: "\"I should have clarified earlier.\"" },
      { immature: "\"I'm bad at this.\"", mature: "\"I need a system for this.\"" }
    ],
    repairScript: "I realize I did X. The impact was Y. I should have done Z. Next time I will do A. Is there anything else I need to understand?"
  },
  {
    key: "F",
    title: "Career Growth",
    summary: "Career growth is not just being good at your job. It is becoming easier to trust with bigger problems.",
    ladder: [
      { level: 1, behavior: "Waits for instructions" },
      { level: 2, behavior: "Completes assigned tasks" },
      { level: 3, behavior: "Communicates progress clearly" },
      { level: 4, behavior: "Spots risks early" },
      { level: 5, behavior: "Solves root causes" },
      { level: 6, behavior: "Improves systems" },
      { level: 7, behavior: "Develops others" },
      { level: 8, behavior: "Owns outcomes across teams" }
    ],
    behaviors: [
      "Clarify expectations early",
      "Send updates before being chased",
      "Document decisions",
      "Track open loops",
      "Learn the business, not just your role",
      "Understand stakeholder pressure",
      "Bring options, not just problems",
      "Close the loop after completion",
      "Ask for feedback after major work",
      "Think one level above your job title"
    ]
  },
  {
    key: "G",
    title: "Leadership Growth",
    summary: "Leadership is not personality dominance. Leadership is increasing clarity, courage, responsibility, and care in a group.",
    badPatterns: [
      { pattern: "Avoiding hard conversations", result: "Problems grow quietly" },
      { pattern: "Over-controlling", result: "Team becomes passive" },
      { pattern: "Under-communicating", result: "People feel insecure" },
      { pattern: "Being reactive", result: "Team loses confidence" },
      { pattern: "Taking credit, shifting blame", result: "Trust dies" },
      { pattern: "Being nice but unclear", result: "Standards collapse" },
      { pattern: "Being harsh but directionless", result: "Fear replaces performance" }
    ],
    weeklyRhythm: ["What matters most this week?", "What is unclear?", "What is blocked?", "What risk are we ignoring?", "Who needs support?", "What decision must be made?", "What should we stop doing?"],
    shift: "Leadership grows when you move from: 'I did my part' to: 'I helped the whole system work better.'"
  },
  {
    key: "H",
    title: "Relationship Growth",
    summary: "Relationships improve when you become safer to tell the truth to.",
    questions: [
      "Do people hide things from me because I react badly?",
      "Do I make people feel small when I am stressed?",
      "Do I listen or just prepare my defense?",
      "Do I remember what matters to others?",
      "Do I apologize cleanly?",
      "Do I only communicate when I need something?",
      "Do I celebrate others without jealousy?",
      "Do I give people clarity?"
    ],
    habits: [
      "Ask better questions",
      "Interrupt less",
      "Reflect back what you heard",
      "Say thank you specifically",
      "Apologize without explaining too much",
      "Do not use honesty as cruelty",
      "Do not use silence as punishment",
      "Communicate expectations before resentment builds"
    ]
  }
];

// ────────────────────────────────────────────────────────────
// AUDIT AREAS (merged from n1 + n2, no duplicates)
// ────────────────────────────────────────────────────────────
export const AUDIT_AREAS = [
  { area: "Self-awareness", question: "Do I notice my patterns before others point them out?" },
  { area: "Emotional regulation", question: "Can I stay calm when misunderstood, corrected, delayed, or criticized?" },
  { area: "Communication", question: "Do people usually know what I am thinking, doing, and needing?" },
  { area: "Proactivity", question: "Do I act before being chased?" },
  { area: "Responsibility", question: "Do I own outcomes, not just intentions?" },
  { area: "Consistency", question: "Do I repeat good behavior when nobody is watching?" },
  { area: "Learning", question: "Do I seek feedback without becoming defensive?" },
  { area: "Execution", question: "Do I finish what I start?" },
  { area: "Reflection", question: "Do I review my life regularly?" },
  { area: "Relationships", question: "Do people feel safer, clearer, and stronger after interacting with me?" },
  { area: "Sleep", question: "Do I sleep enough, and at a consistent time?" },
  { area: "Exercise", question: "Do I move my body daily?" },
  { area: "Nutrition", question: "Do I eat in a way that supports energy?" },
  { area: "Money management", question: "Do I know my numbers and spend within my means?" },
  { area: "Spiritual / meaning life", question: "Am I becoming more truthful, capable, loving, responsible, resilient, and useful?" }
];

export const AUDIT_SCORING = {
  "8-10": "Strength. Maintain and refine.",
  "6-7": "Functional but inconsistent.",
  "4-5": "Growth zone.",
  "1-3": "Repeating life cost."
};

// ────────────────────────────────────────────────────────────
// WEAKNESS → SYSTEM CONVERTER
// ────────────────────────────────────────────────────────────
export const WEAKNESS_SYSTEM = [
  { weakness: "Poor communication", system: "Scheduled updates: morning, midpoint, closing" },
  { weakness: "Not proactive", system: "Weekly risk scan" },
  { weakness: "Zones out after fixing issues", system: "Post-fix checklist" },
  { weakness: "Defensive with feedback", system: "24-hour reflection rule" },
  { weakness: "Overthinks", system: "Decision deadline" },
  { weakness: "Forgets commitments", system: "One trusted task system" },
  { weakness: "Starts but does not finish", system: "Define 'done' before starting" },
  { weakness: "Avoids conflict", system: "Use repair scripts" },
  { weakness: "Low consistency", system: "Track one habit only" },
  { weakness: "Too people-pleasing", system: "Clarify boundaries before saying yes" },
  { weakness: "Too independent", system: "Ask: 'Who needs to be informed?'" },
  { weakness: "Too reactive", system: "Daily planning before messages / social media" }
];

// ────────────────────────────────────────────────────────────
// THE GROWTH CODE (15 items, from n2 Section 47)
// ────────────────────────────────────────────────────────────
export const GROWTH_CODE = [
  "Tell the truth sooner.",
  "Keep small promises.",
  "Repair quickly.",
  "Communicate before being chased.",
  "Take care of your body.",
  "Choose relationships carefully.",
  "Do not worship comfort.",
  "Do not worship achievement.",
  "Learn continuously.",
  "Take responsibility without self-hatred.",
  "Rest without guilt.",
  "Serve beyond yourself.",
  "Make decisions with values, not moods.",
  "Let feedback mature you.",
  "Become useful, not just impressive."
];

// ────────────────────────────────────────────────────────────
// PERSONAL GROWTH RULES (from n1 Section 12)
// ────────────────────────────────────────────────────────────
export const RULES = [
  { rule: "Rule 1", title: "Do not use self-awareness as self-excuse", body: "Bad: 'I'm just not naturally proactive.' Better: 'Proactivity is not natural yet, so I need a checklist.'" },
  { rule: "Rule 2", title: "Measure behavior, not intention", body: "You are not what you meant. You are what you repeatedly do." },
  { rule: "Rule 3", title: "Make invisible work visible", body: "People trust what they can see. Communicate progress, risks, and closure." },
  { rule: "Rule 4", title: "Repair faster", body: "The faster you repair, the less damage your weakness causes." },
  { rule: "Rule 5", title: "Build boring systems", body: "Most growth is boring: Review. Update. Sleep. Exercise. Plan. Apologize. Track. Repeat." },
  { rule: "Rule 6", title: "Choose humility over image", body: "The person who can say 'I need to improve this' grows faster than the person protecting their ego." },
  { rule: "Rule 7", title: "Think in consequences", body: "Ask: 'What does my behavior make easier or harder for others?' That question alone matures you." }
];

// ────────────────────────────────────────────────────────────
// 12-MONTH GROWTH MAP (from n1 Section 9)
// ────────────────────────────────────────────────────────────
export const GROWTH_MAP = [
  { month: 1, title: "Awareness", focus: "Track patterns. Ask for feedback. Identify top 3 weaknesses." },
  { month: 2, title: "Communication", focus: "Practice proactive updates and clearer expectations." },
  { month: 3, title: "Discipline", focus: "Build one keystone habit." },
  { month: 4, title: "Emotional Regulation", focus: "Practice pause, naming emotions, and non-defensive responses." },
  { month: 5, title: "Proactivity", focus: "Do weekly risk scans. Think two steps ahead." },
  { month: 6, title: "Follow-through", focus: "Create closure checklists. Finish open loops." },
  { month: 7, title: "Relationships", focus: "Repair one strained relationship. Improve listening." },
  { month: 8, title: "Career Ownership", focus: "Think like an owner, not just a task-doer." },
  { month: 9, title: "Confidence", focus: "Build competence evidence. Do harder things." },
  { month: 10, title: "Boundaries", focus: "Stop overcommitting. Say clear yes/no." },
  { month: 11, title: "Leadership", focus: "Help others gain clarity, courage, and consistency." },
  { month: 12, title: "Integration", focus: "Review the year. Identify your new identity and next growth edge." }
];

// ────────────────────────────────────────────────────────────
// OPERATING SYSTEM (daily/weekly/monthly templates)
// ────────────────────────────────────────────────────────────
export const OPERATING_SYSTEM = {
  daily5min: {
    title: "Daily 5-Minute Check-in",
    prompts: [
      "Today's top 3 priorities:",
      "One person I need to update:",
      "One thing I might avoid:",
      "One proactive action:",
      "One behavior I want to practice:"
    ]
  },
  eveningReview: {
    title: "Evening Review",
    prompts: [
      "What did I do well?",
      "Where did I avoid responsibility?",
      "Did I communicate clearly?",
      "What emotion controlled me today?",
      "What is one correction for tomorrow?"
    ]
  },
  weekly30min: {
    title: "Weekly 30-Minute Review",
    prompts: [
      "Wins:",
      "Mistakes:",
      "Repeated patterns:",
      "Feedback received:",
      "Promises kept:",
      "Promises broken:",
      "One relationship to repair:",
      "One system to improve:",
      "Top 3 priorities next week:"
    ]
  },
  monthly: {
    title: "Monthly Deeper Audit",
    prompts: [
      "What kind of person am I becoming?",
      "What pattern keeps repeating?",
      "What am I tolerating that I should address?",
      "What am I avoiding because it is uncomfortable?",
      "Where did I grow?",
      "Where did I perform maturity but not truly change?",
      "What should I focus on next month?"
    ]
  }
};

// ────────────────────────────────────────────────────────────
// TEMPERAMENTS (from n2 Section 43)
// ────────────────────────────────────────────────────────────
export const TEMPERAMENTS = [
  {
    type: "High Achiever",
    emoji: "🏆",
    needs: ["Rest", "Emotional honesty", "Non-performance identity", "Relationship presence", "Integrity over image"],
    risk: "Becoming impressive but empty."
  },
  {
    type: "People-Pleaser",
    emoji: "🫶",
    needs: ["Boundaries", "Direct speech", "Self-respect", "Tolerating disapproval"],
    risk: "Becoming liked but resentful."
  },
  {
    type: "Overthinker",
    emoji: "🧠",
    needs: ["Action", "Exposure", "Simpler decisions", "Body regulation"],
    risk: "Becoming insightful but stuck."
  },
  {
    type: "Avoider",
    emoji: "🫣",
    needs: ["Small commitments", "Accountability", "Facing consequences earlier"],
    risk: "Becoming comfortable but stagnant."
  },
  {
    type: "Helper",
    emoji: "🤝",
    needs: ["Receiving help", "Boundaries", "Motives audit", "Not rescuing"],
    risk: "Becoming needed but exhausted."
  },
  {
    type: "Rebel",
    emoji: "⚡",
    needs: ["Self-leadership", "Wise structure", "Respect for consequences"],
    risk: "Calling immaturity 'freedom.'"
  },
  {
    type: "Perfectionist",
    emoji: "🎯",
    needs: ["Shipping imperfectly", "Self-compassion", "Mistake tolerance"],
    risk: "High standards, low output."
  }
];

// ────────────────────────────────────────────────────────────
// SIGNS OF GROWTH vs NOT GROWING (from n2 Sections 44–45)
// ────────────────────────────────────────────────────────────
export const SIGNS_GROWING = [
  "You recover faster.",
  "You blame less.",
  "You communicate earlier.",
  "You need less external validation.",
  "You can admit fault faster.",
  "You choose better friends.",
  "You keep small promises.",
  "You tolerate discomfort.",
  "You are more honest with yourself.",
  "You no longer need every emotion obeyed.",
  "You become easier to trust.",
  "Your private life improves, not just your public image.",
  "You repair instead of disappearing.",
  "You can rest without feeling worthless.",
  "You can succeed without becoming arrogant.",
  "You can fail without collapsing."
];

export const SIGNS_NOT_GROWING = [
  "You consume growth content daily but avoid real change.",
  "You use personality labels as excuses.",
  "You keep having the same conflict with different people.",
  "You cannot receive correction.",
  "You are more judgmental, not more compassionate.",
  "You talk about discipline but break private promises.",
  "You talk about healing but never apologize.",
  "You talk about boundaries but avoid responsibility.",
  "You talk about ambition but lack consistency.",
  "You talk about authenticity but are rude.",
  "You talk about peace but avoid hard truth."
];

// ────────────────────────────────────────────────────────────
// STOP DOING LIST (from n2 Section 46)
// ────────────────────────────────────────────────────────────
export const STOP_DOING = [
  "Waiting to feel ready.",
  "Mistaking insight for action.",
  "Asking for advice you will not use.",
  "Comparing your backstage to someone's highlight reel.",
  "Calling avoidance 'peace.'",
  "Calling impulsiveness 'authenticity.'",
  "Calling people-pleasing 'kindness.'",
  "Calling harshness 'honesty.'",
  "Calling overwork 'discipline.'",
  "Calling fear 'wisdom.'",
  "Calling comfort 'self-care.'",
  "Calling cynicism 'intelligence.'"
];

// ────────────────────────────────────────────────────────────
// CRITICAL PERSPECTIVES (from n1 Section 8)
// ────────────────────────────────────────────────────────────
export const CRITICAL_PERSPECTIVES = [
  { no: 1, title: "'Just be yourself' is incomplete", body: "Be yourself, but do not stay immature. Your authentic self may still need discipline, humility, and repair." },
  { no: 2, title: "'Follow your passion' is overrated", body: "Motivation is unstable. Systems are more reliable. Growth works better when your goals connect to values, skill-building, and meaningful relationships, not just external pressure." },
  { no: 3, title: "'Confidence first' is backwards", body: "Confidence usually follows evidence. Build evidence through repeated action." },
  { no: 4, title: "'Work on everything' guarantees failure", body: "You do not need 20 goals. You need one or two high-leverage behavior changes." },
  { no: 5, title: "'Personality explains everything' is lazy", body: "Personality explains tendencies, not destiny. A 3w2, introvert, extrovert, ADHD person, anxious person, or highly ambitious person still needs systems and maturity." },
  { no: 6, title: "'Self-improvement' can become self-obsession", body: "Growth should make you more useful, loving, grounded, courageous, and responsible — not just more optimized." }
];

// ────────────────────────────────────────────────────────────
// SELF-HELP TRAPS (from n2 Section 36)
// ────────────────────────────────────────────────────────────
export const SELF_HELP_TRAPS = [
  { trap: "Endless content", problem: "Feels productive, changes little" },
  { trap: "Identity obsession", problem: "Labels replace responsibility" },
  { trap: "Biohacking obsession", problem: "Marginal gains hide major neglect" },
  { trap: "Hustle culture", problem: "Burns people out" },
  { trap: "Manifestation extremes", problem: "Ignores reality and systems" },
  { trap: "Trauma over-identification", problem: "Explains everything, changes nothing" },
  { trap: "Productivity addiction", problem: "Avoids emotional life" },
  { trap: "Guru dependence", problem: "Outsources judgment" }
];

// ────────────────────────────────────────────────────────────
// SPECIAL TOPICS — n3 Additions (Sections 48–60)
// ────────────────────────────────────────────────────────────
export const SPECIAL_TOPICS = [
  {
    id: "sleep-regularity",
    section: "48",
    title: "Sleep Regularity: The Missing Dimension",
    summary: "Duration is only half the equation. A 2025 BMC Public Health study of over 100,000 participants found that sleep consistency — not just hours — is an independent predictor of mental health outcomes. Inconsistent sleep routines worsened mental health scores even among people hitting the recommended 7–9 hour range.",
    socialJetlag: "Social jetlag is the mismatch between your biological clock and your social schedule. It is most common on weekends. Even mild social jetlag — one to two hours of timing inconsistency — is associated with: higher rates of depression, metabolic disruption, impaired attention and decision-making, increased caffeine dependence.",
    rules: [
      { rule: "Same bedtime within 30 minutes nightly", why: "Anchors circadian rhythm" },
      { rule: "Same wake time even on weekends", why: "The most powerful regulator of the biological clock" },
      { rule: "Avoid 'catch-up sleep' on weekends", why: "Creates Sunday-night insomnia; perpetuates the cycle" },
      { rule: "Track timing, not just hours", why: "Duration without regularity is incomplete data" }
    ],
    test: "If you need an alarm on weekdays but not weekends, or sleep in more than 90 minutes on weekends, you have social jetlag. Fix the schedule before adding supplements, sleep trackers, or other interventions."
  },
  {
    id: "self-compassion",
    section: "49",
    title: "Self-Compassion: The Missing Foundation",
    summary: "Self-compassion is not weakness, self-indulgence, letting yourself off the hook, lowering your standards, or stopping self-improvement. Self-compassion is: treating yourself with the same basic decency you would offer a struggling friend; seeing your failures accurately — without catastrophising them into identity; recognising that struggle, failure, and imperfection are universal human experiences; processing pain without either suppressing it or amplifying it.",
    components: [
      { component: "Self-kindness", immature: "Self-flagellation", mature: "Offering basic warmth to yourself when you fail" },
      { component: "Common humanity", immature: "'Only I struggle this way'", mature: "Recognising suffering as a shared human experience" },
      { component: "Mindful awareness", immature: "Suppression or over-identification", mature: "Seeing painful emotions clearly without being consumed by them" }
    ],
    disciplineTrap: "Harsh self-criticism feels productive. It is often not. Signs you are using self-punishment instead of discipline: You finish a hard task but feel no satisfaction — only relief that you didn't fail. Mistakes produce shame spirals, not correction and continuation. Rest feels dangerous, not restorative. You motivate yourself primarily through contempt for your current self. You cannot acknowledge progress without immediately raising the bar.",
    practice: "When you fail or fall short: 1. Acknowledge — 'This is painful. This is hard.' 2. Normalise — 'Struggling with this is part of being human.' 3. Be kind — 'What would I say to a friend in this exact situation?' 4. Act — Correct what can be corrected. Then move.",
    principle: "Accountability means seeing what went wrong and correcting it. Self-compassion means you do not need to suffer indefinitely as proof that you take it seriously."
  },
  {
    id: "nature",
    section: "50",
    title: "Nature and Outdoor Time",
    summary: "Nature is a health fundamental, not a luxury. Harvard T.H. Chan School of Public Health: green space exposure linked to lower mortality, reduced cardiovascular disease, improved mental health outcomes. A 2025 meta-analysis found significant physical and mental benefits for adults from nature exposure — with effects appearing from as little as 10 minutes.",
    minimumDose: [
      { type: "Green space walk", amount: "20–30 min, 2–3×/week", evidence: "Strong" },
      { type: "'Green exercise' (moving outdoors)", amount: "3×/week", evidence: "Strong — compounds benefits" },
      { type: "Blue space (water: sea, river, lake)", amount: "Any regular exposure", evidence: "Moderate" },
      { type: "Nature view (window, park bench)", amount: "Even passive exposure helps", evidence: "Moderate" }
    ],
    rationalisations: [
      { excuse: "'I'll do it when I have more time.'", reality: "Nature time reduces decision fatigue, meaning you get more from the same hours." },
      { excuse: "'The gym is sufficient.'", reality: "Exercise indoors and exercise outdoors produce different outcomes. Both matter." },
      { excuse: "'I don't enjoy it.'", reality: "Often this is screen withdrawal discomfort, not genuine preference. The enjoyment typically returns within 10–15 minutes." },
      { excuse: "'It's not productive.'", reality: "Unstructured outdoor time is associated with improved creativity, problem-solving, and attentional restoration." }
    ]
  },
  {
    id: "act",
    section: "51",
    title: "ACT: Acceptance and Commitment Therapy",
    summary: "ACT has strong and growing evidence. It is especially relevant to values work and emotional regulation. Where CBT and ACT differ: CBT identifies and restructures maladaptive thoughts (cognitive restructuring). ACT accepts thoughts and feelings; act according to values regardless (psychological flexibility).",
    processes: [
      { name: "Acceptance", desc: "Allowing difficult thoughts and feelings without fighting them" },
      { name: "Defusion", desc: "Seeing thoughts as thoughts, not facts ('I notice I'm having the thought that I'm a failure')" },
      { name: "Present moment contact", desc: "Attention to what is happening now, not prediction or rumination" },
      { name: "Self-as-context", desc: "Observing yourself without being defined by any particular thought or role" },
      { name: "Values", desc: "Clarifying what genuinely matters, independent of mood or social pressure" },
      { name: "Committed action", desc: "Taking steps toward values even when uncomfortable" }
    ],
    tool: "When stuck in avoidance or rumination: 1. Name the experience — 'I'm having the thought that I can't do this.' 2. Hold it lightly — 'That thought is here. I don't have to obey it.' 3. Ask the values question — 'What would I do right now if I trusted myself to handle the discomfort?' 4. Take one small action in that direction. This is not about feeling better before acting. It is about acting while feeling difficult things."
  },
  {
    id: "ptg",
    section: "52",
    title: "Post-Traumatic Growth",
    summary: "Post-traumatic growth (PTG) is distinct from resilience. Resilience is bouncing back — returning to baseline function after adversity. Post-traumatic growth is transformation through adversity — emerging with new capacities, perspectives, or depth that did not exist before the suffering. PTG does not mean the suffering was good or necessary. People often experience both intense distress and growth simultaneously.",
    domains: [
      { domain: "Personal strength", example: "'I discovered I am more capable than I believed'" },
      { domain: "New possibilities", example: "Loss of one path revealed an unexpected one" },
      { domain: "Relating to others", example: "Deepened empathy, intimacy, and appreciation of connection" },
      { domain: "Appreciation for life", example: "Shifted sense of what actually matters" },
      { domain: "Spiritual or existential change", example: "Deepened worldview, faith, or sense of meaning" }
    ],
    conditions: "PTG is not automatic. It tends to occur when: the person allows themselves to process the experience; there is at least some social support; the person develops a new narrative about the experience that incorporates meaning; time is given — PTG often emerges months or years after the event, not immediately.",
    caution: "Do not tell a suffering person they 'should grow from this.' PTG is an observation about what can happen when suffering is met with support, processing, and eventually meaning-making. It is not a standard to perform or a timeline to meet."
  },
  {
    id: "neurodivergence",
    section: "53",
    title: "Neurodivergence and Growth",
    summary: "Standard personal growth advice — habit stacking, morning routines, willpower-based discipline, linear planning — often fails or harms when applied without modification to neurodivergent brains. Repeated 'failure' to implement advice designed for neurotypical executive function is frequently misread as a character flaw.",
    principle: "The goal is not to force a neurodivergent brain into neurotypical systems. The goal is to design systems that work with how the brain actually functions.",
    adhdAdjustments: [
      { assumption: "Motivation comes from importance", reality: "Motivation comes from interest, novelty, urgency, or challenge", adjustment: "Structure work around genuine engagement, not obligation alone" },
      { assumption: "Habits form through repetition", reality: "Executive dysfunction disrupts automatic sequencing", adjustment: "Shorter loops, more external cues, visual tracking" },
      { assumption: "Willpower fills in gaps", reality: "Working memory gaps are neurological, not moral", adjustment: "Externalise everything — write it down, set the alarm, put it in view" },
      { assumption: "Time is felt", reality: "Time blindness is common — the future does not feel real", adjustment: "Use visible timers, not internal estimates" },
      { assumption: "Solo work requires discipline", reality: "Working alone with ADHD often collapses", adjustment: "Body doubling: working alongside someone, even silently on video, is a legitimate productivity tool" }
    ],
    criticalNote: "If you have been implementing personal growth systems diligently for years and repeatedly failing in the same specific ways — especially around initiation, time management, and follow-through — rule out executive dysfunction before concluding it is a character problem."
  },
  {
    id: "grief",
    section: "54",
    title: "Grief and Loss",
    summary: "Grief belongs in a growth framework. Loss — of people, relationships, roles, health, possibilities, and identity — is among the most growth-relevant experiences in a human life. Grief is the natural response to losing something or someone that mattered. It is not weakness, a problem to be solved efficiently, something to get over on a schedule, or evidence of insufficient resilience.",
    dualProcessModel: "The most research-supported model of healthy grieving (Stroebe and Schut) describes an oscillation between: Loss orientation (facing the grief directly, feeling the pain, processing what was lost, crying, remembering, missing) and Restoration orientation (building a new life structure, taking breaks from grieving, attending to practical demands, trying new roles and possibilities).",
    continuingBonds: "Older grief models prescribed 'moving on' and 'letting go' as the goal. The current evidence supports continuing bonds — maintaining an internal relationship with what or who was lost. Love and memory are not obstacles to recovery; they are part of the ongoing self.",
    clinicalConcern: "Prolonged Grief Disorder (PGD) is now a recognised clinical condition in DSM-5-TR and ICD-11. It is characterised by intense grief that remains severely impairing beyond 12 months after a loss. Signs: Inability to accept the reality of the loss after many months. Intense longing that does not vary or reduce over time. Severe difficulty engaging in daily life or relationships. Feeling that life is meaningless without the person or thing lost.",
    growth: "Grief that is faced tends to deepen people. Grief that is avoided tends to show up sideways — as anger, numbness, overwork, or distance."
  },
  {
    id: "gut-brain",
    section: "55",
    title: "The Gut-Brain Connection",
    summary: "Diet affects more than the body. The gut-brain axis is the bidirectional communication network between the gut microbiome and the brain that directly influences mood, anxiety, and cognitive function. Approximately 90% of the body's serotonin is produced in the gut.",
    foods: [
      { food: "Diverse fiber (vegetables, legumes, whole grains)", effect: "Feeds beneficial gut bacteria; produces SCFAs", evidence: "Strong" },
      { food: "Fermented foods (yogurt, kefir, kimchi, tempeh, miso)", effect: "Introduces beneficial bacteria; reduces anxiety markers in some studies", evidence: "Moderate" },
      { food: "Ultra-processed foods", effect: "Disrupts microbiome diversity; associated with higher depression rates", evidence: "Moderate-to-strong" },
      { food: "Omega-3 fatty acids (oily fish, flaxseed)", effect: "Anti-inflammatory; supports neurotransmitter function", evidence: "Moderate" },
      { food: "Sugar-heavy diets", effect: "Associated with microbiome disruption and mood instability", evidence: "Moderate" }
    ],
    malaysiaNote: "Traditional Southeast Asian diets are remarkably well-aligned with gut-brain axis research. Fermented foods (tempeh, belacan, tapai), diverse vegetables, legumes, and spice-rich cooking are all consistent with high microbiome diversity. The concern is the accelerating transition toward ultra-processed convenience foods in urban Malaysia. Protecting traditional eating patterns is not merely cultural preservation. It is evidence-based nutrition."
  },
  {
    id: "loneliness",
    section: "56",
    title: "The Loneliness Crisis",
    summary: "WHO Commission on Social Connection, June 2025: 1 in 6 people globally are affected by loneliness. Loneliness is linked to an estimated 100 deaths every hour — more than 871,000 deaths annually. The health impact of chronic loneliness is comparable to smoking 15 cigarettes per day.",
    layers: [
      { layer: "Intimate bonds", desc: "Deep relationships with mutual knowledge and trust", example: "Close friends, partner, family" },
      { layer: "Relational bonds", desc: "Regular meaningful contact with people who know you", example: "Colleagues, community members, recurring acquaintances" },
      { layer: "Collective bonds", desc: "Belonging to a group or community with shared purpose", example: "Religious community, sports team, professional group" }
    ],
    principle: "Do not only invest in deep relationships. Maintain a broader social ecology. Brief, positive social interactions accumulate into a sense of belonging.",
    solitude: "Chosen solitude — time alone for rest, reflection, or creative work — is healthy and often restorative. Imposed isolation and unwanted disconnection are different in kind, not just degree."
  },
  {
    id: "ai-tools",
    section: "57",
    title: "AI Tools: Use and Misuse for Growth",
    summary: "By 2025–2026, AI tools are widely available and actively used for personal development purposes. This deserves honest evaluation — not hype, not dismissal.",
    canHelp: [
      { use: "Journaling prompts and reflection", note: "Works best as a starting point, not a replacement for thinking" },
      { use: "Drafting difficult communications", note: "Review and personalise — do not send AI drafts verbatim" },
      { use: "Learning acceleration", note: "Does not replace application" },
      { use: "Decision frameworks", note: "Useful for clarity; judgment still required" },
      { use: "Preparing for feedback conversations", note: "Reduces anticipatory anxiety; builds verbal fluency" }
    ],
    cannotSubstitute: [
      "Human accountability — A person who knows your patterns, history, and defaults",
      "Professional therapy and clinical assessment",
      "The discomfort that produces growth",
      "Genuine relational feedback from someone who has experienced you at your worst"
    ],
    convenienceTrap: "Use AI to lower the threshold for starting hard things. Do not use it to avoid the hard things altogether. Warning signs: Asking AI to validate decisions you have already made. Replacing therapy sessions with AI conversations. Processing every difficult emotion in AI chat instead of developing the tolerance to sit with it. Using AI to draft apologies instead of having the awkward conversation yourself."
  },
  {
    id: "journaling",
    section: "58",
    title: "Journaling: Type Distinctions Matter",
    summary: "A 2025 PLOS One systematic review found that positive expressive writing interventions show measurable wellbeing benefits in non-clinical populations — but the type of journaling significantly affects the outcome.",
    types: [
      { type: "Expressive writing", desc: "Writing freely about difficult emotions and experiences", outcome: "Reduces anxiety, depression symptoms, rumination" },
      { type: "Gratitude journaling", desc: "Recording specific things you appreciate, with detail", outcome: "Improves mood; moderate effect sizes; habituates if done mechanically" },
      { type: "Future self journaling", desc: "Writing from the perspective of your future self", outcome: "Improves goal commitment and identity coherence" },
      { type: "Values reflection", desc: "Examining choices against your stated values", outcome: "Strengthens integrity and reduces cognitive dissonance" },
      { type: "Anti-delusion review", desc: "Counters self-deception and confirmation bias", outcome: "Reduces blind spots" },
      { type: "Problem-solving writing", desc: "Structuring a problem on paper before acting", outcome: "Reduces impulsivity; clarifies options" }
    ],
    mistakes: [
      "Writing the same complaint repeatedly without movement. If your journal entries from 3 months ago look identical to today's, something is wrong.",
      "Gratitude journaling on autopilot. Generic lists habituate quickly. Specific and novel entries preserve the effect.",
      "Using journaling to avoid action. Processing in writing is valuable before and after action — not a substitute for the action itself.",
      "Only writing when upset. A growth journal should include wins, corrections, and flat periods — not only crises."
    ],
    minimumViable: "Three questions written weekly — not daily: 1. What am I avoiding that I should face? 2. Where did I act consistently with my values this week? 3. What would I do differently if I had this week again?"
  },
  {
    id: "money-mental-health",
    section: "59",
    title: "Money and Mental Health: The Bidirectional Loop",
    summary: "Financial stress does not only cause mental health problems. Mental health problems actively impair financial decision-making. The loop goes both ways.",
    loop: [
      { direction: "Financial stress → mental health", mechanism: "Chronic anxiety about money activates the stress response; impairs sleep, concentration, and relationship quality" },
      { direction: "Mental health → financial decisions", mechanism: "Depression reduces motivation to track and manage money; anxiety drives avoidance of financial reality; impulsivity produces poor financial decisions" },
      { direction: "Both directions at once", mechanism: "A single financial setback can trigger both a genuine practical problem and an impaired cognitive state for solving it" }
    ],
    implications: [
      "If you are in a depressive episode, delay major financial decisions where possible. Your executive function is genuinely impaired.",
      "If your finances are chaotic, address that directly — not only as a practical problem but as a mental health intervention.",
      "The sequence matters: stabilise the emergency fund not only for financial reasons, but because financial insecurity keeps the nervous system in a chronic threat state.",
      "Avoidance of financial reality is a mental health symptom as much as a financial habit. Treat it accordingly."
    ],
    compound: "Small financial wins — tracking spending for one month, building even a minimal emergency fund, clearing one small debt — produce measurable mood improvements and increase the confidence to take the next step."
  },
  {
    id: "growth-mindset",
    section: "60",
    title: "The Growth Mindset — Honest Evaluation",
    summary: "The growth mindset concept is useful and directionally correct. The specific claim that teaching growth mindset reliably produces measurable academic or performance outcomes has been substantially challenged. Multiple independent replication attempts have produced smaller or null results.",
    whatHolds: [
      { claim: "Effort and strategy affect skill development", evidence: "Strong — well-established across learning research" },
      { claim: "Believing your intelligence is entirely fixed is harmful", evidence: "Moderate — associated with avoidance of challenge" },
      { claim: "Teaching growth mindset to students reliably improves their outcomes", evidence: "Contested — significant replication failures" },
      { claim: "Some people are naturally more talented at some things", evidence: "Strong — talent and practice interact; neither alone determines outcomes" },
      { claim: "'Anyone can become anything through hard work'", evidence: "False — biology, environment, timing, and opportunity all matter" }
    ],
    revisedFraming: "Effort, strategies, feedback, and consistency meaningfully affect what you can do. Biology, opportunity, and circumstance also matter. Neither is the whole story. Focus on what is within your influence without denying what is not."
  }
];

// ────────────────────────────────────────────────────────────
// CORRECTED EVIDENCE STATEMENTS (from n3 final section)
// ────────────────────────────────────────────────────────────
export const CORRECTED_EVIDENCE = [
  {
    topic: "Sleep",
    original: "Adults generally need at least seven hours.",
    updated: "Adults generally need seven to nine hours, but sleep regularity — consistent timing across nights — is now recognised as an equally important and previously underemphasised dimension of sleep health (BMC Public Health, 2025; Cambridge Psychological Medicine, 2025)."
  },
  {
    topic: "Exercise",
    original: "Exercise presented as 'emotional hygiene.'",
    updated: "A February 2026 British Journal of Sports Medicine umbrella review — the most comprehensive synthesis to date — found that exercise produces medium-sized reductions in depression symptoms and small-to-medium reductions in anxiety symptoms, with strongest effects in adults aged 18–30. Exercise now meets the threshold for a first-line complementary intervention for mild-to-moderate depression and anxiety."
  },
  {
    topic: "Social Connection",
    original: "Time magazine, 2015 citation.",
    updated: "WHO Commission on Social Connection, June 2025: 1 in 6 people worldwide affected by loneliness; 871,000+ deaths per year attributable. Loneliness risk is now equivalent in magnitude to smoking as a mortality risk factor."
  },
  {
    topic: "Growth Mindset",
    original: "Presented as a foundational, evidence-supported truth.",
    updated: "Directionally correct, but specific intervention effects have faced significant replication challenges. Reclassify as a useful mental model with contested large-scale evidence."
  }
];

// ────────────────────────────────────────────────────────────
// GROWTH MINDSET HEALTHY vs TOXIC (from n2 Section 2)
// ────────────────────────────────────────────────────────────
export const GROWTH_MINDSET = {
  healthy: [
    "Skills can improve through effort, feedback, and better strategies.",
    "Failure is information, not identity.",
    "Talent matters, but it is not destiny.",
    "You are responsible for your development."
  ],
  toxic: [
    "'Anyone can become anything.'",
    "'If you failed, you just didn't want it enough.'",
    "'All limits are excuses.'",
    "'Rest is laziness.'",
    "'Pain always means progress.'"
  ],
  balanced: "You are not fully in control of your life, but you are rarely powerless."
};

// ────────────────────────────────────────────────────────────
// RELATIONSHIPS: green/red flags (from n2 Section 15)
// ────────────────────────────────────────────────────────────
export const RELATIONSHIP_FLAGS = {
  greenInOthers: [
    "They repair after conflict.",
    "They can admit fault.",
    "They are consistent across contexts.",
    "They do not punish honesty.",
    "They respect boundaries.",
    "They celebrate your growth.",
    "They tell the truth with care.",
    "Their private life and public image are not wildly different."
  ],
  redInYourself: [
    "You disappear when things get hard.",
    "You only communicate when you need something.",
    "You expect mind-reading.",
    "You keep score silently.",
    "You apologize but do not change.",
    "You confuse being needed with being loved.",
    "You avoid hard conversations, then resent people."
  ]
};

// ────────────────────────────────────────────────────────────
// COMMUNICATION SCRIPTS (from n2 Section 14)
// ────────────────────────────────────────────────────────────
export const SCRIPTS = [
  { label: "Clarifying expectations", script: "\"What does success look like for this?\"" },
  { label: "Updating proactively", script: "\"Small update: I've completed A and B. C is delayed because of X. I'll resolve it by Y.\"" },
  { label: "Receiving feedback", script: "\"Thanks. Let me reflect on that. Is there one specific example I should look at?\"" },
  { label: "Disagreeing respectfully", script: "\"I see the reasoning. My concern is X. Could we also consider Y?\"" },
  { label: "Repairing", script: "\"I realize my action affected you negatively. I should have handled it differently. Here's what I'll change.\"" },
  { label: "Proactivity script", script: "\"Here's where things stand. Here's the issue. Here are two options. Here's my recommendation. Here's what I need from you.\"" },
  { label: "Emotional regulation example", script: "\"I feel defensive because this sounds like I failed. But the useful move is to understand the gap.\"" },
  { label: "Mature response to criticism", script: "Ask: 'What part is true?' before defending." },
  { label: "Boundary: soft", script: "\"I can't commit to that this week.\"" },
  { label: "Boundary: clear", script: "\"I'm not available for calls after 10 p.m.\"" },
  { label: "Boundary: consequence", script: "\"If the conversation becomes insulting, I'll pause and continue later.\"" },
  { label: "Boundary: work", script: "\"I can take this on, but something else will need to be deprioritized.\"" }
];

// ────────────────────────────────────────────────────────────
// DECISION TRAPS (from n2 Section 18)
// ────────────────────────────────────────────────────────────
export const DECISION_TRAPS = [
  { trap: "Sunk cost fallacy", example: "Staying because you already invested" },
  { trap: "Confirmation bias", example: "Only seeking evidence you are right" },
  { trap: "Status quo bias", example: "Choosing familiar pain" },
  { trap: "Emotional reasoning", example: "'I feel scared, so it must be wrong'" },
  { trap: "Social proof", example: "'Everyone is doing it'" },
  { trap: "Ego protection", example: "Refusing to admit a mistake" },
  { trap: "Short-term relief", example: "Choosing what reduces discomfort now" }
];

// ────────────────────────────────────────────────────────────
// FAILURE TYPES (from n2 Section 33)
// ────────────────────────────────────────────────────────────
export const FAILURE_TYPES = [
  { type: "Skill failure", meaning: "You need practice" },
  { type: "Strategy failure", meaning: "Your method was wrong" },
  { type: "Character failure", meaning: "You violated values" },
  { type: "Fit failure", meaning: "Wrong environment / role" },
  { type: "Timing failure", meaning: "Conditions were not ready" },
  { type: "Courage failure", meaning: "You avoided needed action" },
  { type: "System failure", meaning: "Process was weak" }
];

// ────────────────────────────────────────────────────────────
// ASEAN / MALAYSIA CONTEXT (from n2 Section 37)
// ────────────────────────────────────────────────────────────
export const ASEAN_CONTEXT = {
  balancing: [
    "Respect for elders with personal agency.",
    "Harmony with direct communication.",
    "Family duty with boundaries.",
    "Stability with ambition.",
    "Humility with self-advocacy.",
    "Community belonging with independent thinking.",
    "'Don't be too proud' culture with healthy confidence."
  ],
  principles: [
    "A person can be respectful without being passive.",
    "A person can be ambitious without becoming arrogant.",
    "A person can be independent without dishonoring family."
  ]
};

// ────────────────────────────────────────────────────────────
// SKILL STACK (from n2 Section 16)
// ────────────────────────────────────────────────────────────
export const SKILL_STACK = [
  { skill: "Writing", why: "Clear thinking and influence" },
  { skill: "Speaking", why: "Leadership and persuasion" },
  { skill: "Data literacy", why: "Better decisions" },
  { skill: "Financial literacy", why: "Life and business judgment" },
  { skill: "Negotiation", why: "Better outcomes" },
  { skill: "Sales", why: "Understanding value and people" },
  { skill: "Psychology", why: "Human behavior insight" },
  { skill: "Technology / AI literacy", why: "Modern leverage" },
  { skill: "Project management", why: "Execution" },
  { skill: "Conflict resolution", why: "Leadership maturity" }
];

// ────────────────────────────────────────────────────────────
// FINANCIAL GROWTH HIERARCHY (from n2 Section 21)
// ────────────────────────────────────────────────────────────
export const FINANCIAL_HIERARCHY = [
  "Know your numbers.",
  "Spend less than you earn.",
  "Build emergency savings.",
  "Remove destructive debt.",
  "Increase income skillfully.",
  "Protect against catastrophe.",
  "Invest long term.",
  "Avoid lifestyle inflation.",
  "Build generosity.",
  "Align money with values."
];

// ────────────────────────────────────────────────────────────
// IDENTITY STATEMENTS (from n2 Section 35)
// ────────────────────────────────────────────────────────────
export const IDENTITY_STATEMENTS = {
  grounded: [
    "\"I am becoming someone who communicates early.\"",
    "\"I am becoming someone who keeps small promises.\"",
    "\"I am becoming someone who does not run from feedback.\"",
    "\"I am becoming someone who can be trusted under pressure.\""
  ],
  delusional: [
    "\"I am unstoppable.\"",
    "\"I never fail.\"",
    "\"I am superior.\"",
    "\"I deserve everything.\""
  ]
};

// ────────────────────────────────────────────────────────────
// 90-DAY GROWTH PLAN STEPS (from n2 Section 40)
// ────────────────────────────────────────────────────────────
export const GROWTH_PLAN_90DAY = {
  steps: [
    { step: 1, title: "Pick one identity theme", examples: ["Become more proactive.", "Become emotionally steadier.", "Become healthier.", "Become more disciplined.", "Become more honest.", "Become more relationally present."] },
    { step: 2, title: "Pick three measurable behaviors", examples: ["Proactive: Send weekly updates before being asked / Plan tomorrow before sleeping / Flag problems within 24 hours.", "Healthier: Sleep before 11:30 p.m. / Walk 8,000 steps daily / Strength train Mon, Wed, Fri."] },
    { step: 3, title: "Pick one relationship behavior", examples: ["Call parents weekly.", "Send one appreciation message weekly.", "Have one honest conversation monthly.", "Repair conflict within 48 hours."] },
    { step: 4, title: "Pick one discomfort practice", examples: ["Ask for feedback.", "Say no.", "Publish imperfect work.", "Discuss money.", "Apologize.", "Go to gym when intimidated.", "Make the difficult call."] },
    { step: 5, title: "Review weekly", examples: ["What worked?", "What failed?", "Why?", "What needs simplifying?", "What am I avoiding?", "What is the next adjustment?"] }
  ]
};

// ────────────────────────────────────────────────────────────
// BOTTOM LINE (consolidated from all three files)
// ────────────────────────────────────────────────────────────
export const BOTTOM_LINE = {
  n1: "Personal growth is the process of becoming more aware, responsible, regulated, communicative, proactive, and trustworthy through repeated behavior — not through personality labels, motivation, or good intentions.",
  n2: "Personal growth is not about becoming a flawless, optimized machine. It is about becoming a more truthful, stable, capable, loving, disciplined, courageous, and useful human being — with enough humility to keep learning and enough responsibility to actually change.",
  recencyNote: "Info current as of May 24, 2026. Research on psychology, health behavior, and wellbeing continues to evolve, but the strongest practical foundations remain stable: sleep, movement, relationships, feedback, values, deliberate practice, emotional regulation, and consistent behavior."
};
