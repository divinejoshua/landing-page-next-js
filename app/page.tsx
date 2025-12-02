import {
  MapPin,
  Monitor,
  BarChart3,
  Users,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  Clock,
  Briefcase,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DiMedia</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Why Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Testimonials
            </Link>
            <Link href="/careers" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Careers
            </Link>
            <Link href="/location" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
              Location
            </Link>
          </nav>
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 backdrop-blur-sm border border-blue-400/30">
                <TrendingUp className="h-4 w-4 text-blue-300" />
                <span className="text-sm text-blue-100">Trusted by 500+ brands nationwide</span>
              </div>
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Dominate the Outdoor
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Advertising Space
                  </span>
                </h1>
                <p className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-300">
                  Reach millions of potential customers with premium billboard placements in high-traffic locations.
                  Make your brand impossible to ignore.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 text-base font-medium text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/50"
                  prefetch={false}
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 text-base font-medium text-white hover:bg-white/20 transition-all"
                  prefetch={false}
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1,200+</div>
                <div className="text-sm text-gray-600">Premium Locations</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50M+</div>
                <div className="text-sm text-gray-600">Daily Impressions</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Premium Billboard Solutions
              </h2>
              <p className="max-w-[800px] text-lg text-gray-600">
                Strategic placements across highways, urban centers, and high-traffic areas to maximize your brand exposure
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-blue-200">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                  <Monitor className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Billboards</h3>
                <p className="text-gray-600 mb-4">
                  High-resolution LED displays with dynamic content rotation. Perfect for time-sensitive campaigns and real-time messaging.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Instant content updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Multiple ad rotations per day</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>HD quality visuals</span>
                  </li>
                </ul>
              </div>

              <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-blue-200">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Static Billboards</h3>
                <p className="text-gray-600 mb-4">
                  Traditional large-format displays with maximum impact. Ideal for long-term brand building and consistent messaging.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>24/7 brand presence</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Premium highway locations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>High visibility guaranteed</span>
                  </li>
                </ul>
              </div>

              <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-blue-200">
                <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                  <Target className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Campaigns</h3>
                <p className="text-gray-600 mb-4">
                  Custom multi-location campaigns designed to maximize reach and ROI based on your target demographics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Data-driven placement</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Audience targeting</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Featured Locations
              </h2>
              <p className="max-w-[700px] text-lg text-gray-600">
                Prime billboard placements across major markets and high-traffic corridors
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Downtown Metro", desc: "High-traffic urban centers", impressions: "2M+" },
                { title: "Highway Corridors", desc: "Major interstate routes", impressions: "5M+" },
                { title: "Shopping Districts", desc: "Retail and commercial zones", impressions: "1.5M+" },
                { title: "Airport Routes", desc: "Leading to major airports", impressions: "3M+" },
                { title: "Sports Venues", desc: "Near stadiums and arenas", impressions: "800K+" },
                { title: "Transit Hubs", desc: "Bus and rail terminals", impressions: "1.2M+" }
              ].map((location, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <Globe className="h-8 w-8 text-blue-400" />
                      <span className="text-sm font-medium text-blue-400">{location.impressions} daily</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{location.title}</h3>
                    <p className="text-gray-400 text-sm">{location.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose DiMedia?
              </h2>
              <p className="max-w-[700px] text-lg text-gray-600">
                Industry-leading expertise, technology, and support to ensure your campaign success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-lg p-3 h-fit">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Locations</h3>
                  <p className="text-gray-600">
                    Premium placements in the highest-traffic areas with verified daily impressions and audience analytics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-lg p-3 h-fit">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Results</h3>
                  <p className="text-gray-600">
                    Comprehensive analytics and reporting to measure campaign performance and optimize your ROI.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-lg p-3 h-fit">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Deployment</h3>
                  <p className="text-gray-600">
                    Launch campaigns in days, not weeks. Our streamlined process gets your message out fast.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-lg p-3 h-fit">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">
                    Your success team handles everything from design assistance to installation and monitoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-lg p-3 h-fit">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Leaders</h3>
                  <p className="text-gray-600">
                    15+ years of excellence with partnerships across major metropolitan areas nationwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-lg p-3 h-fit">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Packages</h3>
                  <p className="text-gray-600">
                    Solutions for every budget, from single billboard placements to nationwide campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="max-w-[700px] text-lg text-gray-600">
                See how brands are driving results with our billboard solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "DiMedia helped us increase foot traffic by 45% in just three months. Their strategic placement recommendations were spot-on."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Marketing Director, RetailCo</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The digital billboard campaign exceeded our expectations. Real-time updates made our product launches incredibly impactful."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">CEO, TechStart Inc</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Professional service from start to finish. The team handled everything and our brand visibility has never been higher."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    EP
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Parker</div>
                    <div className="text-sm text-gray-600">Brand Manager, Lifestyle Co</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Amplify Your Brand?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a free consultation and custom proposal for your advertising goals. Let's create a campaign that gets results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="mailto:contact@dimedia.com"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-blue-600 hover:bg-gray-100 transition-all shadow-lg"
                  prefetch={false}
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 text-base font-medium text-white hover:bg-white/20 transition-all"
                  prefetch={false}
                >
                  <Phone className="h-5 w-5" />
                  Call: (123) 456-7890
                </Link>
              </div>
              <div className="flex gap-6 items-center text-blue-100 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>No Obligation Quote</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>24hr Response</span>
                </div>
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
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Digital Billboards</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Static Billboards</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Strategic Campaigns</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Creative Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/location" className="hover:text-blue-400 transition-colors">Our Location</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
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
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Ekehuan Road<br/>Benin City, Edo State</span>
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
  )
}