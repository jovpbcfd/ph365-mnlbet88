"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="py-10 lg:pt-15">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Online Sports Bet with Sportsbook: Your All-Inclusive Success Manual
        </motion.h1>
        <p className="mt-2">
          Online sports betting is increasing in the Philippines as more and
          more sportsmen and punters join the bandwagon. Sportsbook has become
          well-known in the core of this swiftly expanding market. With its
          large selection of betting markets, competitive odds, and simple
          interface, Sportsbook sets itself out as a preferred platform for both
          novice and expert gamblers.
        </p>
        <p className="mt-2">
          Your best road map for success with Sportsbook is this thorough guide.
          This book covers all you need, from knowing odds to learning various
          bet kinds and techniques, regardless of your level of experience with
          online sports betting or desire to hone your abilities.
        </p>
      </div>
    </section>
  );
}
