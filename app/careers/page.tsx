import {
  Monitor,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  Users,
  Code,
  Headphones,
  DollarSign,
  Clock,
  Briefcase,
  Heart,
  TrendingUp,
  Globe,
  Coffee,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York, NY",
      type: "Full-time",
      openings: 2,
      salary: "$100,000 - $300,000",
      icon: Code,
      description: "Join our engineering team to build and scale our billboard management platform. Work with modern technologies and help shape the future of out-of-home advertising.",
      responsibilities: [
        "Design and develop scalable web applications",
        "Build RESTful APIs and microservices",
        "Collaborate with product and design teams",
        "Write clean, maintainable code with tests",
        "Mentor junior developers and conduct code reviews"
      ],
      requirements: [
        "5+ years of full stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/GCP/Azure)",
        "Strong understanding of database design (SQL/NoSQL)",
        "Excellent problem-solving and communication skills"
      ]
    },
    {
      id: 2,
      title: "Customer Support Specialist",
      department: "Customer Success",
      location: "Remote / New York, NY",
      type: "Full-time",
      openings: 3,
      salary: "$100,000 - $300,000",
      icon: Headphones,
      description: "Be the voice of DiMedia and help our clients succeed with their billboard campaigns. Provide exceptional support and build lasting relationships with brands nationwide.",
      responsibilities: [
        "Respond to customer inquiries via email, phone, and chat",
        "Troubleshoot technical issues and provide solutions",
        "Coordinate with internal teams to resolve client needs",
        "Document customer interactions and maintain records",
        "Identify opportunities to improve customer experience"
      ],
      requirements: [
        "3+ years in customer support or success role",
        "Excellent verbal and written communication skills",
        "Strong problem-solving and multitasking abilities",
        "Experience with CRM software (Salesforce, HubSpot, etc.)",
        "Passion for helping customers and attention to detail"
      ]
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", desc: "Industry-leading compensation packages" },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage" },
    { icon: Clock, title: "Flexible Schedule", desc: "Work-life balance with flexible hours" },
    { icon: Globe, title: "Remote Options", desc: "Work from anywhere in the US" },
    { icon: TrendingUp, title: "Career Growth", desc: "Continuous learning and advancement opportunities" },
    { icon: Coffee, title: "Unlimited PTO", desc: "Take time off when you need it" },
    { icon: Zap, title: "Latest Tech", desc: "Modern tools and equipment provided" },
    { icon: Users, title: "Amazing Team", desc: "Collaborative and supportive culture" }
  ];

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
            <Link href="/careers" className="text-sm font-medium text-blue-600 transition-colors" prefetch={false}>
              Careers
            </Link>
            <Link href="/location" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" prefetch={false}>
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
                <Briefcase className="h-4 w-4 text-blue-300" />
                <span className="text-sm text-blue-100">Join our growing team</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build the Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Outdoor Advertising
                </span>
              </h1>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-300">
                Join a team that's revolutionizing how brands connect with audiences. We're looking for talented individuals who are passionate about technology and innovation.
              </p>
              <div className="flex gap-6 items-center text-blue-100 text-sm pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Remote-friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Competitive pay</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Great culture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work at DiMedia?
              </h2>
              <p className="max-w-[700px] text-lg text-gray-600">
                We invest in our team with competitive benefits and a culture that values growth, innovation, and work-life balance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="bg-blue-100 rounded-lg p-3 mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="max-w-[700px] text-lg text-gray-600">
                We're actively hiring for the following roles. Apply today and join our mission.
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex gap-4">
                        <div className="bg-blue-100 rounded-lg p-3 h-fit">
                          <job.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              {job.openings} {job.openings === 1 ? 'opening' : 'openings'}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <div className="text-2xl font-bold text-blue-600">{job.salary}</div>
                        <div className="text-sm text-gray-600">per year</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{job.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <Link
                        href="mailto:hr@dimedia.com?subject=Application for Full Stack Developer"
                        className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-blue-600 text-base font-medium text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
                      >
                        <Mail className="h-5 w-5" />
                        Apply for this position
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <Link
                href="mailto:hr@dimedia.com?subject=General Application"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-blue-600 hover:bg-gray-100 transition-all shadow-lg"
                prefetch={false}
              >
                <Mail className="h-5 w-5" />
                Send Us Your Resume
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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
              <p className="text-sm text-gray-400">
                Leading the future of out-of-home advertising with premium billboard solutions nationwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/location" className="hover:text-blue-400 transition-colors">Our Location</Link></li>
                <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>hr@dimedia.com</span>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
