import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Clock, 
  Users, 
  Lightbulb, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  Download,
  Calendar,
  Mail,
  Linkedin,
  FileText,
  BarChart3,
  Shield,
  Brain
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    stage: "",
    isNeurodivergent: false,
  });

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setShowThankYou(true);
      toast.success("Success! Check your email for the guide.");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    submitLead.mutate({
      firstName: formData.firstName,
      email: formData.email,
      company: formData.company || undefined,
      stage: formData.stage as "pre-seed" | "seed" | "series-a" | "other" | undefined,
      isNeurodivergent: formData.isNeurodivergent,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      email: "",
      company: "",
      stage: "",
      isNeurodivergent: false,
    });
    setShowThankYou(false);
  };

  const openModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-20 md:h-24 gap-4">
          <div className="p-[10px] flex-shrink-0">
            <img src="/logo.svg" alt="High Signal Coaching" className="nav-logo" style={{ width: '200px', minWidth: '200px' }} />
          </div>
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <button onClick={() => scrollToSection("problem")} className="nav-link text-muted-foreground hover:text-foreground transition-colors">
              THE PROBLEM
            </button>
            <button onClick={() => scrollToSection("solution")} className="nav-link text-muted-foreground hover:text-foreground transition-colors">
              SOLUTION
            </button>
            <button onClick={() => scrollToSection("program")} className="nav-link text-muted-foreground hover:text-foreground transition-colors">
              PROGRAM
            </button>
            <button onClick={() => scrollToSection("faq")} className="nav-link text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </button>
          </nav>
          <Button size="sm" className="btn-copper flex-shrink-0" onClick={() => window.open("https://calendly.com/matt-highsignal", "_blank")}>
            Book a Discovery Call
          </Button>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="hero-section pt-24 md:pt-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-headline text-foreground tracking-tight">
              You know what to do.<br className="hidden md:block" /> You've known for a while.<br className="hidden md:block" /> The problem isn't information.
            </h1>
            <p className="hero-subheadline text-muted-foreground text-center">
              High Signal Coaching is a self-leadership program for ADHD and AuDHD men in tech who have tried every productivity system and watched each one quietly collapse. The work starts where those systems failed: inside.
            </p>
            <div className="hero-buttons">
              <Button size="lg" className="btn-copper" onClick={() => window.open("https://calendly.com/matt-highsignal", "_blank")}>
                <Calendar className="mr-2 h-5 w-5" />
                Book a 30-Minute Discovery Call
              </Button>
              <Button size="lg" variant="outline" className="btn-copper-outline" onClick={openModal}>
                <Download className="mr-2 h-5 w-5" />
                Download "The 3 Parts That Block Every System" Guide
              </Button>
            </div>
          </div>
          {/* Decorative copper line */}
          <div className="copper-divider max-w-md mx-auto mt-16" />
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section id="problem" className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              The Execution Gap
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Not a character flaw. Not a willpower problem.<br />
              <span className="text-foreground font-medium">A system designed for the wrong brain.</span>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The system collapses</h3>
                    <p className="text-muted-foreground">You built it. It worked for three weeks. Then it stopped working and you became the problem again.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The tools aren't wrong, the layer is</h3>
                    <p className="text-muted-foreground">Standard productivity tools assume knowing what to do is enough. For a neurodivergent brain, that's architecturally incorrect.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The shame runs underneath everything</h3>
                    <p className="text-muted-foreground">The real blocker isn't distraction. It's the story — lazy, broken, not capable enough — that fires every time a system fails.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">The part that's supposed to run the system won't</h3>
                    <p className="text-muted-foreground">There's a part of your internal system that shut down trust in tools a long time ago. Until it's addressed, no system holds.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mt-10 text-lg text-foreground font-medium max-w-2xl mx-auto">
              The problem has never been the system. It's been building systems on top of a foundation that hasn't been addressed.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section id="solution" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why other approaches haven't worked — and what does
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-14 max-w-3xl mx-auto">
              This is not therapy. It is not another task manager. It is a framework for understanding why the tools keep failing — and fixing the actual problem, not the symptom.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4">Hardware (ND Neurology)</h3>
                <ul className="text-muted-foreground space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Your brain runs on Interest, Challenge, Novelty, and Urgency — not importance or obligation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Standard systems are designed for a different brain. This layer addresses the neurology directly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Design for how your brain actually works — not fight it</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4">Software (Internal System)</h3>
                <ul className="text-muted-foreground space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Parts of your internal system built the elaborate plans and sabotaged their own implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Understanding what those parts are protecting — and working with them — is the layer most coaching skips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>IFS-informed: find the part, hear what it needs, then return to the tool</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4">Environment (Scaffolding)</h3>
                <ul className="text-muted-foreground space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>External systems and structures that compensate for the hardware instead of requiring willpower to override it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>These only hold when the first two layers are doing their job</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Built with your actual brain — not the brain productivity culture assumes you have</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROGRAM STRUCTURE */}
      <section id="program" className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              The Program
            </h2>
            <div className="space-y-4">
              {[
                { num: "0", title: "Foundation", desc: "Orientation: the three-layer model, your parts baseline, and the protocol for when systems break" },
                { num: "1", title: "North Star", desc: "Identify what you actually want — not what you think you should want" },
                { num: "2", title: "Inner Landscape", desc: "Map your internal system: the parts that protect, the parts that drive, and the Self that can lead" },
                { num: "3", title: "Hardware", desc: "Understand your neurology without shame — and start designing for it" },
                { num: "4", title: "Shame Layer", desc: "Name the story underneath the avoidance. Address it before building anything else." },
                { num: "5", title: "Infrastructure", desc: "Build external systems with your actual brain — not the brain you think you should have" },
                { num: "6", title: "Less Is More", desc: "Subtract what doesn't belong. Protect what does." },
                { num: "7", title: "Communication", desc: "Clean agreements, clear limits, direct asks — without the covert contracts" },
                { num: "8", title: "Opening Up", desc: "Identity integration, genuine connection, and what holds when the program ends" },
              ].map((module) => (
                <div key={module.num} className="bg-card p-5 rounded-xl border border-border shadow-sm flex items-start gap-5">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {module.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{module.title}</h3>
                    <p className="text-muted-foreground text-sm">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block bg-card p-6 rounded-xl border-2 border-primary shadow-lg">
                <p className="text-lg font-semibold text-foreground mb-2">Investment</p>
                <p className="text-base text-muted-foreground">Pricing is discussed on the discovery call. This is a one-to-one engagement structured around your specific system — not a group course.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO THIS IS FOR */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Who this is for
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-lg mb-6 text-primary flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  This is for you if
                </h3>
                <ul className="space-y-4">
                  {[
                    "You have ADHD, AuDHD, or strong suspicion of either",
                    "You've built productivity systems that worked briefly and then failed — more than once",
                    "You know what to do and can't make yourself do it consistently — and you're tired of blaming yourself for that",
                    "You're high-functioning by most external measures and running out of capacity underneath",
                    "You've read the books. Done the therapy. You want something that works with your actual brain.",
                    "You're interested in understanding your internal system — not just getting new tactics",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-6 text-destructive flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  This is not for you if
                </h3>
                <ul className="space-y-4">
                  {[
                    "You're looking for accountability software or a habit tracker",
                    "You're in active psychiatric crisis and need clinical stabilization first",
                    "You want someone to tell you what to do — this program is Self-led by design",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              What changes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <blockquote className="text-lg text-muted-foreground italic mb-6">
                  "I finally understood why the systems kept failing. It wasn't that I was the problem — it was that I was building on top of something that had never been addressed. Once that changed, the tools actually held."
                </blockquote>
                <p className="font-semibold text-foreground">— Senior Engineer, 15 years of ADHD</p>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <blockquote className="text-lg text-muted-foreground italic mb-6">
                  "The IFS work combined with the scaffolding was exactly what I needed. I stopped building systems for an imaginary version of myself and started building for the brain I actually have."
                </blockquote>
                <p className="font-semibold text-foreground">— Tech Lead, AuDHD diagnosis at 38</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <p className="text-lg font-semibold text-primary mb-2">Systems that hold</p>
                <p className="text-sm text-muted-foreground">Past the first three weeks</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <p className="text-lg font-semibold text-primary mb-2">Less inner conflict</p>
                <p className="text-sm text-muted-foreground">Parts working with you, not against you</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <p className="text-lg font-semibold text-primary mb-2">Operating from Self</p>
                <p className="text-sm text-muted-foreground">Not from obligation, fear, or approval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEAD MAGNET CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-2xl border border-primary/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">Free Resource</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    The 3 Parts That Block Every System
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    A short guide to the internal parts that sabotage execution — and what they actually need before anything holds.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      The part that builds elaborate systems and refuses to run them
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      The part that fires when things are going well and whispers that you can ease up
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      The part underneath both of them — and what it actually needs before anything else holds
                    </li>
                  </ul>
                  <Button size="lg" className="btn-copper" onClick={openModal}>
                    <Download className="mr-2 h-5 w-5" />
                    Download "The 3 Parts That Block Every System" Guide
                  </Button>
                </div>
                <div className="hidden md:block w-48 h-64 bg-card rounded-lg border border-border shadow-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-sm font-medium">The 3 Parts That Block Every System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is this therapy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. This is coaching. The distinction matters architecturally: we work with parts at a protector level — building awareness, developing relationship with them, understanding what they're protecting. We do not facilitate deep trauma processing or exile unburdening. If what surfaces requires that depth, I'll say so and refer appropriately.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do I need an ADHD diagnosis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. Most clients come with a diagnosis; some come with strong suspicion and a lifetime of evidence. The program is designed for neurodivergent brains. If that's not you, it's probably not the right fit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do I need to know IFS before starting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. We build the framework from the ground up. By the time we're working with it directly, it's already familiar because we've been using the language from the start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How much time does this take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sessions are 60–90 minutes. The between-session work varies by module — some weeks require more, some less. Plan for 2–3 hours per week outside of sessions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What's the investment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pricing is discussed on the discovery call. This isn't a tiered product with a public rate card — it's structured around your engagement, timeline, and what the work actually requires.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is this right for me if I'm currently in therapy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Often yes. This program operates at a different layer than most therapy — it's coaching-scope IFS plus external scaffolding. Many clients run both simultaneously. The more relevant question is whether you have enough stability to be in forward-motion work right now. We'll figure that out on the call.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              If any of this sounds like the problem you've been trying to solve — let's talk.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              The discovery call is 30 minutes. No pitch. Just an honest conversation about whether this is the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-copper text-base px-8 py-6" onClick={() => window.open("https://calendly.com/matt-highsignal", "_blank")}>
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
              </Button>
              <Button size="lg" variant="outline" className="btn-copper-outline text-base px-8 py-6" onClick={openModal}>
                <Download className="mr-2 h-5 w-5" />
                Download "The 3 Parts That Block Every System" Guide
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Not ready to book? Download the free guide and start identifying the parts that are running the show.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.svg" alt="High Signal Coaching" className="h-10 w-auto mb-4" />
              <div className="space-y-2 text-muted-foreground">
                <a href="mailto:matt@highsignalcoaching.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  matt@highsignalcoaching.com
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn (TBD)
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Coaching vs Therapy Disclaimer</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                High Signal Coaching is a professional coaching service, not therapy or clinical treatment. If you are experiencing a mental health emergency, please contact a licensed mental health professional or crisis line. Licensed mental health services available separately through Matthew Monroe Simpson Counseling.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} High Signal Coaching. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Email Capture Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          {!showThankYou ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Download the Free Guide</DialogTitle>
                <DialogDescription>
                  Get "The 3 Parts That Block Every System" delivered straight to your inbox.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage">Stage</Label>
                  <Select value={formData.stage} onValueChange={(value) => setFormData({ ...formData, stage: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pre-seed">Pre-seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="neurodivergent"
                    checked={formData.isNeurodivergent}
                    onCheckedChange={(checked) => setFormData({ ...formData, isNeurodivergent: checked as boolean })}
                  />
                  <Label htmlFor="neurodivergent" className="text-sm text-muted-foreground">
                    I identify as neurodivergent (ADHD/autism/AuDHD)
                  </Label>
                </div>
                <Button type="submit" className="w-full btn-copper" disabled={submitLead.isPending}>
                  {submitLead.isPending ? "Sending..." : "Send Me the Playbook"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <DialogTitle className="text-2xl mb-4">Check Your Email!</DialogTitle>
              <p className="text-muted-foreground mb-6">
                The guide is on its way. If you want to talk through what you find in it, the discovery call is 30 minutes.
              </p>
              <Button className="btn-copper" onClick={() => window.open("https://calendly.com/matt-highsignal", "_blank")}>
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
