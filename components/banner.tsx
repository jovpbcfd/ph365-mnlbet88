import Link from "next/link";

type BannerData = {
  img: string;
  description: string;
  cta: string;
  link: string;
};

export default function Banner({ data }: { data: BannerData[] }) {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1200px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-dark/10 shadow-xl flex flex-col justify-between h-full"
          >
            <div className="w-full h-[200px] flex items-center justify-center rounded-xl border border-dashed border-dark/20 text-black dark:text-white text-sm">
              Image 600x200
            </div>

            <p className="text-black font-semibold mt-4 text-base dark:text-white md:text-lg">
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
