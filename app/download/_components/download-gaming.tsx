"use client";

import { motion } from "framer-motion";

export default function SafeGaming() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Your Doorway to Safe and Uninterrupted Gaming
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <p className="mt-2">
              At ph365, we make sure our customers have an unimpeded and safe
              gaming experience. Our sophisticated security systems keep both
              personal and financial information you enter or that is created
              during your play safe. It follows that gives for every player safe
              play, secure particular controlled transactions, authenticated
              fair, and enjoy dedication to openness.
            </p>
            <p className="mt-2">
              One may say that the ph365 app offers consumers an amazing
              experience from a vividly designed graphical interface, very quick
              navigation throughout its parts, and particularly safe and quick
              transactions. Gamers on Android and iOS smartphones need not
              restrict themselves to the hours they spend inside playing. So,
              along from a great variety of games, rich features, and
              possibilities, athletes will have even more motivation combined
              with the unique mobile perks and offers. Join us now to play your
              games on the most stable and uninterrupted connection!
            </p>
            <p className="mt-2">
              Our system is meant to provide a smooth user experience in
              addition to being safe. With its clean, contemporary design, the
              ph365 app offers fast and easy navigation. Whether you&apos;re a
              first-time visitor or a seasoned gamer, everything will be right
              at your fingertips—from game genres to account settings.
            </p>
            <p className="mt-2">
              Gaming shouldn&apos;t be confined to your PC; with ph365, it
              isn&apos;t. Our platform works perfectly with both Android and iOS
              smartphones, so you can carry your games wherever. You may access
              your favourite games without any compromise in performance or
              security whether you are on your commute, resting on the couch, or
              travelling.
            </p>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </div>
        <p className="mt-2">
          Apart from mobile compatibility, we provide exclusive mobile perks and
          deals. These incentives are specifically designed for our mobile
          users, so providing you additional benefits and value each time you
          log in from your tablet or phone.
        </p>
        <p className="mt-2">
          Variety is the spice of life at ph365. Our wide range of games spans
          all categories—including casino classics, live dealer games, sports
          betting, slots, and more. Reputable software companies power every
          game, therefore ensuring high-quality graphics, seamless play, and
          fair odds.
        </p>
        <p className="mt-2">
          Apart from gaming, our platform is loaded with user-friendly tools
          including real-time customer assistance, immediate alerts, transaction
          history tracking, and tailored settings. Everything you need is
          included in the experience whether you&apos;re chasing a jackpot or
          playing a fast game during your break.
        </p>
      </div>
    </section>
  );
}
