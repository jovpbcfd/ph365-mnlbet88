import Dot from "@/components/dot";

export default function MasteringOdds() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Mastering the Odds on Sportsbook
        </h2>
        <p className="mt-2 mb-6 text-center">
          Understanding odds is essential for making informed bets. Sportsbook
          offers multiple odds formats to suit user preferences:
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-center border border-dashed rounded-md mx-auto lg:w-[500px] lg:h-[200px]">
              Image 500x200
            </div>
            <div>
              <h3 className="text-[25px] font-bold text-center my-2 lg:my-3">
                Decimal Odds
              </h3>
              <ul>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>
                      Popular in Europe and Asia, decimal odds are
                      straightforward. To calculate your payout:
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>Payout = Stake × Odds</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>
                      For example: Betting ₱100 at 2.50 odds = ₱250 return (₱150
                      profit).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center border border-dashed rounded-md mx-auto lg:w-[500px] lg:h-[200px]">
              Image 500x200
            </div>
            <div>
              <h3 className="text-[25px] text-center font-bold my-2 lg:my-3">
                Moneyline Odds
              </h3>
              <p className="mt-2">Common in the US, moneyline odds can be:</p>
              <ul>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>Positive (+200): A ₱100 bet returns ₱200 profit.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 mt-4">
                  <div className="min-w-4 mb-auto mt-1">
                    <Dot />
                  </div>
                  <div>
                    <p>Negative (-150): You must bet ₱150 to win ₱100.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center lg:mt-10">
          <p>
            Choose the format you’re most comfortable with-Sportsbook supports
            both.
          </p>
        </div>
      </div>
    </section>
  );
}
