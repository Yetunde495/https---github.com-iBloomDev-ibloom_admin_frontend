import { FiUsers } from "react-icons/fi";
import {
  SiSimpleanalytics,
  SiGoogleclassroom,
} from "react-icons/si";
import {
  AiFillDatabase,
  AiFillNotification,
  AiOutlineTable,
  AiOutlinePlus,
  AiOutlineHome,
} from "react-icons/ai";
import {
  MdOutlineAnalytics,
  MdOutlinePayment,
  MdPerson,
  MdAssessment,
  MdOutlineSettings,
} from "react-icons/md";
import {
  FaSchool,
  FaFileExcel,
  FaChalkboardTeacher,
  FaFileInvoiceDollar,
  FaUsers,
  FaRoute,
  FaMoneyBillAlt,
  FaHandsHelping,
  FaGraduationCap,
  FaUser,
} from "react-icons/fa";
import { SlEvent } from "react-icons/sl";
import {
  BsBookFill,
  BsPaypal,
  BsFillChatLeftTextFill,
  BsDatabaseFillLock,
  BsBellFill,
  BsFileEarmarkSpreadsheetFill
} from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { HiOutlineLightBulb, HiOutlineIdentification } from "react-icons/hi2";
import svg1 from "../assets/svgs/solar_user-hand-up-broken.png";
import { TbUserCheck } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
export default {
  Home: AiOutlineHome,
  Notification: BsBellFill,
  Plus: AiOutlinePlus,
  User: FaUser,
  UserCheck: TbUserCheck,
  Speaker: HiSpeakerphone,
  Credential: BsDatabaseFillLock,
  Dashboard: RiDashboardFill,
  Analytics: SiSimpleanalytics,
  Database: AiFillDatabase,
  Summary: MdOutlineAnalytics,
  Users: FiUsers,
  UsersGroup: FaUsers,
  PaymentCard: MdOutlinePayment,
  School: FaSchool,
  Calendar: SlEvent,
  Content: IoDocumentText ,
  OpenBook: BsBookFill,
  Table: AiOutlineTable,
  Edit: BiEdit,
  Teachers: FaChalkboardTeacher,
  Announcement: AiFillNotification,
  Chat: BsFillChatLeftTextFill,
  Expenses: FaFileExcel,
  Result: FaFileExcel,
  Payroll: BsPaypal,
  Payment: FaFileInvoiceDollar,
  Profile: MdPerson,
  ClassRoom: SiGoogleclassroom,
  Route: FaRoute,
  Billing: FaMoneyBillAlt,
  Support: FaHandsHelping,
  General: FaGraduationCap,
  Assessment: MdAssessment,
  Settings: MdOutlineSettings,
  Bulb: HiOutlineLightBulb,
  Worksheet: BsFileEarmarkSpreadsheetFill,
  certificates: HiOutlineIdentification,
  Student: <img src={svg1} />
};
