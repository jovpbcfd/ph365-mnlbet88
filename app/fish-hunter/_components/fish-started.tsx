"use client";

import { motion } from "framer-motion";

export default function Started() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          How Fish Hunter Started It
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
              Fish Hunters soon rose to become among the most popular online
              gaming and betting options. These games provide more fun and
              challenge than slots and card games you might be familiar with,
              hence they are not like those. Fish Hunter isn&apos;t just a game
              of luck; players must use skill, strategy, and perfect time to
              catch different kinds of fish, each with its own value.
            </p>
            <p className="mt-2">
              One thing that makes Fish Hunter stand out is that players can
              spend hours hunting for rare and expensive fish. These games
              became very popular very quickly because you can win big prizes
              and play them in a special way. People don&apos;t just sit back
              and let the reels spin or bet when they play slots or card games.
              Things are now happening in real time, and what they do has a
              direct impact on how things turn out.
            </p>
            <p className="mt-2">
              Fish Hunter games are fun and challenging, and players need to be
              able to plan ahead and use their skills. The best players
              generally depend on how accurate they are, how well they know how
              the game works, and how well they can change their plan. So, Fish
              Hunter is a great game for both new players who just want to have
              fun and expert players who want a game that is both fun and smart.
            </p>
            <p className="mt-2">
              There is something for everyone in Fish Hunter, whether you like
              fishing in peace and quiet or getting excited by the thought of
              catching a big fish.
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
