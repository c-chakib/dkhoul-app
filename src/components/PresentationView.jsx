import React from 'react';
import { Star, Briefcase, GraduationCap } from 'lucide-react';
import { Section, Card } from './shared';

const PresentationView = ({ CONTENT }) => (
    <div className="pt-24 bg-[#FFF7ED] min-h-screen">
      <Section title="Vision & Valeurs" bg="sand">
        <p className="text-2xl font-serif text-center max-w-4xl mx-auto text-[#0F172A] leading-relaxed mb-8 italic">
          "{CONTENT.presentation.mission}"
        </p>
        <div className="text-center max-w-3xl mx-auto mb-12 text-slate-600 leading-relaxed border-l-4 border-[#C2410C] pl-6 bg-white p-4 rounded-r-xl">
            {CONTENT.presentation.vision_long}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CONTENT.presentation.values.map((val, i) => (
            <Card key={i} className="text-center hover:bg-orange-50/50">
              <div className="w-12 h-12 bg-[#C2410C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C2410C]"><Star size={24}/></div>
              <h3 className="font-bold text-lg mb-2 text-[#0F172A]">{val.title}</h3>
              <p className="text-sm text-slate-600">{val.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Le Porteur du Projet" bg="white">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-6xl mx-auto flex flex-col md:flex-row">
          {/* Sidebar Profil */}
          <div className="w-full md:w-1/3 bg-[#0F172A] p-10 text-white flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            {/* PHOTO DU FONDATEUR */}
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-6 border-4 border-[#C2410C] shadow-2xl relative z-10 overflow-hidden">
               <img
                 src={CONTENT.images.founder}
                 alt={CONTENT.presentation.founder.name}
                 className="w-full h-full object-cover founder-img"
                 onError={(e) => {e.target.onerror = null; e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
               />
               <div className="w-full h-full bg-[#0F172A] hidden items-center justify-center text-4xl font-serif">CC</div>
            </div>

            <h3 className="text-3xl font-bold font-serif relative z-10">{CONTENT.presentation.founder.name}</h3>
            <div className="text-[#C2410C] font-bold text-sm uppercase mt-2 tracking-widest relative z-10">{CONTENT.presentation.founder.role}</div>
            <p className="text-slate-300 text-sm mt-6 italic relative z-10">"{CONTENT.presentation.founder.bio}"</p>
          </div>

          {/* Timeline Expérience & Formation */}
          <div className="w-full md:w-2/3 p-10 bg-white relative">
            <div className="grid md:grid-cols-1 gap-10">

              {/* BLOC 1 : PARCOURS PROFESSIONNEL */}
              <div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Briefcase className="text-[#C2410C]" size={24}/> Parcours Professionnel
                </h4>
                <div className="space-y-6 border-l-2 border-slate-100 pl-6 ml-2">
                  {CONTENT.presentation.founder.experience.map((rec, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#C2410C] group-hover:bg-[#C2410C] transition-colors"></div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-[#C2410C] text-sm">{rec.year}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{rec.context}</span>
                      </div>
                      <div className="font-bold text-[#0F172A] text-md mb-1">{rec.role}</div>
                      <div className="text-sm text-slate-600 leading-relaxed">{rec.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOC 2 : FORMATION ACADÉMIQUE */}
              <div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <GraduationCap className="text-[#C2410C]" size={24}/> Formation Académique
                </h4>
                <div className="space-y-6 border-l-2 border-slate-100 pl-6 ml-2">
                  {CONTENT.presentation.founder.education.map((edu, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#0F172A] group-hover:bg-[#0F172A] transition-colors"></div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-[#0F172A] text-sm">{edu.year}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{edu.context}</span>
                      </div>
                      <div className="font-bold text-[#0F172A] text-md mb-1">{edu.role}</div>
                      <div className="text-sm text-slate-600 leading-relaxed">{edu.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
);

export default PresentationView;