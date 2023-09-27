import React from 'react'
import Dashboard from '../components/Dashboard'
import ChatComponent from '../utils/Chat'

function Home() {
  return (
    <div>
      <Dashboard/>
      <div className="chat-icon">
        <ChatComponent /> {/* Render the ChatComponent */}
      </div>
    </div>
  )
}

export default Home
