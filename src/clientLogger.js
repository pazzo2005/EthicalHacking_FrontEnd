import { API_URL } from "./AuthContext";

export function logClientEvent(event, details = {}) {
  fetch(`${API_URL}/api/client-logs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    keepalive: true,
    body: JSON.stringify({ event, ...details }),
  }).catch(() => {
    // Logging must not interfere with the site when the API is unavailable.
  });
}

export function installBrowserErrorLogging() {
  window.addEventListener("error", (event) => {
    logClientEvent("javascript_error", {
      path: window.location.pathname,
      message: event.message || "A browser resource failed to load.",
      source: event.filename ? event.filename.split("/").pop() : undefined,
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    const message = event.reason instanceof Error ? event.reason.message : String(event.reason);
    logClientEvent("unhandled_rejection", {
      path: window.location.pathname,
      message,
    });
  });
}
