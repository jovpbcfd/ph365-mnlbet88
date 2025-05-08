"use client";

import { motion } from "framer-motion";

export default function HowItOperates() {
  return (
    <section className="py-6 px-4 bg-white lg:pb-15">
      <div className="max-w-[1200px] mx-auto text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          How It operates
        </motion.h2>
        <p className="mt-2">
          The Daily Fortune Wheel is an interesting idea. All you have to do is
          log into your account then find the Fortune Wheel part. Once there,
          you will be able to spin the wheel and see with a mix of excitement
          and expectation how it revolves. There are several portions to the
          wheel, each corresponding with a different prize. These may be bonus
          spins, free credits, quick cash awards, or special discounts.
        </p>
        <p className="mt-2">
          You receive one free spin every day to try your fortune. The
          excitement doesn&apos;t end there though; the longer you play, the
          more chances you have to collect extra spins or unlock unique bonuses.
          Furthermore, the different awards mean that there is always something
          fresh and interesting to look forward to. Each spin will deliver
          something different, thus the element of surprise is what makes the
          Daily Fortune Wheel so much enjoyable!
        </p>
      </div>
    </section>
  );
}
