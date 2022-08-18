import React, { useState } from "react"
import Image from "next/image"
import logo from "../public/Images/logo.png"
import illustration1 from "../public/Images/main-asset1.png"
import slack from "../public/Images/slack-logo.png"
import clickup from "../public/Images/clickup logo 1.png"
import elastic from "../public/Images/elastic-logo.png"
import dropbox  from "../public/Images/dropbox-logo.png"
import email from "../public/Images/email.png"
import code from "../public/Images/code.png"
import www from "../public/Images/www.png"
import project2 from "../public/Images/project-image3.png"
import project3 from "../public/Images/project-image2.png"
import bulb from "../public/Images/light-bulb.png"
import badge from "../public/Images/badge.png"
import design from "../public/Images/design-thinking.png"
import handshake from "../public/Images/handshake.png"
import map from "../public/Images/map.png"
import blog1 from "../public/Images/img1.png"
import blog2 from "../public/Images/img2.png"
import blog3 from "../public/Images/img3.png"
import blog4 from "../public/Images/img4.png"


export default function Home() {
    const[modal, setModal] = useState(false)


    function handleClick () {
        setModal(!modal)
    }


  return (

    <div className="container">

        <div className="header">
            <Image src={logo} alt="logo"/>
            <ul className="menu-list">
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">WORK</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">BLOG</a></li>
                <li className="contact"><a href="#">CONTACT US</a></li>
            </ul>
            <button className="hamburger" onClick={handleClick}>Menu</button>
        </div>


        {
            modal && <div className="mobile-menu">
            <button className="close" onClick={handleClick}>X</button>
            <ul className="menu-list">
                <li>SERVICES</li>
                <li>WORK</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li className="contact">CONTACT US</li>
            </ul>
        </div>

        }


  <div className="main-box">
    <div className="introduction">
        <div className="motto">
            <p>Serving Ingenuinty and Originality</p>
        </div>
        <br/>
        <div className="description">
            Focus is a full-service agency that"s been purpose-built to help organizations thrive in an increasingly complex landscape.
            <br/>
            <button>Let Us Talk</button>

        </div>
    </div>
        <div className="illustration">
            <Image src={illustration1} alt="illustration" className="illustration1"/>
        </div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="curved-bottom">
    <path fill="#fff" fillOpacity="1" d="M0,192L48,213.3C96,235,192,277,288,293.3C384,309,480,299,576,266.7C672,235,768,181,864,138.7C960,96,1056,64,1152,69.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>


  <div className="center">

  <div className="section2">
    <div className="trust">
        <p>Trusted by over +5000 clients accross the globe, including:</p>
    </div>
    <div className="companies">
        <div className="clickup">
            <Image src={clickup} alt="lickup"/>
        </div>
        <div className="dropbox">
            <Image src={dropbox} alt="dropbox"/>
        </div>
        <div className="elastic">
            <Image src={elastic} alt="elastic"/>
        </div>
        <div className="slack">
            <Image src={slack} alt="slack"/>
        </div>
    </div>
</div>

<div className="services">
        <p>Our Best</p>
        <p className="feature">Features and Services</p>
    <div className="services-list">
        <div className="webdev">
            <Image src={email} alt="email"/>
            <p className="desc">Email Marketing</p>
            <span>Unlock the power of AI-Driven email tool and start delivering conversion driven results.</span>
            <br/>
            <button>Learn More</button>
        </div>
        <div className="webdev">
            <Image src={code} alt="code"/>
            <p className="desc">Web Development</p>
            <span>Let us create beautiful and user-friendly websites.</span>
            <br/>
            <button>Learn More</button>
        </div>
        <div className="webdev">
            <Image src={www} alt="web"/>
            <p className="desc">Search Engine Optimization</p>
            <span>Improvement in the quantity of your website traffic</span>
            <br/>
            <button>Learn More</button>
        </div>
        
    </div>
  </div>

    <div className="testimonials">
        <div className="testimonials-head">
            <p>Testimonials</p>
            <p className="testimonials-header">What our Clients Says</p>
        </div>

        <div className="testimonials-map">
            <Image src={map} alt=""/>
        </div>
    </div>


    <div className="blog">
        <div className="blog-head">
            <p>Blog</p>
            <p className="blog-header">News and Insights</p>
        </div>

    <div className="blog-list">

        <div className="blog-posts">
            <div className="blog-post1">
                <p>Solana Ventures Launches $100 Million Fund Focused on Web3 Projects in South Korea</p>
                <Image src={blog1} alt="" width= "350px" height= "350px"/>
            </div>
            <div className="blog-post2">
            <p>AI will turn Graphic Design on its head.</p>
                <Image src={blog2} alt="" width= "350px" height= "350px"/>
            </div>
        </div>

        <div className="blog-posts">
            <div className="blog-post3">
            <p>What are Soulbound Tokens? Building Blocks for a Web3 Decentralized Society</p>
                <Image src={blog3} alt="" width= "350px" height= "350px"/>
            </div>
            <div className="blog-post4">
            <p>Superunion designs variable font logo for Hermes as part of Evri-rebrand</p>
                <Image src={blog4} alt="" width= "350px" height= "350px"/>
            </div>
        </div>
    </div>
</div>


<div className="contactBottom">
  <p>Have a project in mind?</p>
  <button>LET US TALK</button>
</div>


<div className="footer">
  <div>
  <Image src={logo} alt="logo"/>
  </div>

  <div>
    <p className="title-footer">ABOUT</p>
    <ul>
      <li>Our Clients</li>
      <li>The Team</li>
    </ul>
  </div>

  <div>
    <p className="title-footer">SERVICES</p>
    <ul>
      <li>Branding</li>
      <li>Design</li>
      <li>Web Development</li>
    </ul>
  </div>

  <div>
    <p className="title-footer">CONTACT</p>
    <p>+234 8062953184</p>
    <p>focusgrp@gmail.com</p>
    <p>Port Harcort, Nigeria</p>
  </div>
</div>
  </div>
    
    </div>
  )
}