import { useEffect } from "react";
import Header from "./components/header/header.component";
import { Toaster } from "react-hot-toast";
import { Routes } from "./routes/routes";
import "./index.css";
import Footer from "./components/footer/footer.component";
import ButtonScroll from "./components/home/buttonScroll.component";

function ScrollToSection() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100); // Small delay to ensure correct rendering
        }
      }
    };

    scrollToHash(); // Initial check
    window.addEventListener("hashchange", scrollToHash); // Listen for changes

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}

function App() {
  return (
    <div className="h-screen">
      <ScrollToSection />
      <Header />
      <Routes />
      <Footer />
      <Toaster />
      <ButtonScroll />
    </div>
  );
}

export default App;
