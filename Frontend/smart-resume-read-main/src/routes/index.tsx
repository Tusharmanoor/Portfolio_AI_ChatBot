import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { AiAssistant } from "@/components/site/AiAssistant";
import { Contact } from "@/components/site/Contact";
import { Education } from "@/components/site/Education";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { ProblemSolving } from "@/components/site/ProblemSolving";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";

const title = "Tushar Manoor — Java Backend & Generative AI Developer";
const description =
  "Portfolio of Tushar Manoor: Java Backend, Full-Stack and Generative AI developer. Explore projects, skills and chat with the AI Recruiter Assistant.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <AiAssistant />
        <About />
        <Projects />
        <Skills />
        <ProblemSolving />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
