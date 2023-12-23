/* eslint-disable @typescript-eslint/no-explicit-any */
// Global State types

export {};

declare global {
  type UserType = "patients" | "consultants";

  
interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  user_type: string;
  last_login: string;
  is_o2auth: boolean;
  auth_provider: string;
  is_verified: boolean;
  account_is_suspended: boolean;
  account_suspension_date: string;
  account_is_deleted: boolean;
  status: string;
  organisation_id: string;
  token: string;
  refresh_token: string;
  photo: string;
}

  interface SharedUserInfo {
    first_name: string;
    last_name: string;
    email: string;
    userid: string;
    phone_number?: string;
    photo?: string;
    role: UserType;
    created_at: null | string;
    modified_at: null | string;
  }

  interface Student extends SharedUserInfo {
    total_courses: number | null;
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
    ) => Promise<false | "patients" | "consultants">;
    updatePassword: (obj: UpdatePasswordObj) => Promise<boolean>;
    updateUser: (obj: UpdateUserObj) => Promise<boolean>;
    logoutUser: () => Promise<boolean>;
  }

  type AppStoreState = AuthSlice;

  interface SignUpComponent {
    userType: UserType;
  }
}
