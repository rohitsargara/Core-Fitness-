import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT_INFO } from "../constants";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Bottom Join Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden bg-gym-black/80 backdrop-blur-md border-t border-white/10">
        <a 
          href="#contact" 
          className="w-full bg-neon text-gym-black py-4 rounded-sm font-black uppercase flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)]"
        >
          Contact Us
        </a>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-24 md:bottom-8 right-6 z-40 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 bg-gym-gray text-white border border-white/10 rounded-full flex items-center justify-center hover:bg-neon hover:text-gym-black transition-all"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-all animate-float"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.a>
      </div>
    </>
  );
}
