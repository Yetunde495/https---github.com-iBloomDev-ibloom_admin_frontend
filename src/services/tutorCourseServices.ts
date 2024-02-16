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

// export const uploadFile = async (data: any) => {
//     const response: any = await axios
//       .post(`/save-file`, data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .catch((e) => ({ error: e }));
//     //check error
//     if (response && response?.error) {
//       const err = response?.error?.response;
//       const msg = err?.data?.message || err?.statusText;
//       throw new Error(msg);
//     }

//     return response?.data;
// };

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
