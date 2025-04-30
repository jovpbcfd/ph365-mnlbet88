"use client";

// import Image from "next/image";
import Dot from "@/components/dot";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="bg-blue-950 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[30px] lg:text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent"
        >
          Game Categories We Offer at Ph365
        </motion.h2>

        <ul className="space-y-12">
          {categories.map((cat, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-6 bg-blue-900/40 border border-blue-800 p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              {/* <Image
                src={cat.image}
                alt={cat.title}
                width={300}
                height={300}
                className="rounded-xl object-cover shadow-md"
              /> */}
              <div className="w-full h-full flex items-center justify-center border border-dashed border-white/20 rounded-md text-white lg:w-[300px] lg:h-[300px]">
                Image 1080x1080
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <Dot />
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>
                <p className="text-gray-300">{cat.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center text-gray-300"
        >
          To our game catalog, we regularly include fresh releases from top game
          developers such Microgaming, NetEnt, Evolution Gaming, and others.
          From a large selection of games available, ph365 guarantees always
          something fascinating to play.
        </motion.div>
      </div>
    </section>
  );
}
