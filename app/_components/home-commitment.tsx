"use client";

import { motion } from "framer-motion";

export default function Commitment() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-[1200px] mx-auto text-white lg:py-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold text-[#FF5561] mb-2 lg:mb-10"
        >
          Our Commitment to a Trusted Casino Brand: Reliability and Fairness
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mt-2">
            Our identity as a trustworthy online casino makes us at ph365 great
            satisfaction. Online gaming calls for confidence and security, hence
            we are dedicated to establish the trust of every player that chooses
            our platform. Among the key factors building this confidence are our
            licenses and registrations with two of the most respected and
            rigorous regulatory bodies in the gaming industry: eCOGRA and
            Philippine Amusement and Gaming Corporation (PAGCOR).
          </p>
          <p className="mt-2">
            These licensing authorities set strict criteria for the operation of
            online casinos, therefore ensuring that we give each one of our
            clients a fair, honest, safe platform. Following their strict
            guidelines not only ensures that our games are fair and transparent
            but also enables us to run under reasonable limits. Players can thus
            rely on their money to be protected; their earnings will be paid out
            immediately; and our platform functions morally and honestly.
          </p>
          <p className="mt-2">
            Being a registered casino, we also follow specific guidelines to
            maintain financial accountability. For example, player money is kept
            separate from our running expenses so that it is always available as
            required. Among the various reasons players choose ph365 as their
            preferred online casino is this commitment to transparency and
            fairness.
          </p>
          <p className="mt-2">
            Being a registered casino, we also follow specific guidelines to
            maintain financial accountability. For example, player money is kept
            separate from our running expenses so that it is always available as
            required. Among the various reasons players choose ph365 as their
            preferred online casino is this commitment to transparency and
            fairness.
          </p>
          <p className="mt-2">
            We have also made our platform better to enable even on mobile
            devices flawless gameplay. ph365 is the ideal site for players who
            want to play on any device since it provides outstanding graphics,
            fast loading times, and a responsive interface whether your
            operating system is Android, iOS, or another.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
