import Banner from "@/components/banner";
import { sportBookBanner } from "@/data/banner-data";
import SuccessTips from "./_components/sports-tips";
import TypesOfSportsBook from "./_components/sports-bets";
import MasteringOdds from "./_components/sports-odds";
import ExploringMarkets from "./_components/sports-markets";
import ChooseSportsBook from "./_components/sports-why";
import Welcome from "./_components/sports-welcome";

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={sportBookBanner} />
        </div>
      </section>
      <Welcome />
      <ChooseSportsBook />
      <ExploringMarkets />
      <MasteringOdds />
      <TypesOfSportsBook />
      <SuccessTips />
    </>
  );
}
