"use client";

import { motion } from "framer-motion";

export default function DragonTiger() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center gap-6"
    >
      <div className="w-full lg:w-3/4">
        <h3 className="font-bold text-[25px] bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent my-2 lg:my-3">
          5. Dragon Tiger: The easiest Casino Showdown
        </h3>
        <p className="mt-2">
          Because of its simple rules and loads of action, Dragon Tiger is an
          interesting casino game favored for Las Vegas. Asian in origin, this
          exciting card duel between Dragon and Tiger involves two sides. But at
          ph365, savor real time thrill from the comfort of your houses,
          gorgeous graphics, and live dragon tiger with dealers.
        </p>
        <div>
          <h3 className="font-bold text-[25px] my-2 lg:my-3">
            Why do you play Dragon Tiger?
          </h3>
          <ul>
            <li>
              Particularly great for those who drive and detest spending long
              periods of time seated in church.
            </li>
            <li>
              Since you utilize a 50:50 ratio in this betting technique, you
              have rather better possibilities of winning.
            </li>
            <li>
              High-speed rounds ensure that the activity never becomes boring
              and that waiting is not long.
            </li>
            <li>
              This is so because, in as much as it is difficult for professional
              players, they allow for simple understanding of games and also
              keep interest and supporters of the game real.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[25px] my-2 lg:my-3">
            How should one play Dragon Tiger?
          </h3>
          <ul>
            <li>The Tiger gets another card; the Dragon gets one.</li>
            <li>
              The participants also gamble on whether the dealer will get a
              bigger card or whether the card totals will be a tie.
            </li>
            <li>
              At the bottom of the ranking system the cards follow is aces.
            </li>
            <li>
              The winner is the higher card; this is achieved first real time,
              so the game becomes more fascinating.
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
    </motion.div>
  );
}
