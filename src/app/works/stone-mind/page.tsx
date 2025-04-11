import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage() {
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

        <h1 className="mb-14">Stone Mind</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2023</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Client</h5>
                <p>Stone Mind Studio</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Services</h5>
                <p>Art Direction, Branding, Photography</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://www.example.com"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.example.com
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Stone Mind is a conceptual art project exploring the intersection of organic forms and digital manipulation. The project aims to challenge perceptions of reality and artifice through surrealist imagery.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://ext.same-assets.com/709253059/205560863.jpeg"
                alt="Stone Mind project"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
              For this project, I developed a comprehensive visual identity that balances the organic and the artificial. The color palette draws from natural stone textures while incorporating contemporary gradients. The typography system employs a mix of serif and sans-serif fonts to echo this duality.
            </p>

            <p className="mb-8">
              The primary challenge was to create a cohesive aesthetic that could span various media—from digital platforms to print materials. I addressed this by developing a flexible design system that maintains its core identity while adapting to different contexts and scales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/205560863.jpeg"
                  alt="Stone Mind close-up"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/205560863.jpeg"
                  alt="Stone Mind perspective"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              The project received recognition at the 2023 Design Innovation Awards and has been featured in several digital art publications. The client reported a 40% increase in audience engagement following the rebranding.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/flexible-area-models"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/violet-orbit"
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
