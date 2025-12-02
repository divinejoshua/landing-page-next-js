import { Landmark, SunIcon, ZapIcon } from "lucide-react";
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Landmark className="h-6 w-6 text-primary" />
          <span className="sr-only">DiMedia</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#why-us" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Why Us
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                  Your Message, Amplified.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  DiMedia helps you reach millions with our network of premium digital and static billboards.
                  Target your audience with precision and impact.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Billboard Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From high-traffic highways to bustling city centers, our billboards are positioned for maximum exposure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold">Digital Billboards</h3>
                  <p className="text-muted-foreground">
                    Capture attention with stunning, high-resolution digital displays. Update your message in real-time.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold">Static Billboards</h3>
                  <p className="text-muted-foreground">
                    A timeless and effective way to build brand awareness. Our static billboards are a 24/7 presence.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold">Custom Campaigns</h3>
                  <p className="text-muted-foreground">
                    We'll work with you to create a tailored advertising strategy that meets your goals and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why DiMedia?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're more than just a billboard company. We're your partner in growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-primary-foreground">
                    <SunIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Unbeatable Locations</h3>
                    <p className="text-muted-foreground">
                      Our billboards are in the places your customers are. High traffic, high visibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-primary-foreground">
                    <ZapIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Cutting-Edge Tech</h3>
                    <p className="text-muted-foreground">
                      We invest in the latest technology to provide you with the best possible results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-primary-foreground">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Expert Support</h3>
                    <p className="text-muted-foreground">
                      From design to deployment, our team is here to help you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Make an Impact?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's talk about your advertising goals. Get a free quote today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <Link
                    href="mailto:contact@dimedia.com"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 DiMedia. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}