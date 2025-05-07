"use client";

// import Image from "next/image";
import { motion } from "framer-motion";

export default function Ways() {
  return (
    <section className="bg-white text-dark dark:text-white pt-10 pb-6 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-12"
        >
          Many Ways to Pay: Simple Transactions for Outstanding Gaming
        </motion.h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/4 space-y-5"
          >
            <p>
              At ph365, we understand that great and enjoyable playing
              experience depends on swift, safe, dependable transactions. Our
              players have various choices for payment so they may choose the
              one most appropriate for their circumstances. Strong encryption
              and modern technologies let us make sure every interaction is safe
              and secure. This helps players to have the peace of mind required
              to appreciate their sports.
            </p>
            <p>
              Among the several ways players could pay include Bitcoin,
              e-wallets, and online banking. We make sure the money depositing
              and withdrawing procedures are as straightforward and quick as
              they could be. We even added precise instructions to guide fresh
              participants over the process. Making the money part of gaming as
              stress-free and ideal as possible will help players to concentrate
              on how enjoyable the games are. We also give fast payouts great
              weight, hence we rank quick and simple withdrawals first in our
              list of criteria. You will have instant access to your money since
              your gains will be credited straight to your account upon your
              winning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[350px] h-[350px] flex items-center justify-center border border-dashed border-dark/20 rounded-md text-center text-dark"
          >
            {/* h-auto */}
            {/* <Image
              src="/images/payments.jpg"
              alt="Ways to Pay"
              width={350}
              height={350}
              className="rounded-xl object-cover shadow-lg"
            /> */}
            Image 1080x1080
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// export default function Ways() {
//   return (
//     <section>
//       <div className="max-w-[1200px] mx-auto text-white lg:my-8">
//         <h2 className="text-[30px] font-bold text-center mb-2 lg:mb-3">
//           Many ways to pay: simple transactions for outstanding gaming
//         </h2>
//         <div className="flex flex-col justify-between lg:flex-row-reverse">
//           <div className="w-full h-full flex items-center justify-center border border-dashed rounded-md text-white lg:mr-32 lg:w-[350px] lg:h-[350px]">
//             Image 1080x1080
//           </div>
//           <div className="w-full lg:w-[50%]">
//             <p className="mt-2">
//               At ph365, we understand that great and enjoyable playing
//               experience depends on swift, safe, dependable transactions. Our
//               players have various choices for payment so they may choose the
//               one most appropriate for their circumstances. Strong encryption
//               and modern technologies let us make sure every interaction is safe
//               and secure. This helps players to have the peace of mind required
//               to appreciate their sports.
//             </p>
//             <p className="mt-2">
//               Among the several ways players could pay include Bitcoin,
//               e-wallets, and online banking. We make sure the money depositing
//               and withdrawing procedures are as straightforward and quick as
//               they could be. We even added precise instructions to guide fresh
//               participants over the process. Making the money part of gaming as
//               stress-free and ideal as possible will help players to concentrate
//               on how enjoyable the games are. We also give fast payouts great
//               weight, hence we rank quick and simple withdrawals first in our
//               list of criteria. You will have instant access to your money since
//               your gains will be credited straight to your account upon your
//               winning.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
