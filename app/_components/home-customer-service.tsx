"use client";

import Dot from "@/components/dot";
import { motion } from "framer-motion";

export default function CustomerService() {
  return (
    <section className="relative overflow-hidden py-6 px-4 bg-[#241D56] text-white lg:py-15">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold mb-6 leading-snug text-[#FF5561]"
        >
          How can I contact Ph365 customer service?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-white mb-6 max-w-2xl mx-auto"
        >
          Our 24/7 customer support team ensures your experience with us is
          smooth and worry-free. Reach out with questions about your account,
          payments, games, or anything else!
        </motion.p>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-6"
        >
          {[
            {
              title: "Live Chat",
              desc: "Connect with a support agent instantly via our website's live chat for real-time assistance.",
            },
            {
              title: "Email",
              desc: "Prefer writing? Send us an email and we'll get back to you swiftly.",
            },
            {
              title: "Phone",
              desc: "Need personalized help? Speak directly to our trained support team over the phone.",
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex items-start gap-4 bg-[#100844]/75 p-4 rounded-xl border border-[#100844] hover:shadow-lg hover:shadow-[#FF5561]/10 transition-shadow"
            >
              <Dot classname="items-start mt-2" />
              <div>
                <p className="font-semibold text-lg text-white">{item.title}</p>
                <p className="text-white">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center text-white"
        >
          Our top priority at <strong className="text-white">ph365</strong> is
          your satisfaction. We’re committed to delivering world-class support
          whenever you need it.
        </motion.div>
      </div>
    </section>
  );
}
