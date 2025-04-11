'use client';

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <motion.section
        className="pb-16 pt-10 md:pt-20 md:pb-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Row 1: Name and Image */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <motion.h1
              className="mb-4 leading-none text-[7rem] md:text-[12rem]" 
            >
              <motion.span
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="block"
              >
                KRYTI
              </motion.span>
              <motion.span
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="block"
              >
                GARG
              </motion.span>
            </motion.h1>



            <motion.div
              className="w-[15rem] h-[15rem] relative overflow-hidden rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Image
                src="https://raw.githubusercontent.com/krytigx/Portfolio_images/refs/heads/main/place_holder.jpg"
                alt="kryptigx"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Row 2: Email and Description */}
         <div className="flex flex-col md:flex-row justify-between gap-6">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="mailto:kryptigx@gmail.com"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center"
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                kryptigx@gmail.com
              </Link>
          
              <div className="text-sm opacity-70 flex items-center">
                <MapPin className="h-4 w-4 mr-1" stroke="black" fill="none" />
                Delhi, India
              </div>
            </motion.div>
           
            <motion.p
              className="text-lg md:text-4xl leading-relaxed mt-[6rem] pl-[6rem] text-right"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!
            </motion.p>

          </div>
        </motion.div>
      </motion.section>

      {/* Work Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-sm font-medium opacity-70">work.</h5>
          <Link href="/works" className="text-sm hover:underline">
            Show More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {["stone-mind", "violet-orbit", "visual-screen-models", "flexible-area-models"].map((slug, i) => (
            <motion.div
              key={slug}
              className="relative group block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Link href={`/works/${slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`https://ext.same-assets.com/709253059/${{
                      "stone-mind": "205560863.jpeg",
                      "violet-orbit": "3225808702.png",
                      "visual-screen-models": "961028993.png",
                      "flexible-area-models": "3768869390.png"
                    }[slug]}`}
                    alt={slug.replace(/-/g, " ")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-lg font-medium">
                    {slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-sm font-medium opacity-70">about.</h5>
          <Link href="/about" className="text-sm hover:underline">
            Show More
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed">
              I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/2232509785.jpeg"
                alt="Designer working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
