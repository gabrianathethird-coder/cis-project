import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import { PortalSelection } from "./components/PortalSelection";
import { StudentDashboard } from "./components/student/StudentDashboard";
import { StudentProfile } from "./components/student/StudentProfile";
import { ResumeManagement } from "./components/student/ResumeManagement";
import { ApplicationTracking } from "./components/student/ApplicationTracking";
import { AppointmentBooking } from "./components/student/AppointmentBooking";
import { CareerEvents } from "./components/student/CareerEvents";
import { AlumniTracer } from "./components/student/AlumniTracer";
import { EmployerDashboard } from "./components/employer/EmployerDashboard";
import { EmployerProfile } from "./components/employer/EmployerProfile";
import { JobPostingManagement } from "./components/employer/JobPostingManagement";
import { ApplicantManagement } from "./components/employer/ApplicantManagement";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AnalyticsDashboard } from "./components/admin/AnalyticsDashboard";
import { EventManagement } from "./components/admin/EventManagement";
import { ApprovalWorkflow } from "./components/admin/ApprovalWorkflow";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "get-started", Component: PortalSelection },
      { path: "student", Component: StudentDashboard },
      { path: "student/profile", Component: StudentProfile },
      { path: "student/resume", Component: ResumeManagement },
      { path: "student/applications", Component: ApplicationTracking },
      { path: "student/appointments", Component: AppointmentBooking },
      { path: "student/events", Component: CareerEvents },
      { path: "student/alumni", Component: AlumniTracer },
      { path: "employer", Component: EmployerDashboard },
      { path: "employer/profile", Component: EmployerProfile },
      { path: "employer/jobs", Component: JobPostingManagement },
      { path: "employer/applicants", Component: ApplicantManagement },
      { path: "admin", Component: AdminDashboard },
      { path: "admin/analytics", Component: AnalyticsDashboard },
      { path: "admin/events", Component: EventManagement },
      { path: "admin/approvals", Component: ApprovalWorkflow },
      { path: "*", Component: NotFound },
    ],
  },
]);