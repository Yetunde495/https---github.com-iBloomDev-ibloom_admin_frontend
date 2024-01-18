/* eslint-disable @typescript-eslint/no-explicit-any */
// Global State types

export {};

declare global {
  type UserType = "student" | "tutor" | "organisation";

  interface userSignupData {
    user_name: string;
    email: string;
    password: string;
    category: string;
    email_verified: boolean;
    account_setup:boolean;
  };

  
  
interface User {
  user_id: string;
  user_name: string;
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  category: string;
  is_verified: boolean;
  status: string;
  organisation_id: string;
  token: string;
  refresh_token: string;
  photo_url: string;
  email_verified: boolean;
}

  

  interface SharedUserInfo {
    first_name: string;
    last_name: string;
    email: string;
    user_id: string;
    phone_number?: string;
    photo_url?: string;
    category: UserType | string | undefined;
    created_at: null | string;
    email_verified: boolean;
    account_setup:boolean;
  }

   interface Student extends SharedUserInfo {
   highest_edu: string;
    dob: string;
    title: string;
    enrolled_courses: Array<string>;
    interested_fields: Array<string>;
    total_courses: number | null;
  }

  interface Tutor extends SharedUserInfo {
     highest_edu: string;
     dob: string;
     title: string;
     courses: Array<string>;
     organisations: {
      org_id: string;
      name: string;
      photo_url: string;
     }[];
     total_courses: number | null;
   }

   interface Organisation extends SharedUserInfo {
    admin_id: string;
    name: string;
    courses: Array<string>;
    contact: string;
    tutors: Array<string>;
    programs: Array<string>;
    total_courses: number | null;
    admin: {
      highest_edu: string;
      dob: string;
      title: string;
      courses: Array<string>;
      organisations: {
       org_id: string;
       name: string;
       photo_url: string;
      }[];
      total_courses: number | null;
    }
  }

  interface CourseCardData {}

  interface InProgressCourseCardData {
    preview_img_url: string;
    progress: number;
    title: string;
    progress_bookmark: string;
    progress_url: string;
    customBackgroundColor?: string;
    textColor?: string;
  }

  interface CourseData {
    preview_img_url: string;
    title: string;
    duration: string;
    course_url: string;
    tag: string;
    creator: {
      name: string;
      photo: string;
    };
  }

  interface LiveClassCardData {
    stateBtnText: string;
    card_action_text: string;
    preview_img_url: string;
    title: string;
    date?: string;
    course_url: string;
    time?: string;
    liveDuration?: string;
    showIcon?: boolean;
    showButton?: boolean;
    stateBtnTextCustomBgColor: string;
    creator: {
      name: string;
      photo: string;
    }[];
  }

  interface TestimonialCardData {
    name: string;
    text: string;
    role?: string;
    image: string;
  }
  interface CategoryCardProps {
    title: string;
    link: string;
    bgColor?: string;
  }

  interface TutorCourseDataProps {
    preview_img_url: string;
    title: string;
    course_url?: string;
    coursePrice: string | number;
  }

  interface ForgotPasswordObj {
    email: string;
  }

  interface LoginObj extends ForgotPasswordObj {
    password: string;
  }

  interface RegisterObj extends LoginObj {
    first_name: string;
    last_name: string;
  }

  interface ResetPasswordObj {
    password: string;
    confirm_password: string;
  }

  interface CompletePasswordReset {
    code: string;
    new_password: string;
  }

  interface UserDetailsChange {
    property: string;
    newValue:
      | string
      | PatientMedicalInfo
      | ProfessionalMembership
      | string[]
      | null;
  }

  interface UpdateUserObj {
    userid: string;
    userType: UserType;
    changes: UserDetailsChange[];
  }

  interface UpdatePasswordObj {
    old_password: string;
    new_password: string;
  }

  type AppUser<T = string> = Patient<T> | Consultant<T> | null;

  interface AuthSlice {
    user: AppUser;
    emailIsVerified: null | boolean;
    token: string;
    isLoading: boolean;
    loginUser: (obj: LoginObj) => Promise<false | "students" | "tutors" | null>;
    sendVerificationEmail: () => Promise<boolean>;
    completeEmailVerification: (code: string) => Promise<boolean>;
    sendPasswordResetEmail: (email: string) => Promise<boolean>;
    completePasswordReset: (obj: CompletePasswordReset) => Promise<boolean>;
    registerUser: (obj: RegisterObj, userType: UserType) => Promise<boolean>;
    googleSignIn: (
      userType: null | UserType
    ) => Promise<false | "student" | "tutor">;
    updatePassword: (obj: UpdatePasswordObj) => Promise<boolean>;
    updateUser: (obj: UpdateUserObj) => Promise<boolean>;
    logoutUser: () => Promise<boolean>;
  }

  type AppStoreState = AuthSlice;

  interface SignUpComponent {
    userType: UserType;
  }
}
