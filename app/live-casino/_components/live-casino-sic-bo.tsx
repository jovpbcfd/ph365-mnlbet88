"use client";

import { motion } from "framer-motion";

export default function SicBo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center gap-6"
    >
      <div className="w-full lg:w-3/4">
        <h3 className="font-bold text-[25px] my-2 text-[#FF5561] lg:my-3">
          3. Sic Bo: the Chance Ultimate Dice Game
        </h3>
        <p>
          Popular and quickly expanding dice games like Sic Bo are quite simple
          to learn, but they also have a lot of complexity. Born in Asia, this
          game has been spreading over world casinos thanks to its odds and
          unusual combinations of different betting possibilities. Sic Bo comes
          to life at ph365 with live dealers, energetic graphics, and a dynamic
          gaming environment, therefore transforming every throw of the dice
          into an amazing event.
        </p>
        <div>
          <h3 className="font-bold text-[25px] my-2 lg:my-3">
            Why Play Sic Bo?
          </h3>
          <ul>
            <li>
              For the player seeking a quick and brilliant casino game, Sic Bo
              is a suitable form of game.
            </li>
            <li>
              For any kind of a player, there are several chances for betting
              from simple to high risk.
            </li>
            <li>
              But the chance involved in a roll of the dice gives even another
              twist of the knife.
            </li>
            <li>
              Perfect for individuals looking for diversity and a fantastic
              basis for those just starting their BDSM toy journey.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[25px] my-2 lg:my-3">
            How should one play Sic Bo?
          </h3>
          <ul>
            <li>
              On the Sic Bo table, players stake on the value of a three-roll of
              three dice.
            </li>
            <li>
              Potential bets are totals, single numbers, or a mix of numbers or
              a defined sequence.
            </li>
            <li>
              The dealer then rolls the dice in a safe dice tumbler and shows
              the result from it.
            </li>
            <li>
              The amount of possibilities inside the selected choice will define
              the chances and value you obtain from a win; so, it is the
              quantity or value of the option you choose that you gamble in a
              bet.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
      >
        Image 1080 x 1080
      </div>
    </motion.div>
  );
}
