"use client";

import { motion } from "framer-motion";

export default function EverydayCardGames() {
  return (
    <section className="py-6 px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Everyday Card Games
        </motion.h2>
        <p className="mt-2">
          Usually involving real cards, people play card games with each other
          in person. People get together to play traditional card games, whether
          a laid-back poker game among friends or a high-stakes poker event in a
          casino. Managing real cards physically, distributing them, and
          touching the deck improves the realism and attraction of the game. In
          order to make the game more social, players also use body language,
          real-time conversation, and strategies.
        </p>
        <p className="mt-2">
          But there are some problems with standard card games as well. They
          seek a venue for meetings as well as other people to be present. This
          can make it more difficult to enter, particularly if you cannot locate
          someone to play with or live in an area where gaming rooms and casinos
          are closed to the general public. Additionally time-consuming and
          inconvenient is setting up and dismantling common card games.
        </p>
      </div>
    </section>
  );
}
