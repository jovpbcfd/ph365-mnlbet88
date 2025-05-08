import Faq from "@/components/faq";
import { questions } from "@/data/faq";

export default function CommonlyAskedQuestion() {
  return (
    <section className="py-6 px-4 lg:pt-15">
      <h2 className="text-[30px] font-bold text-[#FF5561] text-center">
        Commonly Asked Questions:
      </h2>
      <Faq questions={questions} />
    </section>
  );
}
