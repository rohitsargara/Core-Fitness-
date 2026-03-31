import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES } from "../constants";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gym-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            OUR <span className="text-neon">SERVICES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive fitness solutions tailored to your individual goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-sm bg-gym-gray border border-white/5 hover:border-neon/50 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-neon text-gym-black w-12 h-12 flex items-center justify-center rounded-sm mb-4 transform -skew-x-12 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="w-6 h-6 skew-x-12" />}
                  </div>
                  <h3 className="text-xl font-black mb-2 group-hover:text-neon transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
