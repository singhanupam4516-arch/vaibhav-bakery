import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-bakery.jpg";
import cakesImg from "@/assets/cat-cakes.jpg";
import breadsImg from "@/assets/cat-breads.jpg";
import snacksImg from "@/assets/cat-snacks.jpg";
import dairyImg from "@/assets/cat-dairy.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Cake, Croissant, Cookie, Milk, ArrowRight, Navigation } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+91 73477 64629";
const PHONE_TEL = "+917347764629";
const MAPS_URL = "https://maps.app.goo.gl/XYu27A7bnbqxZVHh7";
const ADDRESS = "Virendra Bhawan, 555/5, opposite Damkal Kendra, Nirala Nagar, Raebareli, Uttar Pradesh 229001";

const categories = [
  { title: "Signature Cakes", desc: "Fresh cream, chocolate truffle, black forest, pineapple & custom birthday cakes baked to order.", img: cakesImg, icon: Cake },
  { title: "Breads & Buns", desc: "Soft bread loaves, pav, burger buns and rusks — baked fresh every morning.", img: breadsImg, icon: Croissant },
  { title: "Snacks & Cookies", desc: "Veg puffs, patties, khari, cream rolls, biscuits and tea-time favourites.", img: snacksImg, icon: Cookie },
  { title: "Amul Products", desc: "Butter, cheese, milk, ghee, dahi, ice cream and the full Amul range — always in stock.", img: dairyImg, icon: Milk },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full grid place-items-center text-primary-foreground font-bold" style={{ background: "var(--gradient-warm)" }}>V</span>
            <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Vaibhav Bakery</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`}>
            <Button className="rounded-full" style={{ background: "var(--gradient-warm)" }}>
              <Phone className="w-4 h-4" /> Call
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Fresh cakes, breads and Amul products at Vaibhav Bakery" width={1600} height={1100} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="max-w-6xl mx-auto px-5 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span>Rated 4.9 on Google</span>
              <span className="text-muted-foreground">· Nirala Nagar, Raebareli</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Freshly baked.<br />
              <span className="italic" style={{ color: "oklch(0.48 0.13 45)" }}>Warmly served.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Cakes for every celebration, breads baked at dawn, and the complete Amul range — all under one roof at Vaibhav Bakery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-6" style={{ background: "var(--gradient-warm)" }}>
                  <Navigation className="w-4 h-4" /> Get Directions
                </Button>
              </a>
              <a href={`tel:${PHONE_TEL}`}>
                <Button size="lg" variant="outline" className="rounded-full px-6 border-primary/30">
                  <Phone className="w-4 h-4" /> Order by Phone
                </Button>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><span>Open today · 6 AM – 10 PM</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>Nirala Nagar, Raebareli</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-widest">Our Menu</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Baked with love, every day</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">From celebration cakes to daily essentials — walk in and pick what you love.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((c) => (
              <Card key={c.title} className="group overflow-hidden border-border bg-card p-0" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="grid grid-cols-5">
                  <div className="col-span-2 relative overflow-hidden">
                    <img src={c.img} alt={c.title} width={900} height={900} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="col-span-3 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="h-10 w-10 rounded-full grid place-items-center bg-secondary text-primary">
                        <c.icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest">About Us</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>A neighbourhood favourite in Raebareli</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Vaibhav Bakery (also known as AMUL A P O) has been serving the Nirala Nagar community with freshly baked treats and the full Amul dairy range. Whether it's a birthday cake, morning bread, or a quick Amul butter run — we're your everyday stop.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="4.9★" label="Google Rating" />
              <Stat value="16 hr" label="Open Daily" />
              <Stat value="100%" label="Fresh Daily" />
            </div>
          </div>
          <Card className="p-8 border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="flex items-center gap-1 text-accent mb-4">
              {[0,1,2,3,4].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg leading-relaxed italic" style={{ fontFamily: "var(--font-display)" }}>
              "Fresh cakes, always polite staff, and the whole Amul range in one place. My family's go-to bakery in Nirala Nagar."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— Happy customer, Raebareli</p>
          </Card>
        </div>
      </section>

      <section id="visit" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Visit the Store</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Come say hello</h2>
            <p className="mt-4 text-muted-foreground">Walk in for fresh picks, or call ahead to reserve a cake.</p>

            <div className="mt-8 space-y-5">
              <InfoRow icon={MapPin} title="Address">{ADDRESS}</InfoRow>
              <InfoRow icon={Clock} title="Hours">Open every day · 6:00 AM – 10:00 PM</InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE}</a>
              </InfoRow>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full" style={{ background: "var(--gradient-warm)" }}>
                  Open in Google Maps <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
            <iframe
              title="Vaibhav Bakery location on Google Maps"
              src="https://www.google.com/maps?q=Vaibhav+Bakery+Nirala+Nagar+Raebareli&output=embed"
              className="w-full h-full min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-5xl mx-auto px-5">
          <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>Planning a celebration?</h2>
            <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">Order custom cakes a day in advance. Call us — we'll bake it just the way you want.</p>
            <a href={`tel:${PHONE_TEL}`} className="inline-block mt-8">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                <Phone className="w-4 h-4" /> Call {PHONE}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vaibhav Bakery · Nirala Nagar, Raebareli</p>
          <div className="flex gap-6">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Directions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="h-10 w-10 flex-shrink-0 rounded-full grid place-items-center bg-secondary text-primary">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <div className="font-semibold text-foreground">{title}</div>
        <div className="text-muted-foreground text-sm mt-0.5">{children}</div>
      </div>
    </div>
  );
}