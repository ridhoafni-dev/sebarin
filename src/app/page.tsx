import LeftSectionSpec from "./components/left-section-spec";
import RightSectionSpec from "./components/right-section-spec";
import HeroSection from "./components/hero-section";
import ItemFeature from "./components/item-feature";
import { mainFeatures } from "@/data";
import ServicesSection from "./components/services-section";
import StepsSection from "./components/steps-section";
import ReviewsSection from "./components/reviews-section";
import FaqsSection from "./components/faqs-section";
import PaymentsSection from "./components/payments-section";
import HelpSection from "./components/help-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <ServicesSection />

      {/* Top Feature */}
      <section className="bg-white">
        <LeftSectionSpec
          url="https://satumomen.com/images/undangan-digital-unlimited-tamu-undangan.webp"
          title="Bebas Input Nama Tamu Sebanyak-Banyaknya"
          description={
            <p className="text-dark">
              Undangan tamu lebih sopan dengan undangan yang dibuat personal.
              Tidak ada batasan tamu undangan kamu bisa kirim sepuasnya.
            </p>
          }
        />
      </section>

      {/* Bottom Feature */}

      <section className="bg-soft">
        <RightSectionSpec
          url="https://satumomen.com/images/reseller-undangan-digital-website-4.webp"
          title="450+ Pilihan Tema Beragam Kategori Acara"
          description={
            <p className="text-dark">
              Cocok untuk Kamu yang ingin membuat website undangan nikah & acara
              apapun. Tersedia 450+{" "}
              <span className="text-primary">tema undangan beragam </span>
              kategori tinggal pilih dan kirim undangan websitemu.
            </p>
          }
        />
      </section>

      <section className="bg-white">
        <LeftSectionSpec
          url="https://satumomen.com/images/reseller-undangan-digital-website-7.webp"
          title="Ratusan Pilihan Music Latar & Bisa Custom"
          description={
            <p className="text-dark">
              Tersedia lebih dari 600 music latar untuk beragam kategori
              undangan. Kamu juga bisa{" "}
              <span className="text-primary">
                custom music sendiri dari Sound Cloud.
              </span>
            </p>
          }
        />
      </section>

      <section className="bg-soft">
        <RightSectionSpec
          url="https://satumomen.com/images/reseller-undangan-digital-website-8.webp"
          title="QR Code Check-in Acara"
          description={
            <p className="text-dark">
              Buat undangan digital yang exclusive untuk masing-masing tamu.
              Dengan fitur qr code untuk filter tamu yang datang. Scan QR Code
              untuk memastikan tamu terdaftar.
            </p>
          }
        />
      </section>

      <section className="bg-white">
        <LeftSectionSpec
          url="https://satumomen.com/images/reseller-undangan-digital-website-1.webp"
          title="Bisa Custom Domain Atas Nama Pribadi atau Brand"
          description={
            <p className="text-dark">
              Tampil unik dan exclusive beda dari yang lain. Miliki website
              undangan digital dengan domain sendiri seperti nama brand atau
              nama pasangan.
            </p>
          }
        />
      </section>

      <section className="bg-soft">
        <RightSectionSpec
          url="https://assets.satumomen.com/images/media/8625-media-1720428807.png"
          title="Dilengkapi Form Ucapan & RSVP Yang Fleksibel"
          description={
            <p className="text-dark">
              Dapatkan data yang diperlukan untuk kesuksesan acara Kamu. Tambah
              kolom atau nonaktifkan yang tidak dibutuhkan.
            </p>
          }
        />
      </section>

      <section className="bg-white">
        <LeftSectionSpec
          url="https://assets.satumomen.com/images/media/8625-media-1720429667.png"
          title="Kamu Punya Desain Sendiri?"
          description={
            <p className="text-dark">
              Tenang, kami bisa membuatkan undangan dengan{" "}
              <span className="text-primary font-semibold">desain custom</span>{" "}
              khusus untuk kamu. Prosesnya cepat dan mudah kami akan bereskan
              dari A-Z sampai acara kamu berlangsung.
            </p>
          }
        />
      </section>

      <section className="">
        <RightSectionSpec
          url="https://satumomen.com/images/ucapan-dan-rsvp.webp"
          title="Undangan impian dengan beragam fitur andalan"
          description={
            <>
              <p className="text-dark">
                Lengkapi{" "}
                <span className="text-primary">website undangan digitalmu</span>{" "}
                dengan beragam fitur yang dapat disesuaikan dengan seleramu.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-7xl mx-auto mt-4">
                {mainFeatures.map((feature) => (
                  <ItemFeature key={feature.title} title={feature.title} />
                ))}
              </div>
            </>
          }
        />
      </section>

      {/* Steps Section */}
      <StepsSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Payments Section */}
      <PaymentsSection />

      {/* Help Section */}
      <HelpSection />

      {/* Faqs Section */}
      <FaqsSection />
    </>
  );
}
