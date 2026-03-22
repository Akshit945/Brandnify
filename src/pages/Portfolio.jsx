import React from 'react';
import { Link } from 'react-router-dom';

const PORTFOLIO_ITEMS = [
  {
    name: 'Aura Bites',
    url: 'https://www.aurabites.co.in',
    displayUrl: 'aurabites.co.in',
    description: 'A premium digital storefront built for high conversion, lightning-fast SEO, and seamless mobile commerce.',
    // Adding a placeholder image that matches the luxury dark mode theme
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Your Brand Next?',
    url: '/contact',
    displayUrl: 'Launch in 24 hrs',
    description: 'Ready to accelerate your digital presence? Claim your spot in our portfolio and scale your D2C brand today.',
    isCta: true
  }
];

const Portfolio = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-outline-variant/10 px-6 py-4 flex items-center">
        <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          <span className="font-manrope font-bold text-xl text-white">Brandnify</span>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold font-manrope tracking-tight mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Digital Real Estate</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Explore the high-performance storefronts we've built for ambitious Indian D2C brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item, i) => (
            item.isCta ? (
              <div key={i} className="rounded-2xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center p-12 text-center hover:border-primary/50 transition-colors bg-surface-container-lowest/50 min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                </div>
                <h3 className="text-2xl font-bold font-manrope mb-2">{item.name}</h3>
                <p className="text-on-surface-variant mb-8 px-4 leading-relaxed">{item.description}</p>
                <Link to={item.url} className="px-8 py-3 bg-primary text-on-primary font-bold rounded-md hover:opacity-90 transition-opacity">
                  {item.displayUrl}
                </Link>
              </div>
            ) : (
              <a href={item.url} target="_blank" rel="noopener noreferrer" key={i} className="group rounded-2xl bg-surface-container-high border border-outline-variant/10 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all block min-h-[400px]">
                <div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 flex flex-col justify-end p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-primary/90 text-on-primary font-bold text-sm rounded-md self-start backdrop-blur-md flex items-center gap-2">
                       Visit Live Site <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </span>
                  </div>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                </div>
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-bold font-manrope">{item.name}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">{item.displayUrl}</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            )
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
