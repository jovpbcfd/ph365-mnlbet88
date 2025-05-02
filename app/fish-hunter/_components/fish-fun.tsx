"use client";

import { motion } from "framer-motion";

import { Timelines } from "@/components/timeline";
import { data } from "@/data/play-guide";

export default function Fun() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:my-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Having fun with Fish Hunter at ph365
        </motion.h2>
        <div>
          <p className="mt-2">
            Our goal at ph365 is to make our platform easy to use and available
            so that you can jump right into the world of Fish Hunter. This is a
            step-by-step guide on how to start and improve your chances of
            winning.
          </p>
        </div>
        <div>
          <Timelines data={data} />
        </div>
      </div>
    </section>
  );
}
