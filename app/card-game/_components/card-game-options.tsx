"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function Options() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Review of ph365 Card Games: Lots of Options
        </motion.h2>
        <p className="mt-2 lg:mb-6">
          We have a lot of different card games here at ph365 so that everyone
          can find something they like. Our platform has everything you need,
          whether you like old-school casino games or like to try out new ones.
          Some of the more well-known games you can play at ph365 are:
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <ul>
              <li className="flex items-start gap-4 lg:mt-2">
                <div>
                  <Dot />
                </div>
                <div>
                  Among the several variations of poker are Texas Hold&apos;em,
                  Omaha, and others.
                </div>
              </li>
              <li className="flex items-start gap-4 lg:mt-2">
                <div>
                  <Dot />
                </div>
                <div>
                  Gamblers are aware that blackjack is a game needing both luck
                  and skill.
                </div>
              </li>
              <li className="flex items-start gap-4 lg:mt-2">
                <div>
                  <Dot />
                </div>
                <div>
                  New players as well as high rollers will find immense
                  enjoyment in the fast-paced, thrilling game baccarat.
                </div>
              </li>
              <li className="flex items-start gap-4 lg:mt-2">
                <div>
                  <Dot />
                </div>
                <div>
                  The three-card game Teen Patti is loved by South Asians.
                </div>
              </li>
              <li className="flex items-start gap-4 lg:mt-2">
                <div>
                  <Dot />
                </div>
                <div>
                  An entertaining variation of blackjack, pontoon introduces
                  fresh techniques and ideas into the venerable game.
                </div>
              </li>
              <li className="flex items-start gap-4 lg:mt-2">
                <div>
                  <Dot />
                </div>
                <div>
                  War of Bets is a one-of-a-kind card game that changes the way
                  you play traditional card games.
                </div>
              </li>
            </ul>
            <div className="lg:mt-5">
              <p>
                We offer more than just these popular games. We also have live
                dealer games that bring the excitement of a real casino right to
                your computer. Since a real dealer runs the game in real time,
                live dealer games are better than other online games because
                they offer a more interesting setting.
              </p>
            </div>
          </div>
          <div
            className="w-full h-full lg:w-[300px] lg:h-[300px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </div>
      </div>
    </section>
  );
}
