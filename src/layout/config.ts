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

export const SUPERADMIN_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Dashboard",
        path: "/app/superadmin/dashboard", //use for nested rendering
        icon: icons.Dashboard,
      },
      {
        name: "Content Management",
        path: "/app/superadmin/content-management",
        icon: icons.Content,
      },
      {
        name: "User Management",
        path: "/app/superadmin/user-management",
        icon: icons.User,
      },

      {
        name: "Validator",
        path: "/app/superadmin/validators",
        icon: icons.UserCheck,
      },
      {
        name: "Promotion Management",
        path: "/app/superadmin/promotion-management",
        icon: icons.Speaker,
      },
     
      
    ],
  },
];
export const ADMIN_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Content Management",
        path: "/app/admin/content-management",
        icon: icons.Content,
      },
     
     
      
    ],
  },
];
export const VALIDATOR_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Dashboard",
        path: "/app/validator/dashboard", //use for nested rendering
        icon: icons.Dashboard,
      },
      {
        name: "Worksheets",
        path: "/app/validator/worksheets",
        icon: icons.Worksheet,
      },
     
      
    ],
  },
];


