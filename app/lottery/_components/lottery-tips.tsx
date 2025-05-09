"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function Tips() {
  return (
    <section className="bg-white lg:py-15">
      <div className="max-w-[1200px] mx-auto text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Tips for Increasing Your Prospect of Success
        </motion.h2>
        <p className="mt-2 lg:mb-10">
          Lottery is primarily a question of chance, however, you could use
          several strategies to increase your chances of success:
        </p>
        <div className="pb-10 flex flex-col lg:flex-row items-center gap-6">
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/4"
          >
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Enter a Lottery Pool</strong>
                <p>
                  Pooling lottery tickets among friends, relatives, or
                  colleagues will increase your chances of winning without
                  spending more money. Combining your money can assist you in
                  purchasing multiple tickets and raise your odds of jackpot
                  success.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4 ">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Work Regularly</strong>
                <p>
                  More action increases your chances of winning. Save money
                  primarily for lottery games; then, play often for best
                  opportunities.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Choose Not Often Played Games</strong>
                <p>
                  Even although some Lottery games might not be as popular than
                  others, generally they provide more chances of winning. Spend
                  some time looking at lesser-known options to find their worth.
                </p>
              </div>
            </li>
          </motion.ul>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 1080x1080
          </div>
        </div>
      </div>
    </section>
  );
}
