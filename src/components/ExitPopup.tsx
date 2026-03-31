import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Gift, Zap } from "lucide-react";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gym-black/90 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-gym-gray border-2 border-neon p-10 rounded-sm text-center overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-neon/20 blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-neon/20 blur-[80px]" />

          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-neon text-gym-black rounded-full mb-6">
              <Gift className="w-10 h-10" />
            </div>

            <h2 className="text-4xl font-black mb-4 leading-tight">
              WAIT! DON'T <br />
              <span className="text-neon">QUIT YET</span>
            </h2>
            
            <p className="text-gray-400 mb-8 text-lg">
              Get a <span className="text-white font-bold">1-DAY FREE TRIAL PASS</span> and experience 
              Udaipur's best gym for yourself. No strings attached!
            </p>

            <div className="space-y-4">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-neon text-gym-black py-4 rounded-sm font-black uppercase flex items-center justify-center gap-2 hover:bg-white transition-all"
              >
                <Zap className="w-5 h-5" />
                Claim My Free Pass
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
              >
                No thanks, I'll pass on my fitness goals
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                Limited to 5 passes per day • 3 left for today
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
