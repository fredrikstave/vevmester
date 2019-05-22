import React from 'react';
import * as Sentry from '@sentry/browser';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      eventId: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({eventId})
    });
  }

  showReportDialog = () => {
    Sentry.showReportDialog({
      eventId: this.state.eventId,
    });
  };

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <a onClick={this.showReportDialog}>Report feedback</a>
      );
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
}

export default function withErrorBoundary(Component) {
  return () => (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
}
