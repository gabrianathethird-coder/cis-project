import { Link } from 'react-router';
import { Building2, FileText, Users, CheckCircle, ChevronRight, Clock } from 'lucide-react';
import { useCareerService } from '../../context/CareerServiceContext';

export function EmployerDashboard() {
  const { employer, jobPostings } = useCareerService();

  const stats = [
    {
      label: 'Verification Status',
      value: employer?.status || 'Not Registered',
      icon: CheckCircle,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Active Job Postings',
      value: jobPostings.filter(j => j.status === 'active').length,
      icon: FileText,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Total Applicants',
      value: jobPostings.reduce((sum, job) => sum + (job.applicants?.length || 0), 0),
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      label: 'Pending Approvals',
      value: jobPostings.filter(j => j.status === 'pending_approval').length,
      icon: Clock,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const quickLinks = [
    {
      title: 'Company Profile',
      description: 'Manage your company information and verification',
      icon: Building2,
      link: '/employer/profile',
      color: 'bg-blue-600',
    },
    {
      title: 'Job Postings',
      description: 'Create and manage your job postings',
      icon: FileText,
      link: '/employer/jobs',
      color: 'bg-green-600',
    },
    {
      title: 'Applicant Management',
      description: 'Review and shortlist job applicants',
      icon: Users,
      link: '/employer/applicants',
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Employer Portal</h1>
            </div>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome{employer ? `, ${employer.companyName}` : ' to Employer Portal'}!
          </h2>
          <p className="text-gray-600">Manage your recruitment and find talented candidates</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
              <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Verification Alert */}
        {employer && employer.status === 'pending' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-1">Verification Pending</h3>
                <p className="text-yellow-800 text-sm">
                  Your company profile is under review. You'll be notified once verification is complete.
                </p>
              </div>
            </div>
          </div>
        )}

        {!employer && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Complete Your Registration</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Register your company to start posting job opportunities and accessing our talent pool.
                </p>
                <Link
                  to="/employer/profile"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.link} className="group">
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center flex-shrink-0`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{link.title}</h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Job Postings */}
        {jobPostings.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Job Postings</h3>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {jobPostings.slice(0, 5).map((job) => (
                <div key={job.id} className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <p className="text-sm text-gray-600">{job.location} • {job.type}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">
                        {job.applicants?.length || 0} applicants
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.status === 'active' ? 'bg-green-100 text-green-800' :
                        job.status === 'pending_approval' ? 'bg-yellow-100 text-yellow-800' :
                        job.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {job.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
