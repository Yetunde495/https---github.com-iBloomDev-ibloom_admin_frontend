import EmailReturn from "./EmailReturn";
import Signin from "./Signin";
import Signup from "./StudentSignup";
import EmailVerification from "./emailVerification";
import ResetVerification from "./resetConfirmation";
import ResetPassword from "./resetPassword";
import ResetPasswordForm from "./resetPasswordForm";

function Index() {}

Index.StudentSignup = Signup;
Index.Signin = Signin;
Index.ResetPassword = ResetPassword;
Index.ResetPasswordVerification = ResetVerification;
Index.ResetPasswordForm = ResetPasswordForm;
Index.EmailVerification = EmailVerification;
Index.EmailReturn = EmailReturn;


export default Index;