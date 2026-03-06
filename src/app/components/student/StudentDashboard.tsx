import { Link } from 'react-router';
import {
  User,
  FileText,
  Briefcase,
  Calendar,
  ChevronRight,
  GraduationCap,
  CalendarDays,
  Users,
} from 'lucide-react';
import { useCareerService } from '../../context/CareerServiceContext';

export function StudentDashboard() {
  const { studentProfile, resumes, applications, appointments } = useCareerService();

  const stats = [
    {
      label: 'Profile Completion',
      value: studentProfile ? '100%' : '0%',
      icon: User,
    },
    {
      label: 'Resumes',
      value: resumes.length,
      icon: FileText,
    },
    {
      label: 'Active Applications',
      value: applications.filter((a) => ['submitted', 'under_review', 'interview'].includes(a.status)).length,
      icon: Briefcase,
    },
    {
      label: 'Upcoming Appointments',
      value: appointments.filter((a) => a.status === 'scheduled').length,
      icon: Calendar,
    },
  ];

  const quickLinks = [
    {
      title: 'My Profile & Skills',
      description: 'Update your profile and skills inventory',
      icon: User,
      link: '/student/profile',
    },
    {
      title: 'Resume Management',
      description: 'Upload and track your resume versions',
      icon: FileText,
      link: '/student/resume',
    },
    {
      title: 'Application Tracking',
      description: 'Track your job and internship applications',
      icon: Briefcase,
      link: '/student/applications',
    },
    {
      title: 'Book Appointment',
      description: 'Schedule a career counseling session',
      icon: Calendar,
      link: '/student/appointments',
    },
    {
      title: 'Career Events',
      description: 'Browse and register for upcoming events',
      icon: CalendarDays,
      link: '/student/events',
    },
    {
      title: 'Alumni Survey',
      description: 'Submit your employment information',
      icon: Users,
      link: '/student/alumni',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b-2 border-[#FFB507]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#292929]" />
              <h1 className="text-2xl font-bold text-[#292929]">Student Portal</h1>
            </div>
            <Link to="/" className="text-[#292929] hover:text-[#FFB507] transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#292929] mb-2">
            Welcome back{studentProfile ? `, ${studentProfile.name}` : ''}!
          </h2>
          <p className="text-gray-600">Manage your career journey from your dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="w-12 h-12 rounded-full bg-[#292929] flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-[#FFB507]" />
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-[#292929]">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#292929] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.link} className="group">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-[#FFB507] transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-[#292929] flex items-center justify-center flex-shrink-0">
                        <link.icon className="w-6 h-6 text-[#FFB507]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#292929] mb-1">{link.title}</h4>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#292929] transition-colors flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        {applications.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#292929] mb-4">Recent Applications</h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {applications.slice(0, 5).map((app) => (
                <div key={app.id} className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#292929]">{app.jobTitle}</h4>
                      <p className="text-sm text-gray-600">{app.companyName}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        app.status === 'accepted'
                          ? 'bg-[#FFF4CC] text-[#292929]'
                          : app.status === 'rejected'
                          ? 'bg-gray-200 text-[#292929]'
                          : app.status === 'interview'
                          ? 'bg-[#292929] text-[#FFB507]'
                          : 'bg-[#FFB507] text-[#292929]'
                      }`}
                    >
                      {app.status.replace('_', ' ')}
                    </span>
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
