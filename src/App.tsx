/**
 * Intentional mistake: wrong type so `npm run build` fails until fixed.
 * Cursor Cloud Agent should correct this and keep the UI working.
 */
export function App() {
  const title: number = 'Developer Portfolio';
  return (
    <main style={{ padding: '2rem' }}>
      <h1>{title}</h1>
      <p>Seed project from Jarvis local flow.</p>
    </main>
  );
}
