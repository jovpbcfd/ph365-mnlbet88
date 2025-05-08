"use client";

import { motion } from "framer-motion";

export default function Excitement() {
  return (
    <section className="py-6 px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full lg:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
            >
              Experience Ph365 Live Casino to Reach New Peak of Excitement
            </motion.h2>
            <p className="mt-2">
              With live casino games, the online gambling experience has been
              elevated to a new degree where it gives the players the real
              gaming sensation. Although computerized results replace our games,
              one can play against a real dealer and enjoy interaction
              possibilities at our live casino. Apart from sophisticated
              streaming options enabling remote connection with dealers and
              other players, enjoyment and camaraderie have grown to be
              essential elements of gaming.
            </p>
            <p className="mt-2">
              Clients at ph365 get a highly dynamic and easily navigable
              platform. We provide live casino games using the finest
              technologies and collaborating with most reputable software
              developers. From total rookie to the more seasoned gambler, our
              site provides tables at all stakes and most variations of the
              popular games. Apart from a possibility to play your games on a
              table run by a live dealer, you will enjoy special benefits and
              promotions. Unlike betting sites, ph365 converts gambling into a
              fantastic exciting experience with others and feels the result of
              every victory at the live casino. Get the best rush of live casino
              games right here by registering today!
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
