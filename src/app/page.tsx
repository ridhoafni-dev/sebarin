import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-teal-500 font-bold text-lg">Satu Momen</div>
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-teal-500">
              Tema
            </a>
            <a href="#" className="hover:text-teal-500">
              Portofolio
            </a>
            <a href="#" className="hover:text-teal-500">
              Harga
            </a>
            <a href="#" className="hover:text-teal-500">
              Tutorial
            </a>
            <a href="#" className="hover:text-teal-500">
              Cetak
            </a>
            <a href="#" className="hover:text-teal-500">
              Video
            </a>
            <a href="#" className="hover:text-teal-500">
              Blog
            </a>
            <a href="#" className="hover:text-teal-500">
              Promo
            </a>
          </nav>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-600">
            Daftar & Coba Gratis
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-500 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Buat Undangan Online Digital Website Untuk Launching
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Buat undangan online digital website custom dengan Satu Momen,
              mudah digunakan, dan selesai dalam hitungan menit.
            </p>
            <button className="bg-white text-teal-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Daftar & Coba Gratis
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
          <Image
                src="https://satumomen.com/images/undangan-digital-website.webp"
                alt="Phone Preview"
                width={400}
                height={600}
                quality={100}
                className="w-auto"
              />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Semua yang Kamu butuhkan untuk wujudkan Momen impian
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Undangan Website →
              </h3>
              <p className="text-gray-600 mb-4">
                Cara termudah membuat undangan digital website dengan desain
                yang dapat di customisasi.
              </p>
              <Image
                src="/path-to-website-invitation-image.png"
                alt="Undangan Website"
                width={500}
                height={300}
                className="rounded"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Undangan Video 3D →
              </h3>
              <p className="text-gray-600 mb-4">
                Dengan undangan video 3D ini dijamin tamu undangan terpesona dan
                hadir ke acara kamu.
              </p>
              <Image
                src="/path-to-3d-video-image.png"
                alt="Undangan Video 3D"
                width={500}
                height={300}
                className="rounded"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Undangan Cetak →
              </h3>
              <p className="text-gray-600 mb-4">
                Kualitas premium, harga terjangkau. Dengan desain yang bisa di
                custom sesuai keinginan.
              </p>
              <Image
                src="/path-to-print-invitation-image.png"
                alt="Undangan Cetak"
                width={500}
                height={300}
                className="rounded"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Check-In System →
              </h3>
              <p className="text-gray-600 mb-4">
                Kelola daftar tamu secara digital dengan fitur RSVP yang
                dilengkapi QR Code check-in system.
              </p>
              <Image
                src="/path-to-checkin-system-image.png"
                alt="Check-In System"
                width={500}
                height={300}
                className="rounded"
              />
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Affiliate & Reseller →
              </h3>
              <p className="text-gray-600 mb-4">
                Dapatkan income dengan menjadi partner kami. Mulai dengan tanpa
                modal dan komisi 30%.
              </p>
              <Image
                src="/path-to-affiliate-reseller-image.png"
                alt="Affiliate & Reseller"
                width={500}
                height={300}
                className="rounded"
              />
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mahar & Souvenir →
              </h3>
              <p className="text-gray-600 mb-4">
                Dapatkan mahar custom & souvenir pernikahan berkualitas dengan
                harga terjangkau.
              </p>
              <Image
                src="/path-to-mahar-souvenir-image.png"
                alt="Mahar & Souvenir"
                width={500}
                height={300}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Top Feature */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <div className="flex-1">
              <Image
                src="/path-to-digital-invitation-image.png"
                alt="Digital Invitation"
                width={500}
                height={300}
                className="rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Buat Undangan Online Digital Website 10 Menit Cukup Pake HP Aja
              </h3>
              <p className="text-gray-600">
                Buat undangan website praktis dan nyaman. Tanpa harus di depan
                laptop berjam-jam. Cukup pilih tema, edit detail acara, upload
                foto, semua bisa selesai dalam hitungan menit.
              </p>
              <p className="mt-4 text-teal-500 font-semibold">satumomen.com</p>
            </div>
          </div>

          {/* Bottom Feature */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                450+ Pilihan Tema Beragam Kategori Acara
              </h3>
              <p className="text-gray-600">
                Cocok untuk Kamu yang ingin membuat website undangan nikah &
                acara apapun. Tersedia 450+ tema undangan beragam kategori
                tinggal pilih, edit, dan kirim undangan websitemu.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/path-to-theme-selection-image.png"
                alt="Theme Selection"
                width={500}
                height={300}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
