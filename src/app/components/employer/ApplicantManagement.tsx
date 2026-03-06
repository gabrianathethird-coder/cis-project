import { Link } from 'react-router';
import { ArrowLeft, Users, FileText, Mail, Phone, Star } from 'lucide-react';
import { useCareerService } from '../../context/CareerServiceContext';

export function ApplicantManagement() {
  const { employer, jobPostings, applications } = useCareerService();

  // Get applicants for this employer's jobs
  const employerApplications = applications.filter(app =>
    jobPostings.some(job => job.id === app.jobId)
  );

  const groupedByJob = jobPostings.reduce((acc, job) => {
    const jobApplicants = employerApplications.filter(app => app.jobId === job.id);
    if (jobApplicants.length > 0) {
      acc[job.id] = {
        job,
        applicants: jobApplicants,
      };
    }
    return acc;
  }, {} as Record<string, { job: any; applicants: any[] }>);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'interview':
        return 'bg-blue-100 text-blue-800';
      case 'under_review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/employer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Applicant Management</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {!employer ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">
              Please <Link to="/employer/profile" className="underline font-medium">register your company</Link> to view applicants.
            </p>
          </div>
        ) : Object.keys(groupedByJob).length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">No applicants yet</p>
            <p className="text-sm text-gray-500">
              Applicants will appear here once candidates apply to your job postings
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.values(groupedByJob).map(({ job, applicants }) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h2>
                      <p className="text-sm text-gray-600">
                        {job.location} • {job.type} • {applicants.length} applicant{applicants.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <div className="divide-y">
                  {applicants.map((applicant) => (
                    <div key={applicant.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {applicant.jobTitle.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">Applicant #{applicant.id.slice(0, 8)}</h3>
                              <p className="text-sm text-gray-600">
                                Applied: {new Date(applicant.appliedDate).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(applicant.status)}`}>
                          {applicant.status.replace('_', ' ')}
                        </span>
                      </div>

                      {applicant.notes && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Notes:</span> {applicant.notes}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          <FileText className="w-4 h-4" />
                          View Resume
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                          <Star className="w-4 h-4" />
                          Shortlist
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Mail className="w-4 h-4" />
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {employer && jobPostings.length === 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
            <p className="text-blue-800">
              You haven't posted any jobs yet. <Link to="/employer/jobs" className="underline font-medium">Create your first job posting</Link> to start receiving applicants.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
