import "./Design.css"
import React from 'react'
import styles from "../style"
import { ig1,ig2,ig3 } from "../assets"

const Memories = () => {
    return (
      <section id="projects" className={`flex md:flex-row flex-col ${styles.boxWidth}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
          <h1 className="flex-1 font-poppins font-semibold xs:text-[16px] ss:text-[20px] sm:text-[28px] md:text-[40px] lg:text-[45px] xl:text-[60px] text-left  text-black">
              OUR <span class="text-bgreen1">HAPPY</span><br/><span class="text-bgreen1">CUSTOMER </span>MEMORIES
          </h1>
  
            <div className="projectContainer py-5">
              <a href="https://www.instagram.com/p/CmY4_3GSN2K/?utm_source=ig_web_copy_link">
                <div className="projectBox">
                  <img src={ig1} alt="project_negotio"/>
                </div>
              </a>
  
              <a href="https://www.instagram.com/p/CmY1iHLyf0u/?utm_source=ig_web_copy_link">
                <div className="projectBox">
                  <img src={ig2} alt="project_negotio"/>
                </div>
              </a>
  
              <a href="https://www.instagram.com/p/ClOn8L7MpeE/?utm_source=ig_web_copy_link">
                <div className="projectBox">
                  <img src={ig3} alt="project_negotio"/>
                </div>
              </a>

            </div>
        </div>
      </section>
        
    )
  }
  
  export default Memories