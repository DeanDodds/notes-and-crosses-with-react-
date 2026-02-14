import logo from './../../../public/game-logo.png'
export default function Header() {
  return (
    <header>
      <img src={logo} alt="Notes and Crosses Logo" />
      <h1>Notes and Crosses</h1>
    </header>
  );
}