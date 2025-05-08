"use client";

import { motion } from "framer-motion";

export default function HowTheyWork() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          ph365 Card Games: How They Work
        </motion.h2>
        <p className="mt-2">
          By understanding how most card games work on a basic level, you can
          better enjoy the more complex games on ph365. A deck of cards with
          different numbers and traits is what every card game is built around.
          Using these cards, players try to beat their opponent or generate
          winning combinations depending on the game rules.
        </p>
        <p className="mt-2">
          Outwinning the dealer or the other players is the main goal of the
          card game you are playing. Over time, these games have changed because
          internet platforms offer new ways to play. The biggest difference
          between traditional card games and their online versions is the
          platform that is used to play them. The basic rules of card games are
          the same in all of them, but the setting and experience may be very
          different.
        </p>
      </div>
    </section>
  );
}
