import Banner from "@/components/banner";
import { cardGameBanner } from "@/data/banner-data";
import DifferentWays from "./_components/card-game-ways";
import BenifitsOfEngaging from "./_components/card-game-engaging";
import GetStarted from "./_components/card-game-started";
import CardGamePopularity from "./_components/card-game-popularity";
import CardGameOnline from "./_components/card-game-online";
import EverydayCardGames from "./_components/card-game-everyday";
import HowTheyWork from "./_components/card-game-how";
import Options from "./_components/card-game-options";
import WhyCardGames from "./_components/card-game-why";
import Introducing from "./_components/card-game-introducing";
import Welcome from "./_components/card-game-welcome";

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={cardGameBanner} />
        </div>
      </section>
      <Welcome />
      <Introducing />
      <WhyCardGames />
      <CardGamePopularity />
      <Options />
      <HowTheyWork />
      <EverydayCardGames />
      <CardGameOnline />
      <GetStarted />
      <BenifitsOfEngaging />
      <DifferentWays />
    </>
  );
}
