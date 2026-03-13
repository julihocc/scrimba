import reactLogo from "../assets/react.svg"

export function Navbar() {
    return (
<header>
    <nav className="nav">
        <img src={reactLogo} alt="React Logo" className="nav-logo" />
        <h1 className="nav-logo-text">ReactFacts</h1>
    </nav>
</header>
    )
}