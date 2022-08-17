import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const[modal, setModal] = useState(false)


    function handleClick () {
        setModal(!modal)
    }


  return (
    <div className={styles.container}>

      <Head>
      <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Focus</title>
        <link rel="stylesheet" href="style.css"/>
      </Head>

    <div className="container">


        <div className="header">
            <img src="Images/logo.png" alt=""/>
            <ul className="menu-list">
                <li>SERVICES</li>
                <li>WORK</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li className="contact">CONTACT US</li>
            </ul>
            <button className="hamburger" onClick={handleClick}>Menu</button>
        </div>


        {
            modal && <div className="mobile-menu">
                <button className="close" onClick={handleClick}>&times;</button>
            <ul className="menu-list">
                <li>SERVICES</li>
                <li>WORK</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li class="contact">CONTACT US</li>
            </ul>
        </div>

        }
        


  <div className="main-box">
    <div className="introduction">
        <div className="motto">
            Serving Ingenuinty & Originality
        </div>
        <br/>
        <div className="description">
            Focus is a full-service agency that's been purpose-built to help organizations thrive in an increasingly complex landscape.
            <br/>
            <button>Let's Talk</button>

        </div>
    </div>
        <div className="illustration">
            <img src="/Images/main-asset1.png" alt="" className="illustration1"/>
        </div>
  </div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="curved-bottom">
    <path fill="#fff" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,293.3C384,309,480,299,576,266.7C672,235,768,181,864,138.7C960,96,1056,64,1152,69.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>


  <center>

  <div className="section2">
    <div className="trust">
        <p>Trusted by over +5000 clients accross the globe, including:</p>
    </div>
    <div className="companies">
        <div className="clickup">
            <img src="/Images/clickup logo 1.png" alt=""/>
        </div>
        <div className="dropbox">
            <img src="Images/dropbox-logo.png" alt=""/>
        </div>
        <div className="elastic">
            <img src="Images/elastic-logo.png" alt=""/>
        </div>
        <div className="slack">
            <img src="Images/slack-logo.png" alt=""/>
        </div>
    </div>
</div>

<div className="services">
        <p>Our Best</p>
        <p className="feature">Features & Services</p>
    <div className="services-list">
        <div className="webdev">
            <img src="images/email.png"/>
            <p className="desc">Email Marketing</p>
            <span>Unlock the power of AI-Driven email tool and start delivering conversion driven results.</span>
            <br/>
            <button>Learn More</button>
        </div>
        <div className="webdev">
            <img src="images/code.png"/>
            <p className="desc">Web Development</p>
            <span>Let us create beautiful and user-friendly websites.</span>
            <br/>
            <button>Learn More</button>
        </div>
        <div className="webdev">
            <img src="images/www.png"/>
            <p className="desc">Search Engine Optimization</p>
            <span>Improvement in the quantity of your website’s traffic</span>
            <br/>
            <button>Learn More</button>
        </div>
        
    </div>
  </div>



  <div className="works">

    <div className="recent-desc">
        <p className="r-works">Works</p>
        <p>Our most recent projects</p>
    </div>

<div className="work-list">

    <div className="project">
        <img src="images/project-image1.png"/>
        <p className="desc">Charmmi Construct</p>
        <span>Charmmi Construct is an architectural firm and design studio.</span>
        <p className="view">VIEW</p>
    </div>

    <div className="project">
        <img src="images/project-image3.png"/>
        <p className="desc">Coco Logo</p>
        <span>We created a personal brand identity for coco.</span>
        <p className="view">VIEW</p>
    </div>

    <div className="project">
        <img src="images/project-image2.png"/>
        <p className="desc">ABTM Branding</p>
        <span>Above the Moon(ABTM) is a street wear brand.</span>
        <p className="view">VIEW</p>
    </div>

</div>
</div>


<div className="about-desc">
            <p>About</p>
            <p className="text2">We provide world-className services</p>
    </div>

    <div className="about-box">
        <div className="about-text">
            <p>We’re west coast change-makers, in a complex world. The brands we support are positioned to be purposeful and powerful while also fluid and free-forming.</p>
            <p> We’re embracers of change. When we drive the change, a brand can connect with its audience, captivate the hearts and minds of customers, and convert cross-channel..</p>
            <p className="discover">DISCOVER OUR CAPABILITIES</p>
        </div>

        <div className="about-boxes">
            <div className="boxes-about1">
                <div className="box1">
                    <img src="images/badge.png" alt=""/>
                    <p>Professional & Certified Company</p>
                </div>
                <div className="box1">
                    <img src="images/design-thinking.png" alt=""/>
                    <p>Pixel & Perfect Design</p>
                </div>
            </div>

            <div className="boxes-about2">
                <div className="box1">
                    <img src="images/light-bulb.png" alt=""/>
                    <p>Business & Product Concept</p>
                </div>
                <div className="box1">
                    <img src="images/handshake.png" alt=""/>
                    <p>Good Partnership</p>
                </div>
            </div> 
        </div>
    </div>

    <div className="testimonials">
        <div className="testimonials-head">
            <p>Testimonials</p>
            <p className="testimonials-header">What our Clients Says</p>
        </div>

        <div className="testimonials-map">
            <img src="images/map.png" alt=""/>
        </div>
    </div>


    <div className="blog">
        <div className="blog-head">
            <p>Blog</p>
            <p className="blog-header">News & Insights</p>
        </div>

    <div className="blog-list">

        <div className="blog-posts">
            <div className="blog-post1">
                <p>Solana Ventures Launches $100 Million Fund Focused on Web3 Projects in South Korea</p>
                <img src="images/img1.png" alt=""/>
            </div>
            <div className="blog-post2">
            <p>AI will turn Graphic Design on its head.</p>
                <img src="images/img2.png" alt=""/>
            </div>
        </div>

        <div className="blog-posts">
            <div className="blog-post3">
            <p>What are Soulbound Tokens? Building Blocks for a Web3 Decentralized Society</p>
                <img src="images/img3.png" alt=""/> 
            </div>
            <div className="blog-post4">
            <p>Superunion designs variable font logo for Hermes as part of Evri-rebrand</p>
                <img src="images/img4.png" alt=""/>
            </div>
        </div>
    </div>
</div>


<div className='contactBottom'>
  <p>Have a project in mind?</p>
  <button>LET'S TALK</button>
</div>


<div className='footer'>
  <div>
  <img src="Images/logo.png" alt="logo"/>
  </div>

  <div>
    <p className='title-footer'>ABOUT</p>
    <ul>
      <li>Our Clients</li>
      <li>The Team</li>
    </ul>
  </div>

  <div>
    <p className='title-footer'>SERVICES</p>
    <ul>
      <li>Branding</li>
      <li>Design</li>
      <li>Web Development</li>
    </ul>
  </div>

  <div>
    <p className='title-footer'>CONTACT</p>
    <p>(+234) 806 295 3184</p>
    <p>focusgrp@gmail.com</p>
    <p>Plot 100, Road 411, 4th Avenue, Agip Estate, PH, Nigeria</p>
  </div>
</div>
  </center>
    
    </div>

      
    </div>
  )
}
