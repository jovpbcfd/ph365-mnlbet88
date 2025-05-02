"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function BonusAndFeatures() {
  return (
    <section className="py-6 px-4 text-white">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Bonus and Advanced Features
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="space-y-6 w-full lg:w-3/4"
          >
            {[
              {
                title: "Wild Fish",
                desc: "Some types of fish in the game can be used in place of other fish to help you catch more. Wild fish can greatly increase your chances of winning and lead to a bigger payment.",
              },
              {
                title: "Multipliers",
                desc: "A multiplier can sometimes make the payout for a good catch a lot bigger. You can use these multipliers for single fish catches or a string of good catches, which increases your winnings.",
              },
              {
                title: "Power-ups",
                desc: "These are tools you can find in games that make fishing better. Some examples are fishing poles that are stronger, reels that work faster, and other improvements that make it easier to catch fish that are hard to catch. Power-ups add another level of strategy to the game because players have to think about when to use them to get the most out of them.",
              },
              {
                title: "Jackpots",
                desc: "A lot of Fish Hunter games offer jackpot chances. You can win a big prize if you're lucky enough to catch a certain fish or make a certain mixture. These prize chances make the game more exciting and unpredictable, which encourages players to keep trying to catch the next big win.",
              },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1">
                  <Dot />
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="w-full h-full lg:w-[400px] lg:h-[400px]
           border border-dashed border-white/20 rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 text-base leading-relaxed"
        >
          With these advanced features, Fish Hunters is not only fun to play,
          but it also has a big chance of paying out big prizes. The chance to
          win big prizes and special bonuses makes the game even more exciting
          and keeps players on the edge of their seats as they keep looking for
          their big catch.
        </motion.p>
      </div>
    </section>
  );
}
