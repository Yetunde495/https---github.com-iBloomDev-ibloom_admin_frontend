import axios from "axios";

export const getTutorDashboardDetails = async (data: any) => {
    const response: any = await axios
      .get(`/tutor-dashboard`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.message || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
  };