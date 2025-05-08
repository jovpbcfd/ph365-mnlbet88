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
          Get ph365 App: Your Gateway to Ultimate Gaming
        </motion.h1>
        <p className="mt-2">
          Prepare to increase the stakes; ph365 is now on your mobile device!
          Aiming to work best, this software provides a simple portal to a
          cosmos of thrilling casino experience comprising live casinos, slots,
          fishing, cards and more. From tiny-scale players to professional
          gamers, the ph365 app offers supreme enjoyment, simple access, and
          tantalizing incentives at your fingertips. Just download the ph365 app
          today; don&apos;t wait to join the amazing gaming experience. Welcome
          to begin playing, winning, and enjoying online entertainment choices
          straight from your hand&apos;s palm!
        </p>
      </div>
    </section>
  );
}
