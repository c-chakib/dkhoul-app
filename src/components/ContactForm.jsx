import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button, Card } from './shared';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', data);

      // In a real app, you would send this to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#C2410C] focus:border-[#C2410C] transition-colors bg-white";
  const errorClasses = "text-red-600 text-sm mt-1 flex items-center gap-1";

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
          Contactez-nous
        </h3>
        <p className="text-slate-600">
          Intéressé par DKHOUL ? Parlons de votre projet !
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <CheckCircle className="text-green-600" size={20} />
          <div>
            <p className="font-semibold text-green-800">Message envoyé !</p>
            <p className="text-green-700 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="text-red-600" size={20} />
          <div>
            <p className="font-semibold text-red-800">Erreur d'envoi</p>
            <p className="text-red-700 text-sm">Veuillez réessayer ou nous contacter directement.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              {...register('firstName', {
                required: 'Le prénom est requis',
                minLength: { value: 2, message: 'Au moins 2 caractères' }
              })}
              className={inputClasses}
              placeholder="Votre prénom"
            />
            {errors.firstName && (
              <p className={errorClasses}>
                <AlertCircle size={14} />
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              {...register('lastName', {
                required: 'Le nom est requis',
                minLength: { value: 2, message: 'Au moins 2 caractères' }
              })}
              className={inputClasses}
              placeholder="Votre nom"
            />
            {errors.lastName && (
              <p className={errorClasses}>
                <AlertCircle size={14} />
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
            className={inputClasses}
            placeholder="votre.email@exemple.com"
          />
          {errors.email && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            {...register('phone', {
              pattern: {
                value: /^(\+212|0)[6-7][0-9]{8}$/,
                message: 'Format marocain requis (ex: +212612345678 ou 0612345678)'
              }
            })}
            className={inputClasses}
            placeholder="+212 6XX XXX XXX"
          />
          {errors.phone && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Type d'intérêt *
          </label>
          <select
            {...register('interest', { required: 'Veuillez sélectionner un intérêt' })}
            className={inputClasses}
          >
            <option value="">Sélectionnez une option</option>
            <option value="investor">Investisseur</option>
            <option value="partner">Partenaire Commercial</option>
            <option value="host">Futur Hôte</option>
            <option value="tourist">Touriste</option>
            <option value="press">Presse/Media</option>
            <option value="other">Autre</option>
          </select>
          {errors.interest && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.interest.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Message *
          </label>
          <textarea
            {...register('message', {
              required: 'Le message est requis',
              minLength: { value: 10, message: 'Au moins 10 caractères' },
              maxLength: { value: 1000, message: 'Maximum 1000 caractères' }
            })}
            className={`${inputClasses} resize-none`}
            rows={5}
            placeholder="Décrivez votre projet ou votre intérêt pour DKHOUL..."
          />
          {errors.message && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            {...register('privacy', {
              required: 'Vous devez accepter la politique de confidentialité'
            })}
            className="mt-1 w-4 h-4 text-[#C2410C] border-slate-300 rounded focus:ring-[#C2410C]"
          />
          <label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed">
            J'accepte que mes données soient utilisées pour traiter ma demande et recevoir des informations sur DKHOUL.
            <a href="#" className="text-[#C2410C] hover:underline ml-1">
              Politique de confidentialité
            </a>
          </label>
        </div>
        {errors.privacy && (
          <p className={errorClasses}>
            <AlertCircle size={14} />
            {errors.privacy.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Envoyer le message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;