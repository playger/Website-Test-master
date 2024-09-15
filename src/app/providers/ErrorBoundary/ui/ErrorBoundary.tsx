import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError/ui/PageError";

interface ErrorBoundaryProps{
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(error:Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { hasError } = this.state;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children } = this.props;
        
        if (this.state.hasError) {
   
            // You can render any custom fallback UI
            return <Suspense fallback="">
                <PageError/>
            </Suspense>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;