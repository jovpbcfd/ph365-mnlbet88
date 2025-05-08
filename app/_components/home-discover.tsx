"use client";

import { motion } from "framer-motion";

export default function Discover() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:pb-15">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-12"
        >
          Discover the Great Games and Products from ph365
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Online casinos have evolved significantly recently to provide
            players an ever-widening range of pleasure. From novices to seasoned
            pros, ph365 stands out for being Slots, fishing games, live casino
            games, sports betting, card games, and lottery games among the
            well-chosen games on our site, offering a wide selection of gaming
            options that meet all kinds of gamers. Regardless matter the kind of
            experience you are looking for, ph365 has everything to attract your
            interest and provide hours of entertainment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
