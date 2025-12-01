import React from 'react';

// Assuming TOKENS is imported or passed
const TOKENS = {
  colors: {
    primary: '#C2410C',
    primaryLight: '#EA580C',
    secondary: '#0F172A',
    accent: '#FFF7ED',
    success: '#10B981',
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

export const Button = ({ children, variant = 'primary', onClick, className = '', type="button" }) => {
    const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-[2px] active:translate-y-0 flex items-center justify-center gap-2 shadow-md";
    const customStyles = variant === 'primary' ? { background: `linear-gradient(135deg, ${TOKENS.colors.primary}, ${TOKENS.colors.primaryLight})`, color: 'white' } :
                         variant === 'secondary' ? { background: 'white', color: TOKENS.colors.primary, border: `2px solid ${TOKENS.colors.primary}` } : {};
    return <button type={type} onClick={onClick} className={`${baseStyle} ${className}`} style={customStyles}>{children}</button>;
};

export const Card = ({ children, className = '', hover = true }) => (
    <div className={`bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 ${hover ? 'hover:border-[#C2410C] hover:shadow-xl' : ''} ${className}`} style={{ boxShadow: TOKENS.shadows.card }}>{children}</div>
);

export const Section = ({ title, subtitle, bg = 'white', children, className = '' }) => {
    const bgClass = bg === 'sand' ? 'bg-[#FFF7ED]' : 'bg-white';
    return (
        <section className={`py-16 px-8 ${bgClass} ${className}`}>
            <div className="max-w-7xl mx-auto">
                {title && (
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0F172A] mb-4">{title}</h2>
                        {subtitle && <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};