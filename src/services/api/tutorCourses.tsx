import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse, updateCourseCurriculum, updateCourseDetails } from "../tutorCourseServices";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";

export const useUpdateCurriculum = (
  onSuccess: () => void,
  onError: () => void,
  id: string
) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ payload, id }: any) => updateCourseCurriculum(payload, id),
    {
      onSuccess: () => {
        //Reload all the connector and connectors table data
        queryClient.invalidateQueries(["Course_Curriculum", id]);

        //handle success
        onSuccess();
      },
      onError: (err: any) => {
        // handle error
        toast.error(err.message);
        onError();
      },
    }
  );
};

export const useUpdateCourse = (userId:string | undefined, courseId:string) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, payload }: any) => updateCourseDetails(id, payload),
    {
      onSuccess: () => {
        //Reload all the connector and connectors table data
        queryClient.invalidateQueries(["Course_Details", courseId]);
        queryClient.invalidateQueries(["TUTOR_COURSES", userId]);

        //notify on success
        toast(
          <Notification variant="success" title="SUCCESSFULL!">
            This course has been updated
          </Notification>,
          {
            type: "success",
            hideProgressBar: true,
            toastId: Date.now() + "@COURSE_UPDATED",
          }
        );
      },
      onError: (err: any) => {
        // notify on error
        toast(
          <Notification variant="error" title="Request Failed!">
            {err.message}
          </Notification>,
          {
            type: "error",
            hideProgressBar: true,
            toastId: Date.now() + "@COURSE_UPDATE_ERROR",
          }
        );
      },
    }
  );
};
export const useDeleteCourse = (userId:string | undefined) => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteCourse(id), {
    onSuccess: () => {
      // Reload all the courses data
      queryClient.invalidateQueries(["TUTOR_COURSES", userId]);

      // Notify on success
      toast(
        <Notification variant="success" title="Course Deleted!">
          The course has been deleted
        </Notification>,
        {
          type: "success",
          hideProgressBar: true,
          toastId: Date.now() + "@COURSE_DELETED",
        }
      );
    },
    onError: (err: any) => {
      // Notify on error
      toast(
        <Notification variant="error" title="Deletion Failed!">
          {err.message}
        </Notification>,
        {
          type: "error",
          hideProgressBar: true,
          toastId: Date.now() + "@DELETE_COURSE_ERROR",
        }
      );
    },
  });
};


