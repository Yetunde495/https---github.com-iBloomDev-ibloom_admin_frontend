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
  // TEMPLATE
  {
    section: "TEMPLATE",
    children: [
      {
        name: "List Page",
        path: "/app/templates/ListPage",
        icon: icons.Table,
      },
      {
        name: "Add Form Page",
        path: "/app/templates/NewFormPage",
        icon: icons.Plus,
      },
      {
        name: "Data Detail Page",
        path: "/app/templates/DetailPage",
        icon: icons.Edit,
      },
      {
        name: "Template Event Page",
        path: "/app/templates/EventPage",
        icon: icons.Edit,
      },
    ],
  },
  // USERS
  {
    section: "USERS",
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
  // ACADEMICS
  {
    section: "ACADEMICS",
    children: [
      {
        name: "Admissions",
        path: "/app/admins/academics/admission",
        icon: icons.List,
      },
      {
        name: "Transfers",
        path: "/app/admins/academics/transfers",
        icon: icons.Library,
      },
      {
        name: "Classes",
        path: "/app/admins/academics/classes",
        icon: icons.ClassRoom,
      },
      {
        name: "Subjects",
        path: "/app/admins/academics/subjects",
        icon: icons.Book,
      },
      {
        name: "Attendance",
        path: "/app/admins/academics/attendances",
        icon: icons.List,
      },
      {
        name: "Schedules",
        path: "/app/admins/academics/schedules",
        icon: icons.Calendar,
      },
      {
        name: "Activities",
        path: "/app/admins/academics/activities",
        icon: icons.List,
      },
      {
        name: "Evaluations",
        path: "/app/admins/academics/evaluations",
        icon: icons.Exam,
      },
      {
        name: "Results",
        path: "/apps/admins/academics/evaluations",
        icon: icons.Result,
      },
      {
        name: "Boards",
        path: "/app/admins/academics/boards",
        icon: icons.Board,
      },
      {
        name: "Questions",
        path: "/app/admins/academics/questions",
        icon: icons.Quiz,
      },
    ],
  },
  // ACCOUNTS
  {
    section: "ACCOUNTS",
    children: [
      {
        name: "Payments",
        path: "/app/admins/accounts/payments",
        icon: icons.NewsPaper,
      },
      {
        name: "Fees",
        path: "/app/admins/accounts/fees",
        icon: icons.Payment,
      },
      {
        name: "Credits",
        path: "/app/admins/accounts/credits",
        icon: icons.Expenses,
      },
      {
        name: "Expenses",
        path: "/app/admins/accounts/expenses",
        icon: icons.Expenses,
      },
      {
        name: "Salary",
        path: "/app/admins/accounts/salaries",
        icon: icons.Payment,
      },
      {
        name: "Payroll",
        path: "/app/admins/accounts/payrolls",
        icon: icons.Payroll,
      },
      {
        name: "Subscriptions",
        path: "/app/admins/accounts/subscriptions",
        icon: icons.Payment,
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
    section: "MENU",
    children: [
      {
        name: "Dashboard",
        path: "/app/student/dashboard", //use for nested rendering
        icon: icons.Dashboard,
      },
    ],
  },
  // ACADEMICS
  {
    section: "ACADEMICS",
    children: [
      {
        name: "Classroom",
        path: "classroom", //use for nested rendering
        icon: icons.Book,
        children: [
          {
            name: "Classes",
            path: "/app/students/academics/classes",
            icon: icons.ClassRoom,
          },
          {
            name: "Subjects",
            path: "/app/students/academics/subjects",
            icon: icons.Book,
          },
          {
            name: "Attendance",
            path: "/app/students/academics/attendance",
            icon: icons.List,
          },
          {
            name: "Schedules",
            path: "/app/students/academics/schedules",
            icon: icons.Calendar,
          },
          {
            name: "Activities",
            path: "/app/students/academics/activites",
            icon: icons.List,
          },
        ],
      },
      // Evaluations
      {
        name: "Evaluations",
        path: "evaluations",
        icon: icons.Exam,
        children: [
          {
            name: "Examinations",
            path: "/app/students/evaluations/exams",
            icon: icons.Exam,
          },
          {
            name: "Quizzes",
            path: "/app/students/evaluations/quizzes",
            icon: icons.Book,
          },
          {
            name: "CBT",
            path: "/app/students/evaluations/cbts",
            icon: icons.Computer,
          },
          {
            name: "Results",
            path: "/app/students/evaluations/results",
            icon: icons.Result,
          },
        ],
      },
      {
        name: "Boards",
        path: "/app/students/academics/boards",
        icon: icons.Board,
      },
      {
        name: "Labs",
        path: "/app/students/academics/labs",
        icon: icons.Lab,
      },
      {
        name: "Library",
        path: "/app/students/libraries/books",
        icon: icons.Book,
      },
    ],
  },
  // OTHERS
  {
    section: "OTHERS",
    children: [
      {
        name: "Fees",
        path: "/app/students/others/fees",
        icon: icons.Payment,
      },
      {
        name: "Notifications",
        path: "/app/students/others/notifications",
        icon: icons.Notification,
      },
      {
        name: "Chats",
        path: "/app/students/others/chats",
        icon: icons.Chat,
      },
      {
        name: "Routes",
        path: "/app/students/others/routes",
        icon: icons.Route,
      },
      {
        name: "Hostel",
        path: "/app/students/hostels/dorms",
        icon: icons.Hostel,
      },
    ],
  },
  // SETTINGS
  {
    section: "SETTINGS",
    children: [
      {
        name: "Profile",
        path: "/app/students/settings/profile",
        icon: icons.Profile,
      },
    ],
  },
];


