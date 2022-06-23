import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/loader-basketball";

const Spinner = () => {
  const styleLottie = {
    zIndex: 1000,
    position: "absolute",
    marginLeft: "-50px"
  };
  return (
    <Lottie
      style={styleLottie}
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
      height={400}
      width={400}
    />
  );
};
export { Spinner };
