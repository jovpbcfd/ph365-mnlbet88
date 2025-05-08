import Banner from "@/components/banner";
import { downloadBanner } from "@/data/banner-data";
import GetTheApp from "./_components/download-get-app";
import CommonlyAskedQuestion from "./_components/download-faq";
import CommonIssues from "./_components/download-common-issues";
import Guide from "./_components/download-guide";
import ReasonsForDownloading from "./_components/download-reason";
import SafeGaming from "./_components/download-gaming";
import Welcome from "./_components/download-welcome";

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto text-white">
          <Banner data={downloadBanner} />
        </div>
      </section>
      <Welcome />
      <SafeGaming />
      <ReasonsForDownloading />
      <Guide />
      <CommonIssues />
      <CommonlyAskedQuestion />
      <GetTheApp />
    </>
  );
}
