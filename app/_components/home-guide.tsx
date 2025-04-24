import { Timelines } from "@/components/timeline";
import { data } from "@/data/step-guide";

export default function Guide() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:my-8">
        <h2 className="text-[30px] font-bold text-center mb-2 lg:mb-3">
          Comprehensive Guide on Joining ph365 Casino Step-by- Step
        </h2>
        <div>
          <p className="mt-2">
            By a quick and easy method, joining ph365 Casino enables you start
            playing your chosen games in no time. Here is a comprehensive,
            detailed guide on registering for your account and enjoying the
            amazing world of internet gaming.
          </p>
          <p className="mt-2">
            Among the several ways players could pay include Bitcoin, e-wallets,
            and online banking. We make sure the money depositing and
            withdrawing procedures are as straightforward and quick as they
            could be. We even added precise instructions to guide fresh
            participants over the process. Making the money part of gaming as
            stress-free and ideal as possible will help players to concentrate
            on how enjoyable the games are. We also give fast payouts great
            weight, hence we rank quick and simple withdrawals first in our list
            of criteria. You will have instant access to your money since your
            gains will be credited straight to your account upon your winning.
          </p>
        </div>

        <div>
          <Timelines data={data} />
        </div>
      </div>
    </section>
  );
}
