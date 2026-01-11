import React, { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: 'parent',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Scroll to confirmation when submitted
  useEffect(() => {
    if (isSubmitted) {
      const orderSection = document.getElementById('order');
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [isSubmitted]);

  if (isSubmitted) {
    return (
      <section id="order" className="py-24 bg-emerald-50 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-emerald-100 transform transition-all animate-float">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-emerald-500 w-24 h-24" />
            </div>
            <h2 className="text-4xl font-extrabold text-stone-900 mb-4">Merci pour votre commande !</h2>
            <p className="text-xl text-stone-600 mb-8 max-w-lg mx-auto">
              Votre demande a bien été enregistrée. L'équipe Gaïa reviendra vers vous très prochainement pour finaliser les détails.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-emerald-100 text-emerald-800 rounded-full font-bold hover:bg-emerald-200 transition-colors"
            >
              Envoyer une autre demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Passez à l'action</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mt-2 mb-6">
              Commandez votre Box Gaïa
            </h2>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Rejoignez l'aventure et commencez la transition écologique de votre famille dès aujourd'hui. Remplissez ce formulaire pour pré-commander votre box ou obtenir un devis pour votre école/entreprise.
            </p>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">1</div>
                <p className="font-medium text-stone-800">Remplissez vos informations</p>
              </div>
              <div className="w-px h-6 bg-stone-300 ml-5"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">2</div>
                <p className="font-medium text-stone-800">Nous vous contactons pour valider</p>
              </div>
              <div className="w-px h-6 bg-stone-300 ml-5"></div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">3</div>
                <p className="font-medium text-stone-800">Recevez votre Box Gaïa</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-stone-700">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Jean"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-stone-700">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-stone-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="jean.dupont@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-semibold text-stone-700">Je suis...</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                >
                  <option value="parent">Un Parent</option>
                  <option value="school">Une École / Enseignant</option>
                  <option value="company">Une Entreprise</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-stone-700">Message (Optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Une question particulière ou une quantité souhaitée ?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  isLoading ? 'bg-stone-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-200'
                }`}
              >
                {isLoading ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    Envoyer ma commande <Send size={20} />
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-stone-400">
                En cliquant sur envoyer, vous acceptez d'être recontacté par l'équipe Gaïa.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;