import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { TakeNoteApp } from './containers/TakeNoteApp';
import { getAuth } from './selectors';
import { login } from './slices/auth';

const App: React.FC = () => {
    // Selectors
    const { loading } = useSelector(getAuth);

    // Dispatch
    const dispatch = useDispatch();
    const _login = () => dispatch(login())

    // Hooks
    useEffect(() => {
        _login();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="la-ball-beat">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<TakeNoteApp />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )

};

export default App;
