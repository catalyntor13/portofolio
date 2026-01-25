import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Code2, 
  Zap, 
  Database, 
  LayoutTemplate, 
  Terminal, 
  ArrowRight, 
  CheckCircle2,
  BarChart3
} from 'lucide-react';

// Importăm componentele Shadcn (asigură-te că le ai instalate)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      
      {/* --- NAVBAR SIMPLU --- */}
      <nav className="border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-slate-950">
              <TrendingUp size={20} strokeWidth={3} />
            </div>
            <span>FinTech<span className="text-slate-400">Dev</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#stack" className="hover:text-emerald-400 transition-colors">Stack</Link>
            <Link href="#proiecte" className="hover:text-emerald-400 transition-colors">Proiecte</Link>
            <Link href="#servicii" className="hover:text-emerald-400 transition-colors">Servicii</Link>
          </div>
          <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300">
            Contact
          </Button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 bg-slate-800 text-emerald-400 border-slate-700 px-4 py-1">
            Available for Q1 2024 Projects
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text">
            Nu doar scriu cod.<br />
            Construiesc <span className="text-emerald-400">infrastructură financiară.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-Stack Developer & Active Trader. Combin performanța ecosistemului <span className="text-slate-200">Next.js</span> cu 
            înțelegerea profundă a piețelor pentru a livra dashboard-uri de trading care oferă un avantaj competitiv.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12 px-8 shadow-lg shadow-emerald-900/20">
              Vezi Proiectul Amiral
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-12 px-8">
              Discută un Proiect
            </Button>
          </div>
        </div>
      </section>

      {/* --- TECH STACK BAR --- */}
      <section id="stack" className="border-y border-slate-800/60 bg-slate-900/30 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 font-medium mb-6 uppercase tracking-widest">Construit pe o fundație modernă</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Înlocuiește cu SVG-uri reale dacă vrei, aici am pus text stilizat pentru demo */}
            <div className="flex items-center gap-2 font-bold text-xl"><div className="w-3 h-3 bg-white rounded-full"/> Next.js 14</div>
            <div className="flex items-center gap-2 font-bold text-xl text-blue-400"><Code2 size={24}/> TypeScript</div>
            <div className="flex items-center gap-2 font-bold text-xl text-cyan-400"><LayoutTemplate size={24}/> Tailwind</div>
            <div className="flex items-center gap-2 font-bold text-xl text-green-400"><Database size={24}/> Neon DB</div>
            <div className="flex items-center gap-2 font-bold text-xl text-yellow-400"><Zap size={24}/> Drizzle</div>
          </div>
        </div>
      </section>

      {/* --- UNFAIR ADVANTAGE --- */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nu ar trebui să-i explici developerului tău ce înseamnă <span className="text-red-400">"Slippage"</span>.
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Majoritatea developerilor pot construi o interfață frumoasă, dar se blochează când vine vorba de date financiare în timp real sau execuție la milisecundă.
              </p>
              <p>
                Ca <span className="text-emerald-400 font-semibold">Trader Activ</span>, vorbesc limba ta. Înțeleg presiunea pieței și nevoia de instrumente care nu dau rateuri.
              </p>
            </div>
            
            <ul className="mt-8 space-y-4">
              {[
                "Fără timp pierdut explicând terminologie de bază.",
                "Focus pe viteză și latență minimă.",
                "UX gândit pentru execuție rapidă."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vizual Abstract - Terminal Code */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 text-xs text-slate-500 font-mono">risk-calculator.ts</span>
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 space-y-2">
              <p><span className="text-purple-400">const</span> calculateRisk = (balance, riskPerc) ={'>'} {'{'}</p>
              <p className="pl-4"><span className="text-slate-500">// Auto-adjust based on volatility</span></p>
              <p className="pl-4"><span className="text-blue-400">if</span> (market.volatility {'>'} <span className="text-orange-400">HIGH</span>) {'{'}</p>
              <p className="pl-8">return (balance * (riskPerc / 2));</p>
              <p className="pl-4">{'}'}</p>
              <p className="pl-4">return (balance * riskPerc);</p>
              <p>{'}'}</p>
              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 text-xs">
                 Executing trade... <br/>
               Order filled at 42,150.00 USDT <br/>
                Latency: 45ms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLAGSHIP PROJECT --- */}
      <section id="proiecte" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20">
            Demo Live
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Infrastructură de Trading.<br/>Construită de la zero.</h2>
          
          {/* Video Placeholder Container */}
          <div className="relative aspect-video rounded-xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden group">
            {/* Aici vei pune tag-ul <video> sau <iframe> cu demo-ul tău */}
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-slate-900/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500">
              <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)] hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <p className="mt-4 text-slate-300 font-medium">Vezi FinTrack Pro Demo</p>
            </div>
            
            {/* UI Mockup Background (până pui video) */}
            <div className="absolute inset-0 -z-10 grid grid-cols-4 grid-rows-3 gap-2 p-4 opacity-30">
               <div className="col-span-3 row-span-2 bg-slate-700 rounded-lg"></div>
               <div className="col-span-1 row-span-3 bg-slate-800 rounded-lg"></div>
               <div className="col-span-3 row-span-1 bg-slate-800 rounded-lg"></div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-slate-800">
              <Database size={14} className="text-emerald-400"/> Neon Serverless
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-slate-800">
              <Zap size={14} className="text-yellow-400"/> Real-time WebSocket
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-slate-800">
              <BarChart3 size={14} className="text-blue-400"/> TradingView Charts
            </span>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="servicii" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Cum te pot ajuta</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: High Ticket */}
            <Card className="bg-slate-900 border-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-xs font-bold text-white rounded-bl-lg">
                PREMIUM
              </div>
              <CardHeader>
                <Terminal className="text-emerald-400 mb-4 h-10 w-10" />
                <CardTitle className="text-slate-100">Custom FinTech Apps</CardTitle>
                <CardDescription className="text-slate-400">Pentru Traderi Pro & Fonduri</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-3">
                <p>Dezvoltare de dashboard-uri custom, management al riscului și terminale de execuție.</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex gap-2"><ArrowRight size={14} className="text-emerald-500"/> Integrări API (Binance/Bybit)</li>
                  <li className="flex gap-2"><ArrowRight size={14} className="text-emerald-500"/> Calcule PnL în timp real</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Discută Proiectul</Button>
              </CardFooter>
            </Card>

            {/* Card 2: Cash Flow */}
            <Card className="bg-slate-950 border-slate-800 hover:border-slate-700 transition-colors">
              <CardHeader>
                <LayoutTemplate className="text-blue-400 mb-4 h-10 w-10" />
                <CardTitle className="text-slate-100">Landing Pages</CardTitle>
                <CardDescription className="text-slate-400">Pentru Lansări & Marketing</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-3">
                <p>Site-uri de prezentare ultra-rapide, optimizate pentru conversie și SEO. Fără WordPress.</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex gap-2"><ArrowRight size={14} className="text-blue-500"/> Livrare în 3-5 zile</li>
                  <li className="flex gap-2"><ArrowRight size={14} className="text-blue-500"/> Scor 100/100 Lighthouse</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800">Vezi Pachete</Button>
              </CardFooter>
            </Card>

            {/* Card 3: Consultanta */}
            <Card className="bg-slate-950 border-slate-800 hover:border-slate-700 transition-colors">
              <CardHeader>
                <Database className="text-purple-400 mb-4 h-10 w-10" />
                <CardTitle className="text-slate-100">Audit Tehnic</CardTitle>
                <CardDescription className="text-slate-400">Pentru platforme existente</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-3">
                <p>Analizez arhitectura actuală și îți ofer un plan pentru a reduce latența bazei de date.</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex gap-2"><ArrowRight size={14} className="text-purple-500"/> Optimizare Database</li>
                  <li className="flex gap-2"><ArrowRight size={14} className="text-purple-500"/> Refactoring UI/UX</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800">Programează Audit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* --- BIO & FINAL CTA --- */}
      <section className="py-24 border-t border-slate-800/60 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full mb-8 overflow-hidden border-2 border-emerald-500">
             {/* Aici pui <img src="/avatarul-tau.jpg" /> */}
             <div className="w-full h-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
             </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Bridging the Gap between Code and Capital</h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Misiunea mea este să ofer traderilor independenți și micilor fonduri aceleași unelte tehnologice pe care le au instituțiile mari. 
            Dacă ești gata să-ți upgradezi infrastructura, hai să vorbim.
          </p>
          
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-14 text-lg shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)]">
            Contactează-mă pe Email
          </Button>
          <p className="mt-6 text-sm text-slate-500">
            Nu preiau multe proiecte simultan pentru a menține calitatea.
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© 2024 FinTech Developer. All rights reserved.</p>
      </footer>

    </main>
  );
}