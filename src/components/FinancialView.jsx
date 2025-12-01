import React from 'react';
import { PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Section, Card } from './shared';

const FinancialView = ({ CONTENT }) => (
    <div className="pt-24 bg-[#FFF7ED] min-h-screen">
      <Section title="Investissement & Rentabilité" subtitle="Un modèle scalable avec une rentabilité rapide (Mois 7)" bg="sand">

        {/* GRAPHIQUE DE CROISSANCE (RECHARTS) */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-[#0F172A] font-serif">Croissance du Chiffre d'Affaires (5 Ans)</h3>
          <div className="h-80 w-full max-w-4xl mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CONTENT.financial.growth_chart.map(d => ({ name: d.year, value: d.rev, label: d.label }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}M`} />
                <Tooltip
                  formatter={(value) => [`${value}M`, 'Chiffre d\'Affaires']}
                  labelFormatter={(label) => `Année ${label}`}
                />
                <Bar dataKey="value" fill="#C2410C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TABLEAU P&L DÉTAILLÉ (RESTAURÉ) */}
        <div className="mb-20 overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-100">
          <table className="w-full text-left border-collapse">
              <thead>
                  <tr className="bg-slate-50">
                      <th className="p-4 text-[#0F172A] font-bold">Poste</th>
                      <th className="p-4 text-[#0F172A] font-bold">Année 1</th>
                      <th className="p-4 text-[#0F172A] font-bold">Année 2</th>
                      <th className="p-4 text-[#0F172A] font-bold">Année 3</th>
                      <th className="p-4 text-[#0F172A] font-bold">Année 4</th>
                      <th className="p-4 text-[#0F172A] font-bold">Année 5</th>
                  </tr>
              </thead>
              <tbody>
                  {CONTENT.financial.pnl_table.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-orange-50/30">
                          <td className="p-4 font-medium text-slate-700">{row.item}</td>
                          <td className="p-4 text-slate-600">{row.y1}</td>
                          <td className="p-4 text-slate-600">{row.y2}</td>
                          <td className="p-4 font-bold text-[#C2410C]">{row.y3}</td>
                          <td className="p-4 text-slate-600">{row.y4}</td>
                          <td className="p-4 font-bold text-[#C2410C]">{row.y5}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>

        {/* NEW SECTION: PHASING OF EXPENSES */}
         <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#0F172A] font-serif">Détail des Dépenses par Phase (Investissement Seed)</h3>
             <div className="grid gap-6 max-w-4xl mx-auto">
                 {CONTENT.financial.phases.map((phase, i) => (
                     <Card key={i} className="relative overflow-hidden border-l-4 border-l-[#C2410C]">
                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                             <div>
                                 <div className="text-[#C2410C] font-bold text-sm uppercase tracking-widest mb-1">{phase.phase}</div>
                                 <h4 className="text-xl font-bold text-[#0F172A]">{phase.action}</h4>
                                 <p className="text-slate-600 text-sm mt-2">{phase.desc}</p>
                             </div>
                             <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100 min-w-[120px] text-center">
                                 <div className="text-xs text-slate-400 uppercase mb-1">Budget</div>
                                 <div className="text-xl font-bold text-[#0F172A]">{phase.cost}</div>
                             </div>
                         </div>
                     </Card>
                 ))}
             </div>
         </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* UTILISATION DES FONDS */}
          <Card className="border-t-4 border-t-[#C2410C]">
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A] font-serif flex items-center gap-2"><PieChart className="text-[#C2410C]"/> Allocation Seed (0.5M DH)</h3>
            <div className="space-y-6">
              {CONTENT.financial.seed_allocation.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-1 text-[#0F172A]">
                    <span>{item.label}</span>
                    <span>{item.val}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 italic">{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* KPI */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0F172A] p-6 rounded-2xl text-white flex flex-col justify-center text-center">
              <div className="text-sm text-slate-400 uppercase tracking-widest mb-2">Rentabilité</div>
              <div className="text-4xl font-bold text-[#C2410C] font-serif">Mois 7</div>
              <div className="text-xs text-slate-400 mt-2">Cash-flow positif</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-center text-center shadow-lg">
              <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">LTV : CAC</div>
              <div className="text-4xl font-bold text-[#0F172A] font-serif">103x</div>
              <div className="text-xs text-green-600 mt-2 font-bold">Exceptionnel</div>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-[#C2410C] to-[#EA580C] p-6 rounded-2xl text-white text-center shadow-lg">
              <div className="text-sm text-white/80 uppercase tracking-widest mb-2">Retour Investisseur (Sortie)</div>
              <div className="text-5xl font-bold font-serif">220x</div>
              <div className="text-sm text-white/90 mt-2">Multiple sur capital investi (MOIC) à 5 ans</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
);

export default FinancialView;