"use client";

import { motion } from "framer-motion";

import {
  Lightbulb,
  Wallet,
  TrendingDown,
  BookOpenCheck,
  ShieldCheck,
  Fullscreen,
  Navigation,
  ChartGantt,
  Radiation,
  AudioLines,
} from "lucide-react";

export default function SuccessTips() {
  return (
    <section className="py-16 px-4 bg-white text-black dark:text-white sm:px-8 lg:px-16 lg:pt-15">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Success Tips for Betting
        </motion.h2>
        <p className="text-center mb-10 max-w-2xl mx-auto text-black dark:text-white">
          Betting can be both exciting and profitable when approached
          strategically. Here are some essential tips to help you improve your
          chances and stay disciplined.
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-indigo-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <Lightbulb className="text-indigo-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Review Carefully
              </h3>
              <p className="text-white leading-relaxed">
                Doing extensive research is key before placing bets. Knowing the
                teams, players, and events you&apos;re betting on increases your
                chances of wise wagers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-blue-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <ShieldCheck className="text-blue-500 w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Stay Under Control:
                </h3>
                <p className="text-white">
                  Remaining level-headed and avoiding allowing emotions to
                  control your betting judgments is among the most crucial
                  pieces of advice for effective sports betting. Usually leading
                  to losses, emotional betting can cause illogical choices.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-rose-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <Navigation className="text-rose-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Begin with low stakes:
              </h3>
              <p className="text-white">
                Start with little wagers to get the odds and feel for the
                betting system. This reduces your learning&apos;s risk.
              </p>
              <p className="text-white">
                Start raising your bets as you get more at ease and begin to
                grasp how sports betting operates. Still, always be careful and
                never start bigger bets until you&apos;re sure your approach is
                sound.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-fuchsia-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <Radiation className="text-fuchsia-500 w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Don&apos;t Overreact:
                </h3>
                <p className="text-white">
                  Sometimes decisions about betting follow a terrible loss or an
                  unanticipated win. One should not let these findings cause one
                  to unduly react. Stay cool and follow your strategy; avoid
                  changing it depending on transient feelings. This will help
                  you to make better decisions and prevent needless risks.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-amber-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <Fullscreen className="text-amber-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Start small and expand:
              </h3>
              <p className="text-white">
                If you&apos;re new to sports betting, start modest and raise
                your stakes little by bit as you learn more. Making large
                immediate bets can be dangerous and taxing. Step-by-step
                building of your betting expertise follows here:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-orange-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <BookOpenCheck className="text-orange-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Get the Foundations:
              </h3>
              <p className="text-white">
                Don&apos;t just lay bets mindlessly. Spend some time learning
                the several forms of bets (moneyline, point spreads, totals,
                etc.) as well as the odds structures. Starting modest lets you
                pick up the skills of sports betting without running big
                financial losses. As your expertise and experience rise,
                progressively raise your stakes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-neutral-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <ChartGantt className="text-neutral-500 w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Following Your Plan:
                </h3>
                <p className="text-white">
                  Should you have a plan, follow it. Avoid impulsive bets driven
                  by enthusiasm, fear, or annoyance. Emotionally involved in a
                  game can easily lead one to get carried away; but, betting
                  should be based more on technique than on feelings.
                </p>
                <p className="text-white">
                  Though sports betting can be fun, one should approach it with
                  discipline as well. Betting on games solely to get in with the
                  activity could produce losses. Place only bets when you know
                  the teams or events involved really well.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-pink-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <TrendingDown className="text-pink-500 w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Currently Form:
                </h3>
                <p className="text-white">
                  Look at teams&apos; or players&apos; most recent performances.
                  Is their struggle or are they on a winning run? This will help
                  you to understand their possibilities for the next game.
                </p>
                <p className="text-white mt-2">
                  Past matches between the clubs or players you are betting on
                  can offer insightful analysis. While certain teams or athletes
                  may struggle, others regularly show better versus specific
                  opponents.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-purple-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <AudioLines className="text-purple-500 w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Injuries and suspensions:
                </h3>
                <p className="text-white">
                  A team&apos;s performance can be much influenced by injuries.
                  Absence of a star player can fundamentally alter the dynamics
                  of a game. Before you lay your bet, always keep informed on
                  any suspensions or injuries.
                </p>
                <p className="text-white mt-2">
                  Sometimes the outcome of a game can be much influenced by the
                  venue, the state of the weather, and other environmental
                  elements. A football game scheduled in heavy rain, for
                  instance, would favor a club with a strong defensive strategy
                  over one depending on quick-paced action.
                </p>
                <p className="text-white mt-2">
                  Your betting approach will be better the more study you
                  undertake. Raising your odds of making a winning bet depends
                  mostly on information.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#241d56] flex gap-4 rounded-2xl p-6"
          >
            <div className="border-2 border-teal-500 p-1 mt-1 self-start flex items-center justify-center rounded-md">
              <Wallet className="text-teal-500 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Manage Your Wallet:
              </h3>
              <ul className="list-decimal ml-5 text-white space-y-2">
                <li>
                  <p>
                    <strong>Create a budget:</strong> Decide how much
                    you&apos;re ready to commit and never bet what you
                    can&apos;t afford to lose.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Spend wisely:</strong> Limit each bet to a small
                    percentage (like 5%) of your bankroll.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Track your bets:</strong> Note every bet you place,
                    win, and loss. This helps you spot trends in your betting
                    and over time improve your approach.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Never Follow Losses:</strong> Pursues of losses in
                    sports betting are among the most risky actions involved. If
                    you lost a bet, fight the need to lay another one in an
                    attempt to recover the money. Usually this results in poor
                    decisions and greater losses.
                  </p>
                  <p>
                    Long-term success in sports betting depends on your being
                    disciplined with your expenditure. Control your wallet, and
                    you&apos;ll be more likely to consistently benefit.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="mt-4">
          <p className="text-black dark:text-white">
            For sports bettors in the Philippines, Sportsbook offers a complete
            and exciting platform. There is always something to discover with an
            amazing spectrum of sports, good odds, and creative elements such
            live betting and prop bets.
          </p>
          <p className="mt-2 text-black dark:text-white">
            Sportsbook has the instruments to make your betting path fulfilling
            regardless of your interests in eSports, basketball, or football.
            Master the odds, choose your bets wisely, and keep your strategy
            sharp-your success starts now.
          </p>
          <p className="mt-2 text-black dark:text-white">
            Ready to play smarter? Dive into the action with Sportsbook today
            and elevate your sports betting game.
          </p>
        </div>
      </div>
    </section>
  );
}
