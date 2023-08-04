import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <React.StrictMode>
        <App />
    </React.StrictMode>
    </AuthContextProvider>
)