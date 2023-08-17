import { AboutUs } from "@/components/aboutUs/AboutUs";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Reservation } from "@/components/reservation/Reservation";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Reservation */}
      <Reservation />

      {/* About us */}
      <AboutUs />

      {/* Footer */}
      <Footer />
    </>
  );
}
