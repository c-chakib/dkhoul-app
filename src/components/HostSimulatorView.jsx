import React, { useState, useEffect, useMemo } from 'react';
import { Check } from 'lucide-react';
import { Section } from './shared';

const HostSimulatorView = () => {
    const [serviceType, setServiceType] = useState('space');
    const [volume, setVolume] = useState(5);
    const [customPrice, setCustomPrice] = useState(50);

    const defaults = useMemo(() => ({ space: 50, skills: 200, connect: 100 }), []);

    useEffect(() => {
        setCustomPrice(defaults[serviceType]);
    }, [serviceType, defaults]);

    const earnings = Math.round(volume * customPrice * 0.8);

    return (
        <div className="pt-24 bg-[#FFF7ED] min-h-screen">
            <Section title="Simulateur de Revenus Hôte" subtitle="Montrez aux locaux combien ils peuvent gagner en rejoignant l'économie formelle" bg="sand">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-8 space-y-8">
                        <div>
                            <label className="block font-bold text-[#0F172A] mb-2">Quel service proposez-vous ?</label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    {id: 'space', label: 'Espace', icon: '🏠'},
                                    {id: 'skills', label: 'Talent', icon: '🎨'},
                                    {id: 'connect', label: 'Temps', icon: '🤝'}
                                ].map(type => (
                                    <button
                                        key={type.id}
                                        onClick={() => setServiceType(type.id)}
                                        className={`p-3 rounded-xl border-2 transition-all ${serviceType === type.id ? 'border-[#C2410C] bg-orange-50 text-[#C2410C]' : 'border-slate-100 text-slate-500'}`}
                                    >
                                        <div className="text-2xl mb-1">{type.icon}</div>
                                        <div className="text-xs font-bold">{type.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold text-slate-700">Prix moyen par réservation (DH)</label>
                                <span className="font-bold text-[#0F172A] text-lg">{customPrice} DH</span>
                            </div>
                            <input
                                type="range" min="20" max="1000" step="10"
                                value={customPrice}
                                onChange={(e) => setCustomPrice(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C2410C]"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>20 DH</span>
                                <span>1000 DH</span>
                            </div>
                        </div>

                        <div>
                            <label className="block font-bold text-[#0F172A] mb-2">Volume mensuel estimé</label>
                            <input
                                type="range" min="1" max="30" value={volume}
                                onChange={(e) => setVolume(e.target.value)}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#C2410C]"
                            />
                            <div className="text-right text-[#C2410C] font-bold mt-2">{volume} réservations / mois</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#0F172A] text-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <div className="text-slate-400 text-sm uppercase tracking-widest mb-2">Vos Gains Potentiels</div>
                            <div className="text-6xl font-bold text-[#C2410C] font-serif mb-2">{earnings} <span className="text-2xl">DH</span></div>
                            <div className="text-slate-300 text-sm">par mois (après commission 20%)</div>
                            <div className="mt-8 p-4 bg-white/10 rounded-xl text-left text-xs text-slate-300">
                                <div className="flex gap-2 mb-2"><Check size={14} className="text-green-400" /> Paiement garanti (Séquestre)</div>
                                <div className="flex gap-2"><Check size={14} className="text-green-400" /> Assurance incluse</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default HostSimulatorView;