"use client";

import { motion } from "framer-motion";

export default function WorkMethodology() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Fish Hunter&apos;s Work Methodology
        </motion.h2>
        <p className="mt-2">
          At ph365, we have a large range of Fish Hunter products meant to
          provide you a first-class, immersive experience. To keep you
          interested and involved, these games deftly combine contemporary,
          dynamic components with classic fishing aspects. Let&apos;s explore
          Fish Hunter&apos;s on our platform approach more closely.
        </p>
      </div>
    </section>
  );
}
