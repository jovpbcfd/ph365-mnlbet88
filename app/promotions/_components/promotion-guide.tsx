"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function Guide() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto  text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Our Promotions: The Methodical Guide
        </motion.h2>
        <p className="mt-2">
          Participating in the promos of ph365 is quick and simple. Still, we
          urge you to study the terms and conditions for every campaign to fully
          grasp how to guarantee eligibility and collect your benefits.
          Generally, the procedure follows this:
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <ul className="w-full lg:w-3/4">
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  First you will need to register even if you do not already
                  have an account with ph365. Once registered, you will have
                  total access to all of our promotions; this is a quick and
                  easy process.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  Most promotions ask you to pay a deposit to be qualified.
                  ph365 offers numerous safe and rapid payment methods so you
                  may just fund your account and start playing.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  You can start assisting with the promos after your account is
                  financed. Whether you are monitoring daily for rewards,
                  spinning the Daily Fortune Wheel, or finishing the Weekly
                  Challenge, you are always in the running to win amazing
                  prizes.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  Should your qualifications meet those of a promotion, your
                  reward will be credited directly to your account. Your
                  earnings can then be maintained either kept playing or
                  withdrawn per our terms and conditions.
                </p>
              </div>
            </li>
          </ul>
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
