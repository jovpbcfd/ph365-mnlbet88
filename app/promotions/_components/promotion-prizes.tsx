"use client";

import { motion } from "framer-motion";

import Dot from "@/components/dot";

export default function Prizes() {
  return (
    <section className="py-6 px-4 lg:pt-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2 className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10">
          Kinds of Prizes
        </motion.h2>
        <p className="mt-2">
          The intriguing reward range of the Daily Fortune Wheel is its finest
          feature. You might just strike the jackpot or win something little and
          enjoyable. The most often occurring prizes from the wheel are listed
          here:
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <ul className="w-full lg:w-3/4">
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Free Spins:</strong>
                <p>
                  Who wouldn&apos;t want extra opportunities to win? Free spins
                  let you keep the enjoyment running without having to spend
                  your credits. In other games or activities, they might also
                  unlock larger prizes.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Bonus Credits: </strong>
                <p>
                  Bonus credits allow one to purchase goods, place bets, or play
                  additional games. Since they improve the whole game
                  experience, these are perhaps the most sought-after awards.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Instant Cash Rewards: </strong>
                <p>
                  Occasionally the wheel provides real, cold cash straight to
                  your account. For those who wish for quick returns from their
                  fortune, this is the highest award.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Exclusive Discounts: </strong>
                <p>
                  If you enjoy shopping or looking for special offers, some
                  spins could provide you vouchers or discounts for a range of
                  goods or services.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Mystery Prizes: </strong>
                <p>
                  One cannot emphasize the excitement of the mysterious prize.
                  The game gets much more exciting when the wheel presents an
                  unexpected surprise not mentioned. Could it be a special
                  benefit nobody else has or a limited-time offer? You&apos;ll
                  find out only when you spin!
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <strong>Trophy or Badges: </strong>
                <p>
                  Should a player value success, you can find yourself in a
                  position eligible for a trophy or badge. This enhances your
                  profile by highlighting your game-wide participation and
                  benchmarks.
                </p>
              </div>
            </li>
          </ul>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </motion.div>
      </div>
    </section>
  );
}
