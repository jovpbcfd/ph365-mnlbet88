"use client";

import { motion } from "framer-motion";

export default function Advantage() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Advantages of Fish Hunter at ph365
        </motion.h2>
        <p className="mt-2 text-center">
          If you want to play Fish Hunter, ph365 is a great place for you. Here
          are some of the main benefits:
        </p>
        <motion.div className="mt-4">
          <p className="mt-2">
            <strong className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:text-xl">
              Safe and Secure Environment:
            </strong>{" "}
            Because ph365 is a legal online casino, they make sure that all of
            your gaming takes place in a safe and secure space. For your peace
            of mind while you play, our site follows strict rules for fairness
            and safety in the industry.
          </p>
          <p className="mt-2">
            <strong className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:text-xl">
              Wide Range of Fish Hunter:{" "}
            </strong>{" "}
            Our large range of Fish Hunter means you&apos;ll always be able to
            find something new and fun. On ph365, you can choose from a range of
            choices, whether you like low-stakes games or casual fishing.
          </p>
          <p className="mt-2">
            <strong className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:text-xl">
              Mobile Compatibility:{" "}
            </strong>{" "}
            ph365 works with all mobile devices, so you can play Fish Hunter
            while you&apos;re out and about. The high-quality graphics and
            smooth gameplay will be the same whether you&apos;re on a smartphone
            or tablet. There will be no speed loss.
          </p>
          <p className="mt-2">
            <strong className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:text-xl">
              Exciting Bonuses and Deals:{" "}
            </strong>
            We love giving our players bonuses and deals that are worth a lot of
            money. Watch for offers that could increase your wealth and boost
            your prospects of winning large.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
