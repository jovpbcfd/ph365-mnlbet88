import Link from "next/link";

type BannerData = {
  img: string;
  description: string;
  cta: string;
  link: string;
};

export default function Banner({ data }: { data: BannerData[] }) {
  return (
    <div className="pt-10 flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-10">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex items-center justify-center border border-dashed rounded-md w-[600px] h-[200px]">
            Image
          </div>
          <div className="mt-3">
            <p className="font-bold md:text-xl">{item.description}</p>
          </div>
          <div className="w-full mt-4 flex items-center justify-center">
            <Link
              href={item.link}
              className="bg-[#FCD000] font-[700] px-6 py-2 text-[#212335] rounded-md min-w-[100px]"
            >
              {item.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
