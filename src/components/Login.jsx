import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert} from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import Spinner from "./spinner"
import { useNavigate, Link } from "react-router-dom"
import "../App.css";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch(error) {
      setError(error.message)
      console.log(error)
      
    }

    setLoading(false)
  }

  return loading ? (
    <Spinner/>
  ):(

    <div className="Container">
      <Card>
        <Card.Body className="card">
          <h2 className="Head">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="input" placeholder="example@gmail.com" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" className="input" placeholder="********" ref={passwordRef} required />
            </Form.Group>
            <Button className="Btn" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="links">
        <Link to="/Signup">Create New Account</Link>
        Forgot your Password? <Link to="">click here</Link>
      </div>
     </div>
  )
}
