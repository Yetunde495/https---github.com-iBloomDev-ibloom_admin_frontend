import axios from "axios";

export const getTutorDashboardDetails = async (data: any) => {
    const response: any = await axios
      .post(`/tutor-dashboard`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.message || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data.data;
};

  export const getAllTutors = async ({ queryKey }: any) => {
    let url = "/tutors";
    let queryOptions = "";
  
    // page
    if (queryKey[1]) {
      queryOptions += `?name=${queryKey[1]}`;
    }
  
  
  
    url += queryOptions;
    const response: any = await axios.get(url).catch((e) => ({ error: e }));
    console.log(response?.data?.data)
  
    //check error
    if (response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.msg || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data.data;
  };

  export const sendTutorInvite = async (data: any) => {
    const response: any = await axios
      .post(`/tutors/send-tutor-invite`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.message || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
  };

  export const acceptTutorInvite = async (data: any) => {
    const response: any = await axios
      .post(`/tutors/process-invite`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.message || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
  };