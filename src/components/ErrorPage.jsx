import React from 'react';
import { Button } from './shared';

const ErrorPage = ({ code = 404, message = "Page non trouvée" }) => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF7ED] px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-8xl font-bold text-[#C2410C] mb-4 opacity-20">
          {code}
        </div>
        <h1 className="text-3xl font-bold text-[#0F172A] mb-4">
          {code === 404 ? 'Page non trouvée' : 'Erreur inattendue'}
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          {message}
        </p>
        <div className="space-y-4">
          <Button onClick={handleGoHome} className="w-full">
            Retour à l'accueil
          </Button>
          <button
            onClick={() => window.history.back()}
            className="w-full text-slate-600 hover:text-[#C2410C] transition-colors py-2"
          >
            ← Retour à la page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;