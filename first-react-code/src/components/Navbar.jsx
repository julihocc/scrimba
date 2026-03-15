import { ReactLogo } from "./ReactLogo"

export function Navbar() {
    return (
        <header>
            <nav className="nav">
                <div className="nav-brand">
                    <ReactLogo className="nav-logo" />
                    <h3 className="nav-logo-text">ReactFacts</h3>
                </div>
            </nav>
        </header>
    )
}