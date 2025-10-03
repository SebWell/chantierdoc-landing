import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Logo from '@/components/ui/Logo';
import { AnimatedContainer } from '@/components/ui/animated-container';
import { FloatingBackground } from '@/components/ui/floating-background';
import { FeatureCard } from '@/components/cards';
import { HeroSection } from '@/components/sections';
import {
    ArrowRight,
    Bot,
    CheckCircle,
    ChevronDown,
    Clock,
    FileText,
    Menu,
    MessageSquare,
    Search,
    Shield,
    Sparkles,
    Star,
    TrendingUp,
    Users,
    X,
    Zap
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SEOHead } from './components/core';

const App: React.FC = () => {
  // Callback for auth - can be implemented later
  const onShowAuth = (mode?: string) => {
    console.log('Auth mode:', mode);
    // TODO: Implement auth modal or redirect
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features = [
    {
      icon: Search,
      title: "Recherche IA instantanée",
      description: "Trouvez n'importe quelle information en posant simplement votre question",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: MessageSquare,
      title: "Chat intelligent",
      description: "Dialoguez avec vos documents comme avec un expert du BTP",
      gradient: "from-green-400 to-green-500"
    },
    {
      icon: Shield,
      title: "Sécurisé et conforme",
      description: "Vos données sont protégées et respectent les normes de sécurité du BTP",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Collaboration simplifiée",
      description: "Partagez facilement les informations avec toute votre équipe projet",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { value: "75%", label: "Temps économisé", sublabel: "sur la recherche documentaire", delay: "0ms" },
    { value: "10x", label: "Plus rapide", sublabel: "qu'une recherche manuelle", delay: "200ms" },
    { value: "100%", label: "Documents indexés", sublabel: "automatiquement par l'IA", delay: "400ms" },
    { value: "24/7", label: "Disponibilité", sublabel: "accès permanent aux données", delay: "600ms" }
  ];

  const testimonials = [
    {
      name: "Marc Dubois",
      role: "Chef de projet BTP",
      company: "Construction Plus",
      content: "Avant ChantierDoc, je passais 2h par jour à chercher des informations dans les documents. Maintenant, j'ai ma réponse en 30 secondes !",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Sophie Martin",
      role: "Architecte",
      company: "Atelier Design",
      content: "L'IA comprend parfaitement mes questions techniques. C'est comme avoir un assistant expert disponible 24h/24.",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Pierre Leroy",
      role: "Conducteur de travaux",
      company: "BTP Solutions",
      content: "Fini les malentendus ! Toute l'équipe accède aux mêmes informations actualisées instantanément.",
      rating: 5,
      avatar: "P"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "16€",
      period: "/mois",
      yearlyPrice: Math.round(16 * 12 * 0.83),
      description: "Parfait pour les petits projets",
      features: [
        "Jusqu'à 3 projets",
        "50 documents max",
        "5M tokens IA inclus/mois",
        "Clé API OpenAI personnelle",
        "Support email"
      ],
      popular: false,
      highlight: "5M tokens inclus"
    },
    {
      name: "Professional",
      price: "49€",
      period: "/mois",
      yearlyPrice: Math.round(49 * 12 * 0.83),
      description: "Idéal pour les entreprises",
      features: [
        "Projets illimités",
        "Documents illimités",
        "25M tokens IA inclus/mois",
        "Forfaits tokens supplémentaires",
        "Clé API OpenAI personnelle",
        "Support prioritaire",
        "Collaboration équipe",
        "Rapports analytiques"
      ],
      popular: true,
      highlight: "Le plus populaire"
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      yearlyPrice: null,
      description: "Pour les grandes organisations",
      features: [
        "Tout du plan Professional",
        "Tokens IA illimités",
        "Déploiement sur site",
        "Formation équipe",
        "Support dédié",
        "Personnalisation avancée",
        "SLA garantie"
      ],
      popular: false,
      highlight: "Tokens illimités"
    }
  ];

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Données structurées pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ChantierDoc",
    "description": "Application de gestion documentaire avec IA pour le secteur BTP. Recherche instantanée, chat intelligent et collaboration équipe.",
    "url": "https://chantierdoc.fr",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": [
      {
        "@type": "Offer",
        "name": "Plan Starter",
        "price": "16",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
        "description": "Parfait pour les petits projets BTP"
      },
      {
        "@type": "Offer", 
        "name": "Plan Professional",
        "price": "49",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31",
        "description": "Idéal pour les entreprises de construction"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "creator": {
      "@type": "Organization",
      "name": "ChantierDoc",
      "url": "https://chantierdoc.fr",
      "logo": "https://chantierdoc.fr/logo.svg"
    },
    "screenshot": "https://chantierdoc.fr/screenshot.jpg",
    "featureList": [
      "Recherche IA instantanée",
      "Chat intelligent avec documents",
      "Collaboration équipe simplifiée", 
      "Sécurité et conformité BTP"
    ]
  };

  return (
    <>
      <SEOHead 
        title="ChantierDoc - Gestion Documentaire IA pour le BTP | Recherche Instantanée"
        description="Révolutionnez la gestion de vos documents BTP avec ChantierDoc. IA avancée pour recherche instantanée, chat intelligent et collaboration équipe. Économisez 75% de votre temps de recherche documentaire."
        keywords="gestion documentaire BTP, IA construction, recherche documents chantier, collaboration BTP, documents techniques, intelligence artificielle construction, gestion projet BTP, digitalisation chantier, CCTP, permis construire, avis contrôle"
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-100 via-green-100/20 to-emerald-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-emerald-500/20" style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" variant="default" className="relative" style={{ filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))' }} />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-slate-600 hover:text-emerald-500 font-medium transition-colors duration-200"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-slate-600 hover:text-emerald-500 font-medium transition-colors duration-200"
              >
                Témoignages
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-slate-600 hover:text-emerald-500 font-medium transition-colors duration-200"
              >
                Tarifs
              </button>
            </nav>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost"
                onClick={() => onShowAuth && onShowAuth('login')}
                className="text-slate-600 hover:text-emerald-500"
              >
                Connexion
              </Button>
              <Button 
                onClick={() => onShowAuth && onShowAuth('signup')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                S'inscrire
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4 bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-emerald-500 font-medium text-left">Fonctionnalités</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-emerald-500 font-medium text-left">Témoignages</button>
                <button onClick={() => scrollToSection('pricing')} className="text-slate-600 hover:text-emerald-500 font-medium text-left">Tarifs</button>
                <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
                  <Button variant="ghost" onClick={() => onShowAuth && onShowAuth('login')} className="justify-start">
                    Connexion
                  </Button>
                  <Button onClick={() => onShowAuth && onShowAuth('signup')} className="bg-gradient-to-r from-emerald-500 to-emerald-600">
                    <Sparkles className="w-4 h-4 mr-2" />
                    S'inscrire
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-white via-green-100/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedContainer
                key={index} 
                className="text-center"
                animationDelay={stat.delay}
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.sublabel}</div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-green-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <Card className="border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    Le problème actuel
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Les défis quotidiens de la gestion documentaire
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">
                        Des heures perdues dans une semaine
                      </p>
                      <p className="text-slate-600 text-sm">
                        à chercher des informations dispersées
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">
                        Documents éparpillés
                      </p>
                      <p className="text-slate-600 text-sm">
                        dans différents dossiers et formats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium mb-1">
                        Décisions remises à plus tard
                      </p>
                      <p className="text-slate-600 text-sm">
                        faute d'avoir l'ensemble des documents à disposition immédiate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in-right">
              <Card className="border-emerald-500/40 bg-gradient-to-br from-green-100/30 to-emerald-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-500 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    La solution ChantierDoc
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Obtenez vos réponses en <span className="font-bold text-emerald-500">30 secondes</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                    <p className="text-slate-700">
                      <strong>Recherche instantanée</strong> par intelligence artificielle
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                    <p className="text-slate-700">
                      Tous vos documents centralisés et organisés automatiquement
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                    <p className="text-slate-700">
                      Réponses précises avec références aux documents sources
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-white via-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContainer className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-green-100/20 border-emerald-500/40 text-emerald-500">
              <Zap className="w-3 h-3 mr-1" />
              Fonctionnalités avancées
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Une solution complète pour vos chantiers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ChantierDoc combine stockage intelligent et IA conversationnelle pour transformer votre gestion documentaire
            </p>
          </AnimatedContainer>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-100/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContainer className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-white/50 border-emerald-500/30 text-emerald-500">
              <Bot className="w-3 h-3 mr-1" />
              Simple et efficace
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-slate-600">
              3 étapes simples pour révolutionner votre gestion documentaire
            </p>
          </AnimatedContainer>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Importez vos documents",
                description: "Glissez-déposez vos CCTP, permis de construire, avis de contrôle et autres documents. L'IA les analyse automatiquement.",
                delay: "0ms"
              },
              {
                step: "2", 
                title: "Posez vos questions",
                description: "Demandez en langage naturel : \"Quelles sont les spécifications du béton ?\" ou \"Résumé du dernier avis de contrôle\"",
                delay: "200ms"
              },
              {
                step: "3",
                title: "Obtenez vos réponses", 
                description: "Recevez instantanément des réponses précises avec les références aux documents sources.",
                delay: "400ms"
              }
            ].map((item, index) => (
              <AnimatedContainer
                key={index}
                animationDelay={item.delay}
              >
                <Card 
                  className="text-center group hover:shadow-xl transition-all duration-500"
                >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl group-hover:text-emerald-500 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
                </Card>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContainer className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-green-100/10 border-emerald-500/30 text-emerald-500">
              <Users className="w-3 h-3 mr-1" />
              Témoignages clients
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ils ont économisé des heures avec ChantierDoc
            </h2>
            <p className="text-xl text-slate-600">
              Découvrez comment nos clients transforment leur productivité
            </p>
          </AnimatedContainer>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                      <div className="text-sm text-emerald-500 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-green-100/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContainer className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-white/50 border-emerald-500/30 text-emerald-500">
              <TrendingUp className="w-3 h-3 mr-1" />
              Tarification transparente
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Choisissez votre plan
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Commencez gratuitement, évoluez selon vos besoins
            </p>
            
            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-slate-100 rounded-lg p-1">
                <Button
                  variant="ghost"
                  onClick={() => setBillingCycle('monthly')}
                  className={`${
                    billingCycle === 'monthly' 
                      ? 'bg-white shadow-sm text-slate-900 border border-slate-200' 
                      : 'text-slate-600 hover:text-slate-900'
                  } transition-all duration-200`}
                >
                  Mensuel
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setBillingCycle('yearly')}
                  className={`${
                    billingCycle === 'yearly' 
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900'
                  } transition-all duration-200 font-medium`}
                >
                  Annuel (-17%)
                </Button>
              </div>
            </div>

            {/* Prix HT Notice */}
            <Card className="max-w-2xl mx-auto mb-12 bg-green-100/10 border-emerald-500/30">
              <CardContent className="pt-6">
                <p className="text-sm text-emerald-500">
                  <strong>Tous les prix sont affichés HT.</strong> TVA applicable selon votre localisation.
                </p>
              </CardContent>
            </Card>
          </AnimatedContainer>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in ${
                  plan.popular 
                    ? 'border-2 border-emerald-500 bg-gradient-to-br from-white to-green-100/5' 
                    : 'border border-slate-200'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Le plus populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="flex items-baseline justify-center my-6">
                    {plan.price === "Sur devis" ? (
                      <span className="text-3xl font-bold text-slate-900">Sur devis</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-slate-900">
                          {billingCycle === 'monthly' ? plan.price.replace('€', '') : plan.yearlyPrice}€
                        </span>
                        <span className="text-slate-600 ml-1">
                          /{billingCycle === 'monthly' ? 'mois' : 'an'} HT
                        </span>
                      </>
                    )}
                  </div>
                  
                  {plan.highlight && (
                    <Badge variant="outline" className="bg-green-100/20 border-emerald-500/30 text-emerald-500">
                      <Bot className="w-3 h-3 mr-1" />
                      {plan.highlight}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => {
                      if (plan.price === "Sur devis") {
                        window.open('https://cal.com/sebastien-mignot/decouverte', '_blank');
                      } else {
                        onShowAuth?.('signup');
                      }
                    }}
                    className={`w-full font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-white border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-md hover:shadow-lg'
                    } transition-all duration-300`}
                    size="lg"
                  >
                    {plan.price === "Sur devis" ? 'Prendre rendez-vous' : "S'inscrire"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Token Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContainer className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-green-100/10 border-emerald-500/30 text-emerald-500">
              <Bot className="w-3 h-3 mr-1" />
              Gestion des tokens IA
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tokens IA inclus selon votre forfait
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Chaque plan inclut un nombre de tokens IA adapté à votre usage. Des forfaits supplémentaires sont disponibles si nécessaire.
            </p>
          </AnimatedContainer>
          
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-emerald-500/30 bg-gradient-to-br from-green-100/10 to-emerald-50/50 shadow-lg">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-emerald-500 mb-4">
                  Tokens IA inclus par forfait
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg border border-emerald-500/20">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Plan Starter</h3>
                    <p className="text-3xl font-bold text-emerald-500 mb-2">5M tokens</p>
                    <p className="text-sm text-slate-600">Inclus dans votre abonnement</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-emerald-500/20">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Plan Professional</h3>
                    <p className="text-3xl font-bold text-emerald-500 mb-2">25M tokens</p>
                    <p className="text-sm text-slate-600">Inclus dans votre abonnement</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">💡 Besoin de plus de tokens ?</h4>
                  <p className="text-slate-600 text-sm">
                    Des forfaits supplémentaires sont disponibles pour répondre à vos besoins d'usage intensif.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Forfaits tokens supplémentaires */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Forfaits tokens supplémentaires (optionnels)
            </h3>
          </div>
          
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               {
                 tokens: "10M",
                 includedIn: null,
                 supplementPrice: "+15€/mois",
                 usage: "Usage modéré renforcé",
                 popular: false
               },
               {
                 tokens: "50M",
                 includedIn: null,
                 supplementPrice: "+35€/mois",
                 usage: "Usage intensif",
                 popular: true
               },
               {
                 tokens: "100M",
                 includedIn: null,
                 supplementPrice: "+65€/mois",
                 usage: "Usage très intensif",
                 popular: false
               }
             ].map((plan, index) => (
               <Card 
                 key={index}
                 className={`relative p-6 ${
                   plan.popular 
                     ? 'border-2 border-emerald-500 bg-gradient-to-br from-green-100/20 to-emerald-50 shadow-lg' 
                     : 'border border-slate-200 bg-white hover:shadow-md transition-shadow duration-200'
                 }`}
               >
                 {plan.popular && (
                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                     <Badge className="bg-emerald-500 text-white text-xs px-3 py-1">
                       Populaire
                     </Badge>
                   </div>
                 )}
                 
                 <div className="text-center space-y-4">
                   {/* Nombre de tokens */}
                   <div>
                     <h3 className={`text-4xl font-bold ${plan.popular ? 'text-emerald-500' : 'text-slate-900'}`}>
                       {plan.tokens}
                     </h3>
                     <p className="text-sm text-slate-500 mt-1">tokens</p>
                   </div>
                   
                   {/* Inclus dans le forfait */}
                   <div className="min-h-[50px] flex items-center justify-center">
                     {plan.includedIn ? (
                       <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                         <p className="text-sm font-medium text-slate-600">
                           ✓ Inclus dans
                         </p>
                         <p className="text-sm font-semibold text-slate-700">
                           {plan.includedIn}
                         </p>
                       </div>
                     ) : (
                       <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                         <p className="text-sm text-slate-500">
                           Forfait supplémentaire
                         </p>
                       </div>
                     )}
                   </div>
                   
                   {/* Prix supplémentaire */}
                   <div className="min-h-[40px] flex items-center justify-center">
                     {plan.supplementPrice ? (
                       <div>
                         <p className="text-lg font-bold text-slate-900">
                           {plan.supplementPrice}
                         </p>
                         <p className="text-xs text-slate-500">en supplément</p>
                       </div>
                     ) : (
                       <p className="text-lg font-bold text-green-600">
                         Inclus
                       </p>
                     )}
                   </div>
                   
                   {/* Usage */}
                   <div className="pt-2 border-t border-slate-200">
                     <p className="text-sm font-medium text-slate-600">
                       {plan.usage}
                     </p>
                   </div>
                 </div>
               </Card>
             ))}
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedContainer>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à économiser 75% de votre temps ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Découvrez comment ChantierDoc peut transformer votre gestion documentaire
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://cal.com/sebastien-mignot/decouverte', '_blank')}
                className="bg-white text-emerald-500 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 font-semibold border-2 border-white"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onShowAuth && onShowAuth('signup')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-emerald-500 transition-all duration-300 text-lg px-8 py-4 font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                S'inscrire
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <Logo size="md" variant="default" className="[&>span]:text-white" />
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                La solution IA pour révolutionner votre gestion documentaire de chantier.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Produit</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Fonctionnalités</button></li>
                  <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Témoignages</button></li>
                  <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Entreprise</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="https://buildoto.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">À propos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ChantierDoc. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
};

export default App;