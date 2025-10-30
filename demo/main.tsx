import React from 'react';
import { createRoot } from 'react-dom/client';
import { Marquee } from 'marquee-react-dwyer';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Marquee
      texts={[
        'Hey There ...',
        'I was ...',
        'looking for a marquee ...',
        'to use in a ...',
        'react application.'
      ]}
      changeIntervalMs={2000}
      crossTimeMs={10000}
      random={false}
      as="h1"
      color="red"
    />
  </React.StrictMode>
);
