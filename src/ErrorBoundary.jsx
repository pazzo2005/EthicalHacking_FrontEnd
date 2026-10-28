import { Component } from "react";
import { logClientEvent } from "./clientLogger";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    logClientEvent("react_error", {
      path: window.location.pathname,
      message: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return <main role="alert">Something went wrong. Please refresh the page.</main>;
    }
    return this.props.children;
  }
}
