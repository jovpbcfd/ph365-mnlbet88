import Baccarat from "./live-casino-baccarat";
import BlackJack from "./live-casino-blackjack";
import DragonTiger from "./live-casino-dragon-tiger";
import FanTan from "./live-casino-fan-tan";
import Roulette from "./live-casino-roulette";
import SicBo from "./live-casino-sic-bo";

export default function Games() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <h2 className="text-[30px] font-bold text-center my-2 lg:my-3">
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
