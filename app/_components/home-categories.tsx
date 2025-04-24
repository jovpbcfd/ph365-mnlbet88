import Dot from "@/components/dot";

export default function Categories() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:mb-8 lg:mt-12">
        <h2 className="text-[30px] font-bold text-center mb-2 lg:mb-3">
          Here are the game categories Ph365 offers broken out:
        </h2>
        <ul>
          <li className="flex items-center justify-between gap-4 mt-4">
            <div className="min-w-4">
              <Dot />
            </div>
            <div>
              <p>
                Our selection of slots covers classic fruit machines as well as
                modern video slots with interesting bonus features. Among the
                numerous themes and features you could look at are progressive
                jackpots with possible big payouts.
              </p>
            </div>
          </li>
          <li className="flex items-center justify-between gap-4 mt-4">
            <div className="min-w-4">
              <Dot />
            </div>
            <div>
              <p>
                Should you appreciate the classics, we have an excellent
                selection of table games including blackjack, roulette,
                baccarat, and craps. These games come in numerous formats, and
                some use live dealer options to provide a more lifelike
                experience.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <div className="min-w-4">
              <Dot />
            </div>
            <div>
              <p>
                For a really authentic casino experience, we offer live dealer
                games whereby you may play in real-time with qualified dealers.
                This feature allows you to interact dynamically and pleasantly
                both with the dealer and other players.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <div className="min-w-4">
              <Dot />
            </div>
            <div>
              <p>
                Additionally offering a variety of specialist games, like
                virtual sports, keno, and scratch cards, ph365 helps users to
                enjoy gaming experiences outside of traditional casino offers.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <div className="min-w-4">
              <Dot />
            </div>
            <div>
              <p>
                For those who like poker, we have a selection of games including
                Texas Hold&apos;em and Omaha where you might participate in cash
                games and tournaments against players all around the globe.
              </p>
            </div>
          </li>
        </ul>
        <div>
          <p className="mt-2">
            To our game catalog, we regularly include fresh releases from top
            game developers such Microgaming, NetEnt, Evolution Gaming, and
            others. From a large selection of games available, ph365 guarantees
            always something fascinating to play.
          </p>
        </div>
      </div>
    </section>
  );
}
