import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage: React.FC = () => {
    return (
        <section className="landing-page">
            <div className="new-signup">
                <div>
                    <p>
                        TakeNote is only available as a demo. Your notes will be saved to local storage
                        and <b>not</b> persisted in any database or cloud.
                    </p>
                    <Link to="/app">View Demo</Link>
                </div>
            </div>
        </section>
    )
}
