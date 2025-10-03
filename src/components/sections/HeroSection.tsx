import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedContainer } from '@/components/ui/animated-container';
import { FloatingBackground } from '@/components/ui/floating-background';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  isVisible?: boolean;
  onShowAuth?: (mode?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible = true, onShowAuth }) => {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-green-100/30 to-emerald-100 py-20 lg:py-32"
      aria-label="Section principale"
      itemScope 
      itemType="https://schema.org/WebPageElement"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingBackground color="emerald" size="xl" position="topRight" />
        <FloatingBackground color="blue" size="xl" position="bottomLeft" animationDelay="3000ms" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <AnimatedContainer className={`transition-all duration-1000 ${isVisible ? '' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-6 bg-white/70 backdrop-blur-sm border-emerald-500/40 text-emerald-500">
              <Sparkles className="w-3 h-3 mr-1" />
              Nouveau : IA révolutionnaire pour le BTP
            </Badge>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              itemProp="headline"
            >
              Économisez{' '}
              <span className="text-emerald-500 font-bold">
                75% de votre temps
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">sur la gestion documentaire</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              ChantierDoc révolutionne la gestion de vos documents de construction avec l'intelligence artificielle. 
              Trouvez instantanément les informations dans vos CCTP, permis de construire et avis de contrôle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                onClick={() => window.open('https://cal.com/sebastien-mignot/decouverte', '_blank')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                onClick={() => onShowAuth && onShowAuth('signup')}
                className="border-2 border-emerald-500 text-emerald-500 bg-white hover:bg-emerald-500 hover:text-white transition-all duration-300 text-lg px-8 py-4 font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                S'inscrire
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-emerald-500" />
      </div>
    </section>
  );
};

export default HeroSection;