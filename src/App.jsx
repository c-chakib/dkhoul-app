import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CONTENT } from './content';

// Import critical components immediately
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Loading from './components/Loading';

// Lazy load non-critical components for better performance
const LandingPage = lazy(() => import('./components/LandingPage'));
const PresentationView = lazy(() => import('./components/PresentationView'));
const DemoView = lazy(() => import('./components/DemoView'));
const HostSimulatorView = lazy(() => import('./components/HostSimulatorView'));
const InnovationView = lazy(() => import('./components/InnovationView'));
const TechnicalView = lazy(() => import('./components/TechnicalView'));
const FinancialView = lazy(() => import('./components/FinancialView'));
const ContactView = lazy(() => import('./components/ContactView'));

/**
 * ------------------------------------------------------------------
 * SYSTÃˆME DE DESIGN (TOKENS) - IdentitÃ© Visuelle "Terracotta Tech"
 * ------------------------------------------------------------------
 */
const TOKENS = {
  colors: {
    primary: '#C2410C',       // Terracotta (Terre cuite)
    primaryLight: '#EA580C',  // Orange Vif
    secondary: '#0F172A',     // Bleu Atlantique Profond
    accent: '#FFF7ED',        // Sable de l'Atlas
    success: '#10B981',       // Vert Menthe
    white: '#FFFFFF',
    gray: '#F8FAFC',
    surface: '#FFFFFF',
    'surface-variant': '#F8FAFC',
    outline: '#E2E8F0',
    'outline-variant': '#CBD5E1'
  },
  shadows: {
    primary: '0 4px 14px 0 rgba(194, 65, 12, 0.39)',
    card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    float: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(194, 65, 12, 0.15)'
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem'
  }
};

// Wrapper component to provide navigate function to components that need it
const LandingPageWrapper = () => {
  const navigate = useNavigate();
  return <LandingPage CONTENT={CONTENT} navigate={navigate} />;
};

const PresentationViewWrapper = () => {
  return <PresentationView CONTENT={CONTENT} />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading message="Chargement de la page..." />}>
        <Routes>
          <Route path="/" element={<LandingPageWrapper />} />
          <Route path="/presentation" element={<PresentationViewWrapper />} />
          <Route path="/demo" element={<DemoView />} />
          <Route path="/simulator" element={<HostSimulatorView />} />
          <Route path="/innovation" element={<InnovationView CONTENT={CONTENT} />} />
          <Route path="/technical" element={<TechnicalView CONTENT={CONTENT} />} />
          <Route path="/financial" element={<FinancialView CONTENT={CONTENT} />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
