import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FluxLanding from './FluxLanding';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluxLanding />
  </StrictMode>
);
