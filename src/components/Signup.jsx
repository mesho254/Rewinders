import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import Spinner from "./spinner"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      alert("Account created successfully")
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
        <Card.Body>
          <h2 className="Head">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="input" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" className="input" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" className="input" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="Btn" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="links">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}