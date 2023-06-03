import { setupWorker } from "msw";
import { mswHandlers } from "mocks/mswHandlers";

// This configures a Service Worker with the given request handlers
export const mswBrowser = setupWorker(...mswHandlers);
