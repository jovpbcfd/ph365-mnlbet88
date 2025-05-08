"use client";

import { motion } from "framer-motion";

export default function Excitement() {
  return (
    <section className="py-6 px-4 bg-white lg:pt-15">
      <div className="max-w-[1200px] mx-auto text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          The Excitement of Large Winning under ph365 Promotions
        </motion.h2>
        <p className="mt-2">
          Promos are basically about offering our players chances to win big
          rewards. They are supposed to give you that extra advantage regardless
          of your level of experience on our platform. Every campaign is an
          invitation to start fresh experiences, play many games, and—above
          all—collect amazing prizes. Here are some of our most intriguing and
          profitable promotions right now at ph365:
        </p>
      </div>
    </section>
  );
}
