"use client";

import { motion } from "framer-motion";

export default function WhyShouldPick() {
  return (
    <section className="py-6 px-4 bg-white lg:pt-15">
      <div className="max-w-[1200px] mx-auto  text-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Why Should You Pick ph365 Casino?
        </motion.h2>

        <p className="mt-2">
          ph365 Casino has quickly become one of the most popular online casinos
          in the Philippines. Its wide range of games, user-friendly interface,
          tempting bonuses, and partner programs offer people the chance to make
          money. There is something for everyone at ph365 Casino, whether you
          like live dealer games, big jackpots, or high-RTP slots.
        </p>
        <p className="mt-2">
          The site has great customer service, safe payment choices, and a fully
          licensed area so that gamers can have a good time without worrying
          about their safety. Filipinos who like to play gambling games can do
          so wherever it is most convenient for them thanks to mobile gaming.
        </p>
      </div>
    </section>
  );
}
