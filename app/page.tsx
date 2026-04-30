
import IndiePage from "@/sections/indie-page";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10">
        <IndiePage />
      </div>
    </div>
  );
}