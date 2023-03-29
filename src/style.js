const styles = {
    boxWidth: "xl:max-w-[1980px] w-full",
    bgWidth: "xl:max-w-[1280px] w-full h-[350px]",
  
    heading2: "font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full",
    headingsub: "font-poppins font-bold xs:text-[32px] text-[24px] xs:leading-[45.8px] leading-[35.8px] w-full",
    paragraph: "font-poppins font-regular text-[18px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    projectContainer: "grid grid-cols-2 items-center gap-8 relative rounded-3xl shadow-2xl shadow-black overflow-hidden flex",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;