import { Review, Service, Stat } from "./types";

export const CONTACT_INFO = {
  address: "Parshuram Choraha, Udaipur",
  phone: "+91 8890377237",
  whatsapp: "+918890377237",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.123456789012!2d73.7123456789012!3d24.58123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56789012345%3A0x1234567890abcdef!2sCore%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
};

export const STATS: Stat[] = [
  { label: "Average Rating", value: "4.8 ⭐", icon: "Star" },
  { label: "Happy Members", value: "80+", icon: "Users" },
  { label: "Location", value: "Udaipur", icon: "MapPin" },
  { label: "Satisfaction", value: "100%", icon: "TrendingUp" },
];

export const SERVICES: Service[] = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Personalized programs focused on muscle building and functional strength.",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cardio",
    title: "Cardio Training",
    description: "High-energy fat loss programs with modern treadmills and ellipticals.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "crossfit",
    title: "CrossFit",
    description: "High-intensity functional movements to push your limits.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pt",
    title: "Personal Training",
    description: "1-on-1 sessions with dedicated expert trainers to reach your goals faster.",
    icon: "UserCheck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    rating: 5,
    text: "Best gym in Udaipur! The trainers are highly supportive and the equipment is top-notch. Highly recommended for beginners.",
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "Priya Verma",
    rating: 5,
    text: "Latest branded machines and very spacious workout area. The environment is perfect for a serious workout.",
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Ankit Mehta",
    rating: 4,
    text: "Great experience so far. The trainers actually pay attention to your form. Suitable for both pros and beginners.",
    date: "3 weeks ago",
  },
  {
    id: "4",
    name: "Sneha Gupta",
    rating: 5,
    text: "Cleanest gym I've been to in Udaipur. The cardio section is amazing. Love the vibe here!",
    date: "2 months ago",
  },
  {
    id: "5",
    name: "Vikram Singh",
    rating: 5,
    text: "The personal training program is worth every penny. I've seen great results in just 3 months.",
    date: "1 week ago",
  },
  {
    id: "6",
    name: "Deepak Raj",
    rating: 5,
    text: "Spacious and comfortable workout area. Never feels too crowded even during peak hours.",
    date: "5 days ago",
  },
  // Adding more for the grid
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `extra-${i}`,
    name: `Member ${i + 7}`,
    rating: Math.random() > 0.2 ? 5 : 4,
    text: "Excellent facilities and professional staff. Best place for fitness enthusiasts in Udaipur.",
    date: `${i + 2} months ago`,
  }))
];

export const WHY_CHOOSE_US = [
  {
    title: "Latest Branded Machines",
    description: "We invest in the best equipment to ensure your safety and maximum results.",
    icon: "Settings",
  },
  {
    title: "Spacious Workout Area",
    description: "Plenty of room to move, breathe, and focus on your transformation.",
    icon: "Maximize",
  },
  {
    title: "Supportive Trainers",
    description: "Our experts are always on the floor to guide and motivate you.",
    icon: "HeartHandshake",
  },
  {
    title: "Beginner Friendly",
    description: "No matter where you start, we provide the environment to help you grow.",
    icon: "Baby",
  },
];
