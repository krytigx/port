import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VioletOrbitPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <div className="mb-10">
          <Link
            href="/works"
            className="inline-flex items-center text-sm hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all works
          </Link>
        </div>

        <h1 className="mb-14">Violet Orbit</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2024</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Client</h5>
                <p>Orbital Technologies</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Services</h5>
                <p>Digital Art, Motion Graphics, UI Design</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://www.orbital-tech.com"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.orbital-tech.com
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Violet Orbit represents a bold step into the realm of abstract digital art for space technology. This project blends cosmological phenomena with digital aesthetics to create a distinctive visual identity for a cutting-edge space analytics platform.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://ext.same-assets.com/709253059/3225808702.png"
                alt="Violet Orbit project header"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
              The central challenge of this project was to translate complex astronomical data into visually compelling elements that remain scientifically accurate. The violet spectrum was chosen for its association with the outer reaches of visible light, symbolizing the company's mission to make the invisible visible.
            </p>

            <p className="mb-8">
              Each visual component in the Violet Orbit system is based on actual astronomical phenomena, reinterpreted through a contemporary digital lens. The orbital patterns, luminous gradients, and abstract forms are all derived from real data, creating a visual language that is both authentic and aesthetically striking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/3225808702.png"
                  alt="Violet Orbit UI elements"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-black">
                <Image
                  src="https://ext.same-assets.com/709253059/3225808702.png"
                  alt="Violet Orbit on dark background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              The project has been particularly successful in establishing a distinctive presence in the crowded space technology sector. Since launching with the new identity, Orbital Technologies has reported a 65% increase in user engagement and has secured three major partnerships with international space agencies.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/stone-mind"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/visual-screen-models"
              className="inline-flex items-center text-sm hover:underline"
            >
              Next Project
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
