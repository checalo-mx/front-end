import React from 'react'
import logo from "./svg/1.svg"
import styles from "./Splash.module.scss"

const Splash = () => {
    return (
        <div className={`container-sm ${styles.containerSplash}`}>
            <div className="row">
                <div className="col">
                    <img src={logo}/>
                </div>
            </div>
        </div>
    )
}

export default Splash
