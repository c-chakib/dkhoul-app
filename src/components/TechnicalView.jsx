import React from 'react';
import { Cloud, Info } from 'lucide-react';
import { Section, Card } from './shared';

const TechnicalView = ({ CONTENT }) => (
    <div className="pt-24 bg-[#FFF7ED] min-h-screen">
      <Section title="Confiance & Technologie" subtitle="Une architecture conçue pour la sécurité et la scalabilité" bg="sand">

          {/* ARCHITECTURE DIAGRAM (Visual Placeholder) */}
          <div className="max-w-5xl mx-auto mb-16 text-center">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8 font-serif flex items-center justify-center gap-2"><Cloud/> Architecture MEAN Stack</h3>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <img
                      src={CONTENT.images.tech_stack}
                      alt="Architecture Technique DKHOUL"
                      className="w-full h-auto max-h-[500px] object-contain mx-auto"
                      onError={(e) => {e.target.style.display='none';}}
                  />
                  {/* Fallback text if image fails */}
                  <div className="grid md:grid-cols-4 gap-4 text-center mt-6">
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                          <div className="font-bold text-[#C2410C] mb-1">Angular</div>
                          <div className="text-xs text-slate-400">Frontend</div>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                          <div className="font-bold text-[#C2410C] mb-1">Node.js</div>
                          <div className="text-xs text-slate-400">Backend API</div>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                          <div className="font-bold text-[#C2410C] mb-1">MongoDB</div>
                          <div className="text-xs text-slate-400">Database</div>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                          <div className="font-bold text-[#C2410C] mb-1">AWS</div>
                          <div className="text-xs text-slate-400">Cloud Infra</div>
                      </div>
                  </div>
              </div>
          </div>

          {/* SECTION TRUST & SAFETY (CRITIQUE POUR INVESTISSEURS) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
              {CONTENT.security.features.map((feat, i) => (
                  <Card key={i} className="flex items-start gap-4 hover:border-[#C2410C]">
                      <div className="p-3 bg-orange-50 rounded-xl text-[#C2410C]"><feat.icon size={24}/></div>
                      <div>
                          <h4 className="font-bold text-[#0F172A] text-lg mb-1">{feat.title}</h4>
                          <p className="text-slate-600 text-sm">{feat.desc}</p>
                      </div>
                  </Card>
              ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid gap-4">
              {CONTENT.technical.glossary.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 font-bold text-[#0F172A] mb-2">
                      <Info size={20} className="text-[#C2410C]"/> {item.term}
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed pl-8">
                      {item.def}
                    </div>
                </div>
              ))}
            </div>
          </div>
      </Section>
    </div>
);

export default TechnicalView;