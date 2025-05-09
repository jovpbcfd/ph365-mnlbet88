"use client";

import { motion } from "framer-motion";

export default function Excellent() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Excellent Range of Games Available to Any Player
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mt-2">
            At ph365, we are quite happy to offer a wide spectrum of games to
            meet many various interests and preferences. Our game catalog
            features Microgaming, Playtech, Evolution gaming, and many more
            among the leading gaming developers globally. All aimed to offer an
            immersive, fascinating, and entertaining experience, our players
            thus have access to the most recent and imaginative games available
            in the company.
          </p>
          <p className="mt-2">
            Every player is different hence we offer a variety of game options
            to suit different interests and playing styles. Whether your chosen
            excitement is modern video slots, live dealer games, fishing games,
            or even sports betting or you enjoy classic casino games including
            blackjack, baccarat, and roulette, ph365 provides something for
            everyone. Our platform is always evolving with the newest games to
            keep the experience fresh and appealing for our consumers.
          </p>
          <p className="mt-2">
            Live casino games let those who value a more immersive experience
            engage personally with licensed dealers. Our large choice of online
            slots and table games will enable you to pass hours of boredom if
            you wish to play alone. Moreover, our particular specialty
            games—lottery and fishing games among others—give participants even
            more possibilities to win and enjoy their stay at ph365.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
