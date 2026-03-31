import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, Sparkles, Filter } from "lucide-react";
import { REVIEWS } from "../constants";
import { cn } from "../lib/utils";

export default function Reviews() {
  const [filter, setFilter] = useState<"recent" | "top">("top");
  const [showAll, setShowAll] = useState(false);

  const featuredReviews = useMemo(() => REVIEWS.slice(0, 6), []);
  
  const filteredReviews = useMemo(() => {
    let list = [...REVIEWS];
    if (filter === "top") {
      list = list.sort((a, b) => b.rating - a.rating);
    } else {
      // In a real app we'd sort by date, here we just shuffle slightly
      list = list.reverse();
    }
    return showAll ? list : list.slice(0, 12);
  }, [filter, showAll]);

  return (
    <section id="reviews" className="py-24 bg-gym-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            REAL <span className="text-neon">RESULTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't take our word for it. Hear from our 80+ members who transformed their lives.
          </p>
        </div>

        {/* AI Summary Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-sm border border-neon/20 bg-neon/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-24 h-24 text-neon" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-neon text-gym-black p-4 rounded-full">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neon mb-2 uppercase tracking-tight flex items-center gap-2">
                AI Review Summary
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                "Most members highlight the <span className="text-white font-bold">exceptional trainer support</span> and 
                <span className="text-white font-bold"> high-quality branded equipment</span>. 
                The gym is consistently rated 5 stars for its spacious environment and suitability for both beginners and pros."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gym-gray rounded-sm border border-white/5 relative group hover:border-neon/30 transition-all"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5 group-hover:text-neon/10 transition-colors" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "w-4 h-4",
                      i < review.rating ? "text-neon fill-neon" : "text-gray-600"
                    )} 
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neon/20 rounded-full flex items-center justify-center text-neon font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Grid with Filters */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <h3 className="text-2xl font-black uppercase">Review Grid</h3>
            <div className="flex bg-gym-gray p-1 rounded-sm border border-white/10">
              <button 
                onClick={() => setFilter("top")}
                className={cn(
                  "px-4 py-2 text-xs font-bold uppercase transition-all rounded-sm",
                  filter === "top" ? "bg-neon text-gym-black" : "text-gray-400 hover:text-white"
                )}
              >
                Top Rated
              </button>
              <button 
                onClick={() => setFilter("recent")}
                className={cn(
                  "px-4 py-2 text-xs font-bold uppercase transition-all rounded-sm",
                  filter === "recent" ? "bg-neon text-gym-black" : "text-gray-400 hover:text-white"
                )}
              >
                Recent
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((review) => (
                <motion.div
                  layout
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-4 bg-gym-gray/50 rounded-sm border border-white/5 text-center"
                >
                  <div className="flex justify-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-2 h-2",
                          i < review.rating ? "text-neon fill-neon" : "text-gray-800"
                        )} 
                      />
                    ))}
                  </div>
                  <h5 className="text-[10px] font-bold uppercase truncate">{review.name}</h5>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-neon text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              {showAll ? "Show Less" : "View All 80+ Reviews"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
