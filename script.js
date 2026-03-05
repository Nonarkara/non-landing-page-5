/* ══════════════════════════════════════════
   NON — Editorial Script v2
   i18n · media · research · steal ideas
   ══════════════════════════════════════════ */

const CONTENT_POLICY = {
  excludeFolders: ["Family", "Non's Otters Transcription", "Transcripts from Otter"],
  excludePatterns: ["client_secret", ".json.txt", "ngrok_recovery_codes", "IMG_0960.JPG", "IMG_0971.JPG", "IMG_0974.JPG"]
};

const FEATURED_MEDIA = [
  { path: "Portrait photos/IMG_0786.JPG", section: "hero_main", alt: "Portrait of Non Arkaraprasertkul" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(10).jpg", section: "fieldwork", alt: "Fieldwork in Shanghai" },
  { path: "Lecture photos/DAY1_0368.jpg", section: "work_main", alt: "Non delivering a lecture" },
  { path: "Designated Survivor/ChatGPT Image Feb 23, 2026, 12_09_50 AM.png", section: "writing", alt: "Designated Survivor: Bangkok" },
  { path: "SLIC/SCTCDP dashboard.png", section: "dashboard", alt: "SCTHCDP dashboard" },
  { path: "Awards photos/8T9A2486-opq3225169366.jpg", section: "proof_a", alt: "Award ceremony" },
  { path: "Awards photos/JSCF2025-2529.jpg", section: "proof_b", alt: "Johor Smart City Forum" },
  { path: "SLIC/Z03A3528-opq3946524017.jpg", section: "proof_c", alt: "International collaboration" },
  { path: "Awards photos/8T9A2750-opq3225166299.jpg", section: "proof_d", alt: "Smart City Expo interview" },
  { path: "Lecture photos/DAY1_0317.jpg", section: "proof_e", alt: "Workshop facilitation" },
  { path: "Portrait photos/IMG_7460.JPG", section: "contact_portrait", alt: "Non Arkaraprasertkul" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(1).jpg", section: "gallery_a", alt: "Shanghai fieldwork" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(5).jpg", section: "gallery_b", alt: "Shanghai fieldwork" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(15).jpg", section: "gallery_c", alt: "Shanghai fieldwork" },

  // Hero mosaic additions
  { path: "Lecture photos/DAY1_0368.jpg", section: "hero_mosaic_1", alt: "Non delivering a lecture" },
  { path: "Awards photos/8T9A2486-opq3225169366.jpg", section: "hero_mosaic_2", alt: "Award ceremony" },
  { path: "SLIC/SLIC at Tomorrow City China Shanghai 2025.jpg", section: "hero_mosaic_3", alt: "SLIC at Tomorrow City Shanghai" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(2).jpg", section: "hero_mosaic_4", alt: "Shanghai fieldwork" },

  // Fieldwork mosaic additions
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(28).jpg", section: "fieldwork_s1", alt: "Shanghai neighborhood" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(3).jpg", section: "fieldwork_s2", alt: "Shanghai community" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(12).jpg", section: "fieldwork_b1", alt: "Shanghai fieldwork" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(14).jpg", section: "fieldwork_b2", alt: "Shanghai fieldwork" },
  { path: "Fieldwork in Shanghai 2013 - 2015/Fieldwork in Shanghai 2013 - 2015(16).jpg", section: "fieldwork_b3", alt: "Shanghai fieldwork" },

  // SLIC mosaic additions
  { path: "SLIC/SLIC FORMATIONS 5.JPG", section: "slic_main", alt: "SLIC team" },
  { path: "SLIC/SLICx 2025 at Sustainability Expo (SX) at Queen Sirikit Convention Center.jpg", section: "slic_s1", alt: "Sustainability Expo" },
  { path: "SLIC/Metaverse classroom.jpg", section: "slic_s2", alt: "Metaverse classroom" },
  { path: "Lecture photos/2022-04-18 16.03.33.jpg", section: "slic_b1", alt: "Workshop facilitation" },
  { path: "SLIC/SLIC x depa collaboration.JPG", section: "slic_b2", alt: "depa collaboration" },

  // Novel covers
  { path: "Designated Survivor Novel/ChatGPT Image Feb 20, 2026, 02_41_56 PM.png", section: "novel_1", alt: "Designated Survivor cover" },
  { path: "Designated Survivor Novel/ChatGPT Image Feb 21, 2026, 12_32_11 PM.png", section: "novel_2", alt: "Designated Survivor scene" },
  { path: "Designated Survivor Novel/ChatGPT Image Feb 22, 2026, 02_06_32 AM.png", section: "novel_3", alt: "Designated Survivor scene" },
  { path: "Designated Survivor Novel/ChatGPT Image Feb 20, 2026, 02_42_59 PM.png", section: "novel_4", alt: "Designated Survivor scene" },

  // Workshop photos (NON-conventional)
  { path: "Lecture photos/2022-04-18 16.05.09-1.jpg", section: "workshop_1", alt: "Workshop" },
  { path: "Lecture photos/426F403A-0A70-49F6-9311-D367B6508D22.jpeg", section: "workshop_2", alt: "Workshop" },
  { path: "Lecture photos/IMG_0206  (52).JPG", section: "workshop_3", alt: "Workshop" },
  { path: "Awards photos/JSCF2025-2529.jpg", section: "workshop_4", alt: "International forum" },

  // Life stages (NON-ordinary)
  { path: "Commencement photos/Non1.jpg", section: "life_1", alt: "Young Non" },
  { path: "Commencement photos/2021-05-26 19.30.50.jpg", section: "life_2", alt: "Harvard graduation" },
  { path: "Commencement photos/2023-05-17 14.18.57.jpg", section: "life_3", alt: "Oxford" },
  { path: "Portrait photos/Profile pictures.jpg", section: "life_4", alt: "Professional" },
  { path: "Portrait photos/IMG_7461.JPG", section: "life_5", alt: "Recent" }
];

/* ── RESEARCH PUBLICATIONS ── */

const PUBLICATIONS = [
  {
    thread: 1,
    titleKey: "pub1",
    url: "https://www.researchgate.net/profile/Non-Arkaraprasertkul"
  },
  {
    thread: 1,
    titleKey: "pub2",
    url: "https://www.researchgate.net/profile/Non-Arkaraprasertkul"
  },
  {
    thread: 1,
    titleKey: "pub3",
    url: "https://doi.org/10.1080/1683478X.2016.1158227"
  },
  {
    thread: 2,
    titleKey: "pub4",
    url: "https://doi.org/10.1080/13574809.2016.1184564"
  },
  {
    thread: 2,
    titleKey: "pub5",
    url: "https://doi.org/10.1080/13574800801965676"
  },
  {
    thread: 2,
    titleKey: "pub6",
    url: "https://doi.org/10.1080/17549175.2010.502003"
  },
  {
    thread: 2,
    titleKey: "pub7",
    url: "https://doi.org/10.1080/13574809.2019.1601287"
  },
  {
    thread: 3,
    titleKey: "pub8",
    url: "https://doi.org/10.1080/02673037.2021.1941778"
  }
];

/* ── STEAL MY IDEA ── */

const STEAL_IDEAS = [
  {
    titleKey: "steal1Title",
    descKey: "steal1Desc",
    json: {
      name: "City Data Platform",
      version: "1.0",
      layers: ["transport", "energy", "environment", "safety", "economy"],
      dataFrequency: "real-time",
      dashboardModules: ["KPI tracker", "alert system", "citizen feedback", "resource allocation"],
      govIntegration: true,
      openData: true,
      stack: { frontend: "React + Mapbox", backend: "FastAPI", db: "PostgreSQL + TimescaleDB" }
    }
  },
  {
    titleKey: "steal2Title",
    descKey: "steal2Desc",
    json: {
      name: "Design Thinking Workshop Kit",
      duration: "2 days",
      phases: ["empathize", "define", "ideate", "prototype", "test"],
      participants: { min: 15, max: 40 },
      materials: ["persona cards", "journey maps", "voting dots", "crazy-8 sheets"],
      facilitators: 2,
      deliverable: "action-plan.pdf"
    }
  },
  {
    titleKey: "steal3Title",
    descKey: "steal3Desc",
    json: {
      name: "Gamified Classroom",
      system: "points + badges + missions",
      levels: 5,
      weeklyMissions: 3,
      leaderboard: true,
      rewards: ["certificate", "showcase slot", "mentorship hour"],
      resetCycle: "semester",
      platform: "web + mobile"
    }
  },
  {
    titleKey: "steal4Title",
    descKey: "steal4Desc",
    json: {
      name: "Urban Ethnography Toolkit",
      methods: ["participant observation", "deep interviews", "photo diary", "mental mapping"],
      fieldDuration: "6-12 months",
      analysisFramework: "grounded theory",
      outputs: ["field notes", "thematic map", "policy brief"],
      ethics: "IRB approved",
      tools: ["audio recorder", "field journal", "GIS software"]
    }
  },
  {
    titleKey: "steal5Title",
    descKey: "steal5Desc",
    json: {
      name: "Tech Noir Novel Framework",
      genre: "speculative fiction",
      structure: { acts: 3, chapters: 24 },
      themes: ["surveillance", "resilience", "identity", "power"],
      setting: "near-future megacity",
      research: ["urban studies", "political theory", "technology ethics"],
      publishTo: ["Substack serial", "PDF export", "print-on-demand"]
    }
  },
  {
    titleKey: "steal6Title",
    descKey: "steal6Desc",
    json: {
      name: "Digital Literacy Bootcamp",
      weeks: 8,
      modules: ["data thinking", "platform literacy", "AI basics", "digital ethics", "cybersecurity 101"],
      audience: "government officials",
      format: "hybrid",
      assessment: "project-based",
      certification: true,
      alumni: "ongoing mentorship network"
    }
  }
];

/* ── DOWNLOADABLE RESOURCES ── */

const DOWNLOADABLE_RESOURCES = [
  {
    titleKey: "dl1Title",
    descKey: "dl1Desc",
    file: "Downloadable resources/ASCN Report (2019) depa Thailand.pdf",
    size: "3.2 MB"
  },
  {
    titleKey: "dl2Title",
    descKey: "dl2Desc",
    file: "Downloadable resources/Smart City Thailand Hitachi Review.pdf",
    size: "820 KB"
  },
  {
    titleKey: "dl3Title",
    descKey: "dl3Desc",
    file: "Downloadable resources/theaseanmagazine.asean.org-Non Arkaraprasertkul, PhD - The ASEAN Magazine.pdf",
    size: "416 KB"
  },
  {
    titleKey: "dl4Title",
    descKey: "dl4Desc",
    file: "Downloadable resources/[US - depa] Smart City Primer.pdf",
    size: "16.8 MB"
  }
];

/* ── BUILT APPS ── */

const BUILT_APPS = [
  {
    titleKey: "app1Title",
    descKey: "app1Desc",
    typeKey: "appTypeDashboard",
    stack: ["React", "Vite", "Mapbox", "D3"],
    url: null,
    github: null
  },
  {
    titleKey: "app2Title",
    descKey: "app2Desc",
    typeKey: "appTypeBot",
    stack: ["Node.js", "Gemini AI", "LINE", "Telegram"],
    url: "https://city-reporter-bot-production.up.railway.app",
    github: "https://github.com/Nonarkara/city-reporter-bot"
  },
  {
    titleKey: "app3Title",
    descKey: "app3Desc",
    typeKey: "appTypeLanding",
    stack: ["HTML", "CSS", "JS"],
    url: null,
    github: null
  },
  {
    titleKey: "app4Title",
    descKey: "app4Desc",
    typeKey: "appTypeDirectory",
    stack: ["Node.js", "Google Trends API"],
    url: null,
    github: null
  },
  {
    titleKey: "app5Title",
    descKey: "app5Desc",
    typeKey: "appTypeHandbook",
    stack: ["HTML", "CSS", "JS"],
    url: null,
    github: null
  },
  {
    titleKey: "app6Title",
    descKey: "app6Desc",
    typeKey: "appTypePlatform",
    stack: ["React", "Vite", "Supabase", "Gemini AI"],
    url: null,
    github: null
  }
];

/* ══════════════════════════════════
   I18N
   ══════════════════════════════════ */

const I18N = {
  en: {
    heroTagline: "Designs city systems. Studies people. Writes novels. Ships code.",
    journeyAsean: "ASEAN Network",

    // NON-fiction
    s1word: "fiction",
    s1p1: "Field-tested before classroom-taught. Every chapter earned its place.",

    ch1title: "Architecture as discipline",
    ch1body: "KMITL (first-class honors) built conviction early: if an idea can\u2019t survive social reality, it\u2019s decoration. MIT sharpened the systems thinking. Oxford added philosophical rigor.",
    ch2title: "Living inside the research",
    ch2body: "Three years in Shanghai\u2019s disappearing lilong neighborhoods. Not visiting\u2009\u2014\u2009living. Families mid-eviction, a city rewriting itself overnight. Harvard PhD fieldwork that produced frameworks, not just papers.",
    ch3title: "Ethnography \u2192 published frameworks",
    ch3body: "Research became journals on gentrification, heritage, and modernist urbanism. Asian Anthropology, Journal of Urban Design, Journal of Urbanism. Theory connected to city practice.",
    ch4title: "Policy \u2192 operating systems",
    ch4body: "At depa and SLIC, strategy left the slide deck. Governance workflows, pilot design, measurable outcomes across 77 Thai provinces. 120+ tech projects delivered. 5,000+ officials retrained.",
    ch5title: "Crisis operations, ASEAN-wide",
    ch5body: "Real flood conditions in Nakhon Si Thammarat. Design-thinking toolkits tested against live incident load. The method proved operational\u2009\u2014\u2009not theoretical.",

    // NON-stop
    s2word: "stop",
    s2p1: "Non builds city systems that actually work. \u201CSmart city\u201D leaves the conference slides and hits the street. Method: start from pain points, not trend decks. Design incentives before interfaces. Scale only what survives contact with reality.",

    scthcdpTitle: "Thailand Smart City Data Platform (SCTHCDP)",
    scthcdpDesc: "Built to end waiting. Fragmented city noise becomes assignable operations with measurable outcomes.",
    scthcdpF1: "Unified ingestion from LINE, IoT, municipal data, and field reports.",
    scthcdpF2: "AI-native triage that classifies incidents and routes ownership quickly.",
    scthcdpF3: "No-code workflow logic for rapid piloting and policy iteration.",
    scthcdpF4: "Local-model option for private deployment without subscription lock-in.",
    scthcdpCaption: "SCTHCDP command view \u2014 city issue matrix and map-based incident intelligence.",

    cscoKicker: "Case study",
    cscoTitle: "ASEAN CSCO: designed during the flood, not after it.",
    cscoDesc: "Workshop executed under real disruption in Nakhon Si Thammarat. Design thinking meets crisis response meets operating prototypes. Results: faster response, expanded citizen usage, warning windows that changed field decisions.",
    cscoM1: "active users",
    cscoM2: "average response time",
    cscoM3: "warning window",
    cscoM4: "issues resolved",

    // NON-trivial (Research)
    s6word: "trivial",
    s6intro: "Three active threads feeding strategy, product, and institutional design. Not a CV dump.",

    r1title: "Shanghai gentrification + heritage preservation",
    r1desc: "Communities negotiating displacement, memory, and new identities under rapid modernization. Fieldwork-driven. Policy-facing.",
    r2title: "Japan + modernist urbanism under pressure",
    r2desc: "How high-design intent survives constraints from mobility, behavior, and governance. Tokyo retrofits to planning debates.",
    r3title: "Research \u2192 operating protocol",
    r3desc: "Theory converted into service architecture: dashboards, crisis protocols, inter-agency coordination running in real municipal conditions.",

    pub1: "Making Sense of Heritage and Space in Shanghai (2023)",
    pub2: "Urban Regeneration in China: Heritage, Preservation and Growth (2019)",
    pub3: "Gentrification from Within (Asian Anthropology, 2016)",
    pub4: "Journal of Urban Design (2016) \u00B7 Social Poetics of Urban Design",
    pub5: "Journal of Urban Design (2008) \u00B7 Toward Modernist Urban Design",
    pub6: "Journal of Urbanism (2010) \u00B7 Crypto-Urbanism: Retrofitting Tokyo",
    pub7: "Infrastructural Urbanism in the Age of Climate Change (2019)",
    pub8: "Hitachi Review (2021) \u00B7 Smart City Initiatives in Thailand",

    // NON-sense?
    s3word: "sense?",
    s3p1: "At night: speculative fiction. Designated Survivor: Bangkok\u2009\u2014\u2009a political thriller where the city\u2019s smart systems become the battleground. Best way to stress-test infrastructure? Blow it up on paper first.",
    s3p2: "Also maintains nonharvard\u2009\u2014\u2009a long-running blog on cities, culture, and the occasional existential crisis. Strategy brain meets narrative craft.",
    s3link1: "Read the novel on Substack",
    s3link2: "Read the blog",

    // NON-proprietary
    s4word: "proprietary",
    s4intro: "Real frameworks. Copy the JSON. Fork the concept. Build something better. No permission needed.",
    steal1Title: "City Data Platform",
    steal1Desc: "Full-stack city dashboard with real-time data layers and citizen feedback loops.",
    steal2Title: "Design Thinking Workshop Kit",
    steal2Desc: "Two-day workshop with five phases, materials, and a deliverable action plan.",
    steal3Title: "Gamified Classroom",
    steal3Desc: "Points-badges-missions system for engaging students or government trainees.",
    steal4Title: "Urban Ethnography Toolkit",
    steal4Desc: "Fieldwork methodology: from participant observation to policy brief.",
    steal5Title: "Tech Noir Novel Framework",
    steal5Desc: "Three-act structure for speculative fiction set in near-future megacities.",
    steal6Title: "Digital Literacy Bootcamp",
    steal6Desc: "8-week hybrid curriculum for government digital upskilling.",
    stealCopy: "Copy",
    stealCopied: "Copied!",

    // NON-conventional
    conventionalWord: "conventional",
    conventionalIntro: "Design thinking for people who don\u2019t expect it. Bankers to nurses, government officials to school principals. Abstract methods translated into actionable operations.",
    audBanks: "Banks",
    audGov: "Government",
    audPublic: "Public health",
    audBankrupt: "Bankruptcy courts",
    audSchools: "Schools",
    audEngineers: "Engineers",
    audNurses: "Nurses",
    audLawyers: "Lawyers",
    audDigital: "Digital agencies",
    tonklaKicker: "Case study",
    tonklaTitle: "Tonkla School: Design thinking for K\u201312 educators",
    tonklaDesc: "A workshop series with Tonkla School that trained teachers to apply design thinking in classroom curriculum design, producing measurable improvement in student engagement and project-based learning outcomes.",
    tonklaQuote: "\u201CWe stopped teaching subjects and started solving problems.\u201D \u2014 Tonkla teacher",

    // NON-theoretical
    theoreticalWord: "theoretical",
    theoreticalIntro: "Not on slides. In production. Apps, bots, and dashboards I built and shipped.",
    app1Title: "Tech Monitor",
    app1Desc: "Real-time urban operations dashboard. Map layers, market data, conflict tracking, climate signals, intelligence briefings\u2009\u2014\u2009one operating picture.",
    app2Title: "City Reporter AI Bot",
    app2Desc: "Civic engagement on LINE + Telegram. Citizens report problems with photos; AI extracts location, classifies severity, routes to responders.",
    app3Title: "ASEAN Smart Cities Network",
    app3Desc: "Cinematic landing for ASCN. City pulse dashboards, public metrics, people profiles, source materials\u2009\u2014\u2009one scroll.",
    app4Title: "Smart City Tech Hunt",
    app4Desc: "160+ smart city solutions across seven domains. Live Google Trends pulse, partner logos, curated resource library.",
    app5Title: "Citizen-First City Handbook",
    app5Desc: "ASEAN CSCO playbook forged under real flood pressure. Stories and tools from city practitioners in Nakhon Si Thammarat.",
    app6Title: "Air DnD",
    app6Desc: "Bangkok after-dark discovery. Live listings, resilient fallback data, polished city-first experience.",
    appTypeDashboard: "Dashboard",
    appTypeBot: "AI Bot",
    appTypeLanding: "Landing page",
    appTypeDirectory: "Directory",
    appTypeHandbook: "Handbook",
    appTypePlatform: "Platform",
    appLive: "Live",
    appGitHub: "GitHub",

    // NON-restricted
    restrictedWord: "restricted",
    restrictedIntro: "Reports I authored on smart cities, digital government, and ASEAN urban strategy. Take them.",
    dl1Title: "ASCN Smart City Report 2019",
    dl1Desc: "ASCN status report, co-authored with depa. Frameworks, KPIs, case studies across 26 pilot cities.",
    dl2Title: "Smart City Thailand (Hitachi Review)",
    dl2Desc: "Peer-reviewed. Data platform architecture and provincial deployment strategy.",
    dl3Title: "The ASEAN Magazine Interview",
    dl3Desc: "Feature interview on ASEAN digital governance, smart city policy, cross-border collaboration.",
    dl4Title: "Smart City Primer (US\u2013depa)",
    dl4Desc: "Concepts, technology stacks, implementation frameworks for Thai municipal leaders.",
    dlDownload: "Download",

    // NON-ordinary
    ordinaryWord: "ordinary",
    eduPhD: "PhD, Inner Asian & Altaic Studies (Anthropology focus)",
    eduALM: "ALM, Liberal Arts (Government)",
    eduMDesS: "MDesS, Design Studies",
    eduMIT: "MArch, Architecture",
    eduKMITL: "B.Arch, Architecture (First-Class Honors)",

    // Proof
    proofWord: "negotiable",
    proofIntro: "Command-room whiteboards to international stages. Execution leaves traces.",

    // NON-hiding
    s5word: "hiding",
    s5intro: "Hard mission? Talk directly.",
    contactDirect: "Direct",
    contactVerify: "Verify",

    // Footer
    footer: "\u00A9 Non Arkaraprasertkul \u00B7 \u0E19\u0E19 \u0E2D\u0E31\u0E04\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E2A\u0E23\u0E34\u0E10\u0E01\u0E38\u0E25 \u00B7 \u519C\u00B7\u963F\u5361\u62C9\u5E15\u8428\u7279\u5E93",
    footerNote: "No templates were harmed. Assembled by hand.",
    footerCV: "CV (English)",
    footerCVThai: "CV (Thai)",
    bkkTime: "Bangkok"
  },

  th: {
    heroTagline: "\u0E19\u0E31\u0E01\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E19\u0E31\u0E01\u0E21\u0E32\u0E19\u0E38\u0E29\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32 \u0E19\u0E31\u0E01\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E34\u0E22\u0E32\u0E22",
    journeyAsean: "\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E2D\u0E32\u0E40\u0E0B\u0E35\u0E22\u0E19",

    s1word: "fiction",
    s1p1: "\u0E17\u0E38\u0E01\u0E1A\u0E17\u0E16\u0E39\u0E01\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E43\u0E19\u0E2A\u0E19\u0E32\u0E21\u0E01\u0E48\u0E2D\u0E19\u0E16\u0E39\u0E01\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19",

    ch1title: "\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E04\u0E37\u0E2D\u0E23\u0E32\u0E01\u0E10\u0E32\u0E19",
    ch1body: "\u0E2A\u0E08\u0E25. (\u0E40\u0E01\u0E35\u0E22\u0E23\u0E15\u0E34\u0E19\u0E34\u0E22\u0E21\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2B\u0E19\u0E36\u0E48\u0E07) \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E44\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E16\u0E49\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E23\u0E34\u0E07\u0E17\u0E32\u0E07\u0E2A\u0E31\u0E07\u0E04\u0E21 \u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 MIT \u0E41\u0E25\u0E30 Oxford",
    ch2title: "\u0E43\u0E0A\u0E49\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E25\u0E32\u0E07\u0E07\u0E32\u0E19\u0E27\u0E34\u0E08\u0E31\u0E22",
    ch2body: "\u0E2A\u0E32\u0E21\u0E1B\u0E35\u0E43\u0E19\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E25\u0E35\u0E48\u0E2B\u0E25\u0E07\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2B\u0E32\u0E22\u0E44\u0E1B\u0E02\u0E2D\u0E07\u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E04\u0E48\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u2009\u2014\u2009\u0E41\u0E15\u0E48\u0E2D\u0E32\u0E28\u0E31\u0E22\u0E2D\u0E22\u0E39\u0E48 \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E27\u0E17\u0E35\u0E48\u0E19\u0E31\u0E01\u0E1C\u0E31\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E27\u0E25\u0E32\u0E1F\u0E31\u0E07 \u0E07\u0E32\u0E19\u0E27\u0E34\u0E08\u0E31\u0E22\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E40\u0E2D\u0E01 Harvard",
    ch3title: "\u0E08\u0E32\u0E01\u0E0A\u0E32\u0E15\u0E34\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E27\u0E23\u0E23\u0E13\u0E32\u0E2A\u0E39\u0E48\u0E01\u0E23\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14",
    ch3body: "\u0E07\u0E32\u0E19\u0E27\u0E34\u0E08\u0E31\u0E22\u0E41\u0E1B\u0E25\u0E40\u0E1B\u0E47\u0E19\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E27\u0E32\u0E23\u0E2A\u0E32\u0E23\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A gentrification \u0E21\u0E23\u0E14\u0E01\u0E17\u0E32\u0E07\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2A\u0E21\u0E31\u0E22\u0E43\u0E2B\u0E21\u0E48",
    ch4title: "\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E41\u0E1B\u0E25\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23",
    ch4body: "\u0E17\u0E35\u0E48 depa \u0E41\u0E25\u0E30 SLIC \u0E41\u0E1B\u0E25\u0E22\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E17\u0E31\u0E48\u0E27 77 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14 \u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 120+ \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u0E2D\u0E1A\u0E23\u0E21\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48 5,000+ \u0E04\u0E19",
    ch5title: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E27\u0E34\u0E01\u0E24\u0E15\u0E2D\u0E32\u0E40\u0E0B\u0E35\u0E22\u0E19",
    ch5body: "\u0E43\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E19\u0E49\u0E33\u0E17\u0E48\u0E27\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E17\u0E35\u0E21\u0E07\u0E32\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D design thinking \u0E01\u0E31\u0E1A\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07 \u0E1E\u0E34\u0E2A\u0E39\u0E08\u0E19\u0E4C\u0E27\u0E48\u0E32\u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E27\u0E34\u0E01\u0E24\u0E15 \u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A",

    s2word: "stop",
    s2p1: "\u0E19\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E08\u0E23\u0E34\u0E07 \u0E17\u0E35\u0E48 depa \u0E41\u0E25\u0E30 SLIC \u0E41\u0E1B\u0E25\u0E04\u0E33\u0E27\u0E48\u0E32 \u201C\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30\u201D \u0E08\u0E32\u0E01\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E16\u0E19\u0E19 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E40\u0E17\u0E23\u0E19\u0E14\u0E4C \u0E17\u0E14\u0E25\u0E2D\u0E07\u0E40\u0E23\u0E47\u0E27 \u0E02\u0E22\u0E32\u0E22\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E08\u0E23\u0E34\u0E07",

    scthcdpTitle: "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 (SCTHCDP)",
    scthcdpDesc: "SCTHCDP \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E38\u0E15\u0E34\u0E01\u0E32\u0E23\u0E23\u0E2D \u0E41\u0E1B\u0E25\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E01\u0E23\u0E30\u0E08\u0E31\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08\u0E17\u0E35\u0E48\u0E27\u0E31\u0E14\u0E1C\u0E25\u0E44\u0E14\u0E49",
    scthcdpF1: "\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01 LINE, IoT, \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E17\u0E28\u0E1A\u0E32\u0E25 \u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E2A\u0E19\u0E32\u0E21",
    scthcdpF2: "AI \u0E04\u0E31\u0E14\u0E41\u0E22\u0E01\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
    scthcdpF3: "No-code workflow \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E40\u0E23\u0E47\u0E27",
    scthcdpF4: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 Local model \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1E\u0E36\u0E48\u0E07\u0E1E\u0E32 subscription",
    scthcdpCaption: "SCTHCDP \u2014 \u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E41\u0E25\u0E30\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C",

    cscoKicker: "\u0E01\u0E23\u0E13\u0E35\u0E28\u0E36\u0E01\u0E29\u0E32",
    cscoTitle: "ASEAN CSCO: \u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E19\u0E49\u0E33\u0E17\u0E48\u0E27\u0E21 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E2B\u0E25\u0E31\u0E07\u0E19\u0E49\u0E33\u0E17\u0E48\u0E27\u0E21",
    cscoDesc: "\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E0A\u0E47\u0E2D\u0E1B\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E43\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E27\u0E34\u0E01\u0E24\u0E15\u0E08\u0E23\u0E34\u0E07 \u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A \u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E32\u0E23\u0E15\u0E2D\u0E1A\u0E2A\u0E19\u0E2D\u0E07\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E02\u0E22\u0E32\u0E22\u0E15\u0E31\u0E27 \u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E20\u0E31\u0E22\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08\u0E20\u0E32\u0E04\u0E2A\u0E19\u0E32\u0E21",
    cscoM1: "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    cscoM2: "\u0E40\u0E27\u0E25\u0E32\u0E15\u0E2D\u0E1A\u0E2A\u0E19\u0E2D\u0E07\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22",
    cscoM3: "\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E20\u0E31\u0E22",
    cscoM4: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E25\u0E49\u0E27",

    s6word: "trivial",
    s6intro: "\u0E2A\u0E32\u0E21\u0E41\u0E19\u0E27\u0E01\u0E32\u0E23\u0E27\u0E34\u0E08\u0E31\u0E22\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19\u0E22\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07",
    r1title: "\u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49: gentrification + \u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E21\u0E23\u0E14\u0E01",
    r1desc: "\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E40\u0E08\u0E23\u0E08\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E49\u0E32\u0E22\u0E16\u0E34\u0E48\u0E19 \u0E04\u0E27\u0E32\u0E21\u0E17\u0E23\u0E07\u0E08\u0E33 \u0E41\u0E25\u0E30\u0E2D\u0E31\u0E15\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E43\u0E2B\u0E21\u0E48\u0E20\u0E32\u0E22\u0E43\u0E15\u0E49\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27",
    r2title: "\u0E0D\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E19 + \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2A\u0E21\u0E31\u0E22\u0E43\u0E2B\u0E21\u0E48",
    r2desc: "\u0E2D\u0E38\u0E14\u0E21\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E2A\u0E39\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E2D\u0E14\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E20\u0E32\u0E22\u0E43\u0E15\u0E49\u0E02\u0E49\u0E2D\u0E08\u0E33\u0E01\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21 \u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E22\u0E49\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E18\u0E23\u0E23\u0E21\u0E32\u0E20\u0E34\u0E1A\u0E32\u0E25",
    r3title: "\u0E08\u0E32\u0E01\u0E07\u0E32\u0E19\u0E27\u0E34\u0E08\u0E31\u0E22\u0E2A\u0E39\u0E48\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E02\u0E35\u0E22\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23",
    r3desc: "\u0E41\u0E1B\u0E25\u0E17\u0E24\u0E29\u0E0E\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23: \u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14 \u0E42\u0E1B\u0E23\u0E42\u0E15\u0E04\u0E2D\u0E25\u0E27\u0E34\u0E01\u0E24\u0E15 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E07\u0E32\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",

    pub1: "Making Sense of Heritage and Space in Shanghai (2023)",
    pub2: "Urban Regeneration in China (2019)",
    pub3: "Gentrification from Within (Asian Anthropology, 2016)",
    pub4: "Journal of Urban Design (2016)",
    pub5: "Journal of Urban Design (2008)",
    pub6: "Journal of Urbanism (2010)",
    pub7: "Infrastructural Urbanism (2019)",
    pub8: "Hitachi Review (2021)",

    s3word: "sense?",
    s3p1: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19\u0E40\u0E02\u0E32\u0E40\u0E02\u0E35\u0E22\u0E19\u0E19\u0E34\u0E22\u0E32\u0E22\u0E41\u0E19\u0E27\u0E04\u0E32\u0E14\u0E40\u0E14\u0E32 Designated Survivor: Bangkok\u2009\u2014\u2009\u0E19\u0E34\u0E22\u0E32\u0E22\u0E01\u0E32\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30\u0E02\u0E2D\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E19\u0E32\u0E21\u0E23\u0E1A",
    s3p2: "\u0E40\u0E02\u0E32\u0E22\u0E31\u0E07\u0E14\u0E39\u0E41\u0E25\u0E1A\u0E25\u0E47\u0E2D\u0E01 nonharvard \u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E01\u0E24\u0E15\u0E2D\u0E31\u0E15\u0E16\u0E34\u0E20\u0E32\u0E27\u0E30\u0E22\u0E32\u0E21\u0E04\u0E48\u0E33\u0E04\u0E37\u0E19 \u0E07\u0E32\u0E19\u0E40\u0E02\u0E35\u0E22\u0E19\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E21\u0E2D\u0E07\u0E22\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E40\u0E08\u0E2D\u0E01\u0E31\u0E1A\u0E28\u0E34\u0E25\u0E1B\u0E30\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07",
    s3link1: "\u0E2D\u0E48\u0E32\u0E19\u0E19\u0E34\u0E22\u0E32\u0E22\u0E1A\u0E19 Substack",
    s3link2: "\u0E2D\u0E48\u0E32\u0E19\u0E1A\u0E25\u0E47\u0E2D\u0E01",

    s4word: "proprietary",
    s4intro: "\u0E40\u0E1F\u0E23\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E08\u0E23\u0E34\u0E07\u0E17\u0E35\u0E48\u0E1C\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E01\u0E47\u0E2D\u0E1B JSON \u0E44\u0E1B\u0E43\u0E0A\u0E49 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E30\u0E44\u0E23\u0E17\u0E35\u0E48\u0E14\u0E35\u0E01\u0E27\u0E48\u0E32 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E2D\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15",
    steal1Title: "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E21\u0E37\u0E2D\u0E07",
    steal1Desc: "\u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C\u0E41\u0E25\u0E30\u0E1F\u0E35\u0E14\u0E41\u0E1A\u0E47\u0E01\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",
    steal2Title: "\u0E0A\u0E38\u0E14\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D Design Thinking",
    steal2Desc: "\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E0A\u0E47\u0E2D\u0E1B 2 \u0E27\u0E31\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 \u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
    steal3Title: "\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E1A\u0E1A\u0E40\u0E01\u0E21\u0E34\u0E1F\u0E32\u0E22",
    steal3Desc: "\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E15\u0E49\u0E21-\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D-\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E23\u0E07\u0E08\u0E39\u0E07\u0E43\u0E08\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19",
    steal4Title: "\u0E0A\u0E38\u0E14\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E32\u0E15\u0E34\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E27\u0E23\u0E23\u0E13\u0E32\u0E40\u0E21\u0E37\u0E2D\u0E07",
    steal4Desc: "\u0E27\u0E34\u0E18\u0E35\u0E17\u0E33\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E2A\u0E19\u0E32\u0E21\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E2A\u0E39\u0E48\u0E2A\u0E23\u0E38\u0E1B\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22",
    steal5Title: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E19\u0E34\u0E22\u0E32\u0E22 Tech Noir",
    steal5Desc: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E19\u0E34\u0E22\u0E32\u0E22\u0E41\u0E19\u0E27\u0E04\u0E32\u0E14\u0E40\u0E14\u0E32\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15\u0E2D\u0E31\u0E19\u0E43\u0E01\u0E25\u0E49",
    steal6Title: "\u0E1A\u0E39\u0E17\u0E41\u0E04\u0E21\u0E1B\u0E4C\u0E23\u0E39\u0E49\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25",
    steal6Desc: "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 8 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23",
    stealCopy: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01",
    stealCopied: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27!",

    // NON-conventional
    conventionalWord: "conventional",
    conventionalIntro: "\u0E19\u0E33 design thinking \u0E44\u0E1B\u0E2A\u0E39\u0E48\u0E04\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E04\u0E32\u0E14\u0E04\u0E34\u0E14 \u0E08\u0E32\u0E01\u0E19\u0E32\u0E22\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E16\u0E36\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25 \u0E08\u0E32\u0E01\u0E02\u0E49\u0E32\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23\u0E16\u0E36\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E19\u0E19\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E2D\u0E33\u0E19\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E0A\u0E47\u0E2D\u0E1B\u0E40\u0E0A\u0E34\u0E07\u0E22\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    audBanks: "\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23",
    audGov: "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E23\u0E31\u0E10",
    audPublic: "\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E2A\u0E38\u0E02",
    audBankrupt: "\u0E28\u0E32\u0E25\u0E25\u0E49\u0E21\u0E25\u0E30\u0E25\u0E32\u0E22",
    audSchools: "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19",
    audEngineers: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23",
    audNurses: "\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25",
    audLawyers: "\u0E17\u0E19\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21",
    audDigital: "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25",
    tonklaKicker: "\u0E01\u0E23\u0E13\u0E35\u0E28\u0E36\u0E01\u0E29\u0E32",
    tonklaTitle: "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E19\u0E01\u0E25\u0E49\u0E32: Design thinking \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E23\u0E39 K\u201312",
    tonklaDesc: "\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E0A\u0E47\u0E2D\u0E1B\u0E17\u0E35\u0E48\u0E1D\u0E36\u0E01\u0E04\u0E23\u0E39\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 design thinking \u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E27\u0E31\u0E14\u0E44\u0E14\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E1A\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C",
    tonklaQuote: "\u201C\u0E40\u0E23\u0E32\u0E40\u0E25\u0E34\u0E01\u0E2A\u0E2D\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u201D \u2014 \u0E04\u0E23\u0E39\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E19\u0E01\u0E25\u0E49\u0E32",

    // NON-theoretical
    theoreticalWord: "theoretical",
    theoreticalIntro: "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E04\u0E48\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E1A\u0E19\u0E2A\u0E44\u0E25\u0E14\u0E4C \u0E41\u0E15\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E2D\u0E1B \u0E1A\u0E2D\u0E17 \u0E41\u0E25\u0E30\u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E08\u0E23\u0E34\u0E07 \u0E1A\u0E32\u0E07\u0E15\u0E31\u0E27\u0E23\u0E31\u0E19\u0E43\u0E19 production \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E08\u0E23\u0E34\u0E07",
    app1Title: "Tech Monitor",
    app1Desc: "\u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C \u0E23\u0E27\u0E21\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E25\u0E32\u0E14 \u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E02\u0E31\u0E14\u0E41\u0E22\u0E49\u0E07 \u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E20\u0E39\u0E21\u0E34\u0E2D\u0E32\u0E01\u0E32\u0E28 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E38\u0E1B\u0E02\u0E48\u0E32\u0E27\u0E01\u0E23\u0E2D\u0E07",
    app2Title: "City Reporter AI Bot",
    app2Desc: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E40\u0E21\u0E37\u0E2D\u0E07 (LINE + Telegram) \u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E20\u0E32\u0E1E AI \u0E14\u0E36\u0E07\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \u0E08\u0E31\u0E14\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48 \u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A",
    app3Title: "ASEAN Smart Cities Network",
    app3Desc: "\u0E41\u0E25\u0E19\u0E14\u0E34\u0E49\u0E07\u0E40\u0E1E\u0E08\u0E41\u0E1A\u0E1A\u0E0B\u0E35\u0E40\u0E19\u0E21\u0E32\u0E15\u0E34\u0E01\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A ASCN: \u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30 \u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E1A\u0E38\u0E04\u0E04\u0E25 \u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
    app4Title: "Smart City Tech Hunt",
    app4Desc: "\u0E44\u0E14\u0E40\u0E23\u0E01\u0E17\u0E2D\u0E23\u0E35 160+ \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 7 \u0E42\u0E14\u0E40\u0E21\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21 Google Trends \u0E41\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C",
    app5Title: "Citizen-First City Handbook",
    app5Desc: "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D ASEAN CSCO \u0E41\u0E1A\u0E1A\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E41\u0E2D\u0E04\u0E17\u0E35\u0E1F \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E36\u0E49\u0E19\u0E43\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E19\u0E49\u0E33\u0E17\u0E48\u0E27\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A",
    app6Title: "Air DnD",
    app6Desc: "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E22\u0E32\u0E21\u0E04\u0E48\u0E33\u0E04\u0E37\u0E19 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E14\u0E41\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E23\u0E2D\u0E07",
    appTypeDashboard: "\u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14",
    appTypeBot: "AI Bot",
    appTypeLanding: "\u0E41\u0E25\u0E19\u0E14\u0E34\u0E49\u0E07\u0E40\u0E1E\u0E08",
    appTypeDirectory: "\u0E44\u0E14\u0E40\u0E23\u0E01\u0E17\u0E2D\u0E23\u0E35",
    appTypeHandbook: "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D",
    appTypePlatform: "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21",
    appLive: "\u0E40\u0E02\u0E49\u0E32\u0E0A\u0E21",
    appGitHub: "GitHub",

    // NON-restricted
    restrictedWord: "restricted",
    restrictedIntro: "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E48\u0E27\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 \u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25 \u0E41\u0E25\u0E30\u0E22\u0E38\u0E17\u0E18\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E32\u0E40\u0E0B\u0E35\u0E22\u0E19 \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
    dl1Title: "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 ASCN Smart City 2019",
    dl1Desc: "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30\u0E2D\u0E32\u0E40\u0E0B\u0E35\u0E22\u0E19 \u0E23\u0E48\u0E27\u0E21\u0E40\u0E02\u0E35\u0E22\u0E19\u0E01\u0E31\u0E1A depa",
    dl2Title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30\u0E44\u0E17\u0E22 (Hitachi Review)",
    dl2Desc: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14",
    dl3Title: "\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E29\u0E13\u0E4C The ASEAN Magazine",
    dl3Desc: "\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E29\u0E13\u0E4C\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1A\u0E17\u0E1A\u0E32\u0E17\u0E43\u0E19\u0E18\u0E23\u0E23\u0E21\u0E32\u0E20\u0E34\u0E1A\u0E32\u0E25\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E2D\u0E32\u0E40\u0E0B\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30",
    dl4Title: "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Smart City (US\u2013depa)",
    dl4Desc: "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E09\u0E1A\u0E31\u0E1A\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E44\u0E17\u0E22",
    dlDownload: "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14",

    // NON-ordinary
    ordinaryWord: "ordinary",
    eduPhD: "\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E40\u0E2D\u0E01 \u0E2D\u0E31\u0E25\u0E44\u0E15\u0E2D\u0E34\u0E04\u0E28\u0E36\u0E01\u0E29\u0E32 (\u0E40\u0E19\u0E49\u0E19\u0E21\u0E32\u0E19\u0E38\u0E29\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32)",
    eduALM: "ALM, \u0E28\u0E34\u0E25\u0E1B\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C (\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C)",
    eduMDesS: "MDesS, \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E28\u0E36\u0E01\u0E29\u0E32",
    eduMIT: "MArch, \u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C",
    eduKMITL: "B.Arch, \u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C (\u0E40\u0E01\u0E35\u0E22\u0E23\u0E15\u0E34\u0E19\u0E34\u0E22\u0E21\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2B\u0E19\u0E36\u0E48\u0E07)",

    proofWord: "negotiable",
    proofIntro: "\u0E08\u0E32\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E2A\u0E39\u0E48\u0E40\u0E27\u0E17\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34 \u0E1C\u0E25\u0E07\u0E32\u0E19\u0E17\u0E34\u0E49\u0E07\u0E23\u0E48\u0E2D\u0E07\u0E23\u0E2D\u0E22\u0E43\u0E19\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22 \u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D",

    s5word: "hiding",
    s5intro: "\u0E16\u0E49\u0E32\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08\u0E22\u0E32\u0E01 \u0E04\u0E38\u0E22\u0E15\u0E23\u0E07\u0E46",
    contactDirect: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07",
    contactVerify: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",

    footer: "\u00A9 Non Arkaraprasertkul \u00B7 \u0E19\u0E19 \u0E2D\u0E31\u0E04\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E2A\u0E23\u0E34\u0E10\u0E01\u0E38\u0E25 \u00B7 \u519C\u00B7\u963F\u5361\u62C9\u5E15\u8428\u7279\u5E93",
    footerNote: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E17\u0E21\u0E40\u0E1E\u0E25\u0E15\u0E43\u0E14\u0E16\u0E39\u0E01\u0E17\u0E33\u0E23\u0E49\u0E32\u0E22 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E21\u0E37\u0E2D",
    footerCV: "CV (\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29)",
    footerCVThai: "CV (\u0E44\u0E17\u0E22)",
    bkkTime: "\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E"
  },

  zh: {
    heroTagline: "\u57CE\u5E02\u7CFB\u7EDF\u8BBE\u8BA1\u5E08\u3002\u4EBA\u7C7B\u5B66\u5BB6\u3002\u5C0F\u8BF4\u5BB6\u3002",
    journeyAsean: "\u4E1C\u76DF\u7F51\u7EDC",

    s1word: "fiction",
    s1p1: "\u6BCF\u4E00\u7AE0\u90FD\u5148\u5728\u7530\u91CE\u4E2D\u68C0\u9A8C\uFF0C\u7136\u540E\u624D\u5728\u8BFE\u5802\u4E0A\u4F20\u6388\u3002",

    ch1title: "\u5EFA\u7B51\u4F5C\u4E3A\u57FA\u7840",
    ch1body: "KMITL\u5EFA\u7B51\u5B66\u58EB\uFF08\u4E00\u7B49\u8363\u8A89\uFF09\u5EFA\u7ACB\u4E86\u65E9\u671F\u4FE1\u5FF5\uFF1A\u4F18\u96C5\u7684\u60F3\u6CD5\u5982\u679C\u4E0D\u80FD\u7ECF\u53D7\u793E\u4F1A\u73B0\u5B9E\u7684\u68C0\u9A8C\u5C31\u6BEB\u65E0\u7528\u5904\u3002\u7136\u540EMIT\u548C\u725B\u6D25\u78E8\u7EC3\u4E86\u601D\u7EF4\u3002",
    ch2title: "\u4F4F\u5728\u7814\u7A76\u73B0\u573A",
    ch2body: "\u4E09\u5E74\u65F6\u95F4\u4F4F\u5728\u4E0A\u6D77\u6B63\u5728\u6D88\u5931\u7684\u5F04\u5802\u793E\u533A\u3002\u4E0D\u662F\u53C2\u89C2\u2009\u2014\u2009\u800C\u662F\u5C45\u4F4F\u3002\u8BB0\u5F55\u90A3\u4E9B\u89C4\u5212\u8005\u65E0\u6687\u503E\u542C\u7684\u6545\u4E8B\u3002\u54C8\u4F5B\u535A\u58EB\u7814\u7A76\u4EA7\u751F\u4E86\u6846\u67B6\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u8BBA\u6587\u3002",
    ch3title: "\u4ECE\u7530\u91CE\u5230\u53D1\u8868",
    ch3body: "\u7814\u7A76\u8F6C\u5316\u4E3A\u5173\u4E8E\u58EB\u7EF5\u5316\u3001\u9057\u4EA7\u4FDD\u62A4\u548C\u73B0\u4EE3\u4E3B\u4E49\u57CE\u5E02\u8BBE\u8BA1\u7684\u5B66\u672F\u671F\u520A\u8BBA\u6587\uFF0C\u5C06\u793E\u4F1A\u7406\u8BBA\u4E0E\u57CE\u5E02\u5B9E\u8DF5\u8054\u7CFB\u8D77\u6765\u3002",
    ch4title: "\u653F\u7B56\u8F6C\u5316\u4E3A\u8FD0\u884C\u7CFB\u7EDF",
    ch4body: "\u5728depa\u548CSLIC\uFF0C\u6218\u7565\u4ECE\u6F14\u793A\u8BED\u8A00\u8F6C\u53D8\u4E3A\u6CBB\u7406\u5DE5\u4F5C\u6D41\uFF0C\u8986\u76D6\u6CF0\u56FD\u516877\u4E2A\u7701\u3002\u4EA4\u4ED8120+\u6280\u672F\u9879\u76EE\uFF0C\u57F9\u8BAD5000+\u5B98\u5458\u3002",
    ch5title: "\u4E1C\u76DF\u5371\u673A\u884C\u52A8",
    ch5body: "\u5728\u771F\u5B9E\u6D2A\u6C34\u6761\u4EF6\u4E0B\uFF0C\u56E2\u961F\u7528\u8BBE\u8BA1\u601D\u7EF4\u5DE5\u5177\u5305\u5E94\u5BF9\u5B9E\u9645\u4E8B\u4EF6\u3002\u65B9\u6CD5\u88AB\u8BC1\u660E\u662F\u53EF\u64CD\u4F5C\u7684\uFF0C\u800C\u4E0D\u4EC5\u662F\u7406\u8BBA\u6027\u7684\u3002",

    s2word: "stop",
    s2p1: "\u519C\u6784\u5EFA\u771F\u6B63\u80FD\u8FD0\u884C\u7684\u57CE\u5E02\u7CFB\u7EDF\u3002\u5728depa\u548CSLIC\uFF0C\u4ED6\u628A\u201C\u667A\u6167\u57CE\u5E02\u201D\u4ECE\u4F1A\u8BAE\u6F14\u793A\u8F6C\u5316\u4E3A\u8857\u5934\u73B0\u5B9E\u3002\u65B9\u6CD5\uFF1A\u4ECE\u75DB\u70B9\u51FA\u53D1\uFF0C\u4E0D\u8FFD\u6F6E\u6D41\u3002\u5148\u8BBE\u8BA1\u6FC0\u52B1\uFF0C\u518D\u8BBE\u8BA1\u754C\u9762\u3002\u5FEB\u901F\u8BD5\u70B9\uFF0C\u53EA\u653E\u5927\u7ECF\u5F97\u8D77\u68C0\u9A8C\u7684\u3002",

    scthcdpTitle: "\u6CF0\u56FD\u667A\u6167\u57CE\u5E02\u6570\u636E\u5E73\u53F0 (SCTHCDP)",
    scthcdpDesc: "SCTHCDP\u4E3A\u7ED3\u675F\u7B49\u5F85\u800C\u5EFA\u3002\u5C06\u788E\u7247\u5316\u7684\u57CE\u5E02\u4FE1\u606F\u8F6C\u5316\u4E3A\u53EF\u5206\u914D\u7684\u8FD0\u8425\u4EFB\u52A1\u3002",
    scthcdpF1: "\u4ECELINE\u3001IoT\u3001\u5E02\u653F\u6570\u636E\u548C\u73B0\u573A\u62A5\u544A\u7EDF\u4E00\u63A5\u5165\u3002",
    scthcdpF2: "AI\u539F\u751F\u5206\u7C7B\uFF0C\u81EA\u52A8\u5206\u914D\u4E8B\u4EF6\u8D23\u4EFB\u4EBA\u3002",
    scthcdpF3: "\u65E0\u4EE3\u7801\u5DE5\u4F5C\u6D41\uFF0C\u5FEB\u901F\u8BD5\u70B9\u4E0E\u7B56\u7565\u8FED\u4EE3\u3002",
    scthcdpF4: "\u672C\u5730\u6A21\u578B\u9009\u9879\uFF0C\u65E0\u8BA2\u9605\u9501\u5B9A\u3002",
    scthcdpCaption: "SCTHCDP\u6307\u6325\u89C6\u56FE\u2014\u2014\u57CE\u5E02\u4E8B\u4EF6\u77E9\u9635\u4E0E\u5730\u56FE\u60C5\u62A5\u3002",

    cscoKicker: "\u6848\u4F8B\u7814\u7A76",
    cscoTitle: "ASEAN CSCO\uFF1A\u5728\u6D2A\u6C34\u4E2D\u8BBE\u8BA1\uFF0C\u800C\u975E\u6D2A\u6C34\u540E",
    cscoDesc: "\u5728\u6D1B\u5764\u5E9C\u771F\u5B9E\u5371\u673A\u4E0B\u6267\u884C\u7684\u5DE5\u4F5C\u574A\uFF0C\u7ED3\u5408\u8BBE\u8BA1\u601D\u7EF4\u3001\u5371\u673A\u5E94\u5BF9\u548C\u8FD0\u884C\u539F\u578B\u3002",
    cscoM1: "\u6D3B\u8DC3\u7528\u6237",
    cscoM2: "\u5E73\u5747\u54CD\u5E94\u65F6\u95F4",
    cscoM3: "\u9884\u8B66\u7A97\u53E3",
    cscoM4: "\u5DF2\u89E3\u51B3\u4E8B\u4EF6",

    s6word: "trivial",
    s6intro: "\u4E09\u6761\u6301\u7EED\u4E3A\u6218\u7565\u3001\u4EA7\u54C1\u548C\u5236\u5EA6\u8BBE\u8BA1\u63D0\u4F9B\u517B\u5206\u7684\u7814\u7A76\u7EBF\u3002",
    r1title: "\u4E0A\u6D77\u58EB\u7EF5\u5316 + \u9057\u4EA7\u4FDD\u62A4",
    r1desc: "\u793E\u533A\u5982\u4F55\u5728\u5FEB\u901F\u73B0\u4EE3\u5316\u4E0B\u534F\u5546\u8FC1\u79FB\u3001\u8BB0\u5FC6\u548C\u65B0\u57CE\u5E02\u8EAB\u4EFD\u3002",
    r2title: "\u65E5\u672C + \u73B0\u4EE3\u4E3B\u4E49\u57CE\u5E02\u89C4\u5212",
    r2desc: "\u9AD8\u8BBE\u8BA1\u610F\u56FE\u5982\u4F55\u5728\u884C\u4E3A\u3001\u6D41\u52A8\u6027\u548C\u6CBB\u7406\u7684\u7EA6\u675F\u4E0B\u5B58\u6D3B\u3002",
    r3title: "\u4ECE\u7814\u7A76\u5230\u8FD0\u884C\u534F\u8BAE",
    r3desc: "\u5C06\u7406\u8BBA\u8F6C\u5316\u4E3A\u670D\u52A1\u67B6\u6784\uFF1A\u4EEA\u8868\u677F\u3001\u5371\u673A\u534F\u8BAE\u548C\u8DE8\u90E8\u95E8\u534F\u8C03\u3002",

    pub1: "\u4E0A\u6D77\u9057\u4EA7\u4E0E\u7A7A\u95F4\u7684\u610F\u4E49 (2023)",
    pub2: "\u4E2D\u56FD\u57CE\u5E02\u518D\u751F (2019)",
    pub3: "\u5185\u90E8\u58EB\u7EF5\u5316 (2016)",
    pub4: "\u57CE\u5E02\u8BBE\u8BA1\u5B66\u62A5 (2016)",
    pub5: "\u57CE\u5E02\u8BBE\u8BA1\u5B66\u62A5 (2008)",
    pub6: "\u57CE\u5E02\u89C4\u5212\u5B66\u62A5 (2010)",
    pub7: "\u57FA\u7840\u8BBE\u65BD\u57CE\u5E02\u4E3B\u4E49 (2019)",
    pub8: "\u65E5\u7ACB\u8BC4\u8BBA (2021)",

    s3word: "sense?",
    s3p1: "\u591C\u665A\uFF0C\u4ED6\u5199\u63A8\u6D4B\u5C0F\u8BF4\u3002Designated Survivor: Bangkok\u2009\u2014\u2009\u57CE\u5E02\u667A\u80FD\u7CFB\u7EDF\u6210\u4E3A\u6218\u573A\u7684\u653F\u6CBB\u60CA\u609A\u5C0F\u8BF4\u3002",
    s3p2: "\u4ED6\u8FD8\u7EF4\u62A4 nonharvard \u535A\u5BA2\uFF0C\u5185\u5BB9\u6DB5\u76D6\u57CE\u5E02\u3001\u6587\u5316\u548C\u5B58\u5728\u5371\u673A\u3002\u5199\u4F5C\u662F\u6218\u7565\u4E0E\u53D9\u4E8B\u7684\u4EA4\u6C47\u3002",
    s3link1: "\u5728Substack\u4E0A\u9605\u8BFB\u5C0F\u8BF4",
    s3link2: "\u9605\u8BFB\u535A\u5BA2",

    s4word: "proprietary",
    s4intro: "\u8FD9\u4E9B\u662F\u6211\u5B9E\u9645\u4F7F\u7528\u7684\u6846\u67B6\u3002\u590D\u5236JSON\uFF0C\u505A\u51FA\u66F4\u597D\u7684\u4E1C\u897F\u3002\u65E0\u9700\u6388\u6743\u3002",
    steal1Title: "\u57CE\u5E02\u6570\u636E\u5E73\u53F0", steal1Desc: "\u5168\u6808\u57CE\u5E02\u4EEA\u8868\u677F\uFF0C\u5B9E\u65F6\u6570\u636E\u4E0E\u5E02\u6C11\u53CD\u9988\u3002",
    steal2Title: "\u8BBE\u8BA1\u601D\u7EF4\u5DE5\u4F5C\u574A", steal2Desc: "\u4E24\u5929\u914D\u7F6E\uFF0C\u542B\u9636\u6BB5\u3001\u6750\u6599\u4E0E\u4EA4\u4ED8\u7269\u3002",
    steal3Title: "\u6E38\u620F\u5316\u8BFE\u5802", steal3Desc: "\u79EF\u5206-\u52CB\u7AE0-\u4EFB\u52A1\u7CFB\u7EDF\u3002",
    steal4Title: "\u57CE\u5E02\u6C11\u65CF\u5FD7\u5DE5\u5177\u5305", steal4Desc: "\u4ECE\u89C2\u5BDF\u5230\u653F\u7B56\u7B80\u62A5\u7684\u7530\u91CE\u65B9\u6CD5\u3002",
    steal5Title: "\u79D1\u6280\u9ED1\u8272\u5C0F\u8BF4\u6846\u67B6", steal5Desc: "\u8FD1\u672A\u6765\u5DE8\u57CE\u63A8\u6D4B\u5C0F\u8BF4\u7ED3\u6784\u3002",
    steal6Title: "\u6570\u5B57\u7D20\u517B\u8BAD\u7EC3\u8425", steal6Desc: "8\u5468\u6DF7\u5408\u8BFE\u7A0B\u3002",
    stealCopy: "\u590D\u5236", stealCopied: "\u5DF2\u590D\u5236\uFF01",

    // NON-conventional
    conventionalWord: "conventional",
    conventionalIntro: "\u5C06\u8BBE\u8BA1\u601D\u7EF4\u5E26\u7ED9\u610F\u60F3\u4E0D\u5230\u7684\u4EBA\u3002\u4ECE\u94F6\u884C\u5BB6\u5230\u62A4\u58EB\uFF0C\u4ECE\u653F\u5E9C\u5B98\u5458\u5230\u6821\u957F\u2014\u2014\u519C\u4E3B\u6301\u6218\u7565\u5DE5\u4F5C\u574A\uFF0C\u5C06\u62BD\u8C61\u65B9\u6CD5\u8F6C\u5316\u4E3A\u53EF\u6267\u884C\u7684\u8FD0\u8425\u3002",
    audBanks: "\u94F6\u884C",
    audGov: "\u653F\u5E9C",
    audPublic: "\u516C\u5171\u536B\u751F",
    audBankrupt: "\u7834\u4EA7\u6CD5\u9662",
    audSchools: "\u5B66\u6821",
    audEngineers: "\u5DE5\u7A0B\u5E08",
    audNurses: "\u62A4\u58EB",
    audLawyers: "\u5F8B\u5E08",
    audDigital: "\u6570\u5B57\u673A\u6784",
    tonklaKicker: "\u6848\u4F8B\u7814\u7A76",
    tonklaTitle: "\u6839\u82D7\u5B66\u6821\uFF1A\u9762\u5411K-12\u6559\u5E08\u7684\u8BBE\u8BA1\u601D\u7EF4",
    tonklaDesc: "\u4E0E\u6839\u82D7\u5B66\u6821\u5408\u4F5C\u7684\u5DE5\u4F5C\u574A\u7CFB\u5217\uFF0C\u57F9\u8BAD\u6559\u5E08\u5C06\u8BBE\u8BA1\u601D\u7EF4\u5E94\u7528\u4E8E\u8BFE\u7A0B\u8BBE\u8BA1\u3002",
    tonklaQuote: "\u201C\u6211\u4EEC\u4E0D\u518D\u6559\u5B66\u79D1\uFF0C\u5F00\u59CB\u89E3\u51B3\u95EE\u9898\u3002\u201D \u2014 \u6839\u82D7\u6559\u5E08",

    // NON-theoretical
    theoreticalWord: "theoretical",
    theoreticalIntro: "\u8FD9\u4E9B\u4E0D\u662F\u6F14\u793A\u7A3F\u4E0A\u7684\u6982\u5FF5\u3002\u662F\u6211\u6784\u5EFA\u5E76\u4EA4\u4ED8\u7684\u5E94\u7528\u3001\u673A\u5668\u4EBA\u548C\u4EEA\u8868\u677F\u3002\u90E8\u5206\u5728\u751F\u4EA7\u73AF\u5883\u8FD0\u884C\u3002\u5168\u90E8\u89E3\u51B3\u5B9E\u9645\u95EE\u9898\u3002",
    app1Title: "Tech Monitor",
    app1Desc: "\u5B9E\u65F6\u57CE\u5E02\u8FD0\u8425\u4EEA\u8868\u677F\u3002\u7EFC\u5408\u5730\u56FE\u3001\u5E02\u573A\u6570\u636E\u3001\u51B2\u7A81\u8DDF\u8E2A\u3001\u6C14\u5019\u4FE1\u53F7\u548C\u7ED3\u6784\u5316\u60C5\u62A5\u7B80\u62A5\u3002",
    app2Title: "City Reporter AI Bot",
    app2Desc: "\u53CC\u5E73\u53F0\u5E02\u6C11\u53C2\u4E0E\u5DE5\u5177\uFF08LINE + Telegram\uFF09\u3002\u5E02\u6C11\u62CD\u7167\u62A5\u544A\u95EE\u9898\uFF0CAI\u63D0\u53D6\u4F4D\u7F6E\u3001\u5206\u7C7B\u4E25\u91CD\u6027\u3001\u8DEF\u7531\u5230\u54CD\u5E94\u4EBA\u3002",
    app3Title: "ASEAN Smart Cities Network",
    app3Desc: "\u4E1C\u76DF\u667A\u6167\u57CE\u5E02\u7F51\u7EDC\u7535\u5F71\u5F0F\u7740\u9646\u9875\uFF1A\u57CE\u5E02\u8109\u640F\u4EEA\u8868\u677F\u3001\u516C\u5171\u6307\u6807\u3001\u4EBA\u7269\u6863\u6848\u3002",
    app4Title: "Smart City Tech Hunt",
    app4Desc: "160+\u667A\u6167\u57CE\u5E02\u89E3\u51B3\u65B9\u6848\u76EE\u5F55\uFF0C\u4E03\u4E2A\u9886\u57DF\uFF0C\u5B9E\u65F6Google Trends\u8109\u640F\u3002",
    app5Title: "\u5E02\u6C11\u4F18\u5148\u57CE\u5E02\u624B\u518C",
    app5Desc: "\u4E1C\u76DF CSCO \u4EA4\u4E92\u5F0F\u624B\u518C\uFF0C\u5728\u6D1B\u5764\u5E9C\u771F\u5B9E\u6D2A\u6C34\u4E2D\u953B\u9020\u3002",
    app6Title: "Air DnD",
    app6Desc: "\u66FC\u8C37\u591C\u751F\u6D3B\u53D1\u73B0\u5E73\u53F0\uFF0C\u5B9E\u65F6\u5217\u8868\u8986\u76D6\u548C\u5F39\u6027\u5907\u4EFD\u6570\u636E\u3002",
    appTypeDashboard: "\u4EEA\u8868\u677F",
    appTypeBot: "AI Bot",
    appTypeLanding: "\u7740\u9646\u9875",
    appTypeDirectory: "\u76EE\u5F55",
    appTypeHandbook: "\u624B\u518C",
    appTypePlatform: "\u5E73\u53F0",
    appLive: "\u8BBF\u95EE",
    appGitHub: "GitHub",

    // NON-restricted
    restrictedWord: "restricted",
    restrictedIntro: "\u6211\u64B0\u5199\u6216\u5408\u8457\u7684\u667A\u6167\u57CE\u5E02\u3001\u6570\u5B57\u653F\u5E9C\u548C\u4E1C\u76DF\u57CE\u5E02\u6218\u7565\u62A5\u544A\u3002\u514D\u8D39\u4E0B\u8F7D\u3002",
    dl1Title: "ASCN\u667A\u6167\u57CE\u5E02\u62A5\u544A 2019",
    dl1Desc: "\u4E1C\u76DF\u667A\u6167\u57CE\u5E02\u7F51\u7EDC\u72B6\u6001\u62A5\u544A\uFF0C\u4E0Edepa\u5408\u8457\u300226\u4E2A\u8BD5\u70B9\u57CE\u5E02\u6848\u4F8B\u3002",
    dl2Title: "\u6CF0\u56FD\u667A\u6167\u57CE\u5E02 (Hitachi Review)",
    dl2Desc: "\u5173\u4E8E\u6CF0\u56FD\u667A\u6167\u57CE\u5E02\u6570\u636E\u5E73\u53F0\u67B6\u6784\u548C\u7701\u7EA7\u90E8\u7F72\u7684\u540C\u884C\u8BC4\u5BA1\u6587\u7AE0\u3002",
    dl3Title: "\u4E1C\u76DF\u6742\u5FD7\u91C7\u8BBF",
    dl3Desc: "\u5173\u4E8E\u519C\u5728\u4E1C\u76DF\u6570\u5B57\u6CBB\u7406\u548C\u8DE8\u5883\u57CE\u5E02\u5408\u4F5C\u4E2D\u89D2\u8272\u7684\u4E13\u9898\u91C7\u8BBF\u3002",
    dl4Title: "\u667A\u6167\u57CE\u5E02\u5165\u95E8 (US\u2013depa)",
    dl4Desc: "\u9762\u5411\u6CF0\u56FD\u5E02\u653F\u9886\u5BFC\u7684\u667A\u6167\u57CE\u5E02\u6982\u5FF5\u3001\u6280\u672F\u6808\u548C\u5B9E\u65BD\u6846\u67B6\u7EFC\u5408\u5165\u95E8\u3002",
    dlDownload: "\u4E0B\u8F7D",

    // NON-ordinary
    ordinaryWord: "ordinary",
    eduPhD: "\u535A\u58EB\uFF0C\u5185\u4E9A\u6D32\u4E0E\u963F\u5C14\u6CF0\u7814\u7A76\uFF08\u4EBA\u7C7B\u5B66\u65B9\u5411\uFF09",
    eduALM: "ALM\uFF0C\u6587\u79D1\uFF08\u653F\u5E9C\u5B66\uFF09",
    eduMDesS: "MDesS\uFF0C\u8BBE\u8BA1\u7814\u7A76",
    eduMIT: "MArch\uFF0C\u5EFA\u7B51\u5B66",
    eduKMITL: "B.Arch\uFF0C\u5EFA\u7B51\u5B66\uFF08\u4E00\u7B49\u8363\u8A89\uFF09",

    proofWord: "negotiable",
    proofIntro: "\u4ECE\u6307\u6325\u5BA4\u5230\u56FD\u9645\u8BBA\u575B\u3002\u6267\u884C\u5728\u653F\u7B56\u3001\u8FD0\u8425\u548C\u8054\u76DF\u5DE5\u4F5C\u4E2D\u7559\u4E0B\u4E86\u75D5\u8FF9\u3002",

    s5word: "hiding",
    s5intro: "\u4EFB\u52A1\u8270\u96BE\u65F6\uFF0C\u76F4\u63A5\u8054\u7CFB\u3002",
    contactDirect: "\u76F4\u63A5\u8054\u7CFB",
    contactVerify: "\u9A8C\u8BC1\u6E20\u9053",

    footer: "\u00A9 Non Arkaraprasertkul \u00B7 \u0E19\u0E19 \u0E2D\u0E31\u0E04\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E2A\u0E23\u0E34\u0E10\u0E01\u0E38\u0E25 \u00B7 \u519C\u00B7\u963F\u5361\u62C9\u5E15\u8428\u7279\u5E93",
    footerNote: "\u6CA1\u6709\u6A21\u677F\u53D7\u5230\u4F24\u5BB3\u3002\u624B\u5DE5\u7EC4\u88C5\u3002",
    footerCV: "CV\uFF08\u82F1\u6587\uFF09",
    footerCVThai: "CV\uFF08\u6CF0\u6587\uFF09",
    bkkTime: "\u66FC\u8C37"
  }
};

/* ══════════════════════════════════
   HELPERS
   ══════════════════════════════════ */

function isDisallowedPath(path) {
  if (!path) return true;
  const v = path.toLowerCase();
  if (CONTENT_POLICY.excludeFolders.some(f => v.includes(f.toLowerCase()))) return true;
  return CONTENT_POLICY.excludePatterns.some(p => v.includes(p.toLowerCase()));
}

function textFor(lang, key) {
  return (I18N[lang] || I18N.en)[key] || I18N.en[key] || "";
}

function featured(section) {
  return FEATURED_MEDIA.find(i => i.section === section);
}

/* ══════════════════════════════════
   MEDIA
   ══════════════════════════════════ */

function hydrateMedia() {
  document.querySelectorAll("img[data-media]").forEach(img => {
    const m = featured(img.dataset.media);
    if (!m || isDisallowedPath(m.path)) { img.removeAttribute("src"); return; }
    img.src = encodeURI(m.path);
    img.alt = m.alt;
  });
}

/* ══════════════════════════════════
   PUBLICATIONS
   ══════════════════════════════════ */

function renderPublications(lang) {
  [1, 2, 3].forEach(thread => {
    const container = document.getElementById(`pubs-thread-${thread}`);
    if (!container) return;
    container.innerHTML = "";
    PUBLICATIONS.filter(p => p.thread === thread).forEach(pub => {
      const a = document.createElement("a");
      a.href = pub.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = textFor(lang, pub.titleKey);
      container.appendChild(a);
    });
  });
}

/* ══════════════════════════════════
   STEAL MY IDEA
   ══════════════════════════════════ */

function renderStealIdeas(lang) {
  const container = document.getElementById("steal-list");
  if (!container) return;
  container.innerHTML = "";

  const copyLabel = textFor(lang, "stealCopy");
  const copiedLabel = textFor(lang, "stealCopied");

  STEAL_IDEAS.forEach(idea => {
    const item = document.createElement("div");
    item.className = "steal-item";

    const head = document.createElement("button");
    head.className = "steal-head";
    head.textContent = textFor(lang, idea.titleKey);
    head.setAttribute("aria-expanded", "false");

    const body = document.createElement("div");
    body.className = "steal-body";

    const desc = document.createElement("p");
    desc.className = "steal-desc";
    desc.textContent = textFor(lang, idea.descKey);

    const jsonWrap = document.createElement("div");
    jsonWrap.className = "steal-json-wrap";

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = JSON.stringify(idea.json, null, 2);
    pre.appendChild(code);

    const copyBtn = document.createElement("button");
    copyBtn.className = "steal-copy-btn";
    copyBtn.textContent = copyLabel;

    jsonWrap.appendChild(pre);
    jsonWrap.appendChild(copyBtn);
    body.appendChild(desc);
    body.appendChild(jsonWrap);

    head.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      head.setAttribute("aria-expanded", String(isOpen));
    });

    copyBtn.addEventListener("click", () => {
      const text = JSON.stringify(idea.json, null, 2);
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = copiedLabel;
        copyBtn.classList.add("copied");
        setTimeout(() => { copyBtn.textContent = copyLabel; copyBtn.classList.remove("copied"); }, 1800);
      }).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
        copyBtn.textContent = copiedLabel;
        copyBtn.classList.add("copied");
        setTimeout(() => { copyBtn.textContent = copyLabel; copyBtn.classList.remove("copied"); }, 1800);
      });
    });

    item.appendChild(head);
    item.appendChild(body);
    container.appendChild(item);
  });
}

/* ══════════════════════════════════
   APPS
   ══════════════════════════════════ */

function renderApps(lang) {
  const container = document.getElementById("app-grid");
  if (!container) return;
  container.innerHTML = "";

  const liveLabel = textFor(lang, "appLive");
  const ghLabel = textFor(lang, "appGitHub");

  BUILT_APPS.forEach(app => {
    const card = document.createElement("div");
    card.className = "app-card stagger";

    const header = document.createElement("div");
    header.className = "app-card-header";

    const h4 = document.createElement("h4");
    h4.textContent = textFor(lang, app.titleKey);

    const typeBadge = document.createElement("span");
    typeBadge.className = "app-card-type";
    typeBadge.textContent = textFor(lang, app.typeKey);

    header.appendChild(h4);
    header.appendChild(typeBadge);

    const p = document.createElement("p");
    p.textContent = textFor(lang, app.descKey);

    const stack = document.createElement("div");
    stack.className = "app-card-stack";
    app.stack.forEach(tech => {
      const s = document.createElement("span");
      s.textContent = tech;
      stack.appendChild(s);
    });

    card.appendChild(header);
    card.appendChild(p);
    card.appendChild(stack);

    if (app.url || app.github) {
      const links = document.createElement("div");
      links.className = "app-card-links";
      if (app.url) {
        const a = document.createElement("a");
        a.href = app.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = liveLabel;
        links.appendChild(a);
      }
      if (app.github) {
        const a = document.createElement("a");
        a.href = app.github;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = app.url ? "app-link-secondary" : "";
        a.textContent = ghLabel;
        links.appendChild(a);
      }
      card.appendChild(links);
    }

    container.appendChild(card);
  });
}

/* ══════════════════════════════════
   DOWNLOADS
   ══════════════════════════════════ */

function renderDownloads(lang) {
  const container = document.getElementById("download-grid");
  if (!container) return;
  container.innerHTML = "";

  const dlLabel = textFor(lang, "dlDownload");

  DOWNLOADABLE_RESOURCES.forEach(res => {
    const card = document.createElement("div");
    card.className = "download-card stagger";

    const h4 = document.createElement("h4");
    h4.textContent = textFor(lang, res.titleKey);

    const p = document.createElement("p");
    p.textContent = textFor(lang, res.descKey);

    const meta = document.createElement("div");
    meta.className = "dl-meta";

    const size = document.createElement("span");
    size.className = "dl-size";
    size.textContent = res.size;

    const btn = document.createElement("a");
    btn.className = "dl-btn";
    btn.href = encodeURI(res.file);
    btn.download = "";
    btn.textContent = dlLabel;

    meta.appendChild(size);
    meta.appendChild(btn);
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(meta);
    container.appendChild(card);
  });
}

/* ══════════════════════════════════
   BANGKOK CLOCK
   ══════════════════════════════════ */

function setupBangkokClock() {
  const el = document.getElementById("bkk-clock");
  if (!el) return;

  function tick() {
    const now = new Date();
    const bkk = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
    const h = String(bkk.getHours()).padStart(2, "0");
    const m = String(bkk.getMinutes()).padStart(2, "0");
    const s = String(bkk.getSeconds()).padStart(2, "0");
    const lang = localStorage.getItem("nonLandingLang") || "en";
    const city = textFor(lang, "bkkTime") || "Bangkok";
    el.textContent = `${city} ${h}:${m}:${s}`;
  }

  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════
   LANGUAGE
   ══════════════════════════════════ */

const translatableNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const selected = I18N[lang] ? lang : "en";

  translatableNodes.forEach(node => {
    node.textContent = textFor(selected, node.dataset.i18n);
  });

  langButtons.forEach(btn => {
    const isActive = btn.dataset.lang === selected;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    btn.tabIndex = isActive ? 0 : -1;
  });

  document.documentElement.lang = selected === "zh" ? "zh" : selected;
  localStorage.setItem("nonLandingLang", selected);

  renderStealIdeas(selected);
  renderPublications(selected);
  renderDownloads(selected);
  renderApps(selected);
}

function setupLanguage() {
  langButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    btn.addEventListener("keydown", e => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const offset = e.key === "ArrowRight" ? 1 : -1;
      const next = (i + offset + langButtons.length) % langButtons.length;
      langButtons[next].focus();
      setLanguage(langButtons[next].dataset.lang);
    });
  });
}

/* ══════════════════════════════════
   SCROLL REVEAL + STAGGER
   ══════════════════════════════════ */

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(n => n.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      // Trigger counters inside this section
      entry.target.querySelectorAll("[data-count]").forEach(animateCounter);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
  nodes.forEach(n => observer.observe(n));
}

/* ══════════════════════════════════
   COUNTER ANIMATION
   ══════════════════════════════════ */

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  if (!target || el._counted) return;
  el._counted = true;
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  }

  requestAnimationFrame(update);
}

/* ══════════════════════════════════
   CUSTOM CURSOR
   ══════════════════════════════════ */

function setupCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const el = document.querySelector(".cursor");
  if (!el) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
    el.classList.add("visible");
  });

  document.addEventListener("mouseleave", () => el.classList.remove("visible"));

  (function tick() {
    cx += (mx - cx) * 0.14;
    cy += (my - cy) * 0.14;
    el.style.transform = `translate(${cx - 9}px, ${cy - 9}px)`;
    requestAnimationFrame(tick);
  })();

  document.querySelectorAll("a, button, .steal-head").forEach(t => {
    t.addEventListener("mouseenter", () => el.classList.add("hover"));
    t.addEventListener("mouseleave", () => el.classList.remove("hover"));
  });
}

/* ══════════════════════════════════
   DARK TOPBAR
   ══════════════════════════════════ */

function setupDarkTopbar() {
  const topbar = document.querySelector(".topbar");
  const darkSections = document.querySelectorAll(".dark");
  if (!topbar || !darkSections.length) return;

  const observer = new IntersectionObserver(entries => {
    let anyDark = false;
    darkSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < 60 && rect.bottom > 60) anyDark = true;
    });
    topbar.classList.toggle("topbar--dark", anyDark);
  }, { threshold: 0, rootMargin: "-59px 0px -100% 0px" });

  // Use scroll instead for more reliable detection
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      let anyDark = false;
      darkSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < 60 && rect.bottom > 60) anyDark = true;
      });
      topbar.classList.toggle("topbar--dark", anyDark);
      ticking = false;
    });
  }, { passive: true });
}

/* ══════════════════════════════════
   INIT
   ══════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  hydrateMedia();
  setupLanguage();
  const savedLang = localStorage.getItem("nonLandingLang") || "en";
  setLanguage(savedLang);

  // Mark all story and photo sections as reveal targets
  document.querySelectorAll(".story, .bleed-photo, .photo-mosaic").forEach(el => el.classList.add("reveal"));
  setupReveal();

  // Wild features
  setupCursor();
  setupDarkTopbar();
  setupBangkokClock();
});
