"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto z-20 pt-15 pb-2 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[35px] lg:text-5xl font-bold text-[#FF5561] mb-2 lg:mb-12"
        >
          Welcome to ph365: The Ultimate Destination for Online Gaming
          Excellence
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mt-2">
            Ph365 is eager to welcome Filipino players into the exciting realm
            of internet gaming. Under our motto, &quot;Bet A Little – Win A
            Lot,&quot; we provide a large platform where aficionados of gaming
            may have an unmatched online casino experience. Ph365 has something
            for everyone whether your interests are in card games, sports
            betting, lottery, traditional slots, interesting fishing activities,
            or live casino visits. Our platform guarantees a responsible, safe,
            dependable gaming environment while also offering countless
            entertainment values.
          </p>
          <p className="mt-2">
            At ph365, we know that in the online casino sector, trust is
            absolutely vital. This is why we have given developing a platform
            that not only provides excitement and enjoyment top priority for
            maintaining the best standards of security, fairness, and openness.
            The trustworthy Philippine Amusement and Gaming Corporation (PAGCOR)
            gives us licenses and controls all of our activities; eCOGRA also
            keeps an eye on them. These affiliations assure that our platform
            follows the best criteria of responsibility and dependability, so
            ensuring that all of our games are fair.
          </p>
          <p className="mt-2">
            Using cutting-edge security techniques, ph365 also gives your money
            and personal information great protection. Our dedication to player
            safety helps you to concentrate on the excitement of gaming free
            from data security concerns. You can trust ph365 whether you&apos;re
            playing on your computer or your phone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
