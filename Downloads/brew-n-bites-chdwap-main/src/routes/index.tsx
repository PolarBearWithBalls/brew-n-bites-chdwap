import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  Coffee,
  UtensilsCrossed,
  Users,
  ChevronDown,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Menu as MenuIcon,
  ArrowRight,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { z } from "zod";

import logo from "@/assets/logo.png";

const heroImg = "/images/Hero.png";
const aboutImg = "/images/About.png";
const coffeeImg = "/images/Coffee.png";
const foodImg = "/images/GarlicBread.png";
const dessertImg = "/images/Pizza&Shake.png";
const beverageImg = "/images/Shake.png";
const g1 = "/images/Fries.png";
const g2 = "/images/Guest.png";
const g3 = "/images/Pasta.png";
const g4 = "/images/GarlicBread.png";
const g5 = "/images/IceTea.png";
const g6 = "/images/Pizza&Shake.png";

const INSTAGRAM_URL = "https://www.instagram.com/brewn_bites";
const FACEBOOK_URL = "https://www.facebook.com/brewnbiteschd";
const MAPS_URL = "https://maps.app.goo.gl/TMSGp5sLdCvatouy5";
const MAPS_EMBED = "https://www.google.com/maps?q=Brew+N+Bites+Pugliya+Nagar+Civil+Lines+Chandrapur&output=embed";
const PHONE = "+91 84079 46464";
const PHONE_TEL = "+918407946464";
const ADDRESS = "Opposite Collector Bungalow, Pugliya Nagar, Civil Lines, Chandrapur, Maharashtra 442401";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brew N' Bites — Chandrapur's Cozy Cafe for Coffee & Conversations" },
      {
        name: "description",
        content:
          "Brew N' Bites is Chandrapur's favorite cafe for handcrafted coffee, comfort food, and meaningful conversations. Open daily 8 AM – 11 PM.",
      },
      { property: "og:title", content: "Brew N' Bites — Cafe in Chandrapur" },
      {
        property: "og:description",
        content: "Great coffee, great food, and a place for friends to gather.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: LandingPage,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <WhyUs />
      <MenuSection />
      <About />
      <Testimonials />
      <Gallery />
      <Visit />
      <ContactForm />
      <Social />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ============================== NAVBAR ============================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Brew N' Bites" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span
            className={`hidden sm:block font-display text-lg md:text-xl font-semibold tracking-tight ${
              scrolled ? "text-foreground" : "text-cream"
            }`}
          >
            Brew N' Bites
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/80" : "text-cream/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#visit"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-caramel px-5 py-2.5 text-sm font-semibold text-cream shadow-warm hover:opacity-95 transition"
          >
            Visit Us <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`md:hidden grid place-items-center h-10 w-10 rounded-full border ${
              scrolled
                ? "border-border bg-background/80 text-foreground"
                : "border-cream/30 bg-black/20 text-cream"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <ul className="container-x py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-foreground/90 hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full justify-center items-center gap-2 rounded-full gradient-caramel px-5 py-3 text-sm font-semibold text-cream"
                >
                  Visit Us <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =============================== HERO =============================== */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Brew N' Bites cafe interior at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/55 to-espresso/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-x flex min-h-[100svh] flex-col items-center justify-center text-center pt-24 pb-32"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-black/20 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream/90"
        >
          <Coffee className="h-3.5 w-3.5" /> Chandrapur, Maharashtra
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-[3.25rem] leading-[1.02] sm:text-7xl md:text-8xl font-bold text-cream"
        >
          Brew N&apos; <span className="text-gradient-warm italic">Bites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-cream/90"
        >
          Chandrapur&apos;s favorite destination for coffee, comfort food, and meaningful
          conversations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 max-w-xl text-sm text-cream/70"
        >
          Whether you&apos;re catching up with friends, working remotely, or simply enjoying your
          favorite brew — we&apos;ve saved a seat for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 rounded-full gradient-caramel px-7 py-3.5 text-sm font-semibold text-cream shadow-warm hover:scale-[1.02] transition"
          >
            View Menu <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/70 hover:text-cream"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}

/* ============================== WHY US ============================== */
function WhyUs() {
  const items = [
    {
      icon: Coffee,
      title: "Freshly Brewed Coffee",
      desc: "Rich, flavorful coffee crafted by our passionate baristas with carefully selected beans.",
    },
    {
      icon: UtensilsCrossed,
      title: "Delicious Café Food",
      desc: "Perfect snacks, meals and treats to complement every cup — made with love, served warm.",
    },
    {
      icon: Users,
      title: "Community & Conversations",
      desc: "A welcoming environment where friends, families and professionals come together.",
    },
  ];
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Crafted with care, served with warmth"
          subtitle="Three reasons our regulars keep coming back."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm hover:border-accent/40">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-caramel text-cream shadow-warm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <it.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== MENU ============================== */
const menuData = {
  Coffee: {
    image: coffeeImg,
    items: [
      { name: "Cappuccino", desc: "Espresso topped with silky steamed milk foam.", price: "₹160" },
      { name: "Café Latte", desc: "Smooth espresso with creamy steamed milk.", price: "₹180" },
      { name: "Espresso", desc: "A bold, concentrated shot of pure coffee.", price: "₹120" },
      { name: "Cold Coffee", desc: "Chilled, blended coffee with a velvety crown.", price: "₹190" },
    ],
  },
  Beverages: {
    image: beverageImg,
    items: [
      { name: "Iced Tea", desc: "Refreshing brewed tea over ice with lemon.", price: "₹140" },
      { name: "Mint Mojito", desc: "Crisp mint, lime and soda — pure refreshment.", price: "₹170" },
      { name: "Milkshakes", desc: "Thick, creamy shakes in classic flavors.", price: "₹210" },
      { name: "Hot Chocolate", desc: "Rich Belgian cocoa with whipped cream.", price: "₹180" },
    ],
  },
  Food: {
    image: foodImg,
    items: [
      { name: "Grilled Sandwich", desc: "Toasted artisan bread with melted fillings.", price: "₹220" },
      { name: "Signature Burger", desc: "Juicy patty, fresh greens, house sauce.", price: "₹260" },
      { name: "Creamy Pasta", desc: "Penne in a rich, herbed creamy sauce.", price: "₹280" },
      { name: "Loaded Fries", desc: "Crispy fries with cheese and seasonings.", price: "₹180" },
    ],
  },
  Desserts: {
    image: dessertImg,
    items: [
      { name: "Choco Brownie", desc: "Warm fudgy brownie with vanilla scoop.", price: "₹190" },
      { name: "Slice of Cake", desc: "Daily selection of freshly baked cakes.", price: "₹170" },
      { name: "Cookies", desc: "Crunchy on the edge, chewy in the middle.", price: "₹90" },
      { name: "Cheesecake", desc: "Creamy, dreamy classic New York style.", price: "₹220" },
    ],
  },
} as const;

type Category = keyof typeof menuData;

function MenuSection() {
  const cats = Object.keys(menuData) as Category[];
  const [active, setActive] = useState<Category>("Coffee");
  const current = menuData[active];

  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Featured Menu"
          title="A taste of what we love"
          subtitle="From bold espresso to comforting bites — explore our favorites."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active === c
                  ? "gradient-warm text-cream shadow-warm"
                  : "bg-card text-foreground/70 border border-border hover:text-foreground hover:border-accent/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {current.items.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card border border-border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={current.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ============================== ABOUT ============================== */
function About() {
  const stats = [
    { value: 12000, suffix: "+", label: "Happy Customers" },
    { value: 50000, suffix: "+", label: "Cups Served" },
    { value: 80, suffix: "+", label: "Menu Items" },
    { value: 5, suffix: "+", label: "Years of Service" },
  ];
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] gradient-caramel opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-warm">
                <img
                  src={aboutImg}
                  alt="Inside Brew N' Bites cafe"
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 hidden sm:flex flex-col items-center justify-center rounded-2xl gradient-warm px-6 py-4 text-cream shadow-warm">
                <span className="font-display text-3xl font-bold">★ 4.9</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80">
                  Google Rating
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
              A cup, a bite, a moment that matters
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Brew N&apos; Bites was created with a simple vision: to bring together great coffee,
              satisfying food, and wonderful people under one roof. Located in the heart of
              Chandrapur, our café has become a favorite spot for friends, families, students, and
              professionals looking for a warm and welcoming atmosphere.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground italic">
              &ldquo;Coffee is our fuel. Food is our medicine. People are life.&rdquo;
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient-warm">
                    <Counter to={s.value} />
                    {s.suffix}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

/* =========================== TESTIMONIALS =========================== */
function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Regular customer",
      text: "Best coffee spot in Chandrapur. Amazing ambiance and great service — feels like a second home.",
    },
    {
      name: "Priya Deshmukh",
      role: "Food blogger",
      text: "The food is delicious and the atmosphere is perfect for meeting friends. The brownie is unreal.",
    },
    {
      name: "Rohan Kale",
      role: "Remote worker",
      text: "My favorite place to work and relax. Strong Wi-Fi, calm vibes, and the cappuccino keeps me going.",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, [reviews.length]);

  return (
    <section className="py-24 md:py-32 gradient-warm text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container-x relative">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cream/70">
            Loved by Our Guests
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-cream">
            Customer experiences
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-cream/10 border border-cream/20 backdrop-blur-xl p-8 md:p-12 text-center shadow-warm"
            >
              <div className="flex justify-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl md:text-3xl leading-snug text-cream italic">
                &ldquo;{reviews[idx].text}&rdquo;
              </p>
              <div className="mt-8">
                <div className="font-semibold text-cream">{reviews[idx].name}</div>
                <div className="text-sm text-cream/70">{reviews[idx].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 bg-cream/10 text-cream hover:bg-cream/20 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-8 bg-accent" : "w-2 bg-cream/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % reviews.length)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 bg-cream/10 text-cream hover:bg-cream/20 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== GALLERY ============================== */
function Gallery() {
  const imgs = [g1, g2, g3, g4, g5, g6];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments worth savoring"
          subtitle="A glimpse into the everyday magic of Brew N' Bites."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setOpen(i)}
                className={`group relative w-full overflow-hidden rounded-2xl shadow-soft ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-espresso/0 transition-all duration-300 group-hover:bg-espresso/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-espresso/95 backdrop-blur-sm grid place-items-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((o) => (o === null ? null : (o - 1 + imgs.length) % imgs.length));
              }}
              aria-label="Previous"
              className="absolute left-3 md:left-8 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((o) => (o === null ? null : (o + 1) % imgs.length));
              }}
              aria-label="Next"
              className="absolute right-3 md:right-8 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={imgs[open]}
              alt={`Gallery ${open + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-warm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================== VISIT ============================== */
function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Visit Us"
          title="Come say hello"
          subtitle="We'd love to brew something special for you."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px]">
              <iframe
                title="Brew N' Bites location"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[15%]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-card border border-border shadow-soft p-8 md:p-10">
              <h3 className="font-display text-3xl font-semibold text-foreground">Brew N&apos; Bites</h3>
              <p className="mt-2 text-muted-foreground">Chandrapur, Maharashtra, India</p>
              <ul className="mt-8 space-y-5">
                <InfoRow icon={MapPin} title="Address" text={ADDRESS} />
                <InfoRow
                  icon={Clock}
                  title="Opening Hours"
                  text="Monday – Sunday · 8:30 AM – 11:00 PM"
                />
                <InfoRow icon={Phone} title="Phone" text={PHONE} />
                <InfoRow icon={Mail} title="Email" text="hello@brewnbites.in" />
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full gradient-caramel px-6 py-3 text-sm font-semibold text-cream shadow-warm hover:scale-[1.02] transition"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-foreground">{text}</div>
      </div>
    </li>
  );
}

/* ============================ CONTACT FORM ============================ */
const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only numbers and + - ( ) allowed"),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Add a subject").max(150),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    // TODO: wire up to backend (Lovable Cloud) when ready.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    toast.success("Thank you! We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container-x max-w-3xl">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Drop us a message"
          subtitle="Questions, feedback, or just want to say hi? We're listening."
        />
        <form
          onSubmit={onSubmit}
          noValidate
          className="mt-12 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full Name"
              value={form.name}
              onChange={onChange("name")}
              error={errors.name}
              placeholder="Your name"
            />
            <Field
              label="Phone Number"
              value={form.phone}
              onChange={onChange("phone")}
              error={errors.phone}
              placeholder="+91 ..."
              type="tel"
            />
            <Field
              label="Email"
              value={form.email}
              onChange={onChange("email")}
              error={errors.email}
              placeholder="you@example.com"
              type="email"
            />
            <Field
              label="Subject"
              value={form.subject}
              onChange={onChange("subject")}
              error={errors.subject}
              placeholder="How can we help?"
            />
          </div>
          <div className="mt-5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={onChange("message")}
              rows={5}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition"
            />
            {errors.message && (
              <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full gradient-caramel px-8 py-3.5 text-sm font-semibold text-cream shadow-warm hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Send Message"} <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition"
      />
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

/* ============================== SOCIAL ============================== */
function Social() {
  const socials = [
    {
      name: "Instagram",
      handle: "@brewn_bites",
      icon: Instagram,
      href: INSTAGRAM_URL,
      grad: "from-pink-500 via-rose-500 to-amber-500",
    },
    {
      name: "Facebook",
      handle: "/brewnbiteschd",
      icon: Facebook,
      href: FACEBOOK_URL,
      grad: "from-blue-600 to-indigo-600",
    },
    {
      name: "WhatsApp",
      handle: PHONE,
      icon: MessageCircle,
      href: `https://wa.me/${PHONE_TEL.replace("+", "")}`,
      grad: "from-emerald-500 to-green-600",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Follow our journey"
          subtitle="Daily brews, behind-the-counter moments, and community stories."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.grad} text-white shadow-warm transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.handle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Follow <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ FINAL CTA ============================ */
function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-warm px-6 py-20 sm:px-16 sm:py-24 text-center shadow-warm">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cream/70">
              See you soon
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream">
              Ready for your next <span className="text-gradient-warm italic">coffee break?</span>
            </h2>
            <p className="mt-6 mx-auto max-w-xl text-cream/80">
              Join us at Brew N&apos; Bites and experience great coffee, delicious food, and
              unforgettable conversations.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-espresso shadow-warm hover:scale-[1.03] transition"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Brew N' Bites" className="h-12 w-12 object-contain" />
              <span className="font-display text-xl font-semibold text-cream">Brew N&apos; Bites</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Coffee is our fuel. Food is our medicine. People are life.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
                { Icon: Facebook, href: FACEBOOK_URL, label: "Facebook" },
                { Icon: MessageCircle, href: `https://wa.me/${PHONE_TEL.replace("+", "")}`, label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 hover:bg-accent hover:border-accent hover:text-cream transition"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-cream">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-cream">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                Pugliya Nagar, Civil Lines, Chandrapur 442401
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />8:30 AM – 11 PM, Daily
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-accent">{PHONE}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                hello@brewnbites.in
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© 2025 Brew N&apos; Bites. All Rights Reserved.</p>
          <p>Crafted with warmth in Chandrapur.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================== HELPERS ============================== */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
      </div>
    </Reveal>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
