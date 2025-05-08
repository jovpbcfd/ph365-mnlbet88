"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="py-10 lg:pt-15">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          The Ultimate Guide to Lottery by ph365: A Universe of Thrilling
          Possibilities and Huge Wins
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            Fishing has long been praised as a leisurely and satisfying past
            hour for millions of people all around. Whether you are fishing from
            the shore or on a boat tossing your line, the thrill of the catch is
            unquestionable. But in recent years, this beloved hobby has changed
            because the concept of &quot;lottery&quot; has emerged in the domain
            of online betting. Combining the excitement of fishing with the
            attractiveness of lottery-style prizes, this new sort of
            entertainment has attracted players all around. Adopting this trend,
            ph365 has produced an exciting and artistic Lottery experience
            whereby players may win very large sums.
          </p>
          <p className="mt-2">
            Lottery has gone global providing a unique blend of relaxation,
            strategy, and suspense. Understanding the excitement and growing
            popularity of this game, we at ph365 have dedicated ourselves to
            offer an exciting, open, and user-friendly Lottery platform. Our
            goal is to provide both inexperienced and expert lottery players the
            chance to win possibly life-changing sums of money as well as to
            enjoy interesting games. Whether you adore fishing or this kind of
            lottery is fresh to you, we offer something for everyone. Thus let
            us begin to investigate the cosmos of the ph365 Lottery and all the
            opportunities it offers!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
