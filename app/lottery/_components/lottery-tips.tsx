import Dot from "@/components/dot";

export default function Tips() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Tips for Increasing Your Prospect of Success
        </h2>
        <p className="mt-2">
          Lottery is primarily a question of chance, however, you could use
          several strategies to increase your chances of success:
        </p>
        <div>
          <ul>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Enter a Lottery Pool</strong>
                <p>
                  Pooling lottery tickets among friends, relatives, or
                  colleagues will increase your chances of winning without
                  spending more money. Combining your money can assist you in
                  purchasing multiple tickets and raise your odds of jackpot
                  success.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4 ">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Work Regularly</strong>
                <p>
                  More action increases your chances of winning. Save money
                  primarily for lottery games; then, play often for best
                  opportunities.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Choose Not Often Played Games</strong>
                <p>
                  Even although some Lottery games might not be as popular than
                  others, generally they provide more chances of winning. Spend
                  some time looking at lesser-known options to find their worth.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
