import { Component } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    
    // You can also log to an error reporting service here
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full text-center">
            <div className="glass p-8 rounded-2xl">
              <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-500" />
              
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We encountered an unexpected error. Don't worry, your data is safe.
              </p>

              {import.meta.env.DEV && this.state.error && (
                <details className="text-left mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <summary className="cursor-pointer font-semibold text-sm text-red-700 dark:text-red-300 mb-2">
                    Error Details (Dev Mode)
                  </summary>
                  <pre className="text-xs overflow-auto text-red-600 dark:text-red-400">
                    {this.state.error.toString()}
                    {'\n\n'}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}

              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh Page
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                If the problem persists, please contact support
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary