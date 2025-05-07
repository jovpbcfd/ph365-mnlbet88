"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="]">
      <div className="max-w-[1200px] mx-auto py-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold bg-gradient-to-r from-[#FF5A7A] to-[#FF8FA1] bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          A Complete Guide to ph365 Card Games: The Best Way to Play Online
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mt-2">
            The world of online gambling has grown a lot over the years, thanks
            to new games that appeal to players from all over the world. Card
            games are now one of the most popular types of these games. The
            standard mix of skill, luck, and strategy in card games is what
            makes them so fun. Here at ph365, we know how popular these games
            are and offer a wide selection of games for both new and experienced
            players. ph365 has a wide range of high-quality goods, so you can
            play classic card games or try out new, creative versions of old
            favorites.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
