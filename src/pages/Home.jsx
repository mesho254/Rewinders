import React from 'react'
import Dashboard from '../components/Dashboard'
import ChatComponent from '../utils/Chat'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServicesSection'
import CommentSection from '../components/CommentSection'
import AboutUs from '../components/AboutSection'

function Home() {
  return (
    <div>
      <Dashboard/>
      <ServicesSection/>
      <BlogSection/>
      <AboutUs/>
      <CommentSection/>
      <div className="chat-icon">
        <ChatComponent /> {/* Render the ChatComponent */}
      </div>
      <Footer/>
    </div>
  )
}

export default Home
