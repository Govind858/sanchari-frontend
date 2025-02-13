import Image from "next/image";
import MainContent from "./Components/MainContent/MainContent";
import Header from "./Components/Header/Header";

export default function Home() {
  const backgroundStyle = {
    backgroundSize: "cover", // Or "contain" depending on your need
    backgroundPosition: "center",
    height: "100vh", // Full screen height
    width: "100vw",  // Full screen width
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)"
  };
  
  return (
    <div style={backgroundStyle}>
      <Header />
      <MainContent />
    </div>
  );
}
