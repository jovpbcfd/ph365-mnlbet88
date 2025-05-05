"use client";

import { motion } from "framer-motion";

export default function ExtraSpins() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Use Extra Spins to Your Advantage
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="mt-2">
            Although you are assured one spin every day, there are usually
            chances to get more spins by finishing tasks or attending special
            events. This offers even more thrills since you will have more
            opportunities to win.
          </p>
          <p className="mt-2">
            Anyone who savors a combination of chance, reward, and excitement
            will find the Daily Fortune Wheel ideal. Every turn could result in
            something amazing, regardless of your goals—grand prize or just a
            little pleasure for your day. What then do you need? Log in now,
            spin the wheel, and discover today&apos;s fortune waiting for you.
            Maybe one spin away will bring your next major success!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
