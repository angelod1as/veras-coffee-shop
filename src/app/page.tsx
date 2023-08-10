import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Reservation */}
      <div>Reservation</div>

      {/* Contact */}
      <Contact />

      {/* About us */}
      <Footer />
    </>
  );
}
