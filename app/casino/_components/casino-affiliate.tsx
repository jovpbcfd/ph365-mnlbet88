"use client";

import { motion } from "framer-motion";

export default function AffiliatePrograms() {
  return (
    <section className="py-6 px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Earn money while you play with affiliate programs
        </motion.h2>
        <p className="mt-2">
          Another interesting option is ph365 Casino&apos;s partner program,
          which lets players make money by telling their friends about the site
          and encouraging them to join. Affiliate marketing lets players get new
          people to visit casinos by posting their own reference links on social
          media, websites, blogs, and other places.
        </p>
        <p className="mt-2">
          When someone they suggested makes a deposit into their account, the
          affiliate gets a cut of the money made from their bets. Both ph365
          Casino and the partner benefit from this because new users and people
          who stick around help both of them.
        </p>
        <p className="mt-2">
          People who make content, have a lot of followers, or just like to play
          games at ph365 Casino can make passive income through the partner
          program. If you have a good online reputation or love gambling in
          casinos, the chance to make money through recommendations can be a
          steady source of income.
        </p>
      </div>
    </section>
  );
}
