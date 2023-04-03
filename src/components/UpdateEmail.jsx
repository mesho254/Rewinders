import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const UpdateEmail = () => {
  const [newEmail,setEmail] = React.useState()
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

  const handleChange = (e)  => {
    e.preventDefault()
    

    setEmail(e.currentTarget.value)
  }
  return (
    <div>
      <form>
        <input type='email' placeholder='email' onChange={handleChange} />
        <input type='submit' value="updateEmail" onClick={handleUpdateEmail}/>
      </form>
      
    </div>
  )
}

export default UpdateEmail
