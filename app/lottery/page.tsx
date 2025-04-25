import Banner from "@/components/banner";
import { lotteryBanner } from "@/data/banner-data";

export default function Page() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={lotteryBanner} />
        </div>
      </section>
    </>
  );
}
