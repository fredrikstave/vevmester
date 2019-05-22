import withErrorBoundary from '../src/hocs/with-error-boundary';

function throwError() {
  throw new Error('What the hell just happened!');
}

function Main() {
  return (
    <div>
      <div>
        <h1 style={{ marginBottom: 12 }}>Vevmester</h1>
      </div>
      <div>
        <em>A personal website by Fredrik Stave</em>
      </div>
      <div style={{ marginTop: 24 }}>
        <button onClick={throwError}>This shouldn{'\''}t work</button>
      </div>
    </div>
  );
}

export default withErrorBoundary(Main);
