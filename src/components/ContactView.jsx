import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Section, Card } from './shared';
import ContactForm from './ContactForm';
import SEO from './SEO';

const ContactView = () => {
  return (
    <>
      <SEO
        title="Contact - DKHOUL"
        description="Contactez l'équipe DKHOUL pour en savoir plus sur notre plateforme de micro-services marocains."
        keywords="contact, DKHOUL, Maroc, micro-services, support"
      />

      <div className="pt-24 bg-[#FFF7ED] min-h-screen">
        <Section title="Contactez-nous" bg="sand">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                  Parlons de votre projet
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Que vous soyez investisseur, partenaire ou futur utilisateur,
                  nous sommes là pour répondre à vos questions et vous accompagner
                  dans votre découverte de DKHOUL.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C2410C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C2410C]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Email</h4>
                    <p className="text-slate-600">contact@dkhoul.com</p>
                    <p className="text-slate-600">ccheikhi@gmail.com</p>

                    <p className="text-sm text-slate-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C2410C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C2410C]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Téléphone</h4>
                    <p className="text-slate-600">+212 662 127 709</p>
                    <p className="text-sm text-slate-500">Lundi au Vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C2410C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#C2410C]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Adresse</h4>
                    <p className="text-slate-600">Rabat, Maroc</p>
                    <p className="text-sm text-slate-500">Siège social</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C2410C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#C2410C]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Heures d'ouverture</h4>
                    <p className="text-slate-600">Lundi - Vendredi: 9h00 - 18h00</p>
                    <p className="text-slate-600">Samedi: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-[#C2410C] to-[#EA580C] text-white">
                <h4 className="font-bold text-lg mb-2">🚀 MVP en développement</h4>
                <p className="text-white/90">
                  Notre plateforme sera disponible en version bêta début 2026.
                  Inscrivez-vous pour être parmi les premiers utilisateurs !
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default ContactView;