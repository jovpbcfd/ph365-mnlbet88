"use client";

import { motion } from "framer-motion";

export default function Introducing() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
            >
              Introducing ph365 Card Games
            </motion.h2>
            <p className="mt-2">
              Card games have long been very important in the gaming industry.
              Their simple rules are just one way they keep players interested;
              another is that they challenge players to think of ways to beat
              their opponents. We at ph365 know why these games are still so
              popular across the world and among all age groups. Ph365 is one of
              the best places to gamble online in the Philippines. It has a lot
              of card games that users can play from home to feel like they are
              in a real casino.
            </p>
            <p className="mt-2">
              Whether you like blackjack, poker, or baccarat, which is a
              fast-paced game, we have something for you. The goal of
              ph365&apos;s card game goods is to provide a fun and flawless
              experience by combining new takes on old favorites with classic
              games. We run our online gaming site with cutting-edge technology
              and make sure everyone plays fairly. This makes it both fun and
              safe.
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
