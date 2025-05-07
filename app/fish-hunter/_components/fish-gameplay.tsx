"use client";

import { motion } from "framer-motion";

export default function GamePlay() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto text-black dark:white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Simple Gameplay Techniques
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            Most Fish Hunter&apos;s basic mechanics center on aiming and
            shooting a fishing line to capture different kinds of fish. Players
            target fish on the screen by varying the direction, force, and speed
            of a virtual fishing rod or line. The worth of the fish you catch
            ranges; rarer species pay more.
          </p>
          <p className="mt-2">
            Usually, participants start by betting before even playing. This bet
            is very important because it affects how much you could win based on
            the fish you catch. Aiming your fishing line and shooting it at the
            fish marks the true difficulty once your bet is put. Capturing a
            fish successfully yields a payoff; the value of the fish will define
            your earnings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
