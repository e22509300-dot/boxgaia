import React from 'react';
import { User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  tags: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Capucine Azou",
    role: "Ressources Humaines",
    tags: ["Gestion", "Management"]
  },
  {
    name: "Yann Baltas",
    role: "Marketing",
    tags: ["Expérience Entrepreneuriale"]
  },
  {
    name: "Lelio Brochado",
    role: "Comptabilité",
    tags: ["Erasmus", "Gestion"]
  },
  {
    name: "Lola Capitaine-Jégou",
    role: "Comptabilité",
    tags: ["Gestion", "Management"]
  },
  {
    name: "Mohamed Amine Chakib",
    role: "Comptabilité et Marketing",
    tags: ["Gestion", "Management"]
  },
  {
    name: "Killian Guillou",
    role: "Comptabilité",
    tags: ["Gestion", "Management"]
  },
  {
    name: "Léane Quéméner",
    role: "Ressources Humaines",
    tags: ["Fabrik Ta Pépite 2024"]
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Une équipe engagée et complémentaire</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Sept étudiants de l'IAE de Brest réunis autour d'une même envie : créer un projet utile, accessible et responsable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-stone-100 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                 <User className="text-emerald-600 w-10 h-10" />
              </div>
              <h3 className="font-bold text-lg text-stone-900">{member.name}</h3>
              <p className="text-emerald-600 font-medium text-sm mb-3">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {member.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;