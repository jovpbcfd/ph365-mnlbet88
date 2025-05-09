import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { discoveriesData } from "@/data/discoveries";

export default function Games() {
  return (
    <section className="bg-white lg:py-15">
      <AnimatedTestimonials testimonials={discoveriesData} autoplay={false} />
    </section>
  );
}
