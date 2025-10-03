import React from 'react';
import { Building2 } from 'lucide-react';


const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default', 
  className = '',
  showText = true,
  style
}) => {
  const sizeClasses = {
    sm: {
      container: 'w-8 h-8',
      icon: 'h-4 w-4',
      text: 'text-lg',
      spacing: 'ml-2'
    },
    md: {
      container: 'w-12 h-12',
      icon: 'h-6 w-6',
      text: 'text-xl',
      spacing: 'ml-3'
    },
    lg: {
      container: 'w-16 h-16',
      icon: 'h-8 w-8',
      text: 'text-2xl',
      spacing: 'ml-3'
    },
    xl: {
      container: 'w-20 h-20',
      icon: 'h-10 w-10',
      text: 'text-3xl',
      spacing: 'ml-4'
    }
  };

  const variantClasses = {
    default: {
      container: 'bg-gradient-to-br from-brand-emerald to-emerald-600 shadow-lg backdrop-blur-sm border border-white/20',
      icon: 'text-white',
      text: 'text-slate-800 drop-shadow-sm font-bold'
    },
    white: {
      container: 'bg-white shadow-lg border border-slate-200',
      icon: 'text-brand-emerald',
      text: 'text-slate-800 font-bold'
    },
    simple: {
      container: '',
      icon: 'text-brand-emerald',
      text: 'text-slate-900 font-bold'
    }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];

  if (!showText) {
    return (
      <div className={`${currentSize.container} ${currentVariant.container} rounded-2xl flex items-center justify-center ${className}`} style={style}>
        <Building2 className={`${currentSize.icon} ${currentVariant.icon}`} />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`} style={style}>
      <div className={`${currentSize.container} ${currentVariant.container} rounded-2xl flex items-center justify-center`}>
        <Building2 className={`${currentSize.icon} ${currentVariant.icon}`} />
      </div>
      {showText && (
        <span className={`${currentSize.spacing} ${currentSize.text} ${currentVariant.text}`}>
          ChantierDoc
        </span>
      )}
    </div>
  );
};

export default Logo; 