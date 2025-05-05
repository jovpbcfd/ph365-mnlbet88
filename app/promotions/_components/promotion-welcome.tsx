"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto py-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          ph365 Promotions: Discover Unmatched rewards and Thrilling
          Possibilities
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            At ph365, we believe that online gaming is about providing an
            exciting, captivating experience that will keep you coming back for
            more than just game playing. Our promos are aimed to enhance your
            gaming experience, honor your loyalty, and give strategic
            opportunities to maximize your play—that is, with every login, you
            should investigate a wider choice of games, find new favorites, and
            unlock remarkable prizes. Our goal is to ensure your time on our
            platform is as enjoyable and rewarding as it possibly can be,
            thereby allowing you the chance to win big and enjoy demanding
            events.
          </p>
          <p className="mt-2">
            We will go over in great detail in this post ph365&apos;s
            promotions, stressing the variety of approaches we intend to use
            you, in enhancing your gaming experience, and thank you for your
            participation. We will discuss the numerous present promos, their
            operating systems, and how you might completely grab these fantastic
            opportunities. Whether your experience level is new player or
            long-time ph365 member, there is plenty for everyone!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
