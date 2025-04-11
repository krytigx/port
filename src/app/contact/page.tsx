import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <h1 className="mb-10">
          SHOOT A<br />REQUEST
        </h1>

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
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-secondary border-none h-14 px-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-secondary border-none h-14 px-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Masterpiece Starts Here"
                  className="bg-secondary border-none min-h-[150px] px-6 py-4 resize-none"
                  rows={6}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-zinc-700 hover:bg-zinc-800 text-white h-14"
                >
                  Send It!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
