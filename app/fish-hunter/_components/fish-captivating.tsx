"use client";

import { motion } from "framer-motion";

export default function Captivating() {
  return (
    <section className="py-5 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          What is it about fish hunters that is so captivating?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-3/4">
            <p className="mt-2">
              Fish Hunter games are intrinsically enjoyable due to their
              distinctive combination of rewards, timing, and techniques. By
              incorporating smooth gameplay, attractive sound effects, and
              creative graphics that evoke a genuine fishing excursion, we have
              elevated the expectations for this genre at ph365. Thanks to the
              immersive experience, players will be delighted and fascinated
              while they hunt several types of fish.
            </p>
            <p className="mt-2">
              These games aim to catch several types of fish, each with unique
              worth and degree of difficulty. Your tactics may vary depending on
              the game circumstances and the quantity and size of the fish you
              are hunting as you play. Aim the line properly and timing your
              shot will help you to get the fish before they escape. Fish
              Hunter&apos;s game is continually evolving, hence enthusiasts of
              the game keep returning for additional chances to win large
              prizes.
            </p>
            <p className="mt-2">
              The game is much more thrilling because of its numerous features
              and bonuses. Moving through the levels of the game, a player gains
              jackpots, multipliers, and power-ups that improve their whole
              experience. These additional features inspire development and
              reward that keeps you fascinated.
            </p>
            <p className="mt-2">
              It&apos;s not enough to just throw out a line and hope for the
              best for fish hunters. There are new tasks with each level, and
              the game gets more fun with each successful catch. What keeps
              people playing these games is the excitement, the strategy, and
              the huge chance to win big prizes.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px]
           border border-dashed border-white/20 rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </motion.div>
      </div>
    </section>
  );
}
