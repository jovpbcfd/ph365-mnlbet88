"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="py-6 px-4 bg-white lg:pt-15">
      <div className="max-w-[1200px] mx-auto  text-black dark:text-white">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-5"
            >
              How the Lottery Works
            </motion.h2>
            <p className="mt-2">
              The Lottery is not that difficult really. Players choose a set of
              numbers or a predetermined &quot;catch&quot; they believe will
              win, then wait for the draw to find out if their estimate is
              correct. Still, the game provides significantly more than first
              looks at. Lottery games are intriguing to those seeking an
              immersive gaming experience since they are full of excitement,
              expectation, and many possibilities to win.
            </p>
            <p className="mt-2">
              The Lottery is defined by the gaming mechanisms. Depending on the
              game, your goal could be selecting specific fish or components
              connected to fishing that suit a given set of numbers or
              combinations. Lottery has an interesting and dynamic spin that
              improves every game, even if classic lottery games have some
              aspects. The additional levels of engagement and strategy enable
              players to engage more in the process and generate an experience
              much more fascinating than those of traditional lottery games.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 1080x1080
          </div>
        </div>
      </div>
    </section>
  );
}
