import React from 'react';
import { Button } from './shared';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // In a real app, you would send this to an error reporting service
    // Example: Sentry.captureException(error);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF7ED] px-4">
          <div className="text-center max-w-lg mx-auto">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-[#0F172A] mb-4">
              Une erreur inattendue s'est produite
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nous nous excusons pour la gêne occasionnée. Notre équipe a été notifiée et travaille à résoudre le problème.
            </p>

            <div className="space-y-3">
              <Button onClick={this.handleReset} className="w-full">
                Réessayer
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                variant="secondary"
                className="w-full"
              >
                Retour à l'accueil
              </Button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left bg-white p-4 rounded-lg border border-slate-200">
                <summary className="cursor-pointer font-semibold text-slate-700 mb-2">
                  Détails de l'erreur (mode développement)
                </summary>
                <pre className="text-xs text-red-600 whitespace-pre-wrap overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;