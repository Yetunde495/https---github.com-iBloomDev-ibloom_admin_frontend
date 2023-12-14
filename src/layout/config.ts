import React from "react";
import icons from "./navIcons";

interface INavChild {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: INavChild[];
}
export interface ISidebarNav {
  section: string;
  children: INavChild[];
}

//route path
export const ROUTES_CONFIG = {
  admin: {
    name: "Admin",
    path: "/app/admins",
    entities: {
      dashboard: "/app/admins/dashboards/school",
      students: "/app/admins/users/students",
      newStudent: "/app/admins/users/students/new",
      editStudent: "/app/admins/users/students/edit",
      employees: "/app/admins/users/employees",
      newEmployee: "/app/admins/users/employees/new",
      parents: "/app/admins/users/parents",
      newParent: "/app/admins/users/parents/new",
      editEmployee: "/app/admins/users/employees/edit",
      classes: "/app/admins/academics/classes",
      newClasses: "/app/admins/academics/classes/new",
      editClasses: "/app/admins/academics/classes/edit",
      questions: "/app/admins/academics/questions",
      newQuestions: "/app/admins/academics/questions/new",
      evaluations: "/app/admins/academics/evaluations",
      newEvaluations: "/app/admins/academics/evaluations/new",
      subjects: "/app/admins/academics/subjects",
      newSubjects: "/app/admins/academics/subjects/new",
      attendance: "/app/admins/academics/attendances",
      newAttendance: "/app/admins/academics/attendances/new",
      payments: "/app/admins/accounts/payments",
      addPayments: "/app/admins/accounts/payments/new",
      expenses: "/app/admins/accounts/expenses",
      addExpenses: "/app/admins/accounts/expenses/new",
      payrolls: "/app/admins/accounts/payrolls",
      addpayroll: "/app/admins/accounts/payrolls/new",
      salaries: "/app/admins/accounts/salaries",
      updateSchool: "/app/admins/settings/profile/schools/new",
      schools: "/app/admins/settings/profile/schools",
      school: "/app/admins/settings/profile/schools/school",
      general: "/app/admins/settings/profile/schools/general",
      credentials: "/app/admins/settings/profile/schools/credentials",
      notifications: "/app/admins/settings/profile/schools/notifications",
      support: "/app/admins/settings/profile/schools/support",
      billing: "/app/admins/settings/profile/schools/billing",
      customization: "/app/admins/settings/profile/schools/customization",
      preference: "/app/admins/settings/profile/schools/preference",
      grading: "/app/admins/settings/profile/schools/grading",
      update: "/app/admins/settings/profile/schools/update",
      resetpassword: "/app/admins/settings/profile/schools/resetpassword",
    },
  },
  teacher: {
    name: "Teacher",
    path: "/app/teacher",
    entities: {
      students: "/app/teacher/users/students",
      teachers: "/app/teacher/users/teachers",
      classes: "/app/teacher/academics/classes",
      subjects: "/app/teacher/academics/subjects",
      attendance: "/app/teacher/academics/attendances",
      questions: "/app/admins/academics/questions",
    },
  },
  student: {
    name: "Student",
    path: "/app/students",
    entities: {},
  },
};

//Admin navigation
export const ADMIN_NAV_DATA = [
  // MENU
  {
    section: "MENU",
    children: [
      {
        name: "Dashboard",
        path: "dashboards", //use for nested rendering
        icon: icons.Dashboard,
        children: [
          {
            name: "Analytics",
            path: "/app/admins/dashboard/analytics",
            icon: icons.Analytics,
          },
          {
            name: "Data",
            path: "/app/admins/dashboard/data",
            icon: icons.Database,
          },
          {
            name: "Summary",
            path: "/app/admins/dashboard/summary",
            icon: icons.Summary,
          },
        ],
      },
    ],
  },

  // USERS
  {
    children: [
      {
        name: "Students",
        path: "/app/admins/users/students",
        icon: icons.Users,
      },
      {
        name: "Employees",
        path: "/app/admins/users/employees",
        icon: icons.UsersGroup,
      },
      {
        name: "Parents",
        path: "/app/admins/parents",
        icon: icons.Family,
      },
    ],
  },

  // SETTINGS
  {
    section: "SETTINGS",
    children: [
      {
        name: "General",
        path: "/app/admins/settings/profile/schools/general",
        icon: icons.General,
      },
      // {
      //   name: "Credentials",
      //   path: "/app/admins/settings/profile/schools/credentials",
      //   icon: icons.Credential,
      // },
      // {
      //   name: "Notifications",
      //   path: "/app/admins/settings/profile/schools/notifications",
      //   icon: icons.Notification,
      // },
      {
        name: "Customization",
        path: "/app/admins/settings/profile/schools/customization",
        icon: icons.Customization,
      },
      // {
      //   name: "Preference",
      //   path: "/app/admins/settings/profile/schools/preference",
      //   icon: icons.Preference,
      // },

      {
        name: "Billing",
        path: "/app/admins/settings/profile/schools/billing",
        icon: icons.Billing,
      },
      {
        name: "Profile",
        path: "/app/admins/settings/profile/schools/new",
        icon: icons.Profile,
      },
      {
        name: "Help and Support",
        path: "/app/admins/settings/profile/schools/support",
        icon: icons.Support,
      },
      // {
      //   name: "Grading System List",
      //   path: "/app/admins/settings/profile/schools/grading",
      //   icon: icons.Grading,
      // },
    ],
  },
];

//Teachers navigation
export const TEACHER_NAV_DATA = [
  // MENU
  {
    section: "MENU",
    children: [
      {
        name: "Dashboard",
        path: "dashboards", //use for nested rendering
        icon: icons.Dashboard,
        children: [
          {
            name: "Analytics",
            path: "/app/dashboard/analytics",
            icon: icons.Analytics,
          },
          {
            name: "Data",
            path: "/app/dashboard/data",
            icon: icons.Database,
          },
          {
            name: "Summary",
            path: "/app/dashboard/summary",
            icon: icons.Summary,
          },
        ],
      },
    ],
  },
  // ACADEMICS
  {
    section: "ACADEMICS",
    children: [
      {
        name: "Students",
        path: "/app/academics/students",
        icon: icons.Users,
      },
      {
        name: "Evaluations",
        path: "evaluations",
        icon: icons.Exam,
        children: [
          {
            name: "Examinations",
            path: "examinations",
            icon: icons.Exam,
          },
          {
            name: "Quizzes",
            path: "quizzes",
            icon: icons.Book,
          },
          {
            name: "CBT",
            path: "/app/examinations/competitions",
            icon: icons.Computer,
          },
          {
            name: "Results",
            path: "/app/examinations/results",
            icon: icons.Result,
          },
        ],
      },
      {
        name: "Boards",
        path: "/app/academics/boards",
        icon: icons.Board,
      },
    ],
  },
  // ACCOUNTS
  {
    section: "ACCOUNTS",
    children: [
      {
        name: "Pay",
        path: "/app/accounts/pays",
        icon: icons.Payment,
      },
    ],
  },
  //MESSAGING
  {
    section: "COMMUNICATION",
    children: [
      {
        name: "Q & A",
        path: "/app/chats",
        icon: icons.Chat,
      },
      {
        name: "Notifications",
        path: "/app/notifications",
        icon: icons.Notification,
      },
      {
        name: "Messages",
        path: "/app/chats",
        icon: icons.Chat,
      },
      {
        name: "Announcements",
        path: "/app/announcements",
        icon: icons.Announcement,
      },
    ],
  },

  // SETTINGS
  {
    section: "SETTINGS",
    children: [
      {
        name: "Profile",
        path: "/app/settings/profile",
        icon: icons.Profile,
      },
    ],
  },
];

//Students navigation
export const STUDENT_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Home",
        path: "/app/home", //use for nested rendering
        icon: icons.Home,
      },
      {
        name: "Dashboard",
        path: "/app/students/dashboard", //use for nested rendering
        icon: icons.Dashboard,
      },
      {
        name: "My Courses",
        // path: "/app/students/academics/subjects",
        path: "/app/students/courses",
        icon: icons.Book,
      },
      {
        name: "Assessments",
        path: "/app/students/academics/subjects",
        icon: icons.Assessment,
      },
      {
        name: "Live Classes",
        // path: "/app/students/academics/subjects",
        path: "/app/students/live-classes",
        icon: icons.Bulb,
      },
      {
        name: "Certificates",
        path: "/app/students/certificates",
        icon: icons.certificates,
      },
      {
        name: "Profile",
        // path: "/app/students/settings/profile",
        path: "/app/students/profile",
        icon: icons.Profile,
      },
    ],
  },
];
