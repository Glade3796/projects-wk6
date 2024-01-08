import Navbar from "./Navbar";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="header">
      <h1>React project</h1>
      <Navbar />
      <Logo />
    </header>
  );
}
