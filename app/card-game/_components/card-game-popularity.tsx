"use client";

import { motion } from "framer-motion";

export default function CardGamePopularity() {
  return (
    <section className="py-6 px-4 bg-white lg:pb-15">
      <div className="max-w-[1200px] mx-auto text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          How Popular Digital Age Card Games Are Around the World
        </motion.h2>
        <p className="mt-2">
          The huge rise in popularity of online games has put card games at the
          top of the list. Now that cell phones are better and more people have
          them, card players can play their favorite games from almost anywhere
          and at any time. Online casinos and gaming sites let people who like
          to play card games play against a bigger range of opponents in real
          time and get better.
        </p>
        <p className="mt-2">
          One of the main reasons for expansion of online card games is their
          simplicity of use. Whether you&apos;re on your phone or at home on
          your computer, there aren&apos;t as many guidelines regarding when and
          where you can play, thus you can play your greatest card games
          whenever you choose. Online card games have a better future than ever
          as more individuals are surfing and learning how to play games online.
        </p>
      </div>
    </section>
  );
}
