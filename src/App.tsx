import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Index from './pages/Index.page';

const App: React.FC<{}> = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />}>
                    <Route path=":id" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
