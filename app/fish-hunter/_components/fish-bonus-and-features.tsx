import Dot from "@/components/dot";

export default function BonusAndFeatures() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Bonus and Advanced Features
        </h2>
        <div>
          <ul>
            <li className="flex items-center justify-between gap-4 mt-4">
              <div className="min-w-4">
                <Dot />
              </div>
              <div>
                <p>
                  <strong>Wild Fish:</strong> Some types of fish in the game can
                  be used in place of other fish to help you catch more. Wild
                  fish can greatly increase your chances of winning and lead to
                  a bigger payment.
                </p>
              </div>
            </li>
            <li className="flex items-center justify-between gap-4 mt-4">
              <div className="min-w-4">
                <Dot />
              </div>
              <div>
                <p>
                  <strong>Multipliers:</strong> A multiplier can sometimes make
                  the payout for a good catch a lot bigger. You can use these
                  multipliers for single fish catches or a string of good
                  catches, which increases your winnings.
                </p>
              </div>
            </li>
            <li className="flex items-center justify-between gap-4 mt-4">
              <div className="min-w-4">
                <Dot />
              </div>
              <div>
                <p>
                  <strong>Power-ups:</strong> These are tools you can find in
                  games that make fishing better. Some examples are fishing
                  poles that are stronger, reels that work faster, and other
                  improvements that make it easier to catch fish that are hard
                  to catch. Power-ups add another level of strategy to the game
                  because players have to think about when to use them to get
                  the most out of them.
                </p>
              </div>
            </li>
            <li className="flex items-center justify-between gap-4 mt-4">
              <div className="min-w-4">
                <Dot />
              </div>
              <div>
                <p>
                  <strong>Jackpots: </strong> A lot of Fish Hunter games offer
                  jackpot chances. You can win a big prize if you're lucky
                  enough to catch a certain fish or make a certain mixture.
                  These prize chances make the game more exciting and
                  unpredictable, which encourages players to keep trying to
                  catch the next big win.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <p>
            With these advanced features, Fish Hunters is not only fun to play,
            but it also has a big chance of paying out big prizes. The chance to
            win big prizes and special bonuses makes the game even more exciting
            and keeps players on the edge of their seats as they keep looking
            for their big catch.
          </p>
        </div>
      </div>
    </section>
  );
}
