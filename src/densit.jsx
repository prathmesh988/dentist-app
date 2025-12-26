import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    MapPin,
    Calendar,
    Star,
    CheckCircle,
    Menu,
    X,
    Instagram,
    Facebook,
    Youtube,
    ArrowRight,
    Stethoscope,
    Smile,
    Activity,
    Award,
    Settings
} from 'lucide-react';

/**
 * =================================================================================
 * TEMPLATE CONFIGURATION - EDIT THIS FOR PERMANENT CHANGES
 * =================================================================================
 */

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const initialConfig = {
    // Brand Identity
    clinicName: "All Care Dentist",
    tagline: "Experience World-Class Dental Care",
    subTagline: "Advanced technology meets compassionate care for your entire family.",
    city: "Pune",
    phoneNumber: "+91 98450 79479",
    email: "care@luminadental.com",

    // Theme Presets
    themes: {
        modernBlue: {
            name: "Clinical Blue",
            primary: "bg-blue-600",
            primaryHover: "hover:bg-blue-700",
            secondary: "bg-cyan-500",
            accent: "text-blue-600",
            bgSoft: "bg-slate-50",
            textDark: "text-slate-900",
            font: "font-sans",
            navBg: "bg-white/90 backdrop-blur-md border-b border-slate-100"
        },
        luxuryGold: {
            name: "Luxury Gold",
            primary: "bg-stone-800",
            primaryHover: "hover:bg-stone-900",
            secondary: "bg-amber-700",
            accent: "text-amber-700",
            bgSoft: "bg-stone-50",
            textDark: "text-stone-900",
            font: "font-serif",
            navBg: "bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-200"
        }
    },

    // Content Data
    stats: [
        { label: "Happy Patients", value: "10,000+" },
        { label: "Years Experience", value: "15+" },
        { label: "Specialists", value: "24+" },
        { label: "Google Rating", value: "4.9" },
    ],

    services: [
        { title: "Dental Implants", desc: "Permanent solutions for missing teeth.", icon: <Activity /> },
        { title: "Cosmetic Dentistry", desc: "Veneers, whitening, and smile design.", icon: <Smile /> },
        { title: "Root Canals", desc: "Painless microscopic treatments.", icon: <Stethoscope /> },
        { title: "Orthodontics", desc: "Invisalign and clear aligners.", icon: <CheckCircle /> },
    ],

    technology: [
        { title: "3D Intra Oral Scanning", desc: "No more messy impressions. Digital precision.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
        { title: "Laser Dentistry", desc: "Minimally invasive procedures for faster healing.", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&q=80&w=800" },
        { title: "CBCT Imaging", desc: "Advanced 3D diagnostics for precise planning.", image: "https://images.unsplash.com/photo-1516549882906-817000874509?auto=format&fit=crop&q=80&w=800" }
    ],

    testimonials: [
        { name: "Priya Sharma", text: "The best clinic in the city. Dr. Anjali was so gentle!", rating: 5 },
        { name: "Rahul Verma", text: "State of the art facility. My implants feel completely natural.", rating: 5 },
        { name: "Sarah Jenkins", text: "Traveled from the UK for treatment. Worth every mile.", rating: 5 }
    ]
};

/**
 * =================================================================================
 * MAIN COMPONENT
 * =================================================================================
 */
export default function DentalWebsiteDemo() {
    const [config, setConfig] = useState(initialConfig);
    const [activeTheme, setActiveTheme] = useState('modernBlue');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showDemoPanel, setShowDemoPanel] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const theme = config.themes[activeTheme];

    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handlers for the live demo panel
    const handleConfigChange = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    // Smooth Scroll Handler
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close mobile menu if open
        }
    };

    return (
        <div className={`min-h-screen ${theme.font} text-slate-600 antialiased selection:bg-blue-100 selection:text-blue-900`}>

            {/* =======================
          NAVBAR
      ======================== */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? theme.navBg : 'bg-transparent text-white'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo Area */}
                        <div className="flex items-center space-x-2">
                            <div className={`p-2 rounded-lg ${scrolled ? theme.primary : 'bg-white text-blue-600'}`}>
                                <Activity className={`h-6 w-6 ${scrolled ? 'text-white' : ''}`} />
                            </div>
                            <span className={`text-xl font-bold tracking-tight ${scrolled ? theme.textDark : 'text-white'}`}>
                                {config.clinicName}
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Services', 'Technology', 'Testimonials', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                                    className={`text-sm font-medium hover:opacity-70 transition-colors ${scrolled ? theme.textDark : 'text-white/90'}`}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className={`${scrolled ? theme.primary : 'bg-white text-slate-900'} ${scrolled ? 'text-white' : ''} px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm`}>
                                Book Appointment
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={scrolled ? theme.textDark : 'text-white'}
                            >
                                {isMobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t shadow-xl overflow-hidden"
                        >
                            <div className="p-4 flex flex-col space-y-4">
                                {['Home', 'Services', 'Technology', 'Contact'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => handleScroll(e, item.toLowerCase())}
                                        className="text-slate-600 font-medium py-2"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <button className={`${theme.primary} text-white px-6 py-3 rounded-lg font-semibold w-full`}>
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* =======================
          HERO SECTION
      ======================== */}
            <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=2000"
                        alt="Modern Dental Clinic"
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeTheme === 'modernBlue' ? 'from-slate-900/90 to-blue-900/40' : 'from-stone-900/90 to-amber-900/30'}`}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="lg:w-2/3"
                    >
                        <motion.div variants={fadeInUp} className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6`}>
                            <Award className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium">Best Dental Clinic in {config.city}</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            {config.tagline}
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                            {config.subTagline} Join thousands of happy smiles at {config.clinicName}.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${theme.primary} ${theme.primaryHover} text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2`}
                            >
                                <Calendar className="h-5 w-5" />
                                <span>Book Consultation</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0f172a" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center space-x-2"
                            >
                                <Phone className="h-5 w-5" />
                                <span>{config.phoneNumber}</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =======================
          STATS SECTION
      ======================== */}
            <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {config.stats.map((stat, idx) => (
                        <motion.div variants={fadeInUp} key={idx} className="text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 last:border-0 pb-4 lg:pb-0">
                            <div className={`text-4xl font-bold ${theme.accent} mb-1`}>{stat.value}</div>
                            <div className="text-slate-500 font-medium text-sm uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* =======================
          SERVICES
      ======================== */}
            <section id="services" className={`py-20 ${theme.bgSoft}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`${theme.accent} font-semibold tracking-wider uppercase text-sm mb-3`}>Our Expertise</h2>
                        <h3 className={`text-3xl lg:text-4xl font-bold ${theme.textDark}`}>Comprehensive Dental Care</h3>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {config.services.map((service, idx) => (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                key={idx}
                                className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                            >
                                <div className={`w-14 h-14 rounded-xl ${theme.bgSoft} ${theme.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {React.cloneElement(service.icon, { size: 28 })}
                                </div>
                                <h4 className={`text-xl font-bold ${theme.textDark} mb-3`}>{service.title}</h4>
                                <p className="text-slate-500 leading-relaxed mb-4">{service.desc}</p>
                                <a href="#" className={`inline-flex items-center text-sm font-semibold ${theme.accent} group-hover:opacity-70`}>
                                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* =======================
          TECHNOLOGY & SHOWCASE
      ======================== */}
            <section id="technology" className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className={`text-3xl lg:text-5xl font-bold ${theme.textDark} mb-6 leading-tight`}>
                                State of the Art <br /> <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeTheme === 'modernBlue' ? 'from-blue-600 to-cyan-500' : 'from-stone-800 to-amber-600'}`}>Technology</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                At {config.clinicName}, we believe in providing the most advanced care possible.
                                Our clinic is equipped with global-standard diagnostic and treatment technology to ensure precision, safety, and comfort.
                            </p>

                            <div className="space-y-6">
                                {config.technology.map((tech, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.2 }}
                                        key={idx}
                                        className="flex items-start space-x-4"
                                    >
                                        <img src={tech.image} alt={tech.title} className="w-24 h-24 rounded-lg object-cover shadow-md" />
                                        <div>
                                            <h4 className={`text-lg font-bold ${theme.textDark}`}>{tech.title}</h4>
                                            <p className="text-slate-500 text-sm mt-1">{tech.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-tr ${activeTheme === 'modernBlue' ? 'from-blue-100 to-transparent' : 'from-amber-100 to-transparent'} rounded-[2rem] transform rotate-3`}></div>
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                                alt="Clinic Interior"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-bounce-slow">
                                <div className="flex items-center space-x-2 text-yellow-500 mb-2">
                                    <Star className="fill-current" size={20} />
                                    <Star className="fill-current" size={20} />
                                    <Star className="fill-current" size={20} />
                                    <Star className="fill-current" size={20} />
                                    <Star className="fill-current" size={20} />
                                </div>
                                <p className={`font-bold ${theme.textDark}`}>"The most modern clinic I've ever visited!"</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =======================
          TESTIMONIALS
      ======================== */}
            <section id="testimonials" className={`py-20 ${theme.bgSoft} overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl font-bold ${theme.textDark} mb-12`}
                    >
                        Patient Stories
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {config.testimonials.map((t, i) => (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                key={i}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm flex-1 min-w-[300px]"
                            >
                                <div className="flex justify-center mb-4">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                </div>
                                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                                <div className="font-bold text-slate-900">{t.name}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Patient</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* =======================
          FOOTER
      ======================== */}
            <footer className="bg-slate-900 text-slate-300 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
                    <div>
                        <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Activity className={activeTheme === 'modernBlue' ? 'text-blue-500' : 'text-amber-500'} />
                            {config.clinicName}
                        </div>
                        <p className="text-slate-400 mb-6">
                            Excellence in dentistry. Creating smiles that last a lifetime with advanced technology and compassionate care.
                        </p>
                        <div className="flex space-x-4">
                            <Instagram className="hover:text-white cursor-pointer" />
                            <Facebook className="hover:text-white cursor-pointer" />
                            <Youtube className="hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">International Patients</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li>Dental Implants</li>
                            <li>Smile Design</li>
                            <li>Root Canal Treatment</li>
                            <li>Teeth Whitening</li>
                            <li>Kids Dentistry</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-white/50" />
                                <span>Shop 101, Business Bay, {config.city}, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-white/50" />
                                <span>{config.phoneNumber}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Calendar className="shrink-0 text-white/50" />
                                <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
                    © 2024 {config.clinicName}. All rights reserved.
                </div>
            </footer>

            {/* =======================
          DEMO CONFIGURATION PANEL (Floating Button)
      ======================== */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setShowDemoPanel(!showDemoPanel)}
                    className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:rotate-90 duration-500"
                >
                    <Settings size={24} />
                </button>

                {showDemoPanel && (
                    <div className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl p-6 border border-slate-200 animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h3 className="font-bold text-slate-900">Demo Settings</h3>
                            <button onClick={() => setShowDemoPanel(false)}><X size={18} /></button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Theme Style</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => setActiveTheme('modernBlue')}
                                        className={`p-2 rounded border text-sm font-medium ${activeTheme === 'modernBlue' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-slate-200'}`}
                                    >
                                        Clinical Blue
                                    </button>
                                    <button
                                        onClick={() => setActiveTheme('luxuryGold')}
                                        className={`p-2 rounded border text-sm font-medium ${activeTheme === 'luxuryGold' ? 'bg-amber-50 border-amber-500 text-amber-700' : 'bg-white border-slate-200'}`}
                                    >
                                        Luxury Gold
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Clinic Name</label>
                                <input
                                    type="text"
                                    value={config.clinicName}
                                    onChange={(e) => handleConfigChange('clinicName', e.target.value)}
                                    className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">City</label>
                                <input
                                    type="text"
                                    value={config.city}
                                    onChange={(e) => handleConfigChange('city', e.target.value)}
                                    className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    value={config.phoneNumber}
                                    onChange={(e) => handleConfigChange('phoneNumber', e.target.value)}
                                    className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}