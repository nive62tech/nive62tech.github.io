/* ══════════════════════════════════════
   PROJECTS DATA
   Edit content here — project.html reads
   this file based on ?id= in the URL.

   Image naming convention:
   images/<id>.jpg          → main hero image
   images/<id>-1.jpg        → gallery image 1
   images/<id>-2.jpg        → gallery image 2
   images/<id>-3.jpg        → gallery image 3
   videos/<id>-demo.mp4     → demo video (optional)
══════════════════════════════════════ */
const PROJECTS = {

  vizora: {
    title:   "Vizora",
    eyebrow: "Featured Project",
    tagline: "Fully local, privacy-first AI data visualization. Drop a CSV and query it in plain English — zero cloud, zero accounts, with a LAN mode built for teams.",
    tags:    ["React", "FastAPI", "Ollama", "Plotly", "MIT License"],
    github:  "https://github.com/nive62tech",
    demo:    "",
    video:   false,
    meta: {
      role:   "Solo Builder",
      stack:  "React · FastAPI · Ollama · Pandas · Plotly",
      status: "Active · Open Source"
    },
    overview: `Vizora lets you point at a CSV, Excel, or JSON file and ask questions about it in plain English — no charting syntax, no cloud upload. Everything runs locally through Ollama, so the data never leaves the device it's on. A LAN mode lets a small team share one running instance without each person needing their own setup. Auto-numbered charts, dashboard builder, and export to PDF, PNG, or HTML included.`,
    highlights: [
      "Natural-language querying translated into interactive charts on the fly",
      "100% local inference via Ollama — no API keys, no data ever leaves the device",
      "LAN mode: host on one machine, entire team connects via browser on the same WiFi",
      "Supports TinyLlama (600MB), Phi-3 Mini (2.3GB), and Mistral (4GB) model sizes",
      "Export charts and dashboards as PDF, PNG, or HTML",
      "Open sourced under MIT licence — free forever"
    ]
  },

  promptlens: {
    title:   "PromptLens",
    eyebrow: "Research Tool",
    tagline: "Local-first LLM prompt evaluation toolkit. Compare responses from multiple models side-by-side without sending your prompts anywhere you don't control.",
    tags:    ["FastAPI", "Gemini API", "HuggingFace", "Python"],
    github:  "https://github.com/nive62tech/promptlens",
    demo:    "",
    video:   false,
    meta: {
      role:   "Solo Builder",
      stack:  "FastAPI · Gemini API · HuggingFace · Python",
      status: "Active"
    },
    overview: `Built to make prompt iteration less guesswork and more measurement. PromptLens runs the same prompt across multiple models and shows the outputs side-by-side so differences in tone, accuracy, and structure are immediately visible. Readability, sentiment, and length metrics are computed automatically. Everything stays on infrastructure you control — no third-party logging of your prompts.`,
    highlights: [
      "Side-by-side comparison view across multiple LLMs (Gemini, HuggingFace, OpenAI)",
      "Automatic readability, sentiment, and length scoring per response",
      "Privacy-first design — prompts are never logged to external services",
      "Modular connector architecture makes adding new models straightforward",
      "REST API available for integration with external tools or frontends"
    ]
  },

  neuronote: {
    title:   "Neuro_Note",
    eyebrow: "Mobile App",
    tagline: "Voice-first AI task and calendar app. Speak a sentence and the assistant extracts tasks, dates, times, and reminders automatically.",
    tags:    ["Flutter", "Groq AI", "FastAPI", "SQLite"],
    github:  "",
    demo:    "",
    video:   false,
    meta: {
      role:   "Solo Builder",
      stack:  "Flutter · FastAPI · Groq AI (Whisper + Llama 3.3) · SQLite",
      status: "In Progress"
    },
    overview: `Neuro_Note removes the friction of manual task entry. Speak a sentence like "remind me to submit the report Friday at 5" and the app parses intent, date, and time automatically — scheduling it without any form to fill in. Audio is processed and immediately deleted; all task data stays on-device in SQLite. No user tracking, no ads, no analytics.`,
    highlights: [
      "Real-time speech-to-intent parsing via Groq AI (Whisper + Llama 3.3)",
      "Automatic extraction of tasks, calendar events, dates, times, and reminders",
      "All data stored locally in SQLite — audio never persisted after processing",
      "Calendar view, reminder notifications, and voice recording in one app",
      "Flutter-first codebase with a future iOS phase planned"
    ]
  },

  airwriter: {
    title:   "AI Air Writer",
    eyebrow: "Computer Vision",
    tagline: "Gesture-based real-time drawing using only a webcam — no stylus, no touchscreen, just your hand tracked live in the air.",
    tags:    ["Python", "OpenCV", "MediaPipe", "NumPy"],
    github:  "",
    demo:    "",
    video:   false,
    meta: {
      role:   "Solo Builder",
      stack:  "Python · OpenCV · MediaPipe · NumPy",
      status: "Complete"
    },
    overview: `A focused build exploring real-time hand tracking. Using MediaPipe's 21 hand-landmark model, fingertip position is tracked frame-by-frame through OpenCV and translated directly into on-screen drawing — turning any webcam into a touchless canvas. Four gesture modes (draw, move, clear, erase) are mapped to distinct hand poses, with dual-user support for green and red drawing channels.`,
    highlights: [
      "Tracks all 21 MediaPipe hand landmarks in real time at webcam frame rate",
      "Four gesture modes: Index finger draws · Open palm moves · Index+Middle clears · Fist erases",
      "Dual-user support — two people can draw simultaneously in different colours",
      "Zero additional hardware required — works with any standard webcam",
      "Built end-to-end in a single 2–3 hour sprint"
    ]
  },

  projectpilot: {
    title:   "ProjectPilot",
    eyebrow: "Open Source",
    tagline: "An AI step-by-step project mentor for engineering students — roadmaps, debugging support, and deployment guidance, all in one place.",
    tags:    ["Open Source", "AI Q&A", "Community-Driven"],
    github:  "https://github.com/nive62tech",
    demo:    "",
    video:   false,
    meta: {
      role:   "Solo Builder",
      stack:  "AI Q&A Engine · Web",
      status: "Active · Open Source"
    },
    overview: `ProjectPilot was built for students stuck at the "what do I do next" stage of a project. It breaks a goal down into a structured roadmap, answers debugging questions in context, provides tool and IDE setup guidance, and walks through deployment steps — acting like a patient mentor available any time. Open to contributions from students and developers.`,
    highlights: [
      "Generates structured, step-by-step roadmaps from a project goal",
      "Context-aware debugging Q&A for implementation problems",
      "Tool, compiler, and library setup instructions built in",
      "Deployment checklists for common student project stacks",
      "Fully open source — contributions welcome"
    ]
  },

  emojitranslator: {
    title:   "Emoji Translator",
    eyebrow: "NLP Project",
    tagline: "Context-aware text-to-emoji translation using NLP — sentiment-driven, not just keyword matching, with multi-language support planned.",
    tags:    ["NLP", "Python", "Flutter", "Sentiment Analysis"],
    github:  "",
    demo:    "",
    video:   false,
    meta: {
      role:   "Solo Builder",
      stack:  "Python · NLP · Flask/FastAPI · Flutter",
      status: "In Progress"
    },
    overview: `An exploratory NLP project investigating how sentiment and context can drive emoji selection rather than fixed keyword mapping. The goal is for "I'm exhausted but happy" to produce a meaningfully different output than a flat keyword swap would — understanding the emotional register of a sentence rather than just its surface vocabulary. A Flutter mobile frontend provides a fast, simple interface for testing translations.`,
    highlights: [
      "Sentiment-aware translation — context and emotion drive emoji choice, not just keywords",
      "NLP-based approach handles nuance that rule-based systems miss",
      "Flutter mobile interface for real-time testing and iteration",
      "Multi-language support and emoji alternative suggestions planned",
      "API endpoints for integration with other apps or chat platforms"
    ]
  }

};