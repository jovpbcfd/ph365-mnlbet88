"use client";

import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          How to Get Started with Card Games from ph365
        </motion.h2>
        <p className="mt-2 lg:mb-5">
          Starting with ph365 is easy and plain forward. Whether you know
          nothing about online gambling or are a seasoned gambler, our simple
          interface makes jumping right in easy. Here is a detailed walk-through
          guide on starting to play cards games at ph365:
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <ul className="list-decimal pl-5  w-full lg:w-3/4">
            <li className="mt-b">
              Create an account by first just registering for a free one on our
              website. You will have to supply some personal information such as
              your name, email address, and birthdate.
            </li>
            <li className="mt-b">
              Once your account is set up, one of the several safe payment
              options we provide allows you to make a deposit. This will cover
              your account so you may begin enjoying your preferred card games.
            </li>
            <li className="mt-b">
              Look over our assortment of card games and choose the one that
              most interests you. For those who wish to hone before using actual
              money, we also provide demo modes.
            </li>
            <li className="mt-b">
              The three-card game Teen Patti is loved by South Asians.
            </li>
            <li className="mt-b">
              Choose your game then it&apos;s time to lay your bets. Every game
              has minimum and maximum bet limitations; hence, before you lay
              your wager, make sure you review the regulations.
            </li>
            <li className="mt-b">
              Use your ability and tactics to try to win once the game starts.
              Every game has different regulations, hence before you start
              playing, be sure you know the payout systems and how to win.
            </li>
          </ul>
          <div
            className="w-full h-full lg:w-[300px] lg:h-[300px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </motion.div>
      </div>
    </section>
  );
}
