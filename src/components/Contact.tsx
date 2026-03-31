import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              GET IN <span className="text-neon">TOUCH</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Ready to start your journey? Visit us or reach out via call/WhatsApp. 
              Our team is ready to help you transform.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gym-gray border border-white/10 flex items-center justify-center rounded-sm text-neon shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight mb-1">Address</h4>
                  <p className="text-gray-400">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gym-gray border border-white/10 flex items-center justify-center rounded-sm text-neon shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight mb-1">Phone</h4>
                  <p className="text-gray-400">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gym-gray border border-white/10 flex items-center justify-center rounded-sm text-neon shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight mb-1">Hours</h4>
                  <p className="text-gray-400">Mon - Sat: 5:00 AM - 10:00 PM</p>
                  <p className="text-gray-400">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex-1 min-w-[200px] bg-white text-gym-black px-8 py-4 rounded-sm font-black uppercase flex items-center justify-center gap-2 hover:bg-neon transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                className="flex-1 min-w-[200px] bg-[#25D366] text-white px-8 py-4 rounded-sm font-black uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-neon/10 -rotate-2 rounded-sm group-hover:rotate-0 transition-transform" />
            <div className="relative z-10 h-full min-h-[400px] rounded-sm overflow-hidden border border-white/10">
              <iframe 
                src={CONTACT_INFO.googleMapsEmbed}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gym-black/80 backdrop-blur-sm text-white p-3 rounded-sm border border-white/10 flex items-center gap-2 text-xs font-bold uppercase hover:text-neon transition-colors"
                >
                  Open in Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
