// MathSandbox — temporary test page for the BaseTenBlocksWorkspace manipulative.
// Route: /math-sandbox
// Usage: navigate here to test the component fullscreen before lesson integration.
import BaseTenBlocksWorkspace from '../components/math/BaseTenBlocksWorkspace';

export default function MathSandbox() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <BaseTenBlocksWorkspace />
    </div>
  );
}
