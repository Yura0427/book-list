import React from "react";
import style from "./Perloader.module.css";

export const Preloader = () => {
  return (
    // 1111111111
    // <div className={style.preloader}>
    //   <div className={style.preloader__image_animate}></div>
    // </div>
    // 222222222222
    <div className={style.preloader}>
        <div className={style.loader} ></div>
    </div>
    // 333333333333
    // <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'90vh'}}>
    //   <div className={style.ldsRipple}>
    //     <div></div>
    //     <div></div>
    //   </div>
    // </div>
  );
};
