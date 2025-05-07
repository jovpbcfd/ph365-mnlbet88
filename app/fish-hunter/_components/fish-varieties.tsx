"use client";

import { motion } from "framer-motion";

export default function Varieties() {
  return (
    <section className="py-6 px-4 bg-white lg:pb-15">
      <div className="max-w-[1200px] mx-auto  text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Various Fish Varieties and Values
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            Not all fish are made equally in Fish Hunter.Different types of fish
            are harder to find than others, and each one has its own value.
            While ordinary fish are more readily obtained and pay less, rare and
            legendary fish can give players large sums. Understanding the worth
            and behavior of many fish species will help you to raise your
            chances of huge wins.
          </p>
          <p className="mt-2">
            Sometimes their speed or secretiveness makes particular fish more
            difficult to find. Maximizing your income depends on knowing these
            fish&apos;s behavior and modifying your approach. Certain games also
            have rare species or bonus fish that set off unique abilities, hence
            enhancing the gameplay&apos;s thrills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
