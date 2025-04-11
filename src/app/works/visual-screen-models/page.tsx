import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VisualScreenModelsPage() {
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

        <h1 className="mb-14">Visual Screen Models</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2022</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Client</h5>
                <p>Apple Inc.</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Services</h5>
                <p>Product Visualization, 3D Modeling, Photography</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://www.apple.com"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.apple.com
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Visual Screen Models was a project focused on creating a series of minimalist, high-end product visualizations for a major technology company's flagship display products. The goal was to showcase the design excellence of the products while emphasizing their integration into modern creative workspaces.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://ext.same-assets.com/709253059/961028993.png"
                alt="Visual Screen Models main image"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
              This project required an exacting approach to lighting, composition, and spatial arrangement. Each element in the scene was carefully considered, from the precise angle of the displays to the subtle interplay of light and shadow. The environment was designed to communicate a sense of creative potential—clean, uncluttered spaces where technology enables rather than dominates.
            </p>

            <p className="mb-8">
              For the 3D modeling components, I developed custom material shaders that accurately replicated the distinctive surface qualities of the aluminum and glass. Special attention was paid to the screen visualizations, which needed to appear realistic while still communicating the exceptional quality of the displays. The final images strike a balance between photorealism and artistic interpretation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/961028993.png"
                  alt="Visual Screen Models closeup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://ext.same-assets.com/709253059/961028993.png"
                  alt="Visual Screen Models in workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              The Visual Screen Models project was featured prominently in the client's product launch campaign and received industry recognition for its innovative approach to product visualization. The images were used across digital platforms, print media, and retail environments, creating a cohesive visual language that reinforced the product's premium positioning.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/violet-orbit"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/flexible-area-models"
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
