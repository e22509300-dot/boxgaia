import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                  src="/logo.png" 
                  alt="Gaïa Logo" 
                  className="h-[7.5rem] w-auto object-contain" 
               />
            </div>
            <p className="text-stone-400 mb-6">
              Box éducatives pour initier les enfants et leurs familles à l'écologie par la pratique. Projet étudiant IAE Brest.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0" size={20} />
                <span>IAE de Brest<br/>20 rue Duquesne<br/>29200 Brest</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0" size={20} />
                <a href="mailto:gaiagreenboxs@gmail.com" className="hover:text-white transition-colors">gaiagreenboxs@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Partenaires</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-800 p-3 rounded flex items-center justify-center text-center text-xs font-bold text-stone-500 border border-stone-700">
                IAE Brest
              </div>
              <div className="bg-stone-800 p-3 rounded flex items-center justify-center text-center text-xs font-bold text-stone-500 border border-stone-700">
                UBO
              </div>
              <div className="bg-stone-800 p-3 rounded flex items-center justify-center text-center text-xs font-bold text-stone-500 border border-stone-700">
                Pépite Bretagne
              </div>
              <div className="bg-stone-800 p-3 rounded flex items-center justify-center text-center text-xs font-bold text-stone-500 border border-stone-700">
                Fabrik Ta Pépite
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Projet Gaïa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;