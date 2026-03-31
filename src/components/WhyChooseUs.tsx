import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { WHY_CHOOSE_US } from "../constants";

export default function WhyChooseUs() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">
              WHY PEOPLE <br />
              <span className="text-neon">CHOOSE CORE</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Our reputation is built on real results and member satisfaction. 
              Here's what makes us the best gym in Udaipur.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item, index) => {
                const IconComponent = (Icons as any)[item.icon];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 border border-neon/30 flex items-center justify-center rounded-sm text-neon">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative z-10 rounded-sm overflow-hidden border-2 border-neon/20">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background boxes */}
            <div className="absolute -top-8 -right-8 w-full h-full border-2 border-neon/10 -z-0" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-neon/10 -z-0" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-neon text-gym-black p-8 rounded-sm text-center shadow-2xl">
              <span className="block text-5xl font-black leading-none">4.8</span>
              <span className="block text-xs font-bold uppercase tracking-widest mt-2">Star Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
