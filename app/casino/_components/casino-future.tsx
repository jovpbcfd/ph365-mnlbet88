"use client";

import { motion } from "framer-motion";

export default function Future() {
  return (
    <section className="py-6 px-4 bg-white lg:pb-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          The future of online casinos in the Philippines
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-black w-full lg:w-3/4"
          >
            <p className="mt-2">
              For online casino games in the Philippines, ph365 Casino is the
              way to go. The future looks very bright for these games. Filipino
              players are in for a fun ride as the global market for online
              games continues to grow and new technologies change the way people
              interact with and play at online casinos. As more people use
              mobile gaming, live dealer options, and better game features,
              ph365 Casino will be able to offer an even more exciting and fun
              gaming experience in the coming years.
            </p>
            <p className="mt-2">
              One big thing that is changing the way online casinos work is how
              extra features are getting better. As online casinos try to make
              games more fun, players may expect prizes that are more creative
              and fun. Panama City Casino will keep pushing the limits with new
              offers like free spins, no-deposit bonuses, and high-RTP (Return
              to Player) games that give real chances to win big. By combining
              unique reward systems with loyalty programs, you can keep gamers
              coming back for more, making sure that their gaming experience is
              always worthwhile.
            </p>
            <p className="mt-2">
              The number of live player games is also on the rise, and this is
              expected to continue to change and grow. Because more and more
              people want to interact with real people and have a real gaming
              experience, ph365 gaming is likely to improve its live dealer
              offerings with even more advanced technology. You can expect
              current streaming quality, multiple camera angles, and creative
              changes to the games that will make you feel like you&apos;re in a
              real casino from home.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-black/20 rounded-xl flex items-center justify-center text-sm text-black/60"
          >
            Image 1080x1080
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-black lg:pb-12"
        >
          <p className="mt-2">
            Additionally, as mobile gaming grows, players will have more freedom
            to play games anywhere, at any time. Mobile apps will keep changing
            so that they work perfectly on a wide range of devices. Filipino
            gamers can look forward to even easier and more convenient ways to
            play their favorite games while they&apos;re on the go, as ph365
            Casino works to make its site better for mobile use.
          </p>
          <p className="mt-2">
            As online gambling becomes more popular in the Philippines, ph365
            Casino will keep coming up with new and exciting ways for players to
            enjoy the thrill of online gaming. It is one of the most reliable
            and interesting venues in that country.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
