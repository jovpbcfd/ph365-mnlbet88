"use client";

import { motion } from "framer-motion";

export default function Play() {
  return (
    <section className="py-5 px-4">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          There is no deposit bonus; play before you pay.
        </motion.h2>
        <p className="mt-2">
          People can try out ph365 Casino&apos;s no-deposit bonus without having
          to make a deposit first. This is one of the best deals. You can use
          this bonus to try out the casino and play games for real money without
          having to first make a deposit.
        </p>
        <p className="mt-2">
          ph365 Casino is one example. They give new players a ₱500 bonus or 50
          free spins on a few chosen slot games when they sign up. Right away,
          you can play and maybe even win real money without having to put any
          money down. These bonuses can require you to make bets before you can
          cash them out, but they are still a great way for people to try out
          online casinos without any risk.
        </p>
        <p className="mt-2">
          As a new player, you can try all of ph365 Casino&apos;s games for free
          with the no-deposit bonus. Check out the site and see if it meets your
          needs with this offer. It&apos;s great if you&apos;re new to online
          gaming or just want to play some games.
        </p>
      </div>
    </section>
  );
}
