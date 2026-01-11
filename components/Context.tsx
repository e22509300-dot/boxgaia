import React from 'react';
import { GraduationCap, Award, Leaf } from 'lucide-react';

const Context: React.FC = () => {
  return (
    <section id="context" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Une initiative étudiante engagée</h2>
            <div className="prose prose-lg text-stone-600">
              <p className="mb-4">
                Dans le cadre de notre formation à l'<strong>IAE de Brest</strong>, nous participons au concours <strong>Fabrik Ta Pépite</strong>. C'est ici qu'est née Gaïa, fruit de la collaboration de sept étudiants aux profils variés.
              </p>
              <p>
                Notre mission est simple mais ambitieuse : proposer une solution concrète pour la transition écologique, accessible à tous, des enfants aux débutants en écologie.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-50 rounded-xl flex flex-col items-center text-center">
                <GraduationCap className="text-emerald-600 mb-2" size={32} />
                <span className="font-semibold text-emerald-900">IAE Brest</span>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl flex flex-col items-center text-center">
                <Award className="text-emerald-600 mb-2" size={32} />
                <span className="font-semibold text-emerald-900">Fabrik Ta Pépite</span>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl flex flex-col items-center text-center">
                <Leaf className="text-emerald-600 mb-2" size={32} />
                <span className="font-semibold text-emerald-900">Transition Écologique</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-emerald-100 rounded-full opacity-60 blur-2xl"></div>
             <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Groupe d'étudiants travaillant ensemble sur le projet" 
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;