"use client";

import { motion } from "framer-motion";

export default function PlayerExperience() {
  return (
    <section className="py-6 px-4 text-white">
      <div className="max-w-[1200px] mx-auto space-y-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          What role online betting sites play in the player experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <div className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 rounded-xl flex items-center justify-center text-sm text-white/60">
            Image 1080x1080
          </div>
          <div className="w-full lg:w-3/4">
            <p className="leading-relaxed mt-2">
              ph365 Casino guarantees players a fun and exciting betting
              experience with cutting-edge technologies and a layout that puts
              the user first. It&apos;s very important for the quality of the
              site to keep players happy as online casinos become more popular
              and easy to find. Their main goal is to make a great place where
              both new and old people can enjoy themselves.
            </p>
            <p className="leading-relaxed mt-2">
              ph365 Casino can be used on both your computer and your phone.
              Your phone and computer can both be used with ph365 Casino. Using
              the app comes naturally. People will find their preferred games,
              check out what&apos;s new, and grab offers easily on the site as
              it looks beautiful. Perfect game play and loading times keep
              players interesting and reduce frustration, so the basic design
              also makes the most of these factors. Whether you&apos;re on a
              computer, tablet, or phone, the responsive and well-organized
              design makes it simple to move between groups like promotions,
              slots, table games, live dealers, and live dealers.
            </p>
            <p className="leading-relaxed mt-2">
              Because it has so many live dealer games, ph365 Casino comes out
              as a great place to play. People who want the thrill and energy of
              a real casino but would rather play from home can try live dealer
              games. Professionally run companies stream these games in real
              time, and they have live dealers that engage with users in the
              same manner they would in a real-life casino.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="leading-relaxed mt-2">
            Among several live dealer games available at ph365 are Live
            Blackjack, Live Roulette, Live Baccarat. Playing these games will
            let you feel as though you are at a genuine casino. The games are
            run by real people, and live video feeds let players really enjoy
            them. It&apos;s more fun and feels like you&apos;re really at a real
            gaming table when you can talk to dealers and other players through
            live chat. Now that technology has gotten better, live games look
            and feel very real. They have professional croppers, a lot of camera
            angles, and high-quality streaming.
          </p>
          <p className="leading-relaxed mt-2">
            ph365 Casino lets players who are always on the go play their
            favorite casino games on their phones, so they can do so anywhere,
            at any time. Mobile apps are available for both Android and iOS
            devices that let players take their games with them. It is designed
            so that players can enjoy the same high-quality experience on their
            phones as they can on their computers, so they never miss a game
            while they&apos;re away.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-6"
        >
          <div className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 rounded-xl flex items-center justify-center text-sm text-white/60">
            Image 1080x1080
          </div>
          <div className="w-full lg:w-3/4">
            <p className="leading-relaxed">
              The mobile apps&apos; quick controls and easy-to-read game screens
              make for a perfect gaming experience. The ph365 team makes sure
              that the interface works perfectly on your device, so you can
              enjoy a perfect and fully immersive experience whether you&apos;re
              playing on a phone or a computer. The mobile app has all the same
              features and levels of access and ease as the desktop site, so
              players can do everything from making payments and withdrawals to
              playing live dealer games.
            </p>
            <p className="leading-relaxed mt-2">
              The ph365 Casino website is always getting better by adding new
              things like live dealer games and mobile betting. The system stays
              up to date with the latest player styles and trends by getting
              updates and improvements all the time. There are many games to
              choose from, many ways to pay, and excellent customer service at
              the casino, all in a secure and safe environment. This shows that
              they are dedicated to giving their customers the best experience
              possible.
            </p>
            <p className="leading-relaxed mt-2">
              At ph365 Casino, the design, ease of use, and mobile compatibility
              of the website all work together to give every player a complete
              and satisfying experience. The ph365 Casino has become a top
              choice for Filipino players looking for a full, interactive, and
              exciting online betting environment thanks to its cutting-edge
              technology, user-centered design, and wide range of games.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
