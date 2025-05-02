"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import { blocks } from "@/data/casino-jackpot-games-block";

export default function JackpotGames() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto text-white relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent lg:text-4xl lg:mb-10"
        >
          What Fun It Is to Play Jackpot Games
        </motion.h2>

        <div className="space-y-20">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col-reverse lg:flex-row ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-6 items-center group`}
            >
              <div className="lg:w-1/2">
                <div className="border-l-4 border-gray-500 pl-4">
                  <p className="text-white/90 leading-relaxed">
                    {block.content}
                  </p>
                </div>
              </div>

              <div className="w-full h-full lg:w-1/2 lg:h-[200px]  rounded-xl border border-dashed border-white/20 flex items-center justify-center text-sm text-white/60">
                Image 6000x2000
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
