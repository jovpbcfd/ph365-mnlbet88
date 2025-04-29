import Dot from "@/components/dot";

export default function ChooseSportsBook() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Why Choose a Sportsbook?
        </h2>
        <p className="mt-2">
          Understanding why Sportsbook is one of the top choices for Filipino
          bettors helps you appreciate the finer details of what makes a
          platform reliable and fun. Sportsbook gathers the key components
          needed for a fantastic betting experience:
        </p>
        <div>
          <ul>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  From fan-favorites like basketball and football to unusual
                  options like sabong (cockfighting) and eSports, Sportsbook
                  provides access to a large spectrum of sports. There is always
                  something to gamble on whether your interests lie in classic
                  games or contemporary digital contests.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  Any sportsbook is built on odds, which also define your
                  possible returns. Sportsbook provides some of the most
                  competitive odds available in the business, providing better
                  value for every peso you gamble.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  Sportsbook enhances the excitement with real-time betting,
                  live or in-play. Betting is possible during the game; the odds
                  change dynamically to suit the flow of the game.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  Designed to fit local punter&apos;s needs and preferences,
                  Sportsbook offers specific local payment options, customer
                  support, and interfaces for Filipino customers.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  Sportsbook&apos;s straightforward and elegant design makes
                  betting a perfect experience independent of your degree of
                  knowledge about it.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
