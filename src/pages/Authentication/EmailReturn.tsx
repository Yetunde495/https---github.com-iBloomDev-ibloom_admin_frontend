import loadingGif from "../../assets/images/bubble-loading.svg";


function EmailReturn() {


  return (
    <section className="w-full min-h-screen form-bg bg-no-repeat">
      <h4 className="fixed left-6 font-semibold text-[15px] top-4 w-30 text-primary">ByteDegree</h4>
      <div className="flex flex-col gap-20 justify-center items-center relative min-h-screen">
        <div className="mb-4 text-center grid gap-5">
          <h1 className="sm:text-[35px] mb-3 text-[25px] text-center font-cabin dark:text-white text-primary leading-[1.4]">
            Don't go away
          </h1>
          <p className="text-[18px] font-bold dark:text-white">
            You will be redirected soon...
          </p>
        </div>

        <div>
          <img src={loadingGif} className="w-16 h-16" />
        </div>
      </div>
    </section>
  );
}

export default EmailReturn;
