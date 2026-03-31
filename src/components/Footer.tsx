import { Dumbbell, Instagram, Facebook, Youtube } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-gym-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-neon" />
              <span className="text-2xl font-display font-black tracking-tighter uppercase">
                Core <span className="text-neon">Fitness</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Udaipur's premier fitness destination. We combine expert guidance with 
              high-end equipment to help you achieve the body you've always wanted.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gym-gray flex items-center justify-center rounded-sm hover:text-neon transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gym-gray flex items-center justify-center rounded-sm hover:text-neon transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gym-gray flex items-center justify-center rounded-sm hover:text-neon transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#services" className="hover:text-neon transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-neon transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-neon transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2026 Core Fitness Gym Udaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
