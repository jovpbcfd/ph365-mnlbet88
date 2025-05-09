import Baccarat from "./live-casino-baccarat";
import BlackJack from "./live-casino-blackjack";
import DragonTiger from "./live-casino-dragon-tiger";
import FanTan from "./live-casino-fan-tan";
import Roulette from "./live-casino-roulette";
import SicBo from "./live-casino-sic-bo";

export default function Games() {
  return (
    <section className="bg-white lg:py-15">
      <div className="max-w-[1200px] mx-auto text-black dark:text-white">
        <h2 className="text-[30px] font-bold text-center py-2 text-[#FF5561] lg:text-4xl lg:py-3">
          Wide Selection of Live Casino Games
        </h2>
        <p className="mt-2">
          Thanks to the great array of games ph365 offers in the live casino
          department, variety is always mixed with the chance to feel intense
          emotions. From the more conventional games like Blackjack, Roulette
          and Baccarat to the game show kind games there is a really fascinating
          experience for everyone. Play your preferred live casino games with
          actual dealers, all delivered in HD for a remarkably lifelike
          experience. Whether new to live gaming or an experienced player, we
          constantly provide fresh options so you may play anywhere, at any time
          and win big. To test our Live Casino, kindly register ph365 right now
          and identify your preferred games!
        </p>
        <div>
          <Baccarat />
          <BlackJack />
          <SicBo />
          <Roulette />
          <DragonTiger />
          <FanTan />
        </div>
      </div>
    </section>
  );
}
