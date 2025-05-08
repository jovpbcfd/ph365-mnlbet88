"use client";

import { motion } from "framer-motion";
import Dot from "@/components/dot";

export default function ReasonsForDownloading() {
  return (
    <section className="py-6 px-4 bg-white lg:py-15">
      <div className="max-w-[1200px] mx-auto text-black black:text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Reasons for Downloading the ph365 App
        </motion.h2>
        <p className="mt-2">
          Our smartphone app brings all the games and features of the ph365 just
          a swipe away! For this reason, downloading our app is the best choice
          you could make.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <ul className="w-full lg:w-3/4">
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  Registering and installing the ph365 app gives you a variety
                  of top-notch casinos including slots, live casino, fishing
                  games and more. No need to log in via the browser, therefore
                  fast and simple to begin the game without any trouble.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  The app&apos;s general performance is improved to provide a
                  quick and unintermitted gameplay experience. Should you be
                  using a tablet or mobile device, the controls will be
                  seamless, the loading will be rapid, and your performance will
                  be such that you may have a smooth and pleasant gaming
                  experience regardless of anything.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  It lets the app users access extra functionality not offered
                  from the internet version of the product. These come with app
                  downloads, giving you more chances to win and enjoy the game.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  Using the app guarantees you safe ways to conduct deposit and
                  withdrawal transactions. Apart from the security, ph365 works
                  to keep your money safe using encryption and other approved
                  safety elements so you won&apos;t be concerned about the money
                  you give over.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot classname="mt-2" />
              </div>
              <div>
                <p>
                  Having the app lets you play the games of your choice on your
                  mobile devices anytime you are called for travel, caught in a
                  traffic, or at home. The ph365 app provides the ideal
                  flexibility to excite any time and anyplace you choose.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  The app lets you quickly check when your account is up for
                  renewal, a new promotion, or the next game release. Instant
                  push alerts guarantee you won&apos;t miss fresh posts or
                  perhaps unique promotions.
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
        <div>
          <p className="lg:mt-4">
            Now is the moment to start taking advantage of all the thrilling
            features and tools waiting for ph365 users on the app ready for
            download; fingers crossed for even more fantastic benefits in store
            for you!
          </p>
        </div>
      </div>
    </section>
  );
}
