import Dot from "@/components/dot";

export default function Prizes() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Kinds of Prizes
        </h2>
        <p className="mt-2">
          The intriguing reward range of the Daily Fortune Wheel is its finest
          feature. You might just strike the jackpot or win something little and
          enjoyable. The most often occurring prizes from the wheel are listed
          here:
        </p>
        <div>
          <ul>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Free Spins:</strong>
                <p>
                  Who wouldn&apos;t want extra opportunities to win? Free spins
                  let you keep the enjoyment running without having to spend
                  your credits. In other games or activities, they might also
                  unlock larger prizes.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Bonus Credits: </strong>
                <p>
                  Bonus credits allow one to purchase goods, place bets, or play
                  additional games. Since they improve the whole game
                  experience, these are perhaps the most sought-after awards.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Instant Cash Rewards: </strong>
                <p>
                  Occasionally the wheel provides real, cold cash straight to
                  your account. For those who wish for quick returns from their
                  fortune, this is the highest award.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Exclusive Discounts: </strong>
                <p>
                  If you enjoy shopping or looking for special offers, some
                  spins could provide you vouchers or discounts for a range of
                  goods or services.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Mystery Prizes: </strong>
                <p>
                  One cannot emphasize the excitement of the mysterious prize.
                  The game gets much more exciting when the wheel presents an
                  unexpected surprise not mentioned. Could it be a special
                  benefit nobody else has or a limited-time offer? You&apos;ll
                  find out only when you spin!
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <strong>Trophy or Badges: </strong>
                <p>
                  Should a player value success, you can find yourself in a
                  position eligible for a trophy or badge. This enhances your
                  profile by highlighting your game-wide participation and
                  benchmarks.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
