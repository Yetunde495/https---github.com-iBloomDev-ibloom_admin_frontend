import EmailReturn from "./EmailReturn";
import Signin from "./Signin";
import Signup from "./Signup";
import StudentAccountSetup from "./accountSetup";
import EmailVerification from "./emailVerification";
import OrganisationAccountSetup from "./orgAccSetup";
import ResetPassword from "./resetPassword";
import ResetPasswordForm from "./resetPasswordForm";
import TutorAccountSetup from "./tutorAccSetup";

function Index() {}

Index.StudentSignup = Signup;
Index.Signin = Signin;
Index.StudentAccountSetup = StudentAccountSetup;
Index.TutorAccountSetup = TutorAccountSetup;
Index.OrganisationAccountSetup = OrganisationAccountSetup;
Index.ResetPassword = ResetPassword;
Index.ResetPasswordForm = ResetPasswordForm;
Index.EmailVerification = EmailVerification;
Index.EmailReturn = EmailReturn;


export default Index;