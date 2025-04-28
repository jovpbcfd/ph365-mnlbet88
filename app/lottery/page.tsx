import Banner from "@/components/banner";
import { lotteryBanner } from "@/data/banner-data";
import Tips from "./_components/lottery-tips";
import Benefits from "./_components/lottery-benefits";
import Comparison from "./_components/lottery-comparison";
import HowItWorks from "./_components/lottery-works";
import GamingMarket from "./_components/lottery-market";
import LotteryPleasure from "./_components/lottery-pleasure";
import Welcome from "../_components/home-welcome";

export default function Page() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={lotteryBanner} />
        </div>
      </section>
      <Welcome />
      <LotteryPleasure />
      <GamingMarket />
      <HowItWorks />
      <Comparison />
      <Benefits />
      <Tips />
    </>
  );
}
