"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="w-full bg-black text-white py-10"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-10">
        <div className="flex flex-col gap-1">
          <p className="text-sm">Available For Work</p>
          <Link
            href="tel:+81(0)901234567"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            +81 (0)90 1234 5678
          </Link>
          <Link
            href="mailto:hello@yuya.com"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            hello@yuya.com
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm">Designed & Developed</p>
          <Link
            href="https://contra.com/peterhodak/services"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            by Peter Hodak
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm">All rights reserved,</p>
          <p className="text-sm opacity-70">YUYA ©2024</p>
        </div>
      </div>

      <div className="container mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-4 px-5 md:px-10">
        <div className="flex gap-6">
          <Link
            href="https://linkedin.com"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <Link
            href="https://x.com"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://behance.net"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <h4 className="text-sm md:text-base">
            Curious about what we can create together? Let's bring something extraordinary to life!
          </h4>
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-2 text-sm hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
