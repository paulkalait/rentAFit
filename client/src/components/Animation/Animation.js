import React from 'react';
import Lottie from "lottie-react-web"

const Animation = ({animationJSON, classStyle}) => {
  return (
        <div className={classStyle}>
            <Lottie
            options={{
                animationData: animationJSON,
                loop: false,
                autoplay: true
            }}
            />
        </div>
  )
}

export default Animation