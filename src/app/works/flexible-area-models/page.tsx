import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FlexibleAreaModelsPage() {
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

        <h1 className="mb-14">Flexible Area Models</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2023</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Client</h5>
                <p>Typography Collective</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Services</h5>
                <p>Graphic Design, Typography, Print Design</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://www.typo-collective.com"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.typo-collective.com
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Flexible Area Models represents an experimental approach to typographic design, exploring how letterforms can adapt to and define spatial relationships. This project challenges conventional notions of typographic structure by introducing a system where text elements respond dynamically to their containers.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://ext.same-assets.com/709253059/3768869390.png"
                alt="Flexible Area Models main poster"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
              The project began as an investigation into how typographic elements could break free from rigid grid systems while still maintaining legibility and communicative power. Each composition in the series experiments with different ways of allowing letterforms to interact with their surrounding space, creating tension and harmony through careful manipulation of scale, weight, and positioning.
            </p>

            <p className="mb-8">
              One of the key innovations in this project was the development of a custom algorithmic system that generates compositions based on underlying textual meaning. Words with stronger emotional resonance are given more visual prominence, creating a semantically driven visual hierarchy that adds layers of interpretation to the typographic layouts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/3768869390.png"
                  alt="Flexible Area Models detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/3768869390.png"
                  alt="Flexible Area Models variations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              The Flexible Area Models project has been widely embraced by the design community, receiving recognition at the International Typography Biennale and being featured in several prominent design publications. The system has since been adapted for various commercial applications, including editorial design, branding, and digital interfaces.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/visual-screen-models"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/stone-mind"
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
