import { Timelines } from "@/components/timeline";

import { data as iosData } from "@/data/download-guide-ios";
import { data as androidData } from "@/data/download-guide-android";

export default function Guide() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto py-10 text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
          Installing the ph365 App on iOS and Android Devices: A Guide
        </h2>
        <p className="mt-2">
          Wish to play engaging, safe, and seamless games on your mobile device?
          The ideal answer is the ph365 mobile app. Our software is meant to
          provide you a high-quality gaming experience—anytime, anywhere with
          quick performance, simple navigation, and best security.
        </p>
        <p className="mt-2">
          Just follow the easy instructions below to download and install the
          most recent version of the ph365 app whether your phone is an iPhone
          or an Android.
        </p>
        <div>
          <div>
            <h3>For Android Users</h3>
          </div>
          <Timelines data={iosData} />
        </div>
        <div>
          <div>
            <h3>For Android Users</h3>
          </div>
          <Timelines data={androidData} />
        </div>
        <div>
          <p>
            You are now completely equipped to investigate our large selection
            of games, bonuses, and special deals!
          </p>
        </div>
      </div>
    </section>
  );
}
