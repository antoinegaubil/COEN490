import SignUp from "./sign-up-form"
import { Container } from "react-bootstrap"
import { UserProvider } from "../../contexts/user.context"
import '../../style/home.css';
import { MDBCard } from "mdbreact";

export default function Register(){

  return (
    <main className="hero-section">
  <section className="container">
    <div className="hero-content">
      <nav className="navbar">
        <h1 className="nav-logo">EasySante</h1>
        <ul className="nav-links">
          <a href="/sign-up">Sign Up</a>
          <a href="/sign-in">Sign In</a>
        </ul>
      </nav>
  <UserProvider>
    <Container className = "d-flex align-items-center justify-content-center" style = {{ minHeight: "100vh" }}>
      <div className = "w-100" style ={{ maxWidth: "400px"}}>
        <SignUp />
      </div>
    </Container>
  </UserProvider>
  </div>
  </section>
  </main>
  )
}
