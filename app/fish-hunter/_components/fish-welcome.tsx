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
          The Ultimate Guide on ph365 Fish Hunter
        </motion.h1>
        <p className="mt-2">
          As internet gaming develops constantly, the sector has seen an amazing
          explosion in new genres and trends. Among these, Fish Hunter has
          become a fast-expanding subgenre that enthralls a large global player
          count. Many have made this fascinating genre a favorite since it
          combines fun, skill, and strategy in an original way. At Ph365, we are
          rather proud of spearheading this trend and providing gamers with a
          first-rate venue to fully enter the Fish Hunter world. Whether
          you&apos;re new to the game or experienced, Ph365 offers an unmatched
          experience where you may start an amazing fishing expedition and win
          large prizes!
        </p>
      </div>
    </section>
  );
}
