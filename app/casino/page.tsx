import Banner from "@/components/banner";
import Significance from "./_components/casino-significance";
import Welcome from "./_components/casino-welcome";
import JackpotGames from "./_components/casino-jackpot";
import FreeSpins from "./_components/casino-free-spins";
import Play from "./_components/casino-play";
import PlayerExperience from "./_components/casino-player-experience";
import AffiliatePrograms from "./_components/casino-affiliate";
import WhyShouldPick from "./_components/casino-why";
import Future from "./_components/casino-future";

import { casinoBanner } from "@/data/banner-data";

export default function Page() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={casinoBanner} />
        </div>
      </section>
      <Welcome />
      <Significance />
      <JackpotGames />
      <FreeSpins />
      <Play />
      <PlayerExperience />
      <AffiliatePrograms />
      <WhyShouldPick />
      <Future />
    </>
  );
}
