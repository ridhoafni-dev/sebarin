import Image from "next/image";

export default function Home() {
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Buat Undangan Online Digital Website Untuk Launching
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Buat undangan online digital website custom dengan Satu Momen,
              mudah digunakan, dan selesai dalam hitungan menit.
            </p>
            <button className="btn-dark">Tanya-Tanya Dulu Yuk..</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://satumomen.com/images/aplikasi-undangan-digital-website.webp"
              alt="Phone Preview"
              width={400}
              height={600}
              quality={100}
              objectFit="cover"
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

      {/* Top Feature */}
      <section className="bg-white">
        <div className="container mx-auto max-sm:px-6 py-10">
          <div className="flex flex-col lg:flex-row items-center max-sm:gap-8">
            <div className="flex-1 relative flex items-end justify-center">
              <Image
                src="https://satumomen.com/images/undangan-digital-unlimited-tamu-undangan.webp"
                alt="Digital Invitation"
                width={563}
                height={435}
                className="h-auto object-contain "
              />
            </div>
            <div className="flex-1 place-self-center">
              <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
                Bebas Input Nama Tamu Sebanyak-Banyaknya
              </h2>
              <p className="text-dark">
                Undangan tamu lebih sopan dengan undangan yang dibuat personal.
                Tidak ada batasan tamu undangan kamu bisa kirim sepuasnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Feature */}

      <section className="bg-soft">
        <div className="container mx-auto lg:px-20 max-sm:px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center max-md:gap-8 max-sm:gap-8 max-md:flex-col-reverse max-sm:flex-col-reverse">
            <div className="flex-1">
              <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
                450+ Pilihan Tema Beragam Kategori Acara
              </h2>
              <p className="text-dark">
                Cocok untuk Kamu yang ingin membuat website undangan nikah &
                acara apapun. Tersedia 450+{" "}
                <span className="text-primary">tema undangan beragam </span>
                kategori tinggal pilih dan kirim undangan websitemu.
              </p>
            </div>
            <div className="flex-1 text-center">
              <Image
                src="https://satumomen.com/images/reseller-undangan-digital-website-4.webp"
                alt="Theme Selection"
                width={550}
                height={550}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-sm:px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center max-sm:gap-8 mb-8">
            <div className="flex-1 relative flex items-end justify-center">
              <Image
                src="https://satumomen.com/images/reseller-undangan-digital-website-7.webp"
                alt="Digital Invitation"
                width={563}
                height={435}
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="flex-1 place-self-center">
              <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800">
                Ratusan Pilihan Music Latar & Bisa Custom
              </h2>
              <p className="text-dark">
                Tersedia lebih dari 600 music latar untuk beragam kategori
                undangan. Kamu juga bisa{" "}
                <span className="text-primary">
                  custom music sendiri dari Sound Cloud.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
