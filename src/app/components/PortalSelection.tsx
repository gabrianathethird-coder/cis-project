import { Link } from 'react-router';
import { GraduationCap, Building2, ArrowLeft } from 'lucide-react';
import tipLogo from '../../assets/168f322f0f107f9b8d44f05a40c22b8dd21cafd3.png';

export function PortalSelection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full border-b-2 border-[#FFB507] bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-[#292929] hover:text-[#FFB507] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <img src={tipLogo} alt="TIP Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-[#292929]">TIP Career Services</span>
            </div>
          </div>
        </div>
      </header>

      {/* Portal Selection */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#292929] mb-4">Choose Your Portal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Select the portal that best fits your needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Portal Card */}
          <Link to="/student" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full border-2 border-gray-200 hover:border-[#FFB507]">
              <div className="flex items-center justify-center w-20 h-20 bg-[#FFF4CC] rounded-full mb-6 mx-auto group-hover:bg-[#FFE9A3] transition-colors">
                <GraduationCap className="w-10 h-10 text-[#292929]" />
              </div>
              <h2 className="text-3xl font-bold text-[#292929] mb-4 text-center">Student Portal</h2>
              <p className="text-gray-600 mb-6 text-center">
                Build your profile, manage resumes, track applications, and book career appointments
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Create and manage your professional profile',
                  'Upload and track resume versions',
                  'Apply to internships and job opportunities',
                  'Schedule career counseling appointments',
                  'Attend career events and workshops',
                  'Connect with alumni network',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFB507] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] text-white rounded-lg group-hover:bg-[#1F1F1F] transition-colors font-semibold">
                  Access Student Portal
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Employer Portal Card */}
          <Link to="/employer" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full border-2 border-gray-200 hover:border-[#FFB507]">
              <div className="flex items-center justify-center w-20 h-20 bg-[#FFF4CC] rounded-full mb-6 mx-auto group-hover:bg-[#FFE9A3] transition-colors">
                <Building2 className="w-10 h-10 text-[#292929]" />
              </div>
              <h2 className="text-3xl font-bold text-[#292929] mb-4 text-center">Employer Portal</h2>
              <p className="text-gray-600 mb-6 text-center">
                Post opportunities, manage applications, and connect with talented students
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Register and verify your company profile',
                  'Post and manage job opportunities',
                  'Review and shortlist qualified applicants',
                  'Track posting status and engagement',
                  'Access to verified student profiles',
                  'Participate in career fairs and events',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-6 h-6 text-[#FFB507] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB507] text-[#292929] rounded-lg group-hover:bg-[#E0A100] transition-colors font-semibold">
                  Access Employer Portal
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-[#292929] mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">
              If you're a TIP student or alumni looking for career opportunities, choose the Student Portal. If you're
              an employer looking to hire talented students, choose the Employer Portal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-2 border-2 border-[#292929] text-[#292929] rounded-lg hover:bg-[#292929] hover:text-white transition-colors font-medium"
              >
                Contact Support
              </a>
              <Link
                to="/admin"
                className="px-6 py-2 border-2 border-[#FFB507] text-[#292929] rounded-lg hover:bg-[#FFB507] transition-colors font-medium"
              >
                Admin Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
