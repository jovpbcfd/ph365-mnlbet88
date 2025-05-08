"use client";
import { motion } from "framer-motion";

export default function Effective() {
  return (
    <section className="bg-white py-6 px-4 lg:pb-15">
      <div className="max-w-[1200px] mx-auto text-dark dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[30px] font-bold text-center mb-2 lg:mb-10 text-[#FF5561] lg:text-4xl"
        >
          The Most Effective Protection for Your Privacy and Data
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2"
        >
          Safety is our first concern at ph365, hence we take great effort to
          ensure that every personal and financial data of one of our players is
          kept safe. The finest technology in the company encrypts all the data
          uploaded on our website. This protects your personal information from
          those without proper access. Our strong encryption techniques are
          aimed to protect your information whether you browse our website, make
          a transfer, or withdraw money.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2"
        >
          We not only protect data but also save player information in a certain
          manner to guard it from hackers and other potential illegal access
          users. Strict security protocols allow only authorised staff members
          to view private information; we routinely backup all player data to
          prevent any loss.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2"
        >
          Additionally in place is a thorough privacy policy addressing handling
          and safeguarding of client data. Your personal data will be kept safe
          and used just for required purposes like transaction processing and
          client service. ph365 will constantly safeguard your safety and
          privacy, thus you can relax and enjoy games without thinking about it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2"
        >
          From the time players choose to use our platform, ph365 wants to
          provide them safe, enjoyable, and simple travel. If you wish to locate
          a reliable online casino where you may enjoy gaming, you have come to
          the proper location. ph365 is created with you in mind regardless of
          your knowledge level about internet gaming. Our system is
          user-friendly hence all it takes to join our game is a few quick
          actions. This section will guide you through the entire joining ph365
          Casino procedure; you know exactly what to do to start. We will also
          discuss how excellent our mobile app is and how easy and safe paying
          at our site is.
        </motion.p>
      </div>
    </section>
  );
}
