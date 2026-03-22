import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container font-body min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 dark:bg-zinc-950/80 backdrop-blur-2xl no-border tonal-shift shadow-2xl shadow-blue-500/5">
        <div className="flex justify-between items-center px-6 md:px-8 h-20 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-[-0.04em] text-white font-manrope">Brandnify</div>
          
          <nav className="hidden md:flex gap-8 items-center">
            <a className="font-['Manrope'] tracking-tight font-bold text-blue-400 border-b-2 border-blue-400 pb-1" href="#features">Features</a>
            <Link className="font-['Manrope'] tracking-tight font-bold text-zinc-400 hover:text-white transition-colors" to="/portfolio">Our Work</Link>
            <a className="font-['Manrope'] tracking-tight font-bold text-zinc-400 hover:text-white transition-colors" href="#why-rent">Why Rent?</a>
            <a className="font-['Manrope'] tracking-tight font-bold text-zinc-400 hover:text-white transition-colors" href="#growth-hub">Growth Hub</a>
            <a className="font-['Manrope'] tracking-tight font-bold text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
          </nav>
          
          <div className="hidden md:block">
            <Link to="/contact" className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-md font-bold tracking-tight scale-95 active:scale-90 transition-transform hover:opacity-80">
              Contact Us
            </Link>
          </div>

          <button className="md:hidden text-zinc-300 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-t border-outline-variant/10 shadow-2xl flex flex-col p-6 gap-6 h-[calc(100vh-80px)] overflow-y-auto">
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-manrope text-lg font-bold text-white border-b border-outline-variant/10 pb-4" href="#features">Features</a>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-manrope text-lg font-bold text-white border-b border-outline-variant/10 pb-4" to="/portfolio">Our Work</Link>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-manrope text-lg font-bold text-white border-b border-outline-variant/10 pb-4" href="#why-rent">Why Rent?</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-manrope text-lg font-bold text-white border-b border-outline-variant/10 pb-4" href="#growth-hub">Growth Hub</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-manrope text-lg font-bold text-white border-b border-outline-variant/10 pb-4" href="#pricing">Pricing</a>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="mt-4 text-center bg-primary text-on-primary py-4 rounded-md font-bold transition-opacity hover:opacity-90">
              Contact Us
            </Link>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-secondary-container border border-outline-variant/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-extrabold font-manrope tracking-[-0.04em] mb-6 leading-[1.1]">
              Stop Playing Tech Support. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary">Start Scaling Your Brand.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-body leading-relaxed">
              Zero Technical Debt. 24-hour Launch. <br />
              <span className="text-on-surface font-semibold">The Digital Landlord for Indian SMEs.</span>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-md shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-center">
                Claim Your Brand in 24 Hours
              </Link>
              <a href="#pricing" className="w-full md:w-auto px-8 py-4 bg-transparent border border-outline-variant text-primary font-bold rounded-md hover:bg-surface-container-high transition-colors text-center">
                Explore Tier Comparison
              </a>
            </div>
          </div>
        </section>

        {/* Product Preview (Bento Grid Style) */}
        <section id="features" className="px-8 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 h-[400px] rounded-xl bg-surface-container-high relative overflow-hidden group">
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <h3 className="text-2xl font-bold font-manrope">Mobile-First Commerce</h3>
                <p className="text-on-surface-variant">Lightning-fast checkout for the WhatsApp generation.</p>
              </div>
              <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="Dark UI dashboard with neon blue analytics data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiDiFwgM8oIBSU5hsRhr-2iZwlUDJLwihcGUyfm_oW-XPwTAJuwyCsGOIBYjBxzmbi31oBLyIvbWbU-racENW44RAUgrWjHLIxMPAPgwBEjr0lBSF0DSCr02Gufl97Ci03BRakn5lQjlnvJW8GD6AUSKfHiQTBRFJPxHVaaho46f0K-Ne_2VM1NShBQqbABI7EotLrOMLQV4BjRs-AMJxA_hJekDAauXuR_LfGtAVzIpX9G152bB6fdYV0R96HKTxkszf95_ItYXA" alt="Dashboard Mockup" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="md:col-span-4 h-[400px] rounded-xl bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant/10">
              <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">bolt</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-manrope mb-2">Blink-Speed SEO</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Core Web Vitals optimized from day zero. No slow plugins, just pure performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PAS Section */}
        <section id="growth-hub" className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope tracking-tight mb-8">
                  Fed up with <span className="text-error">"Check DM for Price"</span> culture and overpriced agency risks?
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-error-dim pt-1">warning</span>
                    <p className="text-lg text-on-surface-variant">Expensive dev fees, slow updates, and technical fatigue are killing your growth.</p>
                  </div>
                  <div className="p-8 rounded-xl bg-surface-container-highest border-l-4 border-primary">
                    <h4 className="text-primary font-bold mb-2 font-manrope">The Brandnify Solution</h4>
                    <p className="text-on-surface">Professional, high-performance web solutions on a simple subscription. We build, host, and maintain. You just sell.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-primary/5 absolute -top-10 -left-10 w-full h-full animate-pulse"></div>
                <img className="rounded-2xl relative z-10 shadow-2xl border border-outline-variant/20" data-alt="Clean minimal website builder interface on a professional monitor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiRPfhM39h_81nNdAFGKtXglM82kxZezpe3XinLd7zn19CK6k5bm_5vAPplhm8I1ConyDnzRQPuRuuRkNxHE5FDy-S1r8PnGKj1nzqYZTJOqrXpNEnGGUZWv-_ZpbIpIcfkchL5zA1VfUYSyYYJpkO7DfA-qF22BrAd9HQfvD7t1WmXEPcqtB45-1UCl8Zg3b7LNV_WLKjNwROS15eQLt6VPGy_uejyPj4XEvn5upAL5l5ZrEQD0hYUrhBBwZ2nbcy8XnYdhcD5uo" alt="Product Mockup" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="py-32 max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold font-manrope mb-4">Select Your Growth Velocity</h2>
            <p className="text-on-surface-variant">Transparent pricing tailored for Indian D2C brands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
            {/* Flash */}
            <div className="p-8 rounded-xl bg-surface-container-high border border-outline-variant/10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-lg font-bold font-manrope mb-1">Flash</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black">₹499</span>
                  <span className="text-on-surface-variant text-sm">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Single-page Digital Card
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Personal Branding
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Blink-Speed Hosting
                </li>
              </ul>
              <Link to="/contact" className="block text-center w-full py-3 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors font-bold text-sm">Get Started</Link>
            </div>
            {/* Showcase */}
            <div className="p-8 rounded-xl bg-surface-container-high border border-outline-variant/10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-lg font-bold font-manrope mb-1">Showcase</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black">₹1,499</span>
                  <span className="text-on-surface-variant text-sm">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Brand Presence (5 Pages)
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Product Galleries
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Email Integration
                </li>
              </ul>
              <Link to="/contact" className="block text-center w-full py-3 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors font-bold text-sm">Get Started</Link>
            </div>
            {/* Full-Stack Rental */}
            <div className="p-8 rounded-xl bg-primary/10 border-2 border-primary flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest rounded">Popular Choice</div>
              <div className="mb-8">
                <h3 className="text-lg font-bold font-manrope mb-1">Full-Stack Rental</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black">₹2,999+</span>
                  <span className="text-on-surface-variant text-sm">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  E-commerce Engine
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Full Backend &amp; CMS
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Inventory &amp; Payments
                </li>
              </ul>
              <Link to="/contact" className="block text-center w-full py-3 bg-primary text-on-primary rounded font-bold text-sm">Launch Store</Link>
            </div>
            {/* Brand-in-a-Box */}
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col opacity-80">
              <div className="mb-8">
                <h3 className="text-lg font-bold font-manrope mb-1 text-on-surface-variant">Brand-in-a-Box</h3>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">Coming Soon</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 text-sm text-zinc-600 italic">
                  Website + Ads Management
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600 italic">
                  Growth Analytics
                </li>
              </ul>
              <button className="w-full py-3 border border-outline-variant/40 text-zinc-600 rounded font-bold text-sm cursor-not-allowed" disabled>Join Waitlist</button>
            </div>
          </div>
        </section>

        {/* Strategy: Why Rent? */}
        <section id="why-rent" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20">
              <h2 className="text-4xl font-bold font-manrope mb-4">Why Rent Instead of Buy?</h2>
              <p className="text-on-surface-variant">Traditional web development is a liability. We turned it into a utility.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <div className="text-primary-container"><span className="material-symbols-outlined text-4xl">build_circle</span></div>
                <h4 className="text-xl font-bold font-manrope">Zero Maintenance</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">No more "update available" notifications. We handle security patches and performance tuning 24/7.</p>
              </div>
              <div className="space-y-4">
                <div className="text-primary-container"><span className="material-symbols-outlined text-4xl">cloud_done</span></div>
                <h4 className="text-xl font-bold font-manrope">Tier-1 Hosting</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Your site sits on edge-optimized infrastructure. Faster loading means higher conversion rates.</p>
              </div>
              <div className="space-y-4">
                <div className="text-primary-container"><span className="material-symbols-outlined text-4xl">upgrade</span></div>
                <h4 className="text-xl font-bold font-manrope">Infinite Scalability</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Starting small? Upgrade your tier in one click. Our architecture grows with your order volume.</p>
              </div>
              <div className="space-y-4">
                <div className="text-primary-container"><span className="material-symbols-outlined text-4xl">update</span></div>
                <h4 className="text-xl font-bold font-manrope">Fluid Updates</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Need a banner change or a new collection page? Our support team executes it at blink-speed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container-lowest p-16 text-center relative overflow-hidden border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-6xl font-black font-manrope mb-8 tracking-tighter">Ready to accelerate?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto">Get your professional brand online in the next 24 hours. No upfront dev costs, just growth.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="block text-center px-12 py-4 bg-primary text-on-primary font-bold rounded-md hover:scale-105 transition-transform">Get Started Now</Link>
              <Link to="/contact" className="block text-center px-12 py-4 border border-outline-variant text-on-surface font-bold rounded-md hover:bg-surface-container-high transition-colors">Book a Demo</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-24 px-8 mt-20 dark:bg-zinc-900 tonal-layering-elevation flat-surface-design">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 items-start">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-black text-white mb-4 font-manrope">Brandnify</div>
            <p className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 mb-6">The Digital Accelerator for Indian SME &amp; D2C.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 font-manrope">Product</h4>
            <div className="flex flex-col gap-4">
              <a className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 hover:text-blue-400 transition-colors hover:translate-x-1 transition-transform duration-200" href="#pricing">Subscription Tiers</a>
              <a className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 hover:text-blue-400 transition-colors hover:translate-x-1 transition-transform duration-200" href="#why-rent">Why Rent?</a>
              <a className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 hover:text-blue-400 transition-colors hover:translate-x-1 transition-transform duration-200" href="#">Technical Promise</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 font-manrope">Resources</h4>
            <div className="flex flex-col gap-4">
              {/* <a className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 hover:text-blue-400 transition-colors hover:translate-x-1 transition-transform duration-200" href="#">SME Growth Resources</a> */}
              <Link to="/contact" className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 hover:text-blue-400 transition-colors hover:translate-x-1 transition-transform duration-200">Contact Support</Link>
              <a className="font-['Inter'] text-sm tracking-wide leading-relaxed text-zinc-500 hover:text-blue-400 transition-colors hover:translate-x-1 transition-transform duration-200" href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="col-span-2 md:col-span-4 mt-12 pt-12 border-t border-outline-variant/10 text-center text-zinc-500 text-xs">
            © 2024 Brandnify. The Digital Accelerator for Indian SME &amp; D2C.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
