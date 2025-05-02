"use client";

import { motion } from "framer-motion";
import { steps } from "@/data/lottery-benefits";

export default function Benefits() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Benefits of Lottery Playing at ph365
        </motion.h2>
        <p className="mt-2 lg:mb-10">
          ph365 has been the chosen platform for online lottery enthusiasts for
          many different reasons. Our commitment to deliver a secure and
          enjoyable gaming environment has helped us to build a user-friendly,
          practical, and rich of possibilities platform. This explains why you
          should utilize ph365 for your Lottery experience:
        </p>
        <div className="relative space-y-12 before:absolute before:left-4 sm:before:left-6 before:top-0 before:bottom-0 before:w-[1px] before:bg-cyan-600">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600 text-white font-bold z-10">
                {index + 1}
              </div>
              <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
