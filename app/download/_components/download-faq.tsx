import Faq from "@/components/faq";
import { questions } from "@/data/faq";

export default function CommonlyAskedQuestion() {
  return (
    <section>
      <h2 className="text-[30px] font-bold text-white text-center my-2 lg:my-3">
        Commonly Asked Questions:
      </h2>
      <Faq questions={questions} />
    </section>
  );
}
