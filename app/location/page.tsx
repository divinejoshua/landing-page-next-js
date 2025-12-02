import {
  Monitor,
  MapPin,
  Mail,
  Phone,
  Clock,
  Navigation,
  Building,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import Link from "next/link";

export default function LocationPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DiMedia</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Services
            </Link>
            <Link href="/#portfolio" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Portfolio
            </Link>
            <Link href="/#why-us" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Why Us
            </Link>
            <Link href="/careers" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Careers
            </Link>
            <Link href="/location" className="text-sm font-medium text-blue-600 transition-colors" prefetch={false}>
              Location
            </Link>
          </nav>
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 backdrop-blur-sm border border-blue-400/30">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-sm text-blue-100">Visit Our Office</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Find Us in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Benin City
                </span>
              </h1>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-300">
                Visit our office to discuss your billboard advertising needs. We're here to help you amplify your brand across Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Location Details Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our team is ready to help you create impactful billboard campaigns. Stop by our office or reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Ekehuan Road<br />
                        Benin City<br />
                        Edo State, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+2341234567890" className="hover:text-blue-600 transition-colors">
                          +234 123 456 7890
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@dimedia.com" className="hover:text-blue-600 transition-colors">
                          contact@dimedia.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 h-fit">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=Ekehuan+Road+Benin+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-blue-600 text-base font-medium text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
                  >
                    <Navigation className="h-5 w-5" />
                    Get Directions
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126847.57747429682!2d5.5367093!3d6.3388862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3d85b1d525d%3A0xa9b8f69d0d3c9c5d!2sEkehuan%20Rd%2C%20Benin%20City!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DiMedia Office Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Visit Our Office?
              </h2>
              <p className="max-w-[700px] text-lg text-gray-600">
                Experience personalized service and see how we can transform your brand visibility
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Consultation</h3>
                <p className="text-gray-600">
                  Meet with our experts to discuss your specific advertising needs and get tailored recommendations for your campaigns.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Location Portfolio Review</h3>
                <p className="text-gray-600">
                  Browse our comprehensive portfolio of premium billboard locations and see detailed analytics for each placement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Same-Day Proposals</h3>
                <p className="text-gray-600">
                  Walk out with a custom proposal designed to maximize your ROI and reach your target audience effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a visit to our office or reach out to us today. We're here to help amplify your brand's reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:contact@dimedia.com"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-blue-600 hover:bg-gray-100 transition-all shadow-lg"
                  prefetch={false}
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </Link>
                <Link
                  href="tel:+2341234567890"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 text-base font-medium text-white hover:bg-white/20 transition-all"
                  prefetch={false}
                >
                  <Phone className="h-5 w-5" />
                  Call: +234 123 456 7890
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DiMedia</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Leading the future of out-of-home advertising with premium billboard solutions nationwide.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Digital Billboards</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Static Billboards</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Strategic Campaigns</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Creative Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/location" className="hover:text-blue-400 transition-colors">Our Location</Link></li>
                <li><Link href="/#portfolio" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>contact@dimedia.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+234 123 456 7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Ekehuan Road<br />Benin City, Edo State</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">&copy; 2024 DiMedia. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
