import Banner from "@/components/banner";
import Welcome from "./_components/fish-welcome";
import Started from "./_components/fish-started";
import Captivating from "./_components/fish-captivating";
import WorkMethodology from "./_components/fish-work";
import GamePlay from "./_components/fish-gameplay";
import Varieties from "./_components/fish-varieties";
import BonusAndFeatures from "./_components/fish-bonus-and-features";
import Fun from "./_components/fish-fun";
import Advantage from "./_components/fish-advantage";
import Success from "./_components/fish-success";
import Conclusion from "./_components/fish-conclusion";

import { fishHunterBanner } from "@/data/banner-data";

export default function Page() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={fishHunterBanner} />
        </div>
      </section>
      <Welcome />
      <Started />
      <Captivating />
      <WorkMethodology />
      <GamePlay />
      <Varieties />
      <BonusAndFeatures />
      <Fun />
      <Advantage />
      <Success />
      <Conclusion />
    </>
  );
}
