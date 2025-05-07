"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function ExploringMarkets() {
  return (
    <section className="py-6 px-4 bg-white lg:py-15">
      <div className="max-w-[1200px] mx-auto  text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Exploring Sportsbook’s Betting Markets
        </motion.h2>
        <p className="mt-2 lg:mb:10">
          Once you log into Sportsbook, you will find the amazing array of
          sports you might gamble on. Sportsbook has something for any sports
          enthusiast whether your preferred level of competition is local
          leagues or international contests.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-3/4">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-5"
            >
              Mainstream Sports
            </motion.h3>
            <ul>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    <strong>Basketball:</strong>
                    As one of the Philippines’ most followed sports, basketball
                    is a highlight of Sportsbook. Gamble on the PBA,{" "}
                    <strong>NBA</strong>, and even overseas leagues.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    <strong>Football:</strong>
                    Track the La Liga, Serie A, UEFA Champions League, FIFA
                    World Cup.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    <strong>Tennis:</strong>
                    Grand Slam events including the US Open, Australian Open,
                    Wimbledon provide a range of gambling choices including
                    individual match successes and the general tournament
                    results.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    <strong>Boxing and MMA:</strong>
                    Fans of combat sports can gamble on UFC events and
                    well-known boxing contests, therefore making every punch and
                    round even more thrilling.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 1080x1080
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:mt-5">
          <div className="w-full lg:w-3/4">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-5"
            >
              Niche Sports & eSports
            </motion.h3>
            <ul>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    Sportsbook is a favorite among the digital generation since
                    it offers choices like Dota 2, League of Legends, and CS:GO,
                    catering to the fast expanding eSports scene.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    Sabong, a culturally famous sport in the Philippines, is
                    included among Sportsbook&apos;s special local offers
                    together with live betting possibilities.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <div className="min-w-4 mb-auto mt-1">
                  <Dot classname="mt-2" />
                </div>
                <div>
                  <p>
                    Sportsbook guarantees there never is a boring moment given
                    there are so many betting markets
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 
          rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 1080x1080
          </div>
        </div>
      </div>
    </section>
  );
}
