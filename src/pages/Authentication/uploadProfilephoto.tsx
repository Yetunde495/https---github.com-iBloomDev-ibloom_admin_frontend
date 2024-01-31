import getUserInitials from "../../utils/getUserInitials";
import Avatar from "../../components/Avatar2";
import { useRef, useState } from "react";
import { uploadProfilePhoto } from "../../services/authServices";
import { toast } from "react-toastify";

interface UploadProfilePhotoProps {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  user: any;
}

const UploadProfilePhoto: React.FC<UploadProfilePhotoProps> = ({
  setUrl,
  user,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [logoUrl, setLogoUrl] = useState<string>(user?.photo || "");
  const [loading, setLoading] = useState(false);

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
        setLogoUrl(URL.createObjectURL(file) || "");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", `UserProfile/${user?.id}`);

        //uploading the image

        try {
          setLoading(true);
          const resp = await uploadProfilePhoto(formData);
          if (resp) {
            toast.success(resp.message);
            setLogoUrl(resp?.url);
            setUrl(resp?.url);
          }
        } catch (err: any) {
          toast.error(err.message || "Photo upload failed");
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLogoUrl(user.photo || "");
    }
  };
  return (
    <label className="mb-9 flex gap-9 items-center">
      <div className="cursor-pointer">
        <Avatar
          size="xl"
          initials={
            logoUrl === ""
              ? getUserInitials(user?.user_name || "User", "")
              : undefined
          }
          src={logoUrl === "" ? undefined : logoUrl}
        />
      </div>

      <input
        type="file"
        className="hidden"
        ref={hiddenFileInput}
        onChange={photoUpload}
      />
      <button
        onClick={handleClick}
        disabled={loading}
        className="py-3 px-6 bg-primary/10 text-primary rounded opacity-95 hover:opacity-100"
      >
        {loading ? "Uploading Photo" : "Upload Photo"}
      </button>
    </label>
  );
};

export default UploadProfilePhoto;
