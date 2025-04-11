import Link from "next/link";
import Image from "next/image";

export default function WorksPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <h1 className="mb-10">WORK</h1>

        <div className="flex items-end justify-between mb-14">
          <h5 className="text-sm font-medium opacity-70">work 2020 - 2024</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="/works/stone-mind" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/205560863.jpeg"
                alt="Stone Mind"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Stone Mind</h4>
            </div>
          </Link>

          <Link href="/works/violet-orbit" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/3225808702.png"
                alt="Violet Orbit"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Violet Orbit</h4>
            </div>
          </Link>

          <Link href="/works/visual-screen-models" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/961028993.png"
                alt="Visual Screen Models"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Visual Screen Models</h4>
            </div>
          </Link>

          <Link href="/works/flexible-area-models" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/3768869390.png"
                alt="Flexible Area Models"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Flexible Area Models</h4>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
