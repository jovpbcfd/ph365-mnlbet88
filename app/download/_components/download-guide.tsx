"use client";

import { motion } from "framer-motion";

import { Timelines } from "@/components/timeline";

import { data as iosData } from "@/data/download-guide-ios";
import { data as androidData } from "@/data/download-guide-android";

export default function Guide() {
  return (
    <section className="py-6 px-4 lg:pt-15">
      <div className="max-w-[1200px] mx-auto py-10 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Installing the ph365 App on iOS and Android Devices: A Guide
        </motion.h2>
        <p className="mt-2">
          Wish to play engaging, safe, and seamless games on your mobile device?
          The ideal answer is the ph365 mobile app. Our software is meant to
          provide you a high-quality gaming experience—anytime, anywhere with
          quick performance, simple navigation, and best security.
        </p>
        <p className="mt-2">
          Just follow the easy instructions below to download and install the
          most recent version of the ph365 app whether your phone is an iPhone
          or an Android.
        </p>
        <div className="mt-5 lg:mt-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
            >
              For iPhone/iOS users:
            </motion.h3>
          </div>
          <Timelines data={iosData} />
        </div>
        <div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
            >
              For Android Users:
            </motion.h3>
          </div>
          <Timelines data={androidData} />
        </div>
        <div>
          <p className="text-center">
            You are now completely equipped to investigate our large selection
            of games, bonuses, and special deals!
          </p>
        </div>
      </div>
    </section>
  );
}
