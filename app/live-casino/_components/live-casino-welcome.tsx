"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="py-6 px-4 lg:pt-15">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Discover Live Casino&apos;s Thrill at ph365
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            Welcome to the amazing chance to be surrounded by the special
            feelings and experience of ph365 live casino games. Our Live casino
            offers you the sensation of a real casino where you may play our
            preferred games in real-time, at the moment you wish and where you
            want. Talk to expert live dealers because you run the best and most
            well-known games including Blackjack, Roulette, Baccarat, and
            others. High definition and crisp streaming will make it seem as
            though you are seated at a real casino table right from your house.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
