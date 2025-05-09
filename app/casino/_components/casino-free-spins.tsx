"use client";

import { motion } from "framer-motion";

export default function FreeSpins() {
  return (
    <section className="py-6 px-4 lg:pt-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Get more out of your gaming with free spins.
        </motion.h2>
        <p className="mt-2">
          One of the best things about ph365 Casino for both new and old players
          is the free plays. Free spins let people play slots without putting
          their own money at risk and give them a chance to win real prizes for
          free. In many games, this feature is a welcome treat for new players,
          a way to reward loyal players, or an excuse to show off.
        </p>
        <p className="mt-2">
          ph365 Casino gives a lot of free spins to people who sign up for the
          first time. This way, they can play well-known video games like Book
          of Dead and Starburst without having to first put money into an
          account. They can learn how to play, try out different strategies, and
          maybe even win something during these free spins. They don&apos;t cost
          anything.
        </p>
        <p className="mt-2">
          In addition to bonuses when you first start playing, some slot games
          give you free spins all the time. For example, if a player hits a
          scatter sign or starts a bonus round, they might get extra free spins.
          This greatly increases their chances of winning. Free spins make
          online slots more exciting and fun, even when no money is at stake.
        </p>
      </div>
    </section>
  );
}
