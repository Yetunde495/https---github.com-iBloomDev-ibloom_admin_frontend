import React, { useRef, useEffect, useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import { ButtonEventGroup } from "../../components/button";
import getUserInitials from "../../utils/getUserInitials";
import Avatar from "../../components/Avatar2";
import { MdEdit } from "react-icons/md";

export default function ProfilePicture({ user }: any) {
  // const { id } = useParams();
  // const { user } = useApp();
  const [imgUrl, setImgUrl] = React.useState<string>(user?.photo || "");

  const [editForm, setEditForm] = React.useState(false);
  const [isLoading, _setIsLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    const input = (hiddenFileInput.current as HTMLInputElement) || null;
    if (input) {
      input.click();
    }
  };

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files?.length) {
        const file = target.files[0];
        setImgUrl(URL.createObjectURL(file) || "");

        try {
          setLoading(true);

          const formData = new FormData();
          formData.append("media", file);

          // TODO: Handle the response data according to your needs
        } catch (error) {
          console.error("Error uploading file:", error);
          // TODO: Handle errors appropriately
        } finally {
          setLoading(false);
        }
      }
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
    <div className="">
      <div className="mx-auto max-w-screen-xl">
        {isLoading ? null : (
          <div>
            {!editForm && user !== null ? (
              <div className="flex items-center gap-3 pb-2 pt-6">
                <div className="relative">
                  <div>
                    <Avatar
                      size="xl"
                      src={user?.photo}
                      initials={
                        user?.first_name
                          ? getUserInitials(user?.first_name, user?.last_name)
                          : getUserInitials(user?.username, "")
                      }
                    />
                    <button
                      ref={trigger}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="absolute -bottom-[1px] right-2 flex items-center rounded-full text-xl bg-slate-100 p-2 text-primary border border-primary"
                    >
                      <MdEdit />{" "}
                    </button>
                  </div>

                  {/* <!-- Dropdown start --> */}
                  <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                    className={`absolute z-9999  mt-4 flex w-62.5  flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                      dropdownOpen === true ? "block" : "hidden"
                    }`}
                  >
                    <ul className="flex flex-col border-b border-stroke p-2 dark:border-strokedark">
                      <li>
                        <button
                          onClick={() => setEditForm(true)}
                          className="flex w-full items-center gap-3.5 p-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                          Edit Profile Picture
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {}}
                          className="flex w-full items-center gap-3.5 p-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                          Remove Photo
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Dropdown End --> */}
                </div>
              </div>
            ) : (
              <div className="relative py-3 shadow-2 px-4 lg:min-w-[35rem] md:min-w-[28rem]">
                <ButtonEventGroup>
                  <button
                    className="absolute right-2 top-2 text-black/80 hover:text-black dark:text-white/30"
                    onClick={() => setEditForm(false)}
                  >
                    <BsXCircleFill size={24} />
                  </button>
                </ButtonEventGroup>
                <label className=" mb-6 flex items-center gap-9">
                  <div className="cursor-pointer">
                    <Avatar
                      size="xl"
                      initials={
                        imgUrl === ""
                          ? user?.first_name
                            ? getUserInitials(user?.first_name, user?.last_name)
                            : getUserInitials(user?.username, "")
                          : undefined
                      }
                      src={imgUrl === "" ? undefined : imgUrl}
                    />
                  </div>

                  <input
                    type="file"
                    className="hidden"
                    ref={hiddenFileInput}
                    onChange={photoUpload}
                  />
                  <button
                    className="rounded-md border border-primary bg-transparent px-6 py-3 text-lg hover:bg-primary hover:text-white"
                    onClick={handleClick}
                  >
                    {loading ? "Uploading" : "Upload Photo"}
                  </button>
                </label>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
