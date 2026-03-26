import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-50 p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Laravel + React SPA
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg text-center leading-relaxed">
                Integrated with shadcn/ui, Tailwind v4, React Query, and React Router.
            </p>
            <button 
                className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                onClick={() => import('sonner').then(m => m.toast.success("Ready for development!", { description: "The stack is correctly configured." }))}
            >
                Test Toast
            </button>
        </div>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className="min-h-screen bg-background font-sans antialiased text-foreground">
                    <Routes>
                        <Route path="/*" element={<Landing />} />
                    </Routes>
                    <Toaster position="bottom-right" theme="dark" />
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}
