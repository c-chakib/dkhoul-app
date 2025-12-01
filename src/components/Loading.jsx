import React from 'react';

const Loading = ({
  size = 'md',
  message = 'Chargement en cours...',
  className = '',
  showMessage = true
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div
        className={`${sizeClasses[size]} border-[#C2410C]/20 border-t-[#C2410C] rounded-full animate-spin mb-4`}
        role="status"
        aria-label="Chargement"
      ></div>
      {showMessage && (
        <p className="text-slate-600 text-center animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loading;