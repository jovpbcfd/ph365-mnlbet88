import Banner from "@/components/banner";
import CommonAction from "./_components/promotion-action";

import { promotionBanner } from "@/data/banner-data";
import Guide from "./_components/promotion-guide";
import ExtraSpins from "./_components/promotion-extra-spins";
import PlayEveryday from "./_components/promotion-everyday";
import Prizes from "./_components/promotion-prizes";
import HowItOperates from "./_components/promotion-operate";
import Daily from "./_components/promotion-daily";
import Excitement from "./_components/promotion-excitement";
import Recognition from "./_components/promotion-recognition";

export default function Page() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={promotionBanner} />
        </div>
      </section>
      <Recognition />
      <Excitement />
      <Daily />
      <HowItOperates />
      <Prizes />
      <PlayEveryday />
      <ExtraSpins />
      <Guide />
      <CommonAction />
    </>
  );
}
