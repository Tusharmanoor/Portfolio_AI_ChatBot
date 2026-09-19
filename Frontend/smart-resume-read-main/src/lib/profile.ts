// Source of truth: Tushar Manoor's resume.

export const profile = {
  name: "Tushar Manoor",
  titles: ["Java Backend Developer", "Full-Stack Developer", "Generative AI"],
  phone: "+91-8595728626",
  email: "tusharm0809@gmail.com",
  linkedin: "https://www.linkedin.com/in/tushar-manoor-backenddeveloper",
  github: "https://github.com/Tusharmanoor",
  summary:
    "B.Tech Computer Science student with a strong foundation in Java, Spring Boot, REST API development, MySQL, Spring Security, JWT, and Data Structures & Algorithms. Independently built a full-stack recruitment platform using React and Spring Boot, with an AI-powered resume screening and job matching workflow using Python, FastAPI, and Generative AI. Currently building a portfolio AI chatbot using React, Spring Boot, FastAPI, LLM API calls, prompt engineering, Pydantic, PDF processing, and structured JSON outputs.",
};

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Programming Languages", items: ["Java", "C++", "Python", "JavaScript"] },
  {
    label: "Backend Development",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Spring Security",
      "JWT",
      "FastAPI",
    ],
  },
  { label: "Frontend Development", items: ["React.js", "HTML", "CSS", "JavaScript"] },
  { label: "Databases", items: ["MySQL", "H2"] },
  {
    label: "Generative AI",
    items: [
      "LLM API Calling",
      "Prompt Engineering",
      "System/User Roles",
      "Temperature",
      "Tokens",
      "Pydantic",
      "JSON Structured Output",
      "AI Resume Matching",
    ],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Swagger/OpenAPI"],
  },
  { label: "AI Tools & Libraries", items: ["Groq", "PyPDF", "Python-dotenv"] },
  {
    label: "Core Concepts",
    items: ["OOP", "Data Structures & Algorithms", "DBMS", "REST Architecture", "API Design"],
  },
];

export interface Project {
  name: string;
  tagline: string;
  year: string;
  featured?: boolean;
  tech: string[];
  points: string[];
}

export const projects: Project[] = [
  {
    name: "NEXUS AI",
    tagline: "AI-Powered Resume Screening & Job Matching Platform",
    year: "2026",
    featured: true,
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "JWT",
      "Python",
      "FastAPI",
      "Generative AI",
    ],
    points: [
      "Independently designed and developed a full-stack recruitment platform connecting candidates and recruiters through job discovery, job posting, resume upload, and application management workflows.",
      "Built REST APIs using Spring Boot, Spring Data JPA, Hibernate, and MySQL following a layered architecture with controllers, services, repositories, models, and DTOs.",
      "Implemented authentication and authorization using Spring Security and JWT with protected candidate and recruiter workflows.",
      "Developed candidate features for browsing, searching, and filtering jobs, viewing job details, uploading resumes, and submitting applications.",
      "Developed recruiter features for creating, updating, deleting, and managing job openings and viewing candidate applications.",
      "Integrated a Python FastAPI AI service with Spring Boot to analyze resumes against job requirements and generate AI-powered candidate-job matching results.",
      "Implemented LLM-based resume analysis using prompt engineering, Pydantic models, and structured JSON outputs for AI-powered screening and skill analysis.",
    ],
  },
  {
    name: "GENAI RESUME MATCHER",
    tagline: "AI-Powered Resume Analysis API",
    year: "2026",
    tech: ["Python", "FastAPI", "LLM API", "Pydantic", "PyPDF", "JSON"],
    points: [
      "Built an AI-powered resume matcher that extracts resume content from PDF files and analyzes candidates against job descriptions.",
      "Implemented PDF text extraction and resume parsing using PyPDF and structured Pydantic models.",
      "Used LLM API calls and prompt engineering to compare candidate information with job requirements and generate matching results.",
      "Implemented structured JSON output for match scores, matched skills, missing skills, and candidate analysis.",
      "Built and tested REST API endpoints using FastAPI for resume analysis and candidate matching.",
    ],
  },
  {
    name: "PORTFOLIO AI CHATBOT",
    tagline: "AI Assistant for My Portfolio",
    year: "2026",
    tech: [
      "React",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Python",
      "FastAPI",
      "LLM API",
      "Pydantic",
      "PyPDF",
    ],
    points: [
      "Building an AI chatbot that answers recruiter questions about my profile using my resume as the primary source of information.",
      "Developing the backend using Spring Boot with REST APIs and a layered Controller-Service architecture to handle chatbot requests and communicate with the AI service.",
      "Building a React-based chatbot interface for sending recruiter questions and displaying AI-generated responses.",
      "Integrating Spring Boot with a Python FastAPI service that handles resume processing and LLM-based response generation.",
      "Implemented resume PDF text extraction and structured output using PyPDF and Pydantic models.",
      "Designed system and user prompts to provide accurate, relevant responses while preventing the model from inventing information.",
      "Using LLM API calls with structured JSON responses and preparing the complete application for deployment as part of my personal portfolio.",
    ],
  },
];

export const problemSolving = {
  platform: "LeetCode",
  solved: "135+",
  topics: [
    "Two Pointers",
    "Sliding Window",
    "Kadane's Algorithm",
    "Binary Search",
    "Stack",
    "Heap",
    "Recursion",
    "Trees",
  ],
};

export const certifications = [
  "AWS Foundation Certificate",
  "CT University Hackathon Participation Certificate",
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "ABES Engineering College, AKTU",
    location: "Ghaziabad, Uttar Pradesh",
    meta: "Expected Graduation: 2028",
  },
  {
    degree: "Schooling",
    school: "Shri Guru Ram Rai Public School",
    location: "Ghaziabad, Uttar Pradesh",
    meta: "",
  },
];

export const suggestedQuestions = [
  "What projects has Tushar built?",
  "What are Tushar's core technical skills?",
  "Tell me about his Java and Spring Boot experience.",
  "Tell me about NexusAI.",
  "What Generative AI technologies does Tushar use?",
  "What is Tushar's educational background?",
  "What is his DSA/problem-solving experience?",
];
