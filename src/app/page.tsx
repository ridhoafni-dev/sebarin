import LeftSectionSpec from "./components/left-section-spec";
import RightSectionSpec from "./components/right-section-spec";
import ItemServices from "./components/item-services";
import HeroSection from "./components/hero-section";
import ItemFeature from "./components/item-feature";

export default function Home() {
  const mainFeatures = [
    {
      title: "Custom Nama Tamu Undangan",
    },
    {
      title: "Custom Musik Latar",
    },
    {
      title: "Tema Lengkap Bisa Custom",
    },
    {
      title: "Form RSVP & Ucapan",
    },
    {
      title: "Amplop Digital & Tanda Kasih",
    },
    {
      title: "Hitung Mundur Waktu Acara",
    },
    {
      title: "Integrasi Google Maps",
    },
    {
      title: "Galeri Foto & Video",
    },
    {
      title: "Informasi Live Streaming",
    },
    {
      title: "QR Code Check-In Acara",
    },
    {
      title: "Layar Sapa & Check-In Counter",
    },
  ];
  const features = [
    {
      title: "Undangan Website",
      description:
        "Cara termudah membuat undangan digital website dengan desain yang dapat di customisasi.",
      url: "https://satumomen.com/images/undangan-digital-website.webp",
    },
    {
      title: "Undangan Video 3D",
      description:
        "Dengan undangan video 3D ini dijamin tamu undangan terpesona dan hadir ke acara kamu.",
      url: "https://satumomen.com/images/undangan-video-3d.webp",
    },
    {
      title: "Video Ucapan 3D",
      description:
        "Jasa bikin video ucapan ulang tahun dan hari-hari besar, seperti idul fitri, natal, 17 agustus, dll.",
      url: "https://satumomen.com/images/jasa-bikin-video-ucapan.webp",
    },

    {
      title: "Check-In System",
      description:
        "Kelola daftar tamu secara digital dengan fitur RSVP yang dilengkapi QR Code check-in system.",
      url: "https://satumomen.com/images/checkin-system.webp",
    },

    {
      title: "Affiliate",
      description:
        "Dapatkan income dengan menjadi partner kami. Mulai dengan tanpa modal dan komisi 30%.",
      url: "https://satumomen.com/images/reseller-undangan-digital.webp",
    },
    {
      title: "Undangan Cetak",
      description:
        "Kualitas premium, harga terjangkau. Dengan desain yang bisa di custom sesuai keinginan.",
      url: "https://satumomen.com/images/undangan-cetak.webp",
    },
  ];

  return (
    <div className="bg-white font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-teal-500 font-bold text-lg">Satu Momen</div>
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-teal-500">
              Home
            </a>
            <a href="#" className="hover:text-teal-500">
              Tema
            </a>
            <a href="#" className="hover:text-teal-500">
              Video 3D
            </a>
            <a href="#" className="hover:text-teal-500">
              Portofolio
            </a>
            <a href="#" className="hover:text-teal-500">
              Music
            </a>
          </nav>
          <button className="btn-primary-sm">Portal Pelanggan</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-500 text-white px-6 py-12">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-md:px-8 max-sm:px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Semua yang Kamu butuhkan untuk wujudkan Momen impian
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
                gap-4 sm:gap-6 md:gap-8 lg:gap-10 
                max-w-7xl mx-auto 
                px-4 sm:px-6 lg:px-8"
          >
            {features.map((feature) => (
              <ItemServices key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

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

      <section className="">
        <LeftSectionSpec
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
    </div>
  );
}
