"use client";

import { motion } from "framer-motion";

export default function GetTheApp() {
  return (
    <section className="px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Get the ph365 app right away; don&apos;t wait.
        </motion.h2>
        <p className="mt-2 lg:pb-5">
          Download the ph365 app right now to find the best experience in fun
          and easy gaming! The software lets you launch unlimited games, enjoy
          home casino games, online slots, live casino or fishing games, and
          many more. Available for both Android and iOS, the software promises
          quick and seamless gameplay with minimal to no lags, and, therefore,
          provides you the continuous gaming experience. Apart from that, using
          the ph365 app gives consumers a chance to benefit from the incentives,
          promotions, quick and safe transactions as well. Push alerts also
          allow you to become completely informed with fresh news and incentives
          so you don&apos;t miss anything at all. Download the app at ph365
          right away to play the game you enjoy anytime, anywhere without
          concern.
        </p>
      </div>
    </section>
  );
}
