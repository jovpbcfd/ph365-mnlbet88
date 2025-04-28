import Dot from "@/components/dot";

export default function Guide() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Our Promotions: The Methodical Guide
        </h2>
        <p className="mt-2">
          Participating in the promos of ph365 is quick and simple. Still, we
          urge you to study the terms and conditions for every campaign to fully
          grasp how to guarantee eligibility and collect your benefits.
          Generally, the procedure follows this:
        </p>
        <div>
          <ul>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  First you will need to register even if you do not already
                  have an account with ph365. Once registered, you will have
                  total access to all of our promotions; this is a quick and
                  easy process.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  Most promotions ask you to pay a deposit to be qualified.
                  ph365 offers numerous safe and rapid payment methods so you
                  may just fund your account and start playing.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  You can start assisting with the promos after your account is
                  financed. Whether you are monitoring daily for rewards,
                  spinning the Daily Fortune Wheel, or finishing the Weekly
                  Challenge, you are always in the running to win amazing
                  prizes.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <div className="min-w-4 mb-auto mt-1">
                <Dot />
              </div>
              <div>
                <p>
                  Should your qualifications meet those of a promotion, your
                  reward will be credited directly to your account. Your
                  earnings can then be maintained either kept playing or
                  withdrawn per our terms and conditions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
