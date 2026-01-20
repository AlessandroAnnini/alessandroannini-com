import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-8">
          <div className="bg-red-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_theme(colors.black)] max-w-2xl">
            <h1 className="text-6xl font-black mb-4 transform -rotate-2">
              OOPS! SOMETHING BROKE
            </h1>
            <p className="text-xl font-bold mb-6">
              Don't worry, this is just a minor glitch in the matrix.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 py-3 font-black uppercase border-4 border-white hover:bg-gray-800 transition-colors transform hover:scale-105">
              RELOAD PAGE
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 bg-white border-2 border-black p-4">
                <summary className="font-black cursor-pointer">
                  Error Details (Dev Only)
                </summary>
                <pre className="mt-2 text-sm overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
