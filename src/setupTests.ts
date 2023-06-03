// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// MSW Server
import { mswServer } from "mocks/mswServer";
import type { MockedRequest } from "msw";

beforeAll(() => {
  mswServer.listen({
    onUnhandledRequest: (req: MockedRequest) => {
      // The normal error handling
      // eslint-disable-next-line no-console
      console.error(
        "Found an unhandled %s request to %s with query %s",
        req.method,
        req.url.href,
        req.url.searchParams.toString()
      );
      throw new Error("Intercepted unhandled request");
    }
  });
});

afterEach(() => {
  mswServer.resetHandlers();
});

afterAll(() => {
  mswServer.close();
});
