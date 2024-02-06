import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="A bag representing currency" />
      <h1>Investment Calculator</h1>
    </header>
  )
}