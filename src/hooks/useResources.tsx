import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';

type HTTPResponse  = Partial<AxiosError>;

/**
 * Converts an object of key-value pairs into a query string format.
 * @param params - An object containing key-value pairs of type Record<string, any>.
 * @returns The query string representation of the input object.
 * @example
 * const params = {
 *   page: 2,
 *   item_per_page: 20,
 *   city: 'Lagos'
 * };
 * const queryString = objectToQueryString(params);
 * console.log(queryString);
 * // Output: "?name=John&age=30&city=New%20York"
 */
export function objectToQueryString(params: Record<string, any>): string {
  if (Object.keys(params).length === 0) {
    return ''; // Return an empty string if the object is empty
  }

  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  return `?${queryString}`;
}

/**
 * Handles errors returned from API requests.
 * @param error - The error object returned from an API request.
 * @return Error - Returns the extracted error message.
 */
function handleHTTPError(error: HTTPResponse): string {
  if (error.response) {
    const { data } = error.response as any;
    return data?.msg;
  } else if (error.request) {
    return `Network Error: ${error.message}`
  } else {
    return `Unknown Error: ${error.message}`
  }
}

export async function fetchData<T>(url: string, id:string): Promise<T> {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(handleHTTPError(error)); 
  }
}

export async function fetchSingleUserData<T>(url: string, id:string | undefined): Promise<T> {
  try {
    const response = await axios.get(`${url}?user_id=${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(handleHTTPError(error)); 
  }
}
export async function fetchAllData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(`${url}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(handleHTTPError(error)); 
  }
}

export async function createData<T>(url: string, data: T): Promise<T> {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error: any) {
    throw new Error(handleHTTPError(error)); 
  }
}

export async function updateData<T>(url: string, id: string | undefined, data: T): Promise<T> {
  try {
    const response = await axios.put(`${url}/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(handleHTTPError(error)); 
  }
}

export async function deleteData(url: string, id: string): Promise<void> {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error: any) {
    throw new Error(handleHTTPError(error)); 
  }
}

/**
 * Custom hook for fetching, creating, updating, and deleting data using React Query.
 * 
 * @template T - The type of data being handled
 * @param {string} dataList - The name of the data list
 * @param {string} url - The URL for the API endpoint
 * @param {string | undefined} id - The ID of the data item
 * @param {(error: Error) => void} onError - Callback function to handle errors
 * @param {(data: any) => void} onSuccess - Callback function to handle successful operations
 * @returns {{
*   data: T | undefined,
*   isLoading: boolean,
*   isError: boolean,
*   create: MutationFunction<T, Error, T>,
*   update: MutationFunction<T, Error, T>,
*   remove: MutationFunction<void, Error, void>
* }} - The fetched data, loading state, error state, and mutation functions
*/
function useResources<T>(
  dataList: string,
  url: string,
  id: string | undefined,
  onError: (error: Error) => void,  // Add the onError callback
  onSuccess: (data: any) => void, // Add the onSuccess callback
 
) {
  const queryClient = useQueryClient();

  // Read operation (fetch data by ID)
  const { data, isLoading, isError } = useQuery(
    [dataList, id],
    () => fetchData<T>(url, id!),
    {
      // Fetch data only when 'id' is truthy
      enabled: !!id, 
      keepPreviousData: true,
    }
  );

 

  // Create operation
  const create = useMutation<T, Error, T>(
    (data) => createData<T>(url, data),
    {
      onSuccess: (res) => {
        // Invalidate and refetch relevant queries after a successful create
        queryClient.invalidateQueries([dataList]);
        onSuccess(res);
      },
      onError: (error) => {
        onError(error);
      },
    }
  );

  // Update operation
  const update = useMutation<T, Error, T>(
    (data) => updateData<T>(url, id!, data),
    {
      onSuccess: (res) => {
        // Invalidate and refetch relevant queries after a successful update
        queryClient.invalidateQueries([dataList, id]);
        queryClient.invalidateQueries([dataList]);
        onSuccess(res);
      },
      onError: (error) => {
        onError(error);
      },
    }
  );

  // Delete operation
  const remove = useMutation<void, Error, void>(
    () => deleteData(url, id!),
    {
      onSuccess: (res) => {
        // Invalidate and refetch relevant queries after a successful delete
        queryClient.invalidateQueries([dataList]);
        onSuccess(res);
      },
      onError: (error) => {
        onError(error);
      },
    }
  );

  const convertObjectToQueryString = (params: Record<string, any>) => objectToQueryString(params);

  return {
    data,
    isLoading,
    isError,
    create,
    update,
    remove,
    convertObjectToQueryString,
  };
}

export default useResources;
