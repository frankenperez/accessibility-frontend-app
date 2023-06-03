import axios from "axios";

export const errorParser = (error: unknown) => {
  let message: string;
  if (axios.isAxiosError(error)) {
    const errorData = error.response?.data as { reason: string } | string;
    if (typeof errorData === "object" && errorData?.reason) {
      message = errorData?.reason;
    } else {
      message = JSON.stringify(errorData);
    }
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = JSON.stringify(error);
  }
  return message;
};
