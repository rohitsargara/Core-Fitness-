import { motion } from "motion/react";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gym-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-neon" />
            <span className="text-xl font-display font-black tracking-tighter uppercase">
              Core <span className="text-neon">Fitness</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-neon transition-colors">Services</a>
              <a href="#reviews" className="text-sm font-medium hover:text-neon transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium hover:text-neon transition-colors">Contact</a>
              <a 
                href="#contact" 
                className="bg-neon text-gym-black px-4 py-2 rounded-sm text-sm font-bold uppercase hover:bg-white transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
