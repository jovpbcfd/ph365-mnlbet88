"use client";

import { motion } from "framer-motion";

export default function Conclusion() {
  return (
    <section className="pt-6 px-4 lg:pb-12">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Conclusion
        </motion.h2>
        <p className="mt-2">
          We&apos;re glad to offer a lot of Fish Hunter games on ph365.
          It&apos;s now one of the best and most fun types of games to play
          online. Fish Hunter is a fun game for people of all skill levels.
          Beautiful graphics, fun games, and the chance to win big make it worth
          it. There is something on ph365 for everyone, whether you want to fish
          or play games with big stakes. How long are you going to wait? Today
          at ph365, cast your line and start bringing in the prizes!
        </p>
      </div>
    </section>
  );
}
