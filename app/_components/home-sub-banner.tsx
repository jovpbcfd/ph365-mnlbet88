import Image from "next/image";

export default function SubBanner() {
  return (
    <section className="bg-white pb-6 lg:pb-8 lg:pt-8">
      <div className="max-w-[1200px] h-full lg:h-[220px] mx-auto text-dark">
        <Image
          src="/img/home/offer/ph365-offers-promotion.webp"
          width={1200}
          height={194}
          alt="Offer"
        />
      </div>
    </section>
  );
}
