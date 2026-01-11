import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-semibold mb-8 shadow-sm">
              <Star size={16} className="text-yellow-500 mr-2 fill-yellow-500" />
              Projet Finaliste Fabrik Ta Pépite 2025-2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tight mb-8 leading-[1.1]">
              L'écologie devient un jeu d'enfant avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Gaïa</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              La première box éducative qui transforme les gestes éco-responsables en mission familiale. Apprenez, agissez, et préservez ensemble.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#order" 
                onClick={(e) => scrollToSection(e, 'order')}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-200 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Commander ma Box
                <ArrowRight size={20} />
              </a>
              <a 
                href="#solution" 
                onClick={(e) => scrollToSection(e, 'solution')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-800 border-2 border-emerald-100 rounded-full font-bold text-lg hover:border-emerald-200 hover:bg-emerald-50 transition-all hover:-translate-y-1"
              >
                Comment ça marche ?
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="mt-20 md:mt-28 relative">
          <FadeIn delay={200}>
            <div className="rounded-3xl overflow-hidden shadow-2xl animate-float transform perspective-1000">
              <img 
                src="/hero.png" 
                alt="Enfants jardinant avec la mascotte Gaïa, un arbre animé, dans un jardin ensoleillé" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;