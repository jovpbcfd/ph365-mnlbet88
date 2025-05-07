"use client";

import { motion } from "framer-motion";

export default function Success() {
  return (
    <section className="py-6 px-4 text-black bg-white lg:pt-12">
      <div className="max-w-[1200px] mx-auto text-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Ways to Increase Your Fishing Success
        </motion.h2>
        <p className="mt-2 text-center lg:mb-4">
          Though Fish Hunter combines skill and luck, there are certain actions
          you may take to increase your odds of winning:
        </p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-3/4">
            <p className="mt-2">
              <strong className="text-[#FF5561] lg:text-xl">
                Know the Rules:
              </strong>{" "}
              Before you start playing, make sure you know how the game works,
              how much each fish is worth, and how to get to the extra features.
              It will help you make better choices while playing if you know a
              lot about it.
            </p>
            <p className="mt-2">
              <strong className="text-[#FF5561] lg:text-xl">
                You should be responsible with your money:{" "}
              </strong>{" "}
              Choose a limit on how much you spend on games and remain within
              it. If you know how to handle your money well, you can play for
              longer and not worry about spending too much.
            </p>
            <p className="mt-2">
              <strong className="text-[#FF5561] lg:text-xl">
                Take Advantage of Bonuses:{" "}
              </strong>{" "}
              Keep an eye out for deals and bonuses that can help you win more.
              You might have a better chance of winning big with these deals.
            </p>
            <p className="mt-2">
              <strong className="text-[#FF5561] lg:text-xl">
                Pick the Right Game:{" "}
              </strong>
              Every Fish Hunter is different. Take some time to try out
              different games and find the one that fits your playing style and
              tastes the best.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-[300px]
           border border-dashed border-black/20 rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 1080x1080
          </div>
        </motion.div>
      </div>
    </section>
  );
}
