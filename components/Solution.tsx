import React from 'react';
import { Package, Heart, BookOpen, Sun, Recycle, Users } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <FadeIn delay={delay}>
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-50/10 hover:shadow-2xl hover:bg-emerald-50/90 transition-all duration-300 transform hover:-translate-y-2 h-full">
      <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  </FadeIn>
);

const Solution: React.FC = () => {
  const scrollToOrder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-teal-400 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-emerald-300 font-bold tracking-wider uppercase text-sm bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-700">Notre Réponse</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">La Box Écologique Gaïa</h2>
            <p className="text-emerald-100 text-xl max-w-2xl mx-auto font-light">
              Une méthode complète pour initier toute la famille aux gestes durables, un mois à la fois.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Package size={28} />}
            title="Objets du Quotidien"
            description="Des objets durables et concrets pour transformer les habitudes de toute la famille instantanément."
            delay={0}
          />
          <FeatureCard 
            icon={<BookOpen size={28} />}
            title="Livret Illustré"
            description="Un guide pédagogique pour expliquer le 'pourquoi' et le 'comment' de chaque action écologique."
            delay={100}
          />
          <FeatureCard 
            icon={<Sun size={28} />}
            title="Thèmes Mensuels"
            description="Exploration des Objectifs de Développement Durable et des limites planétaires, mois après mois."
            delay={200}
          />
          <FeatureCard 
            icon={<Heart size={28} />}
            title="Lien Parent-Enfant"
            description="Favorise le 'faire soi-même' et les moments de partage en famille, loin des écrans."
            delay={300}
          />
          <FeatureCard 
            icon={<Recycle size={28} />}
            title="Double Impact"
            description="Un impact éducatif fort combiné à un impact écologique réel grâce à des produits sourcés."
            delay={400}
          />
          <FeatureCard 
            icon={<Users size={28} />}
            title="Pour Tous"
            description="Adapté aux enfants de 7 à 12 ans, mais aussi à tous les débutants souhaitant une transition douce."
            delay={500}
          />
        </div>

        <div className="mt-20">
            <FadeIn delay={600}>
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Prêt à changer le monde ?</h3>
                  <p className="text-emerald-200">Rejoignez les premières familles qui testent l'aventure Gaïa.</p>
                </div>
                <a 
                  href="#order" 
                  onClick={scrollToOrder}
                  className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Commander ma première box
                </a>
              </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Solution;