"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function MasteringOdds() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Mastering the Odds on Sportsbook
        </motion.h2>
        <p className="mt-2 mb-6 text-center">
          Understanding odds is essential for making informed bets. Sportsbook
          offers multiple odds formats to suit user preferences:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-center border border-dashed border-white/20 rounded-md mx-auto lg:w-[500px] lg:h-[200px]">
              Image 500x200
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-[30px] lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent my-2 lg:my-5"
              >
                Decimal Odds
              </motion.h3>
              <ul>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>
                      Popular in Europe and Asia, decimal odds are
                      straightforward. To calculate your payout:
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>Payout = Stake × Odds</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>
                      For example: Betting ₱100 at 2.50 odds = ₱250 return (₱150
                      profit).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center border border-dashed border-white/20 rounded-md mx-auto lg:w-[500px] lg:h-[200px]">
              Image 500x200
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-[30px] lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent my-2 lg:my-5"
              >
                Moneyline Odds
              </motion.h3>
              <p className="mt-2">Common in the US, moneyline odds can be:</p>
              <ul>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>Positive (+200): A ₱100 bet returns ₱200 profit.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>Negative (-150): You must bet ₱150 to win ₱100.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center lg:mt-10">
          <p>
            Choose the format you’re most comfortable with-Sportsbook supports
            both.
          </p>
        </div>
      </div>
    </section>
  );
}
