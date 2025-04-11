"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Thank you! Your email has been sent.\nWill get back to you shortly.\nThankyou for your time.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <h1 className="mb-10">SHOOT A<br />REQUEST</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <Link
              href="mailto:hello@yume.com"
              className="text-base opacity-70 hover:opacity-100 transition-opacity flex items-center"
            >
              hello@yume.com
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="w-full md:w-2/3">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="bg-secondary border-none h-14 px-6"
              />
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="bg-secondary border-none h-14 px-6"
              />
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Masterpiece Starts Here"
                className="bg-secondary border-none min-h-[150px] px-6 py-4 resize-none"
                rows={6}
              />
              <Button
                type="submit"
                className="w-full bg-zinc-700 hover:bg-zinc-800 text-white h-14"
              >
                Send It!
              </Button>
              <p className="text-sm text-gray-600 mt-2">{status}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
