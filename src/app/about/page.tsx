import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <h1 className="mb-10">
          YUME<br />YASKUMI
        </h1>

        <div className="flex items-baseline justify-between mb-14">
          <h5 className="text-sm font-medium opacity-70">about.</h5>
          <Link
            href="https://read.cv/explore"
            className="text-sm font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read.cv
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4190935629/2179881918.jpeg"
                alt="Designer at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/4190935629/1996247856.png"
                alt="Camera"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h5 className="text-sm font-medium opacity-70 mb-14">services.</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0">
            <h3 className="text-3xl md:text-4xl font-medium">ILLUSTRATION</h3>
            <h3 className="text-3xl md:text-4xl font-medium">BRAND ART</h3>
            <h3 className="text-3xl md:text-4xl font-medium">PHOTO</h3>
            <h3 className="text-3xl md:text-4xl font-medium">UI&UX DESIGN</h3>
            <h3 className="text-3xl md:text-4xl font-medium">VIDEO EDIT</h3>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16 mt-20 justify-center">
            <Image
              src="https://ext.same-assets.com/4190935629/2018869662.svg"
              alt="Rise logo"
              width={100}
              height={40}
              className="opacity-50 h-6 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/4190935629/269610706.svg"
              alt="Kansas logo"
              width={100}
              height={40}
              className="opacity-50 h-6 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/4190935629/973675915.svg"
              alt="Aurora logo"
              width={100}
              height={40}
              className="opacity-50 h-6 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/4190935629/864767681.svg"
              alt="Seoul logo"
              width={100}
              height={40}
              className="opacity-50 h-6 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/4190935629/3178371620.svg"
              alt="Venice logo"
              width={100}
              height={40}
              className="opacity-50 h-6 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/4190935629/3015305048.svg"
              alt="Station logo"
              width={100}
              height={40}
              className="opacity-50 h-6 w-auto"
            />
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium opacity-70 mb-14">FAQs.</h5>

          <div className="space-y-8">
            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                What is your creative design process like?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>My creative process begins with thorough research and understanding of the client's needs, followed by exploration, ideation, prototyping, and refinement until we achieve the perfect design solution.</p>
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                What is your typical project timeline?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>Project timelines vary based on scope and complexity. Generally, smaller projects take 2-3 weeks, while more comprehensive projects may extend to 6-8 weeks. I always provide a detailed timeline during the initial consultation.</p>
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                How do I get started on a project with you?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>Getting started is simple: reach out through the contact form with a brief description of your project. We'll schedule an initial consultation to discuss your needs, objectives, and vision, then proceed with a formal proposal.</p>
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                What should I do if you're fully booked?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>If I'm fully booked, you can join my waiting list for priority consideration once my schedule opens up. For urgent projects, I can sometimes recommend trusted colleagues who share a similar design philosophy.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
