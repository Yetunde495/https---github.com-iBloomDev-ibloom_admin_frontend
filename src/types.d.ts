/* eslint-disable @typescript-eslint/no-explicit-any */
// Global State types

export {};

declare global {
  

    type UserType = "patients" | "consultants";
    
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

    interface CourseCardData {

    }

    interface InProgressCourseCardData {
      preview_img_url: string;
      progress: number;
      title: string;
      progress_bookmark: string;
      progress_url: string;
    }

    interface CourseData {
        preview_img_url: string;
        title: string;
        duration: string;
        creator: string;
        course_url: string;
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
        newValue: string | PatientMedicalInfo | ProfessionalMembership | string[] | null;
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

    type AppUser<T=string> = Patient<T> | Consultant<T> | null;


 
    
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
        googleSignIn: (userType: null | UserType) => Promise<false | "patients" | "consultants">;
        updatePassword: (obj: UpdatePasswordObj) => Promise<boolean>;
        updateUser: (obj: UpdateUserObj) => Promise<boolean>;
        logoutUser: () => Promise<boolean>;
    }



   
    
    type AppStoreState = AuthSlice;
    
    interface SignUpComponent {
        userType: UserType;
    }

    
   


   
}

