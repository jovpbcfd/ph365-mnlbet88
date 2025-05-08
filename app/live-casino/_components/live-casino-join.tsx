"use client";

import { motion } from "framer-motion";

export default function JoinNow() {
  return (
    <section className="py-6 px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Join Ph365 and Start Winning Right Now
        </motion.h2>
        <p className="mt-2">
          Sign up with ph365 today and be ready to untangle the fun, extra
          bonuses waiting for you, most especially, real experience. Our 24/7
          customer care makes you feel safe and lets you play and buy anything
          at any moment. Why not wait? Starting with ph365 now, make your path
          towards success clear-cut!
        </p>
      </div>
    </section>
  );
}
