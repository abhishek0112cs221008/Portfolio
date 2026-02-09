import { Component, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('3D House Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                    <div className="text-center text-white p-8">
                        <h2 className="text-2xl font-bold mb-4">3D House Error</h2>
                        <p className="text-gray-400 mb-4">{this.state.error?.message}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-primary rounded-lg hover:bg-primary/80"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
