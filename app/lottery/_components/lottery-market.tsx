"use client";

import { motion } from "framer-motion";

export default function GamingMarket() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          The spread of lottery inside the internet gaming market
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            The rise of online gaming has altered how people interact with game
            possibilities. As new and fascinating games find their way on
            websites like ph365, the internet gambling sector has expanded
            noticeably over the past few years. Lottery has evolved into a fan
            favorite among these innovative games for numerous gamers all
            around.
          </p>
          <p className="mt-2">
            Lottery games have become very well-known pretty fast thanks to
            their distinctive concept and fascinating gameplay. These games
            improve the interaction of the experience since they offer multiple
            degrees of strategy and player involvement instead of depending on
            traditional lottery rules. The Lottery company has so expanded
            rapidly and players today have access to an unusual mix of lottery
            draws and games inspired by fishing. At ph365, we wish to keep up
            with this growing trend by offering a range of excellent Lottery
            games that appeal to gamers returning for more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
