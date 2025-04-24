import Commitment from "./_components/home-commitment";
import Discover from "./_components/home-discover";
import Games from "./_components/home-games";
import GetStarted from "./_components/home-get-started";
import Slider from "./_components/home-image-slider";
import SubBanner from "./_components/home-sub-banner";
import Welcome from "./_components/home-welcome";
import Excellent from "./_components/home-excellent";
import Ways from "./_components/home-ways";
import Effective from "./_components/home-effective";
import Guide from "./_components/home-guide";
import Categories from "./_components/home-categories";
import CustomerService from "./_components/home-customer-service";

export default function Home() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto">
          <Slider />
        </div>
      </section>
      <SubBanner />
      <Welcome />
      <GetStarted />
      <Discover />
      <Games />
      <Commitment />
      <Excellent />
      <Ways />
      <Effective />
      <Guide />
      <Categories />
      <CustomerService />
    </>
  );
}
