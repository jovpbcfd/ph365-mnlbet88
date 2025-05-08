"use client";

import { motion } from "framer-motion";

export default function Recognition() {
  return (
    <section className="py-6 px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pb-10 flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
            >
              Why Promotions Count: Beyond Only Recognition
            </motion.h2>
            <p className="mt-2">
              Promotions at ph365 go beyond a mere set of bonuses and free
              spins. These are designed especially to enhance your complete
              gaming experience with us. Apart from more money or free spins,
              these incentives give an opportunity to boost your interaction
              with the website. By means of our promotions, you can explore a
              wider spectrum of games, test new features, and grab fresh
              opportunities for win.
            </p>
            <p className="mt-2">
              Our promos are aimed to create excitement and expectation,
              therefore encouraging community and rivalry as well as offering
              perceptive study of how the casino functions. Through these
              programs, ph365 demonstrates our will to give our players the best
              possible experience, so attesting to our care for player
              satisfaction rather than merely financial success. Every gamer
              should relate well with us depending on mutual respect, enjoyment,
              and the shared goal of winning big.
            </p>
          </div>
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
