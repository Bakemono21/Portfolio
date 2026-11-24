import React, { useState, useEffect, useRef } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Check,
  Copy,
  Download,
  Terminal,
  Layers,
  Cpu,
  Sparkles,
  Server,
  Wrench,
  Code2,
  ExternalLink,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Activity,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ============================================================================
// 1. TYPES & INTERFACES
// ============================================================================

export type ProjectCategory =
  | "All"
  | "Full-Stack"
  | "Desktop / Systems"
  | "Mobile / AI";

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  shortDescription: string;
  metric: string;
  featured?: boolean;
  banner?: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl: string;
  visualType: "telemetry" | "workspace" | "storage" | "voice";
  architecture: {
    overview: string;
    challenges: string[];
    highlights: string[];
  };
}

export interface TechItem {
  name: string;
  category:
    | "Languages"
    | "Frameworks"
    | "Database & Cloud"
    | "AI & LLMs"
    | "Other Tools";
  tag?: string;
}

export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface PortfolioConfig {
  personal: {
    monogram: string;
    name: string;
    role: string;
    tagline: string;
    location: string;
    availability: string;
    email: string;
    github: string;
    linkedin: string;
    resumeFileName: string;
  };
  about: {
    paragraphs: string[];
    principles: { title: string; description: string }[];
  };
  projects: ProjectItem[];
  techStack: TechItem[];
  experience: ExperienceItem[];
}

// ============================================================================
// 2. PORTFOLIO CONFIGURATION DATA (Edit this object to customize your site)
// ============================================================================

const portfolioData: PortfolioConfig = {
  personal: {
    monogram: "JL.",
    name: "Justine Luzano",
    role: "Full Stack Developer",
    tagline:
      "Building robust desktop applications and progressive web apps with database-driven architectures for real-world performance.",
    location: "Dasmariñas, Cavite • Philippines",
    availability: "Open to Software Engineering Roles",
    email: "luzanojustine021@gmail.com",
    github: "https://github.com/Bakemono21",
    linkedin: "https://www.linkedin.com/in/justine-luzano-a74631291/",
    resumeFileName: "resume/Justine_Resume_latest.pdf",
  },
  about: {
    paragraphs: [
      "I am a Software Engineer with four years of professional experience specializing in C#, WPF, .NET MAUI, and database management. My background includes architecting scalable enterprise solutions, developing asset management systems, and building data ingestion tools that process high volumes of records reliably.",
      "I also work with Java, JavaScript, and PHP, with a focus on desktop applications, progressive web apps, and cross-platform mobile tools. I enjoy transforming complex data into practical, user-focused solutions and am eager to contribute my system architecture skills to innovative technology and semiconductor environments.",
    ],
    principles: [
      {
        title: "Reliable at Scale",
        description:
          "Build database-driven systems that remain accurate, fast, and dependable under heavy workloads.",
      },
      {
        title: "Practical Architecture",
        description:
          "Choose maintainable designs that solve real operational needs without unnecessary complexity.",
      },
      {
        title: "User-Focused Solutions",
        description:
          "Turn complex workflows and technical data into clear, accessible experiences.",
      },
    ],
  },
  projects: [
    {
      id: "senior-solutions-dbms",
      title: "Senior Solutions DBMS",
      category: "Full-Stack",
      shortDescription:
        "A high-integrity database management system for secure citizen records, optimized CRUD operations, and administrative reporting.",
      metric: "Secure citizen records • Optimized reporting",
      featured: true,
      banner: "/banners/seniorbanner.jpg",
      techStack: ["PHP", "MySQL", "JavaScript", "Database Design"],
      liveUrl: undefined,
      sourceUrl: "https://github.com/Bakemono21/SeniorDatabase/",
      visualType: "telemetry",
      architecture: {
        overview:
          "Designed a centralized PHP and MySQL administration system for securely storing, searching, updating, and reporting sensitive senior citizen records.",
        challenges: [
          "Structured relational tables and queries to keep large citizen datasets consistent while supporting fast lookups and reporting.",
          "Created role-friendly entry forms and validation workflows to reduce inaccurate records and streamline administrative operations.",
        ],
        highlights: [
          "Secure CRUD workflows for citizen information",
          "Database-backed administrative dashboards",
          "Search, filtering, and generated records reports",
        ],
      },
    },

    {
      id: "assethub",
      title: "AssetHub",
      category: "Desktop / Systems",
      shortDescription:
        "An enterprise-grade asset management ecosystem for IT departments that streamlines inventory tracking and employee resource allocation.",
      metric: "Code-First • Containerized inventory",
      featured: true,
      banner: "/banners/Assethubbanner.jpg",
      techStack: ["C#", ".NET 8", "SQL", "WPF", "XAML", "Docker"],
      liveUrl: undefined,
      sourceUrl: "https://github.com/Bakemono21/AssetHub",
      visualType: "storage",
      architecture: {
        overview:
          "Built a Code-First desktop inventory system with WPF and XAML, backed by SQL and containerized database infrastructure for consistent, centralized asset management.",
        challenges: [
          "Designed relational asset, employee, and allocation records to support accurate lifecycle tracking and resource assignments.",
          "Separated application, data-access, and database infrastructure concerns while using Docker to simplify setup and deployment across environments.",
        ],
        highlights: [
          "Code-First data models and database migrations",
          "Desktop inventory and employee allocation workflows",
          "Containerized SQL infrastructure with WPF and XAML interface",
        ],
      },
    },
    {
      id: "nexus-reader",
      title: "NexusReader",
      category: "Full-Stack",
      shortDescription:
        "A refined digital library for romance enthusiasts, with seamless desktop and mobile reading in an elegant, distraction-free environment.",
      metric: "Responsive reading • Distraction-free library",
      featured: false,
      banner: "/banners/Nexusbanner.jpg",
      techStack: ["C#", "Blazor", "ASP.NET Core", "SQL Server"],
      liveUrl: undefined,
      sourceUrl: "https://github.com/Bakemono21/NexusReader",
      visualType: "workspace",
      architecture: {
        overview:
          "Built a digital library using C# and Blazor on ASP.NET Core, with SQL Server supporting the catalog and reading experience across desktop and mobile screens.",
        challenges: [
          "Organized story and library data to make browsing and returning to a reading experience straightforward.",
          "Designed a responsive interface that keeps reading comfortable and focused across desktop and mobile devices.",
        ],
        highlights: [
          "Romance-focused digital library and story browsing",
          "Responsive desktop and mobile reading layouts",
          "ASP.NET Core application backed by SQL Server",
        ],
      },
    },
    {
      id: "learncss-mobile",
      title: "LearnCSS Mobile",
      category: "Mobile / AI",
      shortDescription:
        "An immersive mobile learning platform combining interactive CSS education with AR hardware visualization and machine-learning object detection.",
      metric: "AR visualization • ML object detection",
      featured: false,
      banner: "/banners/LearnCSSbanner.jpg",
      techStack: ["Android", "Java", "Kotlin", "ARCore", "TensorFlow"],
      liveUrl: undefined,
      sourceUrl: "https://github.com/Bakemono21/LearnCSSmobileApp",
      visualType: "voice",
      architecture: {
        overview:
          "Developed an Android learning app with Java and Kotlin, blending a mobile-first educational experience with ARCore-based hardware visualization and TensorFlow object detection.",
        challenges: [
          "Integrated ARCore experiences to make hardware concepts easier to explore in an interactive mobile environment.",
          "Applied TensorFlow object detection as part of the learning experience while keeping the app designed for Android devices.",
        ],
        highlights: [
          "Interactive CSS learning content",
          "ARCore-powered hardware visualization",
          "TensorFlow-based object detection",
        ],
      },
    },
    {
      id: "overlay-translator",
      title: "OverlayTranslator",
      category: "Desktop / Systems",
      shortDescription:
        "A real-time on-screen translation tool that captures text from videos, games, and apps, then displays seamless translations without leaving the active window.",
      metric: "Real-time OCR • On-screen translation",
      featured: false,
      banner: "/banners/OverlayTranslator.jpg",
      techStack: ["C#", "ASP.NET Core", "WPF", "SQLite"],
      liveUrl: undefined,
      sourceUrl: "https://github.com/Bakemono21/OverlayTranslator",
      visualType: "voice",
      architecture: {
        overview:
          "Built a desktop translation tool that captures visible text from videos, games, and other applications, then presents translated text in an on-screen overlay without interrupting the active window.",
        challenges: [
          "Capture and process on-screen text in real time while preserving the user's current workflow.",
          "Present translated content in a readable overlay that stays aligned with an immersive desktop experience.",
        ],
        highlights: [
          "Live text capture and translation for videos, games, and applications",
          "High-fidelity on-screen translation overlays",
          "C# and WPF desktop application with SQLite storage",
        ],
      },
    },
    {
      id: "python-space-shooter",
      title: "Python Space Shooting Game",
      category: "Desktop / Systems",
      shortDescription:
        "A Pygame space shooter exploring game physics and object-oriented design, with collision detection and game-state management.",
      metric: "Game physics • Collision detection",
      featured: false,
      banner: "/banners/spaceshooterbanner.jpg",
      techStack: ["Python", "Pygame", "OO-Design"],
      liveUrl: undefined,
      sourceUrl: "https://github.com/Bakemono21/SpaceShooter",
      visualType: "voice",
      architecture: {
        overview:
          "Created a Python arcade game with Pygame, using object-oriented components to model gameplay entities and coordinate physics, collisions, and game states.",
        challenges: [
          "Implement collision detection between game objects to drive responsive gameplay interactions.",
          "Manage transitions between game states while keeping gameplay behavior organized and maintainable.",
        ],
        highlights: [
          "Python game built with Pygame",
          "Object-oriented game design",
          "Game physics, collision detection, and state management",
        ],
      },
    },
  ],
  techStack: [
    // Languages
    { name: "C# / .NET", category: "Languages", tag: "Primary" },
    { name: "Java", category: "Languages" },
    { name: "PHP", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },

    // Frameworks
    { name: ".NET MAUI", category: "Frameworks", tag: "Primary" },
    { name: "WPF", category: "Frameworks" },
    { name: "Bootstrap", category: "Frameworks" },
    { name: "Laravel", category: "Frameworks" },
    { name: "React", category: "Frameworks" },
    { name: "Angular", category: "Frameworks" },
    { name: "HP Exstream", category: "Frameworks" },
    { name: "Git", category: "Frameworks" },
    { name: "GitHub", category: "Frameworks" },
    { name: "Docker", category: "Frameworks" },

    // Database & Cloud
    { name: "MSSQL", category: "Database & Cloud", tag: "Primary" },
    { name: "MySQL", category: "Database & Cloud" },
    { name: "SQLite", category: "Database & Cloud" },
    { name: "Firebase", category: "Database & Cloud" },
    { name: "AWS", category: "Database & Cloud" },
    { name: "Vercel", category: "Database & Cloud" },

    // AI & LLMs
    { name: "Claude Code", category: "AI & LLMs", tag: "Primary" },
    { name: "Gemini Code", category: "AI & LLMs" },
    { name: "GitHub Copilot", category: "AI & LLMs" },
    { name: "Zapier", category: "AI & LLMs" },

    // Other Tools
    { name: "Netsuite", category: "Other Tools" },
    { name: "Adobe InDesign", category: "Other Tools" },
    { name: "Google Analytics", category: "Other Tools" },
    { name: "Power BI", category: "Other Tools" },
    { name: "Looker Studio", category: "Other Tools" },
    { name: "Excel", category: "Other Tools" },
  ],
  experience: [
    {
      id: "exp-1",
      type: "work",
      role: "IT Developer",
      organization: "IVE Group Australia",
      period: "November 2023 — April 2026",
      location: "Australia",
      summary:
        "Collaborated with international teams and stakeholders to develop high-volume data solutions for enterprise mailing campaigns.",
      highlights: [
        "Managed and processed hundreds of thousands of records for major bank communications and large-scale mailing campaigns.",
        "Developed and tested complex document compositions in HP Exstream Dialogue to support high-fidelity letter printing and automated workflows.",
      ],
    },
    {
      id: "exp-2",
      type: "work",
      role: "Junior Software Developer",
      organization:
        "Department of Information and Communication Technology (DICT)",
      period: "January 2022 — August 2023",
      location: "Philippines",
      summary:
        "Engineered a Senior Citizen Database Management System with a focus on data integrity, security, and reliable deployment.",
      highlights: [
        "Implemented core application modules and automated testing throughout the software development lifecycle.",
        "Diagnosed and resolved critical software and hardware issues during deployment.",
      ],
    },
    {
      id: "edu-1",
      type: "education",
      role: "Bachelor of Science in Information Technology",
      organization: "EARIST Cavite Campus",
      period: "2019 — 2023",
      location: "Cavite, Philippines",
      summary:
        "Focused on software engineering fundamentals, systems analysis, database design, and application development.",
      highlights: [],
    },
  ],
};

// ============================================================================
// 3. CUSTOM VISUAL COMPONENTS (Project Headers & Tech Icons)
// ============================================================================

const ProjectVisualHeader: React.FC<{
  type: ProjectItem["visualType"];
  category: string;
  banner?: string;
}> = ({ type, category, banner }) => {
  return (
    <div className="relative h-48 w-full overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] select-none">
      {/* Subtle architectural dot grid */}
      <div
        className="absolute inset-0 opacity-40 transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-subtle) 1.25px, transparent 1.25px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Ambient indigo glow on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent)] opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25" />

      {/* Category Pill Overlay */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--text-secondary)] backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        {category}
      </div>

      {banner && (
        <img
          src={banner}
          alt={`${category} project banner`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Custom SVG Schematic per Project */}
      {!banner && (
        <div className="relative flex h-full w-full items-center justify-center p-6 pt-12 transition-transform duration-300 group-hover:scale-[1.03]">
          {type === "telemetry" && (
            <svg
              viewBox="0 0 320 110"
              className="h-full w-full max-w-[300px]"
              fill="none"
            >
              {/* Terminal / Metrics Frame */}
              <rect
                x="10"
                y="8"
                width="300"
                height="94"
                rx="8"
                fill="var(--bg-card)"
                stroke="var(--border-subtle)"
                strokeWidth="1.2"
              />
              <circle cx="24" cy="20" r="3" fill="var(--border-subtle)" />
              <circle cx="34" cy="20" r="3" fill="var(--border-subtle)" />
              <circle cx="44" cy="20" r="3" fill="var(--accent)" />
              <line
                x1="10"
                y1="30"
                x2="310"
                y2="30"
                stroke="var(--border-subtle)"
                strokeWidth="1"
              />

              {/* Latency Waveform */}
              <path
                d="M24 76 L56 72 L84 78 L112 50 L136 68 L164 42 L192 64 L224 58 L254 46 L292 52"
                stroke="var(--accent)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 76 L56 72 L84 78 L112 50 L136 68 L164 42 L192 64 L224 58 L254 46 L292 52 L292 90 L24 90 Z"
                fill="var(--accent)"
                fillOpacity="0.12"
              />
              {/* Highlighted Peak Node */}
              <circle
                cx="164"
                cy="42"
                r="4"
                fill="var(--bg-card)"
                stroke="var(--accent)"
                strokeWidth="2"
              />
              <rect
                x="174"
                y="35"
                width="54"
                height="14"
                rx="4"
                fill="var(--accent)"
                fillOpacity="0.15"
              />
              <text
                x="180"
                y="45"
                fill="var(--accent)"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                p99: 11.4ms
              </text>
            </svg>
          )}

          {type === "storage" && (
            <svg
              viewBox="0 0 320 110"
              className="h-full w-full max-w-[300px]"
              fill="none"
            >
              {/* LSM Tree Architecture Diagram */}
              {/* WAL */}
              <rect
                x="14"
                y="32"
                width="62"
                height="46"
                rx="6"
                fill="var(--bg-card)"
                stroke="var(--accent)"
                strokeWidth="1.4"
              />
              <text
                x="27"
                y="52"
                fill="var(--text-primary)"
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                WAL
              </text>
              <text
                x="21"
                y="65"
                fill="var(--text-secondary)"
                fontSize="7.5"
                fontFamily="JetBrains Mono, monospace"
              >
                CRC32C
              </text>

              <path
                d="M76 55 H102"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />
              <polygon points="102,52 108,55 102,58" fill="var(--accent)" />

              {/* MemTable */}
              <rect
                x="110"
                y="24"
                width="76"
                height="62"
                rx="6"
                fill="var(--bg-card)"
                stroke="var(--border-subtle)"
                strokeWidth="1.3"
              />
              <text
                x="122"
                y="42"
                fill="var(--text-primary)"
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                MemTable
              </text>
              <rect
                x="120"
                y="49"
                width="56"
                height="7"
                rx="2"
                fill="var(--accent)"
                fillOpacity="0.25"
              />
              <rect
                x="120"
                y="60"
                width="44"
                height="7"
                rx="2"
                fill="var(--accent)"
                fillOpacity="0.45"
              />
              <rect
                x="120"
                y="71"
                width="52"
                height="7"
                rx="2"
                fill="var(--accent)"
                fillOpacity="0.7"
              />

              <path
                d="M186 55 H212"
                stroke="var(--border-subtle)"
                strokeWidth="1.5"
              />
              <polygon
                points="212,52 218,55 212,58"
                fill="var(--text-secondary)"
              />

              {/* SSTable Levels */}
              <rect
                x="220"
                y="16"
                width="84"
                height="22"
                rx="4"
                fill="var(--bg-card)"
                stroke="var(--border-subtle)"
              />
              <text
                x="232"
                y="30"
                fill="var(--text-secondary)"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                L0 SSTable
              </text>
              <rect
                x="220"
                y="44"
                width="84"
                height="22"
                rx="4"
                fill="var(--bg-card)"
                stroke="var(--border-subtle)"
              />
              <text
                x="232"
                y="58"
                fill="var(--text-secondary)"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                L1 Compact
              </text>
              <rect
                x="220"
                y="72"
                width="84"
                height="22"
                rx="4"
                fill="var(--bg-card)"
                stroke="var(--accent)"
                strokeOpacity="0.6"
              />
              <text
                x="232"
                y="86"
                fill="var(--accent)"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                Bloom Filter
              </text>
            </svg>
          )}

          {type === "workspace" && (
            <svg
              viewBox="0 0 320 110"
              className="h-full w-full max-w-[300px]"
              fill="none"
            >
              {/* Collaborative Node Canvas */}
              <rect
                x="22"
                y="18"
                width="92"
                height="38"
                rx="6"
                fill="var(--bg-card)"
                stroke="var(--border-subtle)"
                strokeWidth="1.3"
              />
              <rect
                x="32"
                y="28"
                width="42"
                height="6"
                rx="2"
                fill="var(--text-primary)"
                fillOpacity="0.8"
              />
              <rect
                x="32"
                y="39"
                width="64"
                height="5"
                rx="2"
                fill="var(--text-secondary)"
                fillOpacity="0.4"
              />

              <rect
                x="196"
                y="52"
                width="98"
                height="40"
                rx="6"
                fill="var(--bg-card)"
                stroke="var(--accent)"
                strokeWidth="1.4"
              />
              <rect
                x="206"
                y="63"
                width="48"
                height="6"
                rx="2"
                fill="var(--accent)"
              />
              <rect
                x="206"
                y="74"
                width="72"
                height="5"
                rx="2"
                fill="var(--text-secondary)"
                fillOpacity="0.4"
              />

              {/* Bezier Connector */}
              <path
                d="M114 37 C155 37, 155 72, 196 72"
                stroke="var(--accent)"
                strokeWidth="1.6"
                strokeDasharray="4 3"
              />
              <circle cx="114" cy="37" r="3" fill="var(--accent)" />
              <circle cx="196" cy="72" r="3" fill="var(--accent)" />

              {/* Multiplayer Cursor */}
              <path
                d="M158 24 L164 40 L168 34 L175 33 Z"
                fill="var(--accent)"
                stroke="var(--bg-card)"
                strokeWidth="1"
              />
              <rect
                x="172"
                y="36"
                width="44"
                height="14"
                rx="4"
                fill="var(--accent)"
              />
              <text
                x="178"
                y="46"
                fill="#FFFFFF"
                fontSize="7.5"
                fontFamily="JetBrains Mono, monospace"
              >
                CRDT Sync
              </text>
            </svg>
          )}

          {type === "voice" && (
            <svg
              viewBox="0 0 320 110"
              className="h-full w-full max-w-[300px]"
              fill="none"
            >
              {/* Edge NPU Audio Waveform & Vector Match */}
              <rect
                x="18"
                y="18"
                width="284"
                height="74"
                rx="8"
                fill="var(--bg-card)"
                stroke="var(--border-subtle)"
                strokeWidth="1.2"
              />
              {/* Audio bars */}
              {[24, 38, 54, 30, 62, 46, 26, 56, 40, 28, 48, 34].map(
                (h, idx) => (
                  <rect
                    key={idx}
                    x={36 + idx * 10}
                    y={55 - h / 2}
                    width="4.5"
                    height={h}
                    rx="2.25"
                    fill="var(--accent)"
                    fillOpacity={idx % 2 === 0 ? 0.9 : 0.45}
                  />
                ),
              )}
              <line
                x1="168"
                y1="28"
                x2="168"
                y2="82"
                stroke="var(--border-subtle)"
                strokeWidth="1"
              />
              <text
                x="180"
                y="44"
                fill="var(--text-primary)"
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                ONNX • INT4 NPU
              </text>
              <text
                x="180"
                y="59"
                fill="var(--accent)"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                TTFT: 180ms
              </text>
              <text
                x="180"
                y="73"
                fill="var(--text-secondary)"
                fontSize="7.5"
                fontFamily="JetBrains Mono, monospace"
              >
                Local SQLite-vec
              </text>
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 4. MAIN APPLICATION COMPONENT
// ============================================================================

const currentYear = new Date().getFullYear();

export function App() {
  // Theme state: initialized cleanly from localStorage or OS prefers-color-scheme
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(
    null,
  );

  // Toast & Clipboard state
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const modalCloseRef = useRef<HTMLButtonElement>(null);

  // Apply theme attribute & persist to localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Listen for OS theme changes if user hasn't explicitly overridden
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("portfolio-theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Keyboard accessibility for Project Details Modal (Escape to close + focus trap)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeProject) setActiveProject(null);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, mobileMenuOpen]);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      setTimeout(() => modalCloseRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.email);
      setCopiedEmail(true);
      showToast("Email address copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      showToast(`Email: ${portfolioData.personal.email}`);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = `/${portfolioData.personal.resumeFileName}`;
    link.download =
      portfolioData.personal.resumeFileName.split("/").pop() ?? "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Resume downloaded!");
  };

  // Filter projects by category and optional selected tech pill
  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesTech =
      !selectedTechFilter ||
      project.techStack.some((t) =>
        t
          .toLowerCase()
          .includes(selectedTechFilter.toLowerCase().split(" ")[0]),
      );
    return matchesCategory && matchesTech;
  });

  const categories: ProjectCategory[] = [
    "All",
    "Full-Stack",
    "Desktop / Systems",
    "Mobile / AI",
  ];

  const stackCategories: TechItem["category"][] = [
    "Languages",
    "Frameworks",
    "Database & Cloud",
    "AI & LLMs",
    "Other Tools",
  ];

  const getCategoryIcon = (category: TechItem["category"]) => {
    switch (category) {
      case "Languages":
        return <Code2 className="h-4 w-4 text-[var(--accent)]" />;
      case "Frameworks":
        return <Layers className="h-4 w-4 text-[var(--accent)]" />;
      case "Database & Cloud":
        return <Server className="h-4 w-4 text-[var(--accent)]" />;
      case "AI & LLMs":
        return <Sparkles className="h-4 w-4 text-[var(--accent)]" />;
      case "Other Tools":
        return <Wrench className="h-4 w-4 text-[var(--accent)]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200 selection:bg-[var(--accent)] selection:text-white">
      {/* Google Fonts & CSS Theme Variables */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        :root, [data-theme="light"] {
          --bg-canvas: #FAFAFA;
          --bg-card: #FFFFFF;
          --bg-card-hover: #F8FAFC;
          --bg-glass: rgba(250, 250, 250, 0.82);
          --text-primary: #0F172A;
          --text-secondary: #475569;
          --border-subtle: #E2E8F0;
          --accent: #4F46E5;
          --accent-hover: #4338CA;
          --accent-soft: rgba(79, 70, 229, 0.08);
        }

        [data-theme="dark"] {
          --bg-canvas: #09090B;
          --bg-card: #18181B;
          --bg-card-hover: #1F1F23;
          --bg-glass: rgba(9, 9, 11, 0.82);
          --text-primary: #F8FAFC;
          --text-secondary: #A1A1AA;
          --border-subtle: #27272A;
          --accent: #6366F1;
          --accent-hover: #818CF8;
          --accent-soft: rgba(99, 102, 241, 0.12);
        }

        html {
          scroll-behavior: smooth;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        h1, h2, h3, .font-display {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Ensure transitions remain crisp and under 300ms */
        * {
          transition-duration: 200ms;
        }
      `}</style>

      {/* ====================================================================
          STICKY GLASSMORPHIC NAVIGATION BAR
      ==================================================================== */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Monogram & Name */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] font-mono text-xs font-semibold text-[var(--accent)] shadow-xs transition-transform duration-200 group-hover:-translate-y-0.5">
              {portfolioData.personal.monogram}
            </span>
            <span className="font-display text-base font-bold tracking-tight text-[var(--text-primary)]">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Center: Desktop Anchor Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7"
          >
            {[
              { label: "Projects", href: "#projects" },
              { label: "Tech Stack", href: "#tech-stack" },
              { label: "Experience", href: "#experience" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle & Resume Button */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={handleResumeDownload}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-4 md:hidden">
            <nav
              className="flex flex-col space-y-3"
              aria-label="Mobile Navigation"
            >
              {[
                { label: "Projects", href: "#projects" },
                { label: "Tech Stack", href: "#tech-stack" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-2 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-canvas)] hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => {
                    handleResumeDownload();
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* ====================================================================
            HERO SECTION
        ==================================================================== */}
        <section className="relative overflow-hidden border-b border-[var(--border-subtle)]">
          {/* Subtle Architectural Grid Background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 75% 65% at 50% 25%, black 35%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 65% at 50% 25%, black 35%, transparent 100%)",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              {/* Availability Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono">
                  {portfolioData.personal.availability}
                </span>
                <span className="hidden sm:inline text-[var(--border-subtle)]">
                  |
                </span>
                <span className="hidden sm:inline">
                  {portfolioData.personal.location}
                </span>
              </div>

              {/* Name & Role */}
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                {portfolioData.personal.name}
                <span className="mt-2 block text-2xl font-bold text-[var(--accent)] sm:text-3xl lg:text-4xl">
                  {portfolioData.personal.role}
                </span>
              </h1>

              {/* Value Proposition Tagline */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                {portfolioData.personal.tagline}
              </p>

              {/* Primary & Secondary CTAs + Social Icon Links */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent("Portfolio Inquiry")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <span>Get in Touch</span>
                </a>

                <div className="flex items-center gap-2 pl-1 sm:pl-3">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy Email Address"
                    title="Copy Email Address"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            FEATURED & ALL PROJECTS SECTION
        ==================================================================== */}
        <section
          id="projects"
          className="scroll-mt-20 border-b border-[var(--border-subtle)] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section Header + Category Filter Pills */}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Selected Engineering Work</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="mt-2 max-w-xl text-sm text-[var(--text-secondary)] sm:text-base">
                  Production systems, developer tools, and full-stack platforms
                  built for reliability and speed.
                </p>
              </div>

              {/* Category Filter Bar */}
              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="flex flex-wrap items-center gap-2"
              >
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[var(--accent)] text-white shadow-xs"
                          : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tech Filter Indicator (if clicked from Tech Stack) */}
            {selectedTechFilter && (
              <div className="mt-6 flex items-center justify-between rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-4 py-2.5 text-xs">
                <span className="font-mono text-[var(--text-primary)]">
                  Filtering projects using:{" "}
                  <strong className="text-[var(--accent)]">
                    {selectedTechFilter}
                  </strong>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedTechFilter(null)}
                  className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:underline"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear filter
                </button>
              </div>
            )}

            {/* Bento-style Project Grid */}
            {filteredProjects.length === 0 ? (
              <div className="mt-10 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-12 text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                  No projects match the current filter combination.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedTechFilter(null);
                  }}
                  className="mt-4 rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:shadow-md"
                  >
                    {/* Visual Header */}
                    <ProjectVisualHeader
                      type={project.visualType}
                      category={project.category}
                      banner={project.banner}
                    />

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Metric Highlight Pill */}
                      <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--accent)]">
                        <Activity className="h-3 w-3 shrink-0" />
                        <span>{project.metric}</span>
                      </div>

                      {/* Title & 2-line Problem/Solution Summary */}
                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {project.shortDescription}
                      </p>

                      {/* Monospace Tech Stack Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--text-secondary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Footer: Live Demo, Source Code & Architecture Details */}
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
                        <div className="flex items-center gap-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)]"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          )}
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          >
                            <FaGithub className="h-3.5 w-3.5" />
                            <span>Source Code</span>
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                        >
                          <span>Architecture</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            TECH STACK SECTION
        ==================================================================== */}
        <section
          id="tech-stack"
          className="scroll-mt-20 border-b border-[var(--border-subtle)] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                <Cpu className="h-3.5 w-3.5" />
                <span>Core Capabilities</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Technical Stack
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base">
                Technologies I use across software development, cloud
                infrastructure, AI-assisted workflows, and business systems.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {stackCategories.map((category) => {
                const items = portfolioData.techStack.filter(
                  (t) => t.category === category,
                );
                return (
                  <div
                    key={category}
                    className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 border-b border-[var(--border-subtle)] pb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                        {getCategoryIcon(category)}
                      </div>
                      <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                        {category}
                      </h3>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {items.map((tech) => {
                        const isSelected = selectedTechFilter === tech.name;
                        return (
                          <button
                            key={tech.name}
                            type="button"
                            onClick={() => {
                              setSelectedTechFilter((prev) =>
                                prev === tech.name ? null : tech.name,
                              );
                              document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`group inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
                              isSelected
                                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                                : "border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                isSelected
                                  ? "bg-white"
                                  : "bg-[var(--accent)] opacity-60 group-hover:opacity-100"
                              }`}
                            />
                            <span>{tech.name}</span>
                            {tech.tag && (
                              <span
                                className={`rounded px-1.5 py-0.2 text-[10px] ${
                                  isSelected
                                    ? "bg-white/20 text-white"
                                    : "bg-[var(--bg-card)] text-[var(--text-secondary)]"
                                }`}
                              >
                                {tech.tag}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            ABOUT & EXPERIENCE SNAPSHOT (TWO-COLUMN LAYOUT)
        ==================================================================== */}
        <section
          id="experience"
          className="scroll-mt-20 border-b border-[var(--border-subtle)] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Narrative Bio & Engineering Philosophy */}
              <div className="lg:col-span-5">
                <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Background & Philosophy</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                  About Me
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {portfolioData.about.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Engineering Principles Cards */}
                <div className="mt-8 space-y-3">
                  {portfolioData.about.principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4"
                    >
                      <h3 className="font-display text-sm font-bold text-[var(--text-primary)]">
                        {principle.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Vertical Timeline of Experience & Education */}
              <div className="lg:col-span-7">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    Experience & Education
                  </h3>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    2019 — Present
                  </span>
                </div>

                <div className="relative space-y-6 border-l border-[var(--border-subtle)] pl-6 ml-3">
                  {portfolioData.experience.map((item) => (
                    <div key={item.id} className="relative">
                      {/* Timeline Node Icon */}
                      <span className="absolute -left-[37px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--accent)] shadow-2xs">
                        {item.type === "work" ? (
                          <Briefcase className="h-3 w-3" />
                        ) : (
                          <GraduationCap className="h-3 w-3" />
                        )}
                      </span>

                      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-2xs transition-colors hover:border-[var(--accent)]/50">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="font-display text-base font-bold text-[var(--text-primary)]">
                            {item.role}
                          </h4>
                          <span className="rounded-md bg-[var(--bg-canvas)] px-2.5 py-0.5 font-mono text-xs font-medium text-[var(--accent)] border border-[var(--border-subtle)]">
                            {item.period}
                          </span>
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
                          <span>{item.organization}</span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {item.summary}
                        </p>

                        <ul className="mt-3 space-y-1.5">
                          {item.highlights.map((hl, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            CONTACT & FOOTER SECTION
        ==================================================================== */}
        <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left: Direct Contact & Copy Email */}
              <div className="lg:col-span-5">
                <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Get in Touch</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                  Let’s build something resilient.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  Whether you’re hiring for a senior engineering role,
                  architecting a new platform, or want to discuss distributed
                  systems, my inbox is open.
                </p>

                {/* Copy-to-Clipboard Email Card */}
                <div className="mt-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                    Direct Email
                  </span>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="truncate font-mono text-sm font-medium text-[var(--text-primary)]">
                      {portfolioData.personal.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <FaLinkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Right: Email Provider Options */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-2xs">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    Email Me Directly!
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    You have something in your mind you want to discuss? Open a
                    new message to me.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent("Portfolio Inquiry")}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
                    >
                      <Mail className="h-4 w-4" />
                      Default Email App
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}&su=${encodeURIComponent("Portfolio Inquiry")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Gmail
                    </a>
                    <a
                      href={`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(portfolioData.personal.email)}&subject=${encodeURIComponent("Portfolio Inquiry")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Outlook
                    </a>
                    <a
                      href={`https://compose.mail.yahoo.com/?to=${encodeURIComponent(portfolioData.personal.email)}&subject=${encodeURIComponent("Portfolio Inquiry")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Yahoo Mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER
      ==================================================================== */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-[var(--text-secondary)] sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-[var(--text-primary)]">
              {portfolioData.personal.monogram}
            </span>
            <span>
              © {currentYear} {portfolioData.personal.name}. Engineered with
              React, TypeScript & Tailwind.
            </span>
          </div>
          <div className="flex items-center gap-5 font-mono">
            <a href="#top" className="hover:text-[var(--accent)]">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          PROJECT ARCHITECTURE DETAILS MODAL
      ==================================================================== */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Dialog */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-2xl">
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/95 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-xs font-semibold text-[var(--accent)]">
                  {activeProject.category}
                </span>
                <span className="font-mono text-xs text-[var(--text-secondary)]">
                  System Deep-Dive
                </span>
              </div>
              <button
                ref={modalCloseRef}
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3
                id="modal-project-title"
                className="font-display text-2xl font-bold text-[var(--text-primary)]"
              >
                {activeProject.title}
              </h3>

              <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent)]">
                <Activity className="h-3.5 w-3.5" />
                <span>{activeProject.metric}</span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Architectural Overview
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-primary)]">
                    {activeProject.architecture.overview}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Engineering Challenges & Trade-offs
                  </h4>
                  <ul className="mt-2.5 space-y-2.5">
                    {activeProject.architecture.challenges.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-3 text-xs leading-relaxed text-[var(--text-secondary)]"
                      >
                        <span className="mt-0.5 font-mono font-bold text-[var(--accent)]">
                          0{idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Key Capabilities
                  </h4>
                  <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {activeProject.architecture.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Technologies Used
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2.5 py-1 font-mono text-xs text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-[var(--border-subtle)] pt-5">
                <a
                  href={activeProject.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)]"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>View Source</span>
                </a>
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[var(--accent-hover)]"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TOAST NOTIFICATION
      ==================================================================== */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-xs font-semibold text-[var(--text-primary)] shadow-lg"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            <Check className="h-3.5 w-3.5" />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
