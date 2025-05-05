"use client";

import { motion } from "framer-motion";

export default function PlayEveryday() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <div className="pb-10 flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
            >
              Why should one play every day?
            </motion.h2>
            <p className="mt-2">
              The Daily Fortune Wheel is about maintaining the thrill as much as
              about the possibility to win large. Every day turning the wheel
              provides a fascinating way to break up your routine; each spin
              presents fresh surprises. Playing is quick and you can feel good
              knowing that every spin advances you toward possibly larger
              winnings.
            </p>
            <p className="mt-2">
              Engaging the Daily Fortune Wheel also helps you interact with the
              platform, which usually results in extra chances to win or access
              special privileges. Thanks in great part to the Daily Fortune
              Wheel, many players have discovered that consistent play has over
              time accrued notable bonuses.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </div>
      </div>
    </section>
  );
}
