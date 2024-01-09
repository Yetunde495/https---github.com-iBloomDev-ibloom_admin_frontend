/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useImperativeHandle, useState } from 'react';
import '../css/utils.css'



// export const Loader = ({show, useWhiteBg}:any) => show ? 
// <div className={`dc-loader-main${useWhiteBg ? ' dc-loader-white' : ''}`}>
//     <div className='dc-loader' />
// </div> : null
export const Loader = ({ show, useWhiteBg, size }: any) =>
  show ? (
    <div
      className={`relative top-0 bottom-0 w-full flex justify-center items-center z-[999] 

${useWhiteBg ? "bg-white" : ""}`}
    >
      <div
        className={`rounded-full ${
          size ? size : "w-[40px] h-[40px] border-[4px]"
        }   border-t-[#04131c] dc-loader`}
      />
    </div>
  ) : null;

export const globalLoadingRef = React.createRef();

export const gloading = {
  show: () => {
      // @ts-ignore
    globalLoadingRef?.current?.show();
  },
  hide: () => {
      // @ts-ignore
    globalLoadingRef?.current?.hide();
  },
};

// const AppLoader = React.forwardRef((ref:any) => {
//   const [visible, setVisible] = useState(false);

//   useImperativeHandle(ref, () => {
//     return { show: show, hide: hide };
//   });

//   const show = () => {
//     setVisible(true);
//   };

//   const hide = () => {
//     setVisible(false);
//   };

//   return <Loader show={visible} useWhiteBg={false} />;
// });

// export default AppLoader;
