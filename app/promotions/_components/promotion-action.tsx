"use client";

import { motion } from "framer-motion";

export default function CommonAction() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto  text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-2 lg:mb-10"
        >
          Common Issues and Their Remedial Action
        </motion.h2>
        <p className="mt-2">
          We know that occasionally issues could arise even if we want our
          campaigns to be as perfect and entertaining as they could be. Here are
          some common problems you might run across coupled with guidelines on
          how to manage them:
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pb-10 flex flex-col lg:flex-row items-center gap-6"
        >
          <ul className="list-decimal pl-5 w-full lg:w-3/4">
            <li className="mt-2">
              <strong>Not Getting Approval</strong>
              <p>
                There can be various reasons you are not reaping the benefits
                for which you qualify. Check that you meet all criteria listed
                in the terms and conditions of the offer. See our customer
                service representatives for assistance should everything seem to
                be in order however you are still not receiving your reward.
              </p>
            </li>
            <li className="mt-2">
              <strong>Not Following Promotion Policies</strong>
              <p>
                Every promotion comes with specific criteria, such minimum
                deposit requirements, wagering rules, or playing particular
                games. Review the terms carefully to be sure you meet all the
                requirements.
              </p>
            </li>
            <li className="mt-2">
              <strong>Issues with bonus drawbacks</strong>
              <p>
                Should you be finding difficulty withdrawing your bonus money,
                wagering needs not be satisfied might be the result. Always go
                over the rules of bonus monies and be aware of any limitations
                before attempting to claim your wins.
              </p>
            </li>
            <li className="mt-2">
              <strong>Technology Difficulties</strong>
              <p>
                Should technical issues arise during a promotion, our dedicated
                customer support team is here to help you. We try to quickly and
                effectively solve any issues so you might start enjoying your
                gaming experience once more.
              </p>
            </li>
          </ul>
          <div
            className="w-full h-full lg:w-[400px] lg:h-[400px] border border-dashed border-white/20 
          rounded-xl flex items-center justify-center text-sm text-white/60"
          >
            Image 1080x1080
          </div>
        </motion.div>
      </div>
    </section>
  );
}
