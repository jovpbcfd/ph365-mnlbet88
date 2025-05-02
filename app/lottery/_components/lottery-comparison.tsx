"use client";

import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Lottery Historically Compared to Lottery
        </motion.h2>
        <p className="mt-2">
          Usually requiring ticket purchase with sets of numbers and waiting for
          the draw to determine the winners, conventional lotteries Part of the
          reason this method has been so popular for millennia is its really
          straightforward and logical character. But the Lottery brings fresh
          and intriguing elements to the mix by combining the excitement of
          lottery-style draws with the participatory flavor of fishing games.
        </p>
        <p className="mt-2">
          While normal lotteries can limit players to a given number of drawings
          and combinations, lottery lets participants enjoy more diverse and
          exciting gaming. Many Lottery games provide different awards depending
          on the fish you capture, numerous degrees of difficulty, and a large
          spectrum of fish species. Lottery provides a more lively and
          interesting experience than traditional lotteries for people looking
          for something different and original.
        </p>
      </div>
    </section>
  );
}
