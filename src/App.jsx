import styles from './style'
import { Navbar, FirstIntro, WhyUs, Offer, Footer } from './components'
import { sponsor,vid } from './assets' 
import Memories from './components/Memories'

export const App = () => (
  <div className="bg-white max-w-[100%] overflow-x-hidden">
      
    <div className={`flex flex-col xs:h-[450px] ss:h-[600px] sm:h-[700px] md:h-[750px] lg:h-[900px] xl:h-[1250px] w-[100%] bg-img`}>
      <div className={`flex flex-row ${styles.boxWidth} px-10`}>
        <Navbar/>
      </div>
      <div className={`flex flex-row mt-[5%] ${styles.boxWidth} px-10`}>
        <FirstIntro/>
      </div>
    </div>

    <img src={sponsor} alt="foto" className="w-[100%] relative px-10 py-10"/>

    <div className={`flex flex-col  w-[100%] bg-green`}>
      <div className={`flex flex-row ${styles.boxWidth} px-10`}>
        <WhyUs/>
      </div>
    </div>

    <div className={`flex flex-col  w-[100%] bg-white mt-10`}>
      <div className={`flex flex-row ${styles.boxWidth} px-10`}>
        <Offer/>
      </div>
    </div>

    <p className={`flex font-poppins font-bold xs:text-[16px] ss:text-[20px] sm:text-[28px] md:text-[40px] lg:text-[45px] xl:text-[60px] text-black px-20 mt-10`}>
      <span class="text-bgreen1">GET TO KNOW</span> 
    </p>
    <p className={`flex font-poppins font-bold xs:text-[16px] ss:text-[20px] sm:text-[28px] md:text-[40px] lg:text-[45px] xl:text-[60px] text-black px-20 `}>
      US MORE
    </p>
    <div className={`flex flex-col bg-gradient-to-b from-white to-darkGreen w-[100%] mt-10 items-center`}>
      <video width="1020" height="540" controls muted class="px-20 items-center">
        <source src={vid} type="video/mp4"/>
      </video>
    </div>

    <div className={`flex flex-col  w-[100%] bg-green mt-10`}>
      <div className={`flex flex-row ${styles.boxWidth} px-10 py-10`}>
        <Memories/>
      </div>
    </div>

    <div className={`flex flex-col  w-[100%] bg-darkGreen mt-10`}>
      <div className={`flex flex-row ${styles.boxWidth} px-10 py-10`}>
        <Footer/>
      </div>
    </div>

  </div>
)


export default App