import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Typography } from '@mui/material'

const UpdateEmail = () => {
  const [newEmail,setEmail] = React.useState()
  const [newPassword, setPassword] = React.useState()
  const {currentUser,logout} = useAuth()
  const navigate = useNavigate()
  const handleUpdateEmail = async(e) => {
      e.preventDefault()
    try{
        await currentUser.updateEmail(newEmail)
        alert('Update successfull')
        await logout()
        navigate('/login')
        console.log(currentUser.email)
    }catch(error){
        alert('Error')
        console.log('error',error)
    }

  }

  const handleUpdatePassword = async(e) => {
    e.preventDefault()
  try{
      await currentUser.updatePassword(newPassword)
      alert('Update successfull')
      await logout()
      navigate('/login')
      console.log(currentUser.email)
  }catch(error){
      alert('Error')
      console.log('error',error)
  }

}


  const handleChange = (e)  => {
    e.preventDefault()
    setEmail(e.currentTarget.value)
    setPassword(e.currentTarget.value)
  }
  return (
    <div>
      <form>
        <Typography>
          Change Your Email
        </Typography>
      <TextField
            type="email"
            label="Email"
            fullWidth
            onChange={handleChange}
            margin="normal"
            required
          />
        <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateEmail}
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Update Email
          </Button>
          <Typography style={{marginTop:'30px'}}>
          Change Your Password
        </Typography>
          <TextField
            type="password"
            label="NewPassword"
            fullWidth
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdatePassword}
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Update Password
          </Button>
          <Button
            variant="contained"
            color="primary"
            href='/'
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Back
          </Button>
        
      </form>
      
    </div>
  )
}

export default UpdateEmail
