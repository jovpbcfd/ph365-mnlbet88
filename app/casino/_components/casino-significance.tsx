"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

export default function Significance() {
  return (
    <section className="bg-blue-950 py-6 px-4">
      <div className="max-w-[1200px] mx-auto grid gap-10 lg:grid-cols-2 items-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
          >
            Knowing RTP—Return to Player—and Its Significance
          </motion.h2>
          <p className="mt-2 leading-relaxed">
            Among the most crucial numbers every player at an online casino
            should know is return to player (RTP). Over time, the proportion of
            all the money bet on a game that should be refunded to players. It
            reflects the ideal outcome of a game. Should a game have an RTP of
            96%, for example, ₱96 will be refunded on average for every ₱100
            bet, therefore establishing the house edge.
          </p>
          <p className="mt-2 leading-relaxed">
            Those who want to raise their chances of making informed decisions
            on which games to participate notably rely on RTP. Better long-term
            value provided by higher RTP games helps players to enjoy longer
            gaming sessions with greater possibilities of positive outcomes.
          </p>
          <p className="mt-2 leading-relaxed">
            There are several games with fair RTP available for players of ph365
            Casino. Players looking to maximize their wagers highly value
            popular slot games such as Starburst, Gonzo&apos;s Quest, and Book
            of Dead, RTPs ranging from 94% to 98%. There are also table games
            with extra chances for bigger rewards including Roulette (97% RTP)
            and Blackjack (99% RTP).
          </p>
          <p className="mt-2 leading-relaxed">
            There are several games with fair RTP available for players of ph365
            Casino. Players looking to maximize their wagers highly value
            popular slot games such as Starburst, Gonzo&apos;s Quest, and Book
            of Dead, RTPs ranging from 94% to 98%. There are also table games
            with extra chances for bigger rewards including Roulette (97% RTP)
            and Blackjack (99% RTP).
          </p>
          <p className="mt-2 leading-relaxed">
            Knowing RTP would help Filipino gamers to create a smart gaming
            strategy. Higher RTP games are the first choice for those who give
            value first priority since they raise the possibility of generating
            positive returns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center rounded-xl border border-dashed border-white/20 lg:ml-10 lg:w-[400px] lg:h-[400px]"
        >
          Image 1080x1080
          {/* <Image
            src={rtpImage}
            alt="RTP Information Visual"
            width={400}
            height={300}
            className="rounded-xl border border-white/20"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
