"use client";

import { motion } from "framer-motion";

export default function RealCasino() {
  return (
    <section className="py-6 px-4 lg:pt-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Looking for Thrills from Real Casino? Why Not Go With ph365?
        </motion.h2>
        <p className="mt-2">
          Those who like to feel like the actual casino without leaving their
          house should use ph365. Playing with expert dealers at our live casino
          is fascinating, and its high quality streaming and large selection of
          games adds embellishment. Not a fan of Blackjack, Roulette, Baccarat
          or more then ph365 provides the finest of live gaming on one fantastic
          platform.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-3xl font-bold text-[#FF5561] mb-2 lg:mb-10 lg:mt-10"
            >
              Why ph365 for Live Casino?
            </motion.h3>

            <div>
              <ul>
                <li>
                  <p>
                    <strong>Real-world Live Experience</strong>
                    Services at ph365 let you feel as though you are in a live
                    casino, thereby enabling you to interact with actual live
                    casinos in your gameplay. You will eventually come to
                    believe that you are seated at a table in a real casino
                    setting and undergoing each turning point.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Wide Range of Games</strong>
                    Ph365 offers the best options of live casino, with a wide
                    range of games like Live Blackjack & Roulette, Live Baccarat
                    & poker as well as many more. Though newb and experienced
                    bettors may differ, there are essentially all kinds of games
                    with different forms of bets and in-between.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>First-rate Streaming</strong>
                    Usually the actual time of all live casino games, enjoy high
                    definition videos. Our streaming is clear as a bell, thus
                    you have only the best gaming experience free from worrying
                    about any game moment being missed.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Simple Availability Anywhere, Anytime</strong>
                    Therefore, the chance to interact with the live casino of
                    ph365 is open 24/7, thus you may play whenever you want.
                    Using whichever gadget you like, you can view the games live
                    right from the comfort of your house or almost anyplace.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Safe and just gameplay</strong>
                    Supported with certified random number generator and safe
                    money transactions, all the games on ph365 website symbolize
                    justice and security. It&apos;s crucial to understand that
                    your experience offers responsibility as well as
                    entertainment given security and transparency.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </div>
      </div>
    </section>
  );
}
