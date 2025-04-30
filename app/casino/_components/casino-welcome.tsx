"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto py-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          All You Need Know About the Top Online Casino Games Available at ph365
          Casino in the Philippines
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mt-2">
            People in the Philippines are quickly growing their online gaming
            business as more and more people discover how fun it is to play
            casino games from home. Online casinos are made so that Filipino
            players can have fun, get thrills, and maybe even win big. ph365
            Casino is one of the most well-known names in this growing field. It
            is a top site where players can enjoy a wide range of exciting
            casino games as well as the chance to win big prizes. This guide
            will go over the top online casino games at ph365 Casino together
            with salient features such RTP (Return to Player), progressive
            jackpots, free spins, no-deposit bonuses, and overall advantages of
            using this platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
