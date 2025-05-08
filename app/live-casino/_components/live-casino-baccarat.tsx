"use client";

import { motion } from "framer-motion";

export default function Baccarat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center gap-6 pb-4 lg:pb-8"
    >
      <div className="w-full lg:w-3/4">
        <h3 className="font-bold text-[25px] my-2 text-[#FF5561] lg:my-3">
          1. Baccarat: The Preferred Casino Classic
        </h3>
        <p className="mt-2">
          Among the oldest and most appealing forms of casinos drawing the most
          demand from patrons is baccarat. Professional and novice players
          especially like it since it has very basic guidelines but great risk
          involved. At ph365 you can also play the Baccarat with genuine
          dealers, premium graphics and high quality video broadcasts. Staking
          on Player, Banker, or Tie makes every game fascinating and full of
          prospective successes.
        </p>
        <h3 className="font-bold text-[20px] my-2 lg:my-3">
          Why play baccarat?
        </h3>
        <p className="mt-2">
          One of the easiest casino games available, baccarat is also well-known
          for showing up in upscale movies. Players who want fierce play free
          from many complex rules should avoid complicating the game. Baccarat
          is keeping the tensions in every round and is popular both for new and
          expert gamblers since it offers lots of possibilities for wagers and
          great chances to win.
        </p>
        <h3 className="font-bold text-[20px] my-2 lg:my-3">
          Playing baccarat: how should one approach it?
        </h3>
        <p className="mt-2">
          Played to find a bet on the player, the banker or a tie, baccarat also
          helps one choose which of the two hands most closely approaches 9. Two
          cards are once more given to the Player and Banker; special rules
          define whether a third card is drawn. Played easily and excitingly,
          the hand closest to nine wins!
        </p>
      </div>
      <div
        className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
      >
        Image 1080x1080
      </div>
    </motion.div>
  );
}
