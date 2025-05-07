"use client";

import { motion } from "framer-motion";

export default function WhyCardGames() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Why Card Games Have Survived Over the Years
        </motion.h2>
        <p className="mt-2">
          Card games have been around for thousands of years; their roots can be
          found in ancient China and Egypt. These games have changed a lot over
          the years. They have roots in many different cultures and can be found
          all over the world. Over the years, card games have been fun for
          people from all walks of life, from the card tables in local bars to
          the court games played in royal courts.
        </p>
        <p className="mt-2">
          People like card games because they are basic and fun. You need both
          skill and luck to win. Card games are fun because they let you use
          strategy, bluff, and make decisions, which aren&apos;t possible in
          games of pure chance. This is what keeps people coming back for more.
          People are kept on the edge of their seats because these games are fun
          and each hand can be different.
        </p>
        <p className="mt-2">
          Card games have been slowly growing over the past few years, thanks in
          part to the rise of online gambling sites like ph365. The digital
          revolution has made it easier than ever for people to play their
          favorite card games at home. There are now a lot of fun new versions
          and features that are meant to keep the action fresh and fun.
        </p>
      </div>
    </section>
  );
}
