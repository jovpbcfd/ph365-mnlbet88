"use client";

import { Timelines } from "@/components/timeline";
import { data } from "@/data/step-guide";
import { motion } from "framer-motion";

export default function Guide() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:my-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:text-4xl lg:mb-5"
        >
          Comprehensive Guide on Joining ph365 Casino Step-by- Step
        </motion.h2>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-2"
          >
            By a quick and easy method, joining ph365 Casino enables you start
            playing your chosen games in no time. Here is a comprehensive,
            detailed guide on registering for your account and enjoying the
            amazing world of internet gaming.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-2"
          >
            Among the several ways players could pay include Bitcoin, e-wallets,
            and online banking. We make sure the money depositing and
            withdrawing procedures are as straightforward and quick as they
            could be. We even added precise instructions to guide fresh
            participants over the process. Making the money part of gaming as
            stress-free and ideal as possible will help players to concentrate
            on how enjoyable the games are. We also give fast payouts great
            weight, hence we rank quick and simple withdrawals first in our list
            of criteria. You will have instant access to your money since your
            gains will be credited straight to your account upon your winning.
          </motion.p>
        </div>

        <div>
          <Timelines data={data} />
        </div>
      </div>
    </section>
  );
}
