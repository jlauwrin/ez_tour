import "./Design.css"
import React from 'react'
import styles from "../style"
import { adventure, halal, inbound, mice, outbound, travel } from "../assets"

const Offer = () => {
    return (
      <section id="our services" className={`flex md:flex-row flex-col ${styles.boxWidth}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center`}>
          <h1 className="flex-1 font-poppins font-semibold xxxs:text-[16px] xxs:text-[16px] xs:text-[16px] ss:text-[20px] sm:text-[28px] md:text-[40px] lg:text-[45px] xl:text-[60px] text-center  text-black">
              WHAT WE <span class="text-bgreen1">OFFER FOR YOU</span>
          </h1>

          <p className={`${styles.paragraph} xxxs:text-[10px] xxs:text-[10px] xs:text-[10px] ss:text-[10px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[25px]  text-black mt-[2%] text-center`}>
            There are 6 special services for your<br/>unforgettable trip
            </p>
  
            <div className="projectContainer py-10">
              <button>
                <div className="projectBox">
                  <img src={inbound} alt="project_negotio"/>
                  <div className="projectLayer text-white">
                    <h4 className="xxxs:text-[13px] xxs:text-[13px] xs:text-[18px] ss:text-[22px] md:text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
                      Inbound
                    </h4>
                    <p className="xxxs:text-[5px] xxs:text-[5px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] font-semibold text-left">
                      Tour trips for foreign tourist in visiting the beauty of Indonesia
                    </p>
                  </div>
                </div>
              </button>
  
              <button>
                <div className="projectBox">
                  <img src={outbound} alt="project_negotio"/>
                  <div className="projectLayer text-white">
                    <h4 className="xxxs:text-[13px] xxs:text-[13px] xs:text-[18px] ss:text-[22px] md:text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
                      Outbound
                    </h4>
                    <p className="xxxs:text-[5px] xxs:text-[5px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] font-semibold text-left">
                      Tour trips of Indonesian citizens outside the country of Indonesia
                    </p>
                  </div>
                </div>
              </button>
  
              <button>
                <div className="projectBox">
                  <img src={halal} alt="project_negotio"/>
                  <div className="projectLayer text-white">
                    <h4 className="xxxs:text-[13px] xxs:text-[13px] xs:text-[18px] ss:text-[22px] md:text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
                      Halal
                    </h4>
                    <p className="xxxs:text-[5px] xxs:text-[5px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] font-semibold text-left">
                      Travel abroad with halal guarantees, especially for muslim tourist
                    </p>
                  </div>
                </div>
              </button>

              <button>
                <div className="projectBox">
                  <img src={mice} alt="project_negotio"/>
                  <div className="projectLayer text-white">
                    <h4 className="xxxs:text-[13px] xxs:text-[13px] xs:text-[18px] ss:text-[22px] md:text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
                      MICE
                    </h4>
                    <p className="xxxs:text-[5px] xxs:text-[5px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] font-semibold text-left">
                      Stands for meetings, incentives, conventions, and exhibitions, for travel with a specific purpose
                    </p>
                  </div>
                </div>
              </button>

              <button>
                <div className="projectBox">
                  <img src={travel} alt="project_negotio"/>
                  <div className="projectLayer text-white">
                    <h4 className="xxxs:text-[13px] xxs:text-[13px] xs:text-[18px] ss:text-[22px] md:text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
                      Travel
                    </h4>
                    <p className="xxxs:text-[5px] xxs:text-[5px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] font-semibold text-left">
                      Travel preparation services such as transportation rental, passport management, and others.
                    </p>
                  </div>
                </div>
              </button>

              <button>
                <div className="projectBox">
                  <img src={adventure} alt="project_negotio"/>
                  <div className="projectLayer text-white">
                    <h4 className="xxxs:text-[13px] xxs:text-[13px] xs:text-[18px] ss:text-[22px] md:text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">
                      Adventure
                    </h4>
                    <p className="xxxs:text-[5px] xxs:text-[5px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] font-semibold text-left">
                      Travel with Adventure for lovers of extreme destinations.
                    </p>
                  </div>
                </div>
              </button>

            </div>
        </div>
      </section>
        
    )
  }
  
  export default Offer