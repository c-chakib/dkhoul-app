import React from 'react';
import { Section, Card } from './shared';
import { CONTENT } from '../content';

const InnovationView = () => (
    // ... (Code inchangé)
    <div className="pt-24 bg-[#FFF7ED] min-h-screen">
      <Section title="Stratégie & Innovation" subtitle="Comment DKHOUL va transformer le marché en 4 étapes" bg="sand">

        <div className="max-w-4xl mx-auto mb-20 border-l-2 border-[#C2410C] pl-8 ml-4 md:ml-auto space-y-12">
          {CONTENT.innovation.strategy_phases.map((phase, i) => (
              <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#C2410C] border-4 border-white shadow-sm"></div>
                  <div className="flex items-center gap-3 mb-2">
                      <phase.icon size={20} className="text-[#C2410C]" />
                      <h4 className="text-xl font-bold text-[#0F172A]">{phase.title}</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
              </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-t-4 border-t-[#C2410C]">
            <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-serif">Premier Entrant</h3>
            <p className="text-slate-600 text-sm">Aucune marketplace dédiée aux micro-services n'existe au Maroc. Fenêtre de 12 mois avant la concurrence.</p>
          </Card>
          <Card className="border-t-4 border-t-[#C2410C]">
            <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-serif">Services Exclusifs</h3>
            <p className="text-slate-600 text-sm">Stockage bagages, Coworking chez l'habitant, Cours de Darija... Ces services n'existent PAS sur Airbnb.</p>
          </Card>
          <Card className="border-t-4 border-t-[#C2410C]">
            <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-serif">Modèle Économique</h3>
            <p className="text-slate-600 text-sm">20% de commission (vs 30-50%). Plus de revenus pour les locaux = Fidélité absolue.</p>
          </Card>
        </div>
      </Section>
    </div>
);

export default InnovationView;