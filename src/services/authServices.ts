import axios from "axios";

export const signInUser = async (data: any) => {
  const response: any = await axios
    .post(`/auth/login`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const registerUser = async (data: any) => {
    const response: any = await axios
      .post(`/register`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.message || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
};
export const uploadProfilePhoto = async (data: any) => {
  const response: any = await axios
    .post(`/save-file`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }, 
    })
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const updateTutor = async (data: any) => {
  const response: any = await axios
    .post(`/tutors`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const updateStudent = async (data: any) => {
  const response: any = await axios
    .post(`/students`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const updateOrganization = async (data: any) => {
  const response: any = await axios
    .post(`/organisations`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const sendResetOtp = async (data: any) => {
    const response: any = await axios
      .post(`/send_password_reset_otp`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.message || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
};
export const verifyEmail = async (data: any) => {
  const response: any = await axios
    .post(`/emailverify`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const verifyEmailOtp = async (data: any) => {
  const response: any = await axios
    .post(`/veriy-token`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.error || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const verifyResetOtp = async (data: any) => {
    const response: any = await axios
      .post(`/verify_password_otp`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.error || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
};

export const ResetPassword = async (data: any) => {
    const response: any = await axios
      .post(`/reset_password`, data)
      .catch((e) => ({ error: e }));
    //check error
    if (response && response?.error) {
      const err = response?.error?.response;
      const msg = err?.data?.error || err?.statusText;
      throw new Error(msg);
    }
  
    return response?.data;
};



