import { Link } from 'react-router';
import { Shield, ChevronRight } from 'lucide-react';
import tipLogo from '../../assets/168f322f0f107f9b8d44f05a40c22b8dd21cafd3.png';
import jobHiring from '../../assets/JobHiring.jpg';

export function Landing() {
  return (
    <div className="min-h-screen bg-white text-[#292929]">
      {/* Top Utility Bar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 text-right text-xs md:text-sm text-[#292929]">
          <span className="font-semibold">TIP Career Services</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-[#292929] border-t-4 border-[#FFB507]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <img src={tipLogo} alt="TIP Logo" className="h-12 w-auto" />
              <div className="hidden md:flex gap-6">
                <Link to="/features" className="text-white hover:text-[#FFB507]">
                  Features
                </Link>
                <Link to="/about" className="text-white hover:text-[#FFB507]">
                  About
                </Link>
                <Link to="/contact" className="text-white hover:text-[#FFB507]">
                  Contact
                </Link>
              </div>
            </div>
            <Link to="/admin" className="text-white hover:text-[#FFB507] flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-[#292929] mb-2">Build confidence.</h1>
            <h2 className="text-5xl font-bold text-[#FFB507] mb-6">Get the job.</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Explore career opportunities and prepare for your future with comprehensive career services designed for
              TIP students and top employers.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 bg-[#292929] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1f1f1f] transition-colors"
            >
              Get Started
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex-1">
            <img src={jobHiring} alt="Career Opportunities" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-20 text-center">
          <p className="text-sm font-semibold text-[#FFB507] tracking-wider mb-4">TRUSTED BY</p>
          <p className="text-gray-600 mb-8">Featuring opportunities from leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <span className="font-bold text-xl text-[#292929]">ACCENTURE</span>
            <span className="font-bold text-xl text-[#292929]">SAP</span>
            <span className="font-bold text-xl text-[#292929]">IBM</span>
            <span className="font-bold text-xl text-[#292929]">TIM</span>
            <span className="font-bold text-xl text-[#292929]">ANSI</span>
            <span className="font-bold text-xl text-[#292929]">Capgemini</span>
          </div>
        </div>

        {/* Services */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center text-[#292929] mb-4">Comprehensive Career Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to launch your career or find the perfect candidate
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Profile Management',
                body: 'Create comprehensive profiles with skills inventory, resume uploads, and version tracking',
              },
              {
                title: 'Job & Internship Tracking',
                body: 'Apply to opportunities and track your application status with real-time updates',
              },
              {
                title: 'Career Events & Counseling',
                body: 'Book appointments, attend job fairs, seminars, and workshops to advance your career',
              },
              {
                title: 'Employer Verification',
                body: 'Verified employer profiles with streamlined posting workflows and applicant management',
              },
              {
                title: 'Analytics Dashboard',
                body: 'Comprehensive placement analytics and graduate tracer studies for data-driven decisions',
              },
              {
                title: 'Alumni Network',
                body: 'Connect with alumni through our graduate tracer module and expand your professional network',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#FFB507] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-[#292929] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mt-32 bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#292929] mb-6 text-center">About TIP Career Services</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The Technological Institute of the Philippines Career Resource Service is dedicated to bridging the gap
            between students seeking opportunities and employers looking for talent.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FFB507] mb-2">1000+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFB507] mb-2">200+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFB507] mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-white px-4 py-10">
        <div className="mx-auto max-w-6xl text-center rounded-2xl bg-[#292929] px-6 py-12">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Ready to get started?</h2>
          <p className="mb-8 text-base text-gray-200 md:text-xl">
            Join thousands of TIP students and employers already using our platform
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FFB507] px-6 py-3 text-base font-semibold text-[#292929] transition-colors hover:bg-[#e0a100]"
          >
            Get Started Today
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#292929] px-4 py-12 text-gray-200 border-t border-[#3a3a3a]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <img src={tipLogo} alt="TIP Logo" className="h-7 w-7 rounded-full" />
                <h3 className="text-2xl font-bold text-white">TIP Career Services</h3>
              </div>
              <p className="text-base text-gray-300">Empowering students and connecting employers since 1962</p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-[#FFB507]">Quick Links</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link to="/features" className="text-white hover:text-[#FFB507]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-[#FFB507]">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/get-started" className="text-white hover:text-[#FFB507]">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-[#FFB507]">Contact</h3>
              <address className="not-italic text-base text-white">
                <p className="mb-1">938 Aurora Blvd, Cubao</p>
                <p className="mb-1">Quezon City, Metro Manila</p>
                <a href="mailto:career@tip.edu.ph" className="text-white hover:text-[#FFB507]">
                  career@tip.edu.ph
                </a>
              </address>
            </div>
          </div>

          <div className="mt-8 border-t border-[#3a3a3a] pt-6 text-center text-sm text-gray-300">
            © 2026 Technological Institute of the Philippines. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
