import { useAuth } from "../context/AuthContext"
import React from 'react'
import { Navigate } from "react-router-dom"

export default function ProtectedRoute ({children})  {
   const {currentUser} = useAuth()
   
   return currentUser ? children : <Navigate to='/login' />
}