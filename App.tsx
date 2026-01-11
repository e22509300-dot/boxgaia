import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemData from './components/ProblemData';
import Solution from './components/Solution';
import Team from './components/Team';
import Context from './components/Context';
import Footer from './components/Footer';
import OrderForm from './components/OrderForm';
import FadeIn from './components/ui/FadeIn';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <FadeIn>
          <Context />
        </FadeIn>
        
        <FadeIn>
          <ProblemData />
        </FadeIn>
        
        {/* Solution has its own internal FadeIn wrappers for staggered effect */}
        <Solution />
        
        <FadeIn>
          <Team />
        </FadeIn>
        
        <FadeIn>
          <OrderForm />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default App;