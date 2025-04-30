import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { discoveriesData } from "@/data/discoveries";

export default function Games() {
  return (
    <section>
      <AnimatedTestimonials testimonials={discoveriesData} autoplay={false} />
    </section>
  );
}
