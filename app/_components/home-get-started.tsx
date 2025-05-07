"use client";

import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:py-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-12"
        >
          Getting Started with ph365
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Integrating ph365 is straightforward. All you have to do is register
            on our website to be instantly connected to a universe full of
            amazing gaming options. Welcome as a new member, a kind offer aimed
            at enhancing your first gaming experience. This incentive maximizes
            your chances to investigate all the many games we provide, and
            straight from the start, maximize your delight.
          </p>
          <p>
            Our first goal at <strong>ph365</strong> is to establish a moral
            casino. Every player should have a great experience, and we also
            want to make sure they understand the risks associated with
            gambling. Our platform promotes users to play correctly and provides
            tools to help with any problems concerning gaming behavior.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
