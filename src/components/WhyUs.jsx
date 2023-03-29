import styles from "../style"
import { flight, check, label} from '../assets'
import React from "react"

const WhyUs = () => {
  return (
    <section id="why us" className={`flex md:flex-row flex-col ${styles.boxWidth} mb-20`}>

        <div className="flex flex-row w-full items-center py-[10%]">
          <div className="flex flex-col w-[45%]">
            <p className={`font-poppins font-bold xxxs:text-[10px] xxs:text-[10px] xs:text-[16px] ss:text-[20px] sm:text-[28px] md:text-[40px] lg:text-[45px] xl:text-[60px] text-black`}>
              WHY YOU SHOULD<br/><span class="text-bgreen1">CHOOSE US</span>
            </p>

            <p className={`${styles.paragraph} xxxs:text-[7px] xxs:text-[7px] xs:text-[10px] ss:text-[10px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[25px] text-black mt-[2%]`}>
            for 10+ years, we growth to offer the best service for you
            </p>

            <div className="flex flex-cols mt-5">
                <button class="xxxs:text-[7px] xxs:text-[7px] xs:text-[10px] ss:text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[25px] bg-gradient-to-b from-bgreen1 to-bgreen2 hover:bg-darkGreen text-white font-bold py-2 px-4 rounded-full">
                    Learn More
                </button>
            </div>
          </div>
          <div className="grid grid-cols-3 flex flex-col w-[60%] ml-10">
            <img src={flight} alt="jason lauwrin" className="w-[250px]"/>
            <img src={check} alt="jason lauwrin" className="w-[250px]"/>
            <img src={label} alt="jason lauwrin" className="w-[250px]"/>
          </div>
        </div>
    </section>
  )
}

export default WhyUs