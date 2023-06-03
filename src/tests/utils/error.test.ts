// Utils
import { errorParser } from "utils/error";

// Axios
import axios from "axios";

// MSW
import { mswServer } from "mocks/mswServer";
import { rest } from "msw";

const fetchEndpointException = rest.get("test/", (req, res, ctx) => {
  return res(ctx.status(500), ctx.json({ error: "Internal Server Error" }));
});

// Tests
describe("Tests for Error Parser Utils", () => {
  describe("1. errorParser", () => {
    it("Axios Error", async () => {
      mswServer.use(fetchEndpointException);
      let axiosError;
      await axios.get("test/").catch((error) => {
        axiosError = errorParser(error);
      });
      expect(axiosError).toBe('{"error":"Internal Server Error"}');
    });
    it("Error instance", () => {
      const error = new Error("Error Instance");
      expect(errorParser(error)).toBe("Error Instance");
    });
    it("Other", () => {
      const error = { message: "Error" };
      expect(errorParser(error)).toBe('{"message":"Error"}');
    });
  });
});
