import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import { SkateSpotProvider } from './Contexts/SkateSpotContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SkateSpotProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SkateSpotProvider>

);

