import styles from "../style"
import React from "react"
import { facebook, ig } from '../assets'

const FirstIntro = () => {

  return (
    <section id="home" className={`flex flex-col ${styles.boxWidth} mb-20`}>

        <div className="flex flex-row w-full ">
          <div className="flex flex-col w-full">
            <p className={`flex font-poppins font-bold xs:text-[39px] ss:text-[45px] sm:text-[55px] md:text-[65px] lg:text-[75px] xl:text-[85px] text-white`}>
              PLAN YOUR DREAM<br/>TRIP WITH US
            </p>

            <p className={`${styles.paragraph} xxxs:text-[7px] xxs:text-[7px] xs:text-[10px] ss:text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[25px] text-white mt-[2%]`}>
            You just need to sit tight and we will take care <br/>of your trip
            </p>

            <div className="flex flex-cols mt-[2%]">
                <button class="xxxs:text-[7px] xxs:text-[7px] xs:text-[10px] ss:text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[25px] bg-gradient-to-b from-bgreen1 to-bgreen2 hover:bg-darkGreen text-white font-regular py-2 px-4 rounded-full">
                    Our Services
                </button>
                <button class="xxxs:text-[7px] xxs:text-[7px] xs:text-[10px] ss:text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[25px] border border-white hover:bg-darkGreen text-white font-regular py-2 px-4 rounded-full ml-5"> 
                    Contact Us
                </button>
            </div>

            <div className="flex flex-cols mt-[5%]">
                <a href="https://www.facebook.com/pradiramaez/">
                    <img src={facebook} alt="jason lauwrin" className="mt-2.5 xxxs:w-[20px] xxs:w-[20px] xs:w-[35px] ss:w-[40px] sm:w-[45px] md:w-[50px] lg:w-[50px] xl:w-[50px]"/>
                </a>
                <a href="https://www.instagram.com/pradiramaez/?hl=en"> 
                    <img src={ig} alt="jason lauwrin" className="mt-1.5 ml-3 xxxs:w-[30px] xxs:w-[30px] xs:w-[50px] ss:w-[55px] sm:w-[60px] md:w-[65px] lg:w-[65px] xl:w-[65px]"/>
                </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FirstIntro