import { createRoot } from 'react-dom/client'
import App from './src/App.tsx'
import './src/styles/index.scss';

createRoot(document.getElementById('root')!).render(
    <App />
)
