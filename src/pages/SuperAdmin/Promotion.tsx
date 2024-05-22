import { useState } from "react";
import { Switch } from "../../components/form/Switch";
import DefaultLayout from "../../layout/DefaultLayout";
import { CiEdit } from "react-icons/ci";
import Modal from "../../components/modal";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../components/form/customInput";
import { Textarea } from "../../components/form";
import Button from "../../components/button";
import { toast } from "react-toastify";

const Promotion: React.FC = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<any>();

  const initialData = {
    title: "Our platform presents a Merry Christmas Promo",
    message:
      "10% discount coupon valid from 1st December 2024 - 31st December 2024. For the first 50 users. Rush now while it last!",
    link: "https://freecodecamp.org",
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

    try {
      console.log(data);

      // console.log(response.data)
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <DefaultLayout>
      <section>
        <h4 className="text-lg mb-3">Promotional Bar Message</h4>
        <div className="w-full border border-stroke rounded-md py-4 px-5 min-h-[180px]">
          <div className="flex justify-between gap-4 items-center mb-6">
            <div className="w-2/3">
              <h1 className="font-medium mb-1 text-lg">{initialData?.title}</h1>
              <p>{initialData?.message}</p>
            </div>
            <div>
              <Switch
                value={active}
                onChange={() => setActive(!active)}
                checked={active}
                className="switch-color"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a className="text-sm">{initialData?.link}</a>
            <button
              onClick={() => setShow(true)}
              className="flex gap-2.5 items-center py-2 px-4 font-medium text-lg border border-primary rounded-md text-primary hover:text-white hover:bg-primary"
            >
              <CiEdit /> Edit Message
            </button>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        title="Promotion Message"
        size="w-full max-w-132.5"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-7">
              <AutoInput
                label="Title"
                name="title"
                defaultValue={initialData?.title}
                placeholder="Enter title"
                rules={{ required: "This field is required" }}
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Enter message"
                defaultValue={initialData?.message}
                rules={{ required: "This field is required" }}
              />
              <AutoInput
                label="Link"
                name="link"
                placeholder="Input link if any"
                defaultValue={initialData?.link}
                rules={{ required: false }}
              />

              <Button width="full" disabled={isLoading} onClick={() => {}}>
                {isLoading ? "Loading..." : "Update"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </DefaultLayout>
  );
};

export default Promotion;
