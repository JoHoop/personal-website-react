import { Component } from "react";

export class ErrorBoundary extends Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
