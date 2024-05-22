import axios, { Canceler } from "axios";

export const uploadFile = async (
  data: FormData,
  onProgress: (progress: number) => void,
  onCancel: () => void // Optional: If you want to handle cancellation
) => {
  let cancelToken: Canceler | null = null;

  try {
    const response = await axios.post(`/save-file`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total !== null && progressEvent.total !== undefined) {
          const percentUploaded = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentUploaded);
        }
      },
      cancelToken: new axios.CancelToken((c) => {
        cancelToken = c;
      }),
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Handle upload cancellation
      console.log("Upload canceled");
      onCancel(); // Optionally, call onCancel callback
    } else {
      // Handle other upload errors
      throw error;
    }
  } finally {
    // Cleanup if needed
    if (cancelToken !== null) {
      // @ts-ignore
      cancelToken("Upload canceled by user");
    }
  }
};


export const getAuthenticatedResource = async (data: any) => {
  const response: any = await axios
    .post(`/signed-resource`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};
export const createCourse = async (data: any) => {
  const response: any = await axios
    .post(`/course`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const createCourseCurriculum = async (data: any) => {
  const response: any = await axios
    .post(`/curriculum`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const getCourseCurriculum = async (id: string | undefined) => {
  const response: any = await axios
    .get(`/curriculum/${id}`)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const updateCourseCurriculum = async (data: any, id:string) => {
  const response: any = await axios
    .post(`/curriculum/${id}`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const AddQuiz = async (data: any) => {
  const response: any = await axios
    .post(`/quiz`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const getQuiz = async (id: string | undefined) => {
  const response: any = await axios
    .get(`/quiz/${id}`)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const updateQuiz = async (id: any, data: any) => {
  const response: any = await axios
    .patch(`/quiz/${id}`, data)
    .catch((e) => ({ error: e }));
  //check error

  if (response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.msg || err?.statusText;
    throw new Error(msg);
  }

  return response?.data?.data;
};

export const deleteQuiz = async (id: string | undefined) => {
  const response: any = await axios
    .delete(`/quiz/${id}`)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const getAllTutorCourses = async (id: string | undefined) => {
  const response: any = await axios
    .get(`/course/tutor/${id}`)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const getSingleCourse = async (id: string | undefined) => {
  const response: any = await axios
    .get(`/course/${id}`)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const updateCourseDetails = async (id: any, data: any) => {
  const response: any = await axios
    .patch(`/course/${id}`, data)
    .catch((e) => ({ error: e }));
  //check error

  if (response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.msg || err?.statusText;
    throw new Error(msg);
  }

  return response?.data?.data;
};

export const deleteCourse = async (id: string | undefined) => {
  const response: any = await axios
    .delete(`/course/${id}`)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};

export const removeTutorFromCourse = async (data: any) => {
  const response: any = await axios
    .post(`/tutors/remove-tutor`, data)
    .catch((e) => ({ error: e }));
  //check error
  if (response && response?.error) {
    const err = response?.error?.response;
    const msg = err?.data?.message || err?.statusText;
    throw new Error(msg);
  }

  return response?.data;
};