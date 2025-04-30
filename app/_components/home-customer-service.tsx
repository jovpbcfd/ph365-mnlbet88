"use client";

import Dot from "@/components/dot";
import { motion } from "framer-motion";

export default function CustomerService() {
  return (
    <section className="relative overflow-hidden py-6 bg-blue-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold mb-6 leading-snug bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent"
        >
          How can I contact Ph365 customer service?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-300 mb-6 max-w-2xl mx-auto"
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
              className="flex items-start gap-4 bg-blue-900/50 p-4 rounded-xl border border-blue-800 hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              <Dot />
              <div>
                <p className="font-semibold text-lg text-white">{item.title}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center text-gray-300"
        >
          Our top priority at <strong className="text-white">ph365</strong> is
          your satisfaction. We’re committed to delivering world-class support
          whenever you need it.
        </motion.div>
      </div>
    </section>
  );
}
