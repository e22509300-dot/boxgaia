import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertCircle } from 'lucide-react';

const data = [
  {
    name: 'Enfants sensibilisés',
    value: 95,
    color: '#10b981', // emerald-500
    description: 'Connaissent les bénéfices du tri et du recyclage'
  },
  {
    name: 'Passage à l\'acte',
    value: 53,
    color: '#f59e0b', // amber-500
    description: 'Pratiquent le tri de manière habituelle'
  }
];

const ProblemData: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Le fossé entre la théorie et la pratique</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Aujourd'hui, l'éducation au développement durable reste souvent trop théorique. Les chiffres montrent un décalage important entre la sensibilisation et l'adoption réelle de comportements durables.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="h-80 w-full">
              <h3 className="text-lg font-semibold text-stone-800 mb-6 text-center">Enquête Junior City (Mai 2021) - Enfants 4-14 ans</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="name" width={150} tick={{fill: '#44403c', fontSize: 14, fontWeight: 500}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-between px-4 mt-2 text-sm text-stone-500 font-mono">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-900">Le Constat</h4>
                    <p className="text-amber-800 text-sm">95% des enfants sont sensibilisés, mais seulement la moitié applique ces gestes au quotidien.</p>
                  </div>
               </div>
               
               <div className="prose text-stone-600">
                 <p>
                   Les experts du GIEC expliquent que l'éducation environnementale est l'un des leviers les plus efficaces.
                 </p>
                 <p className="font-bold text-emerald-800">
                   Il est nécessaire d'apprendre en pratiquant pour traduire ces compétences théoriques en compétences concrètes.
                 </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemData;