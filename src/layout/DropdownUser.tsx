import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import Avatar from "../components/Avatar2";
import getUserInitials from "../utils/getUserInitials";
import Modal from "../components/modal";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

const DropdownUser = () => {
  const navigate = useNavigate();
  const { user, signOut } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  const handleSignout = async () => {
    //send request to API for logout
    signOut();
    navigate("/");
  };

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (trigger.current && trigger.current.contains(target)) {
        // Handle trigger click
        return;
      }
      if (dropdown.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      if (trigger.current) {
        document.removeEventListener("click", clickHandler);
      }
    };
  }, [setDropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <Avatar
          src={user?.photo_url}
          size="small"
          initials={getUserInitials(
            user?.first_name || "User",
            user?.last_name || ""
          )}
        />

        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {(user.first_name && user?.first_name + " " + user?.last_name) ||
              user?.username ||
              "User"}
          </span>
          {/* <span className="block text-xs">St</span> */}
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-4.5 dark:border-strokedark">
          <li>
            <Link
              to=""
              onClick={() => console.log(user)}
              className="flex items-center gap-3.5 text-sm text-black/80 font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <FaUser />
              My Profile
            </Link>
          </li>
         
          
        </ul>
        <button
          onClick={() => setLogoutModal(true)}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
              fill=""
            />
            <path
              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
              fill=""
            />
          </svg>
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
      <Modal
        show={logoutModal}
        onHide={() => setLogoutModal(false)}
        size="md:w-[450px] w-[350px]"
      >
        <div className="flex flex-col justify-center">
          <span className="mx-auto inline-block bg-red-600/10 rounded-full p-4 text-red-600 mb-3">
            <RiLogoutCircleLine size={24} />
          </span>

          <h1 className="text-lg text-black/90 mb-6 text-center">
            Are you sure you want to logout?
          </h1>

          <div className="-mx-3 flex flex-col gap-y-6 px-6">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => setLogoutModal(false)}
                className="block w-full rounded-full border border-primary bg-primary p-3 text-center font-medium text-white transition hover:opacity-95"
              >
                No
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => handleSignout()}
                className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const DropdownUser2 = () => {
  const navigate = useNavigate();
  const { user, signOut } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const trigger = useRef<HTMLAnchorElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  const handleSignout = async () => {
    //send request to API for logout
    signOut();
    if (!user) {
      navigate("/");
    }
  };

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (trigger.current && trigger.current.contains(target)) {
        // Handle trigger click
        return;
      }
      if (dropdown.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      if (trigger.current) {
        document.removeEventListener("click", clickHandler);
      }
    };
  }, [setDropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <Avatar
          src={user?.photo_url}
          size="small"
          bg="bg-white text-primary"
          initials={getUserInitials(
            user?.first_name || "User",
            user?.last_name || ""
          )}
        />

        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-white/90">
            {(user && user?.username) || "User"}
          </span>
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill="#fff"
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-5.5 dark:border-strokedark">
          <li>
            <Link
              to="/app/students/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                  fill=""
                />
              </svg>
              My Profile
            </Link>
          </li>
          <li>
            <button
              onClick={() => setLogoutModal(true)}
              className="flex items-center gap-3.5 text-sm text-danger font-medium duration-300 ease-in-out lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                  fill=""
                />
                <path
                  d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                  fill=""
                />
              </svg>
              Log Out
            </button>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
      <Modal
        show={logoutModal}
        onHide={() => setLogoutModal(false)}
        size="md:w-[450px] w-[350px]"
      >
        <div className="flex flex-col justify-center">
          <span className="mx-auto inline-block bg-primary/15 rounded-full p-4 text-primary mb-3">
            <RiLogoutCircleLine size={24} />
          </span>

          <h1 className="text-lg text-black/90 mb-6 text-center">
            Are you sure you want to logout?
          </h1>

          <div className="-mx-3 flex flex-col gap-y-6 px-6">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => setLogoutModal(false)}
                className="block w-full rounded-full border border-primary bg-primary p-3 text-center font-medium text-white transition hover:opacity-95"
              >
                No
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={() => handleSignout()}
                className="block w-full rounded-full text-meta-1 border border-meta-1 bg-white p-3 text-center font-medium hover:text-white transition hover:bg-meta-1"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DropdownUser;
