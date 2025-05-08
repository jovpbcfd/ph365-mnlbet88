"use client";

import { motion } from "framer-motion";

export default function LotteryPleasure() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-5"
            >
              Lottery Pleasure
            </motion.h2>
            <p className="mt-2">
              For everyone around, fishing has always been really attractive. It
              mixes knowledge, patience, and—of course—hope that the next group
              would present something outstanding. The introduction of the
              Lottery raises this time-honored past activity to hitherto
              unheard-of heights by blending the excitement of lottery-style
              gambling with the fun of fishing. The result is a single
              experience that appeals to those who appreciate fishing as well as
              the thrills of big win.
            </p>
            <p className="mt-2">
              Lottery exposes players to a universe where luck and strategy
              blend with each other. It blends the satisfying expectation of
              landing a big fish with the pleasure of a lottery jackpot. ph365
              knows this perfect blend of ingredients, hence we have worked very
              hard to offer a fair, safe, and enjoyable Lottery experience.
              Every time you play our platform provides something new and
              interesting since it provides players with a wide spectrum of
              lottery games with fishing themes.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </motion.div>
      </div>
    </section>
  );
}
