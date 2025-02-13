import Image from "next/image";
import MainContent from "./Components/MainContent/MainContent";
import Header from "./Components/Header/Header";
import TripForm from "./Components/TripForm/TripForm";
import TagLine from "./Components/TagLine/TagLine";

export default function Home() {
  const backgroundStyle = {

    background: "linear-gradient(0deg, rgba(71,95,255,1) 15%, rgba(0,1,5,1) 87%)",
    backgroundSize: "cover", // Ensures the background covers the full area
    backgroundPosition: "center", // Centers the background
    height: "100vh", // Full screen height
    width: "100vw", // Full screen width
  };

  const rowStyle = {
    display: "flex", // Aligns TripForm and TagLine side by side
    justifyContent: "center", // Centers them horizontally in the row
    alignItems: "center", // Centers them vertically in the row
    width: "100%", // Makes the row fill the width of the container
    gap: "20px", // Adds space between TripForm and TagLine
  };

  


    backgroundSize: "cover", // Or "contain" depending on your need
    backgroundPosition: "center",
    height: "100vh", // Full screen height
    width: "100vw",  // Full screen width
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)"
  };
  

  return (
    <div style={backgroundStyle}>
      <Header />
      <div style={rowStyle}>
      <TripForm/>
      <TagLine/>
      </div>
    </div>
  );
}
