import { StrictMode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { createRoot } from 'react-dom/client';
import AppRouter from './Router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsights />
    <AppRouter />
  </StrictMode>
);
