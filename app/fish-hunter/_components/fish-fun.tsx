import { Timelines } from "@/components/timeline";
import { data } from "@/data/play-guide";

export default function Fun() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:my-8">
        <h2 className="text-[30px] font-bold text-center mb-2 lg:mb-3">
          Having fun with Fish Hunter at ph365
        </h2>
        <div>
          <p className="mt-2">
            Our goal at ph365 is to make our platform easy to use and available
            so that you can jump right into the world of Fish Hunter. This is a
            step-by-step guide on how to start and improve your chances of
            winning.
          </p>
        </div>
        <div>
          <Timelines data={data} />
        </div>
      </div>
    </section>
  );
}
