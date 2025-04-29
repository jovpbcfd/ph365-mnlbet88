import Banner from "@/components/banner";
import { promotionBanner } from "@/data/banner-data";
import JoinNow from "./_components/live-casino-join";
import RealCasino from "./_components/live-casino-real";
import Games from "./_components/live-casino-games";
import Excitement from "./_components/live-casino-excitement";
import Welcome from "./_components/live-casino-welcome";

export default function Page() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={promotionBanner} />
        </div>
      </section>
      <Welcome />
      <Excitement />
      <Games />
      <RealCasino />
      <JoinNow />
    </>
  );
}
