import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Save, Building2 } from 'lucide-react';
import { useCareerService } from '../../context/CareerServiceContext';
import type { Employer } from '../../context/CareerServiceContext';

export function EmployerProfile() {
  const { employer, setEmployer } = useCareerService();
  const [formData, setFormData] = useState<Employer>({
    id: employer?.id || crypto.randomUUID(),
    companyName: employer?.companyName || '',
    contactName: employer?.contactName || '',
    email: employer?.email || '',
    phone: employer?.phone || '',
    industry: employer?.industry || '',
    website: employer?.website || '',
    description: employer?.description || '',
    status: employer?.status || 'pending',
  });
  const [saved, setSaved] = useState(false);

  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Consulting',
    'Marketing',
    'Engineering',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmployer(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/employer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Company Profile & Verification</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {employer && employer.status === 'verified' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-green-900">Company Verified</h3>
            </div>
            <p className="text-green-800 text-sm mt-2">
              Your company has been verified. You can now post job opportunities.
            </p>
          </div>
        )}

        {employer && employer.status === 'pending' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-yellow-900">Verification In Progress</h3>
            <p className="text-yellow-800 text-sm mt-2">
              Your company profile is under review. This typically takes 1-2 business days.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Company Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select industry...</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Description *</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={5}
              placeholder="Describe your company, culture, and what makes it a great place to work..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Save className="w-4 h-4" />
              {employer ? 'Update Profile' : 'Register Company'}
            </button>
            {saved && (
              <span className="text-green-600 font-medium">
                {employer?.id === formData.id ? 'Profile updated successfully!' : 'Registration submitted for verification!'}
              </span>
            )}
          </div>
        </form>

        {!employer && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">Verification Process</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Submit your company information above</li>
              <li>• Our team will verify your company details (1-2 business days)</li>
              <li>• Once verified, you can start posting job opportunities</li>
              <li>• You'll receive email notification upon approval</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
