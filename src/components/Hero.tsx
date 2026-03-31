import { motion } from "motion/react";
import { Star, Users, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { STATS } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-neon/10 border border-neon/30 px-4 py-1 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-neon fill-neon" />
            <span className="text-neon text-sm font-bold uppercase tracking-wider">
              Rated ⭐ 4.8 by 80+ Members in Udaipur
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black leading-none mb-6"
          >
            TRANSFORM YOUR <br />
            <span className="text-neon neon-glow">BODY & MIND</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-xl"
          >
            Experience Udaipur's premium fitness destination. Expert trainers, 
            branded equipment, and a community that drives results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="group bg-neon text-gym-black px-8 py-4 rounded-sm text-lg font-black uppercase flex items-center justify-center gap-2 hover:bg-white transition-all"
            >
              Contact
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#trial" 
              className="px-8 py-4 border-2 border-white/20 rounded-sm text-lg font-black uppercase flex items-center justify-center gap-2 hover:border-neon hover:text-neon transition-all"
            >
              Book Free Trial
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl font-black text-neon">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-neon/5 to-transparent" />
      </div>
    </section>
  );
}
