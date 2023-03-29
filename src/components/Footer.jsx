import styles from "../style"
import { facebook, ig, wonderful } from '../assets'
import React from "react"

const Footer = () => {
  return (
    <section id="contact us" className={`flex flex-col ${styles.boxWidth} items-center`}>
        <p className={`flex font-poppins font-bold xs:text-[16px] ss:text-[20px] sm:text-[28px] md:text-[40px] lg:text-[45px] xl:text-[60px] text-white text-center`}>
              GET IN TOUCH
        </p>
        <div className="flex flex-row w-full items-center py-5">
          <div className="flex flex-col w-[35%]">
            <p className={`flex font-poppins font-bold xxxs:text-[7px] xxs:text-[7px] xs:text-[12px] ss:text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] text-white`}>
              Cimahi Head Office
            </p>

            <p className={`${styles.paragraph} py-5 mr-5 xxxs:text-[4px] xxs:text-[4px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] text-white mt-[2%]`}>
            komplek Rinjani No.28<br/>Jl. Kolonel Masturi, Cimahi 40511<br/>Wwest Java, Indonesia<br/><br/>Telp. +62 22 664 5327
            </p>
          </div>

          <div className="flex flex-col w-[35%]">
            <p className={`flex font-poppins font-bold xxxs:text-[7px] xxs:text-[7px] xs:text-[12px] ss:text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] text-white`}>
              Bandung Rep. Office
            </p>

            <p className={`${styles.paragraph} py-5 xxxs:text-[4px] xxs:text-[4px] xs:text-[6px] ss:text-[8px] md:text-[10px] sm:text-[10px] lg:text-[15px] xl:text-[15px] text-white mt-[2%]`}>
            Jl. Komodor Udara Supadio No. 110<br/>
            Bandung 40174<br/>
            West Java, Indonesia<br/><br/>
            Telp. +62 22 6033 712
            </p>
          </div>

          <div className=" flex-row w-[30%] ml-10">
            <div className="grid grid-cols-3  ">
                <a href="https://www.facebook.com/pradiramaez/">
                    <img src={facebook} alt="jason lauwrin" className="w-[50px]"/>
                </a>
                <a href="https://www.instagram.com/pradiramaez/?hl=en"> 
                    <img src={ig} alt="jason lauwrin" className="w-[50px]"/>
                </a>
            </div>
            <img src={wonderful} alt="jason lauwrin" className="w-[250px] mt-10"/>
          </div>
        </div>
    </section>
  )
}

export default Footer