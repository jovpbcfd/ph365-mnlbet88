"use client";

import { motion } from "framer-motion";

import {
  BadgeDollarSign,
  Percent,
  TrendingUp,
  Goal,
  // Trophy,
  TimerReset,
} from "lucide-react";

const bets = [
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-indigo-500" />,
    title: "1. Moneyline Wagers",
    description:
      "The easiest and most common sports bet. You simply bet on who you think will win. Great for beginners.",
  },
  {
    icon: <Percent className="w-6 h-6 text-pink-500" />,
    title: "2. Point Spread Dance",
    description:
      "Betting on the margin of victory. Teams are given a spread to even the odds, making it a balanced wager.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
    title: "3. Over/Under (Total) Wagers",
    description:
      "Bet on whether the total combined score will be over or under a number set by the sportsbook.",
  },
  {
    icon: <Goal className="w-6 h-6 text-orange-500" />,
    title: "4. Proposition (Prop) Bets",
    description:
      "Wager on specific events within the game (e.g. first player to score, number of home runs, etc). Adds more excitement.",
  },
  {
    icon: <TimerReset className="w-6 h-6 text-blue-500" />,
    title: "5. Live Betting",
    description:
      "Place bets in real-time as the game unfolds. Odds change fast, making it thrilling and dynamic.",
  },
];

export default function TypesOfSportsBook() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Types of Bets on Sportsbook
        </motion.h2>
        <p className="text-center text-white mb-12 max-w-3xl mx-auto">
          Knowing the different kinds of bets you can make is key to building a
          solid strategy. Here&apos;s a breakdown of some popular options
          available on ph365.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {bets.map((bet, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-blue-200 transition-shadow duration-300 rounded-xl p-6 border border-gray-100 flex items-start gap-4"
            >
              <div className="flex-shrink-0">{bet.icon}</div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-black mb-1 ">
                  {bet.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {bet.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-white max-w-2xl mx-auto">
          Whether you&apos;re new to betting or a seasoned pro, understanding
          these wager types can add excitement and strategy to your sports
          experience.
        </p>
      </div>
    </section>
  );
}
