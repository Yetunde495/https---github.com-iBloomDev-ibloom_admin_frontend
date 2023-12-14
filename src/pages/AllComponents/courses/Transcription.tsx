import { useState } from "react";
import styled from "styled-components";

const Transcription = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const toggleDropDown = () => {
    setIsSeeMore(!isSeeMore);
  };
  return (
    <TransStyle>
      <div className="flex gap-3 px-6 py-6">
        <div className="flex-none w-14">
          <p className="text-primary">0:00</p>
        </div>
        <div className="flex-initial">
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus ac nam consectetur
            nisi. Risus porttitor tellus tellus nisi consectetur vestibulum.
            Tristique facilisi mauris cursus cras sem diam ligula sodales in.
            Magna tempus amet lacus tempor risus turpis pulvinar.
          </p>
        </div>
      </div>
      {isSeeMore && (
        <>
          <div className="flex gap-3 px-6 py-6">
            <div className="flex-none w-14">
              <p className="text-primary">0:59</p>
            </div>
            <div className="flex-initial">
              <p>
                Lorem ipsum dolor sit amet consectetur. Netus ac nam consectetur
                nisi. Risus porttitor tellus tellus nisi consectetur vestibulum.
                Tristique facilisi mauris cursus cras sem diam ligula sodales
                in. Magna tempus amet lacus tempor risus turpis pulvinar.
              </p>
            </div>
          </div>
          <div className="flex gap-3 px-6 py-6">
            <div className="flex-none w-14">
              <p className="text-primary">1:19</p>
            </div>
            <div className="flex-initial">
              <p>
                Lorem ipsum dolor sit amet consectetur. Netus ac nam consectetur
                nisi. Risus porttitor tellus tellus nisi consectetur vestibulum.
                Tristique facilisi mauris cursus cras sem diam ligula sodales
                in. Magna tempus amet lacus tempor risus turpis pulvinar.
              </p>
            </div>
          </div>
        </>
      )}

      <button className="text-primary px-6" onClick={toggleDropDown}>
        {isSeeMore ? "See less" : "Read More"}
      </button>
    </TransStyle>
  );
};

const TransStyle = styled.div``;

export default Transcription;
