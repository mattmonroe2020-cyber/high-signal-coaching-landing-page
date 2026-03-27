import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useLocation } from "wouter";

const modules = [
  {
    num: "0",
    title: "Foundation",
    desc: "Orientation to the three-layer model. Your parts baseline. The protocol for when systems break down — because they will.",
    topics: ["Three-Layer Model (Hardware / Software / Environment)", "Parts baseline assessment", "What to do when the system stops working"],
  },
  {
    num: "1",
    title: "North Star",
    desc: "Identify what you actually want — not what you think you should want, not what would make someone else proud. The starting point for everything else.",
    topics: ["Separating 'I should' from 'I want'", "Covert contracts and how they distort goals", "ADHD time blindness and the now/not-now brain"],
  },
  {
    num: "2",
    title: "Inner Landscape",
    desc: "Map your internal system. The parts that protect, the parts that drive, and the Self that can lead all of them.",
    topics: ["Full IFS framework introduction", "Manager and firefighter protectors", "Self-energy and how to recognize it"],
  },
  {
    num: "3",
    title: "Hardware",
    desc: "Understand your neurology without shame — and start designing for it instead of fighting it.",
    topics: ["ADHD and AuDHD neurology (Interest, Challenge, Novelty, Urgency)", "Executive function architecture", "The Rumpelstiltskin Effect — what diagnosis actually changes"],
  },
  {
    num: "4",
    title: "Shame Layer",
    desc: "Name the story underneath the avoidance. Address it before building anything else. This is the layer most programs skip.",
    topics: ["How shame drives system sabotage", "Parts carrying 'lazy / broken / not enough' narratives", "What exiles are protecting and why protectors exist"],
  },
  {
    num: "5",
    title: "Infrastructure",
    desc: "Build external systems with your actual brain — not the brain productivity culture assumes you have.",
    topics: ["Designing for the ICNU motivation profile", "Eisenhower matrix adapted for ND brains", "Parkinson's Law and time distortion"],
  },
  {
    num: "6",
    title: "Less Is More",
    desc: "Subtract what doesn't belong. Protect what does. Capacity is not infinite — and pretending it is has a cost.",
    topics: ["Optimal Minimal framework", "The Preemptive No", "Parts that protest subtraction and why"],
  },
  {
    num: "7",
    title: "Communication",
    desc: "Clean agreements, clear limits, direct asks — without the covert contracts. What you say and what you mean, aligned.",
    topics: ["Covert contract identification and dissolution", "Direct communication for NMMNG patterns", "IFS-informed parts work for Nice Guy relational dynamics"],
  },
  {
    num: "8",
    title: "Opening Up",
    desc: "Identity integration, genuine connection, and what holds when the program ends. The Lone Wolf comes down from the mountain.",
    topics: ["Identity Statement and Reset Protocol", "Authenticity vs Attachment Resolution", "Three-legged stool sustainability framework", "90-Day continuity plan"],
  },
];

export default function Artifacts() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b nav-header-dark">
        <div className="container flex items-center justify-between h-20 md:h-24 gap-4">
          <div className="p-[10px] flex-shrink-0">
            <img src="/logo.svg" alt="High Signal Coaching" className="nav-logo logo-on-dark" style={{ width: '200px', minWidth: '200px' }} />
          </div>
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <button onClick={() => navigate("/")} className="nav-link nav-link-dark">
              HOME
            </button>
          </nav>
          <Button size="sm" className="btn-copper flex-shrink-0" onClick={() => window.open("https://calendly.com/matt-highsignal", "_blank")}>
            Book a Discovery Call
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Curriculum
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nine modules. Three layers. One sequence that doesn't skip the part everyone else skips.
              This is the full program arc — from orientation through identity integration.
            </p>
            <div className="copper-divider max-w-sm mt-10" />
          </div>
        </div>
      </section>

      {/* Three-layer legend */}
      <section className="py-8 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">The Three-Layer Model</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground text-sm">Hardware</p>
                <p className="text-xs text-muted-foreground mt-1">ND Neurology</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground text-sm">Software</p>
                <p className="text-xs text-muted-foreground mt-1">Internal System (IFS)</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground text-sm">Environment</p>
                <p className="text-xs text-muted-foreground mt-1">External Scaffolding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module list */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            {modules.map((module) => (
              <div key={module.num} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0 text-lg">
                    {module.num}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-xl mb-2 text-foreground">{module.title}</h2>
                    <p className="text-muted-foreground mb-4">{module.desc}</p>
                    <ul className="space-y-1">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">–</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to work through this?
            </h2>
            <p className="text-muted-foreground mb-8">
              The discovery call is 30 minutes. No pitch — just an honest conversation about whether this is the right fit.
            </p>
            <Button size="lg" className="btn-copper" onClick={() => window.open("https://calendly.com/matt-highsignal", "_blank")}>
              <Calendar className="mr-2 h-5 w-5" />
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} High Signal Coaching. All rights reserved.</p>
          <p className="mt-2 max-w-xl mx-auto">
            High Signal Coaching is a professional coaching service, not therapy or clinical treatment.
          </p>
        </div>
      </footer>
    </div>
  );
}
