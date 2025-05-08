"use client";

import { motion } from "framer-motion";

export default function Daily() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Turn to Win Every Day: Daily Fortune Wheel
        </motion.h2>
        <p className="mt-2">
          The best approach to infuse some thrills and expectation into your
          everyday schedule is our Daily Fortune Wheel. No matter how small or
          large, every day presents fresh chances to try your luck and win
          incredible prizes. Just log in, spin, and let fate choose your goodies
          for today! Every spin offers the possibility for something unique,
          regardless of your level of luck or just curiosity in what the wheel
          has ahead.
        </p>
      </div>
    </section>
  );
}
