import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  major: string;
  graduationYear: string;
  gpa: string;
  skills: string[];
  bio: string;
}

export interface Resume {
  id: string;
  studentId: string;
  fileName: string;
  version: number;
  uploadDate: string;
  status: 'pending' | 'approved' | 'rejected';
  fileUrl?: string;
}

export interface JobApplication {
  id: string;
  studentId: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  appliedDate: string;
  status: 'submitted' | 'under_review' | 'interview' | 'accepted' | 'rejected';
  notes: string;
}

export interface Appointment {
  id: string;
  studentId: string;
  counselorName: string;
  date: string;
  time: string;
  purpose: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Employer {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  website: string;
  description: string;
  status: 'pending' | 'verified' | 'rejected';
}

export interface JobPosting {
  id: string;
  employerId: string;
  companyName: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  type: 'internship' | 'full-time' | 'part-time';
  salary: string;
  postedDate: string;
  status: 'draft' | 'pending_approval' | 'active' | 'closed';
  applicants: string[];
}

export interface CareerEvent {
  id: string;
  title: string;
  description: string;
  type: 'job_fair' | 'seminar' | 'workshop' | 'networking';
  date: string;
  time: string;
  location: string;
  capacity: number;
  registeredStudents: string[];
  status: 'pending_approval' | 'approved' | 'completed' | 'cancelled';
  organizer: string;
  attendanceTracked: boolean;
}

export interface AlumniRecord {
  id: string;
  studentId: string;
  name: string;
  graduationYear: string;
  major: string;
  employmentStatus: 'employed' | 'unemployed' | 'self-employed' | 'pursuing_education';
  currentCompany?: string;
  currentPosition?: string;
  salary?: string;
  employedWithinMonths?: number;
  surveyDate: string;
  verified: boolean;
}

export interface EmployerRating {
  id: string;
  employerId: string;
  studentId: string;
  rating: number;
  review: string;
  date: string;
}

export interface StudentRating {
  id: string;
  studentId: string;
  employerId: string;
  rating: number;
  review: string;
  date: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'job_alert' | 'interview_reminder' | 'event_announcement' | 'application_update';
  title: string;
  message: string;
  date: string;
  read: boolean;
}

interface CareerServiceContextType {
  studentProfile: StudentProfile | null;
  setStudentProfile: (profile: StudentProfile) => void;
  resumes: Resume[];
  addResume: (resume: Resume) => void;
  updateResumeStatus: (id: string, status: Resume['status']) => void;
  applications: JobApplication[];
  addApplication: (application: JobApplication) => void;
  updateApplicationStatus: (id: string, status: JobApplication['status']) => void;
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  employer: Employer | null;
  setEmployer: (employer: Employer) => void;
  jobPostings: JobPosting[];
  addJobPosting: (job: JobPosting) => void;
  updateJobPosting: (id: string, updates: Partial<JobPosting>) => void;
  allJobPostings: JobPosting[];
  careerEvents: CareerEvent[];
  addCareerEvent: (event: CareerEvent) => void;
  updateCareerEvent: (id: string, updates: Partial<CareerEvent>) => void;
  registerForEvent: (eventId: string, studentId: string) => void;
  alumniRecords: AlumniRecord[];
  addAlumniRecord: (record: AlumniRecord) => void;
  employerRatings: EmployerRating[];
  addEmployerRating: (rating: EmployerRating) => void;
  studentRatings: StudentRating[];
  addStudentRating: (rating: StudentRating) => void;
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markNotificationRead: (id: string) => void;
}

const CareerServiceContext = createContext<CareerServiceContextType | undefined>(undefined);

export function CareerServiceProvider({ children }: { children: ReactNode }) {
  const [studentProfile, setStudentProfileState] = useState<StudentProfile | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [employer, setEmployerState] = useState<Employer | null>(null);
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [allJobPostings, setAllJobPostings] = useState<JobPosting[]>([]);
  const [careerEvents, setCareerEvents] = useState<CareerEvent[]>([]);
  const [alumniRecords, setAlumniRecords] = useState<AlumniRecord[]>([]);
  const [employerRatings, setEmployerRatings] = useState<EmployerRating[]>([]);
  const [studentRatings, setStudentRatings] = useState<StudentRating[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedStudent = localStorage.getItem('studentProfile');
    const savedResumes = localStorage.getItem('resumes');
    const savedApplications = localStorage.getItem('applications');
    const savedAppointments = localStorage.getItem('appointments');
    const savedEmployer = localStorage.getItem('employer');
    const savedJobPostings = localStorage.getItem('jobPostings');
    const savedAllJobPostings = localStorage.getItem('allJobPostings');
    const savedCareerEvents = localStorage.getItem('careerEvents');
    const savedAlumniRecords = localStorage.getItem('alumniRecords');
    const savedEmployerRatings = localStorage.getItem('employerRatings');
    const savedStudentRatings = localStorage.getItem('studentRatings');
    const savedNotifications = localStorage.getItem('notifications');

    if (savedStudent) setStudentProfileState(JSON.parse(savedStudent));
    if (savedResumes) setResumes(JSON.parse(savedResumes));
    if (savedApplications) setApplications(JSON.parse(savedApplications));
    if (savedAppointments) setAppointments(JSON.parse(savedAppointments));
    if (savedEmployer) setEmployerState(JSON.parse(savedEmployer));
    if (savedJobPostings) setJobPostings(JSON.parse(savedJobPostings));
    if (savedAllJobPostings) setAllJobPostings(JSON.parse(savedAllJobPostings));
    if (savedCareerEvents) setCareerEvents(JSON.parse(savedCareerEvents));
    if (savedAlumniRecords) setAlumniRecords(JSON.parse(savedAlumniRecords));
    if (savedEmployerRatings) setEmployerRatings(JSON.parse(savedEmployerRatings));
    if (savedStudentRatings) setStudentRatings(JSON.parse(savedStudentRatings));
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
  }, []);

  const setStudentProfile = (profile: StudentProfile) => {
    setStudentProfileState(profile);
    localStorage.setItem('studentProfile', JSON.stringify(profile));
  };

  const addResume = (resume: Resume) => {
    const updated = [...resumes, resume];
    setResumes(updated);
    localStorage.setItem('resumes', JSON.stringify(updated));
  };

  const updateResumeStatus = (id: string, status: Resume['status']) => {
    const updated = resumes.map(r => r.id === id ? { ...r, status } : r);
    setResumes(updated);
    localStorage.setItem('resumes', JSON.stringify(updated));
  };

  const addApplication = (application: JobApplication) => {
    const updated = [...applications, application];
    setApplications(updated);
    localStorage.setItem('applications', JSON.stringify(updated));
  };

  const updateApplicationStatus = (id: string, status: JobApplication['status']) => {
    const updated = applications.map(a => a.id === id ? { ...a, status } : a);
    setApplications(updated);
    localStorage.setItem('applications', JSON.stringify(updated));
  };

  const addAppointment = (appointment: Appointment) => {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  const setEmployer = (employer: Employer) => {
    setEmployerState(employer);
    localStorage.setItem('employer', JSON.stringify(employer));
  };

  const addJobPosting = (job: JobPosting) => {
    const updated = [...jobPostings, job];
    setJobPostings(updated);
    localStorage.setItem('jobPostings', JSON.stringify(updated));
    
    // Also add to all job postings
    const allUpdated = [...allJobPostings, job];
    setAllJobPostings(allUpdated);
    localStorage.setItem('allJobPostings', JSON.stringify(allUpdated));
  };

  const updateJobPosting = (id: string, updates: Partial<JobPosting>) => {
    const updated = jobPostings.map(j => j.id === id ? { ...j, ...updates } : j);
    setJobPostings(updated);
    localStorage.setItem('jobPostings', JSON.stringify(updated));

    // Also update in all job postings
    const allUpdated = allJobPostings.map(j => j.id === id ? { ...j, ...updates } : j);
    setAllJobPostings(allUpdated);
    localStorage.setItem('allJobPostings', JSON.stringify(allUpdated));
  };

  const addCareerEvent = (event: CareerEvent) => {
    const updated = [...careerEvents, event];
    setCareerEvents(updated);
    localStorage.setItem('careerEvents', JSON.stringify(updated));
  };

  const updateCareerEvent = (id: string, updates: Partial<CareerEvent>) => {
    const updated = careerEvents.map(e => e.id === id ? { ...e, ...updates } : e);
    setCareerEvents(updated);
    localStorage.setItem('careerEvents', JSON.stringify(updated));
  };

  const registerForEvent = (eventId: string, studentId: string) => {
    const updated = careerEvents.map(e => e.id === eventId ? { ...e, registeredStudents: [...e.registeredStudents, studentId] } : e);
    setCareerEvents(updated);
    localStorage.setItem('careerEvents', JSON.stringify(updated));
  };

  const addAlumniRecord = (record: AlumniRecord) => {
    const updated = [...alumniRecords, record];
    setAlumniRecords(updated);
    localStorage.setItem('alumniRecords', JSON.stringify(updated));
  };

  const addEmployerRating = (rating: EmployerRating) => {
    const updated = [...employerRatings, rating];
    setEmployerRatings(updated);
    localStorage.setItem('employerRatings', JSON.stringify(updated));
  };

  const addStudentRating = (rating: StudentRating) => {
    const updated = [...studentRatings, rating];
    setStudentRatings(updated);
    localStorage.setItem('studentRatings', JSON.stringify(updated));
  };

  const addNotification = (notification: Notification) => {
    const updated = [...notifications, notification];
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const markNotificationRead = (id: string) => {
    const updated = notifications.map(n => n.id === id ? { ...n, read: true } : n);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  return (
    <CareerServiceContext.Provider
      value={{
        studentProfile,
        setStudentProfile,
        resumes,
        addResume,
        updateResumeStatus,
        applications,
        addApplication,
        updateApplicationStatus,
        appointments,
        addAppointment,
        employer,
        setEmployer,
        jobPostings,
        addJobPosting,
        updateJobPosting,
        allJobPostings,
        careerEvents,
        addCareerEvent,
        updateCareerEvent,
        registerForEvent,
        alumniRecords,
        addAlumniRecord,
        employerRatings,
        addEmployerRating,
        studentRatings,
        addStudentRating,
        notifications,
        addNotification,
        markNotificationRead,
      }}
    >
      {children}
    </CareerServiceContext.Provider>
  );
}

export function useCareerService() {
  const context = useContext(CareerServiceContext);
  if (!context) {
    throw new Error('useCareerService must be used within CareerServiceProvider');
  }
  return context;
}