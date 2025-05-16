import Link from "next/link";
import Image from "next/image";

type BannerData = {
  img: string;
  description: string;
  cta: string;
  link: string;
};

export default function Banner({
  data,
  className = "bg-white text-black",
}: {
  data: BannerData[];
  className?: string;
}) {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1200px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${className} rounded-2xl p-6 border border-dark/10 shadow-xl flex flex-col justify-between h-full`}
          >
            <div className="w-full h-full">
              <Image
                src={item.img}
                width={1140}
                height={200}
                alt={item.description}
              />
            </div>

            <p className="text-inherit font-semibold mt-4 text-base dark:text-white md:text-lg">
              {item.description}
            </p>

            <div className="mt-5">
              <Link
                href={item.link}
                className="inline-block bg-[#FCD000] hover:bg-[#FCD000]/90 text-[#212335] text-sm font-semibold px-6 py-2 rounded-full transition"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
