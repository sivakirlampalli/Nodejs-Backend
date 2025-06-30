'use client';
import { useState } from 'react';

export default function WorkflowTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const triggerWorkflow = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/workflows/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          collectionSlug: 'blog',
          documentId: '68616ee15221311efb5d65f',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Use only string here
        setResult(`✅ Success! Log ID: ${data.logId}`);
      } else {
        setResult(`❌ Failed: ${data.message}`);
      }
    } catch (error: any) {
      setResult(`❌ Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test Workflow Trigger</h2>
      <button onClick={triggerWorkflow} disabled={loading}>
        {loading ? 'Triggering...' : 'Trigger Workflow'}
      </button>

      {/* ✅ render result as string */}
      {result && <p style={{ marginTop: '1rem' }}>{result}</p>}
    </div>
  );
}
