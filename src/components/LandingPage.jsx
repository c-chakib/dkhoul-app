import React from 'react';
import { MapPin, Search, DollarSign } from 'lucide-react';
import { Button } from './shared';

// Assuming CONTENT is passed as prop or imported
const LandingPage = ({ CONTENT, navigate }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col lg:flex-row bg-[#0F172A]">
                <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-24 z-10">
                    <div className="inline-block w-fit bg-[#C2410C]/20 text-[#C2410C] px-4 py-1 rounded-full text-sm font-semibold border border-[#C2410C]/30 mb-6 animate-pulse">{CONTENT.hero.launch}</div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-serif">{CONTENT.hero.title}</h1>
                    <p className="text-xl text-slate-300 font-sans mb-12 max-w-lg leading-relaxed">{CONTENT.hero.subtitle}</p>
                    <div className="glass-panel p-3 rounded-2xl shadow-2xl max-w-md">
                        <div className="flex gap-2">
                            <div className="flex-1 bg-white rounded-xl flex items-center px-4">
                                <MapPin size={18} className="text-slate-400 mr-2" />
                                <input type="text" placeholder={CONTENT.hero.search_placeholder} className="w-full py-3 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm" />
                            </div>
                            <Button onClick={() => navigate('/demo')} className="!rounded-xl !px-6"><Search size={20} /></Button>
                        </div>
                    </div>
                    <div className="mt-8 flex gap-4">
                        <Button onClick={() => navigate('/simulator')}>Simuler mes gains (Hôte)</Button>
                        <Button variant="secondary" onClick={() => navigate('/financial')}>Espace Investisseur</Button>
                    </div>
                </div>
                <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-auto bg-slate-800 overflow-hidden">
                    {/* IMAGE DE FOND HERO (Placeholder - à remplacer) */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>

                    {/* MOCKUP */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[280px] h-[580px] bg-black rounded-[40px] border-8 border-slate-900 shadow-2xl transform rotate-[-6deg] overflow-hidden hidden lg:block opacity-90 hover:opacity-100 transition-opacity hover:rotate-0 duration-500">
                            <div className="w-full h-full bg-white overflow-y-auto no-scrollbar">
                                <div className="bg-[#C2410C] p-6 text-white pt-12">
                                    <div className="text-xl font-bold">DKHOUL</div>
                                    <div className="text-sm opacity-80">Bienvenue, Sarah</div>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <div className="font-bold text-[#0F172A]">Stockage Bagages</div>
                                        <div className="text-xs text-slate-500">Rabat Ville - 20 DH</div>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <div className="font-bold text-[#0F172A]">Dîner Local</div>
                                        <div className="text-xs text-slate-500">Salé - 200 DH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Cards */}
                    <div className="absolute top-1/3 right-10 glass-panel p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce duration-[3000ms] max-w-xs border-l-4 border-green-500">
                        <div className="bg-green-100 p-2 rounded-full text-green-600"><DollarSign size={20} /></div>
                        <div>
                            <div className="text-sm font-bold text-slate-800">{CONTENT.hero.trust_card_1}</div>
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Revenu Direct</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistiques Clés */}
            <div className="bg-white py-16 border-b border-slate-100 relative z-20 -mt-8 rounded-t-3xl">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {CONTENT.stats.map((stat, idx) => (
                        <div key={idx} className="text-center space-y-2 group hover:-translate-y-1 transition-transform">
                            <div className="text-4xl font-bold text-[#0F172A] font-serif group-hover:text-[#C2410C] transition-colors">{stat.val}</div>
                            <div className="text-[#C2410C] font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                            <div className="text-slate-400 text-xs bg-slate-50 inline-block px-2 py-1 rounded">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LandingPage;