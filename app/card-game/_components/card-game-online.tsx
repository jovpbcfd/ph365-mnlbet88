"use client";

import { motion } from "framer-motion";

export default function CardGameOnline() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Play card games online
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <p className="mt-2">
              On the other hand, digital platforms like ph365 are used to access
              online card games. In these games, the platform&apos;s software
              handles all the actions, like mixing the cards and giving out
              hands, so there&apos;s no need for real cards or setup. The main
              benefit of online card games is that they are convenient. Players
              can play a variety of games at any time and from anywhere as long
              as they have an internet link and a device. You can play a card
              game anywhere-at home, on the road, or while traveling-without
              having to find other people to play or set up a real game.
            </p>
            <p className="mt-2">
              One more benefit is that internet card games are easy to play
              quickly. Digital platforms are sometimes faster and better than
              traditional card games because tasks like dealing and sorting are
              done automatically. This can make games more exciting and take
              less time, especially since real card games move more slowly.
              Websites also typically have more varieties and variants of card
              games so users may test out several games and pick up fresh
              tactics without ever leaving their houses.
            </p>
            <p className="mt-2">
              Online card games might not provide the same degree of personal
              connection and social engagement as conventional games even if
              they are accessible to everyone and easy to play. Players miss the
              intricacies of body language, conversing, and the sensation of
              being in the same place without really being there.
            </p>
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
