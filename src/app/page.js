import Image from "next/image";
import MainContent from "./Components/MainContent/MainContent";
import Header from "./Components/Header/Header";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: "url('/back-ground-img.jpg')", // Ensure the image is inside the 'public' folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full screen height
    width: "100vw",  // Full screen width
    backgroundSize: "contain"
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <MainContent />
    </div>
  );
}
