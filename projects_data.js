/* ═══════════════════════════════════════
   PROJECT DATA
   Single source of truth for project detail
   pages. Add/edit entries here — project.html
   reads this by ?id= in the URL.
═══════════════════════════════════════ */
const PROJECTS = {
  vizora: {
    title: "Vizora",
    tagline: "Fully local, privacy-first AI data visualization. Chat with your CSV in plain English — zero cloud, with a LAN mode built for teams.",
    eyebrow: "Featured Project",
    tags: ["React", "FastAPI", "Ollama", "MIT License"],
    iconPath: '<path d="M3 3v18h18"/><path d="M7 16l4-6 4 3 5-8"/>',
    github: "https://github.com/nive62tech",
    demo: "",
    meta: { role: "Solo Builder", stack: "React · FastAPI · Ollama", status: "Active / Open Source" },
    overview: "Vizora lets you point at a CSV and ask questions about it in plain English — no charting library syntax, no cloud upload. Everything runs locally through Ollama, so the data never leaves the machine it's on. A LAN mode lets a small team share one running instance without each person needing their own setup.",
    highlights: [
      "Natural-language querying translated into chart specs on the fly",
      "100% local inference — no API keys, no data leaves the device",
      "LAN mode for lightweight team-wide access to one instance",
      "Open sourced under MIT to encourage local-first AI tooling"
    ]
  },
  promptlens: {
    title: "PromptLens",
    tagline: "Local-first LLM prompt evaluation. Compare models side-by-side without sending your prompts anywhere you don't control.",
    eyebrow: "Research Tool",
    tags: ["FastAPI", "Gemini"],
    iconPath: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    github: "https://github.com/nive62tech/promptlens",
    demo: "",
    meta: { role: "Solo Builder", stack: "FastAPI · Gemini API", status: "Active" },
    overview: "Built to make prompt iteration less guesswork and more measurement. PromptLens runs the same prompt across multiple models and lays the outputs side-by-side so differences in tone, accuracy, and structure are easy to spot at a glance, with everything staying on infrastructure you control.",
    highlights: [
      "Side-by-side comparison view across multiple LLMs",
      "Privacy-first design — no third-party logging of prompts",
      "Built for fast iteration during prompt-engineering work"
    ]
  },
  neuronote: {
    title: "Neuro_Note",
    tagline: "Voice-first AI task and calendar app. Speak naturally and the assistant extracts tasks, events, and reminders for you.",
    eyebrow: "Mobile App",
    tags: ["Flutter", "Groq AI"],
    iconPath: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4"/>',
    github: "",
    demo: "",
    meta: { role: "Solo Builder", stack: "Flutter · Groq AI", status: "Prototype" },
    overview: "Neuro_Note removes the friction of manual task entry. Speak a sentence like 'remind me to submit the report Friday at 5' and the app parses intent, date, and time automatically, scheduling it without any forms to fill in.",
    highlights: [
      "Real-time speech-to-intent parsing via Groq AI",
      "Automatic task, event, and reminder extraction",
      "Built mobile-first in Flutter for everyday quick capture"
    ]
  },
  airwriter: {
    title: "AI Air Writer",
    tagline: "Gesture-based real-time drawing using only a webcam — no stylus, no touchscreen, just your hand in the air.",
    eyebrow: "Computer Vision",
    tags: ["OpenCV", "MediaPipe"],
    iconPath: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
    github: "",
    demo: "",
    meta: { role: "Solo Builder", stack: "OpenCV · MediaPipe", status: "Built in 2–3 hrs" },
    overview: "A quick build exploring real-time hand tracking. Using MediaPipe's 21 hand landmarks, fingertip position is tracked frame-by-frame through OpenCV and translated directly into on-screen drawing — turning any webcam into a touchless canvas.",
    highlights: [
      "Tracks all 21 MediaPipe hand landmarks in real time",
      "Zero additional hardware — works with any standard webcam",
      "Built end-to-end in a single short sprint"
    ]
  },
  projectpilot: {
    title: "ProjectPilot",
    tagline: "An AI step-by-step project mentor for engineering students — roadmaps, debugging help, and deployment guidance.",
    eyebrow: "Open Source",
    tags: ["Open Source", "AI Q&A"],
    iconPath: '<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 5.4-5.4 2 2-5.4z"/>',
    github: "",
    demo: "",
    meta: { role: "Solo Builder", stack: "AI Q&A Engine", status: "Active / Open Source" },
    overview: "ProjectPilot was built for students stuck at the 'what do I do next' stage of a project. It breaks a goal into a roadmap, answers debugging questions in context, and walks through deployment — acting like a patient mentor available any time.",
    highlights: [
      "Generates step-by-step roadmaps from a project goal",
      "Context-aware debugging Q&A",
      "Deployment guidance for common student project stacks"
    ]
  },
  emojitranslator: {
    title: "Emoji Translator",
    tagline: "Context-aware text-to-emoji translation using NLP, with sentiment awareness and multi-language support planned.",
    eyebrow: "NLP",
    tags: ["NLP", "Flutter"],
    iconPath: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    github: "",
    demo: "",
    meta: { role: "Solo Builder", stack: "NLP · Flutter", status: "In Progress" },
    overview: "A lighter, exploratory project investigating how well sentiment and context can drive emoji selection rather than fixed keyword mapping — so 'I'm exhausted but happy' produces a different result than a flat keyword swap would.",
    highlights: [
      "Sentiment-aware translation, not just keyword matching",
      "Built in Flutter for a fast, simple mobile interface",
      "Multi-language support planned as a next step"
    ]
  }
};