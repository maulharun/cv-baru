import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* About Section */}
      <section className="text-center py-10">
        <Image
          src="/images/profile.JPG" // Ganti dengan path gambar profil
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 border-yellow-400 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-yellow-400 mt-4">👋 Hi, I’m Doni Rizki Maulana</h1>
        <p className="text-lg text-gray-300 mt-2">A passionate web developer specialized in Next.js and React.</p>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center">🚀 Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="px-4 py-2 bg-gray-700 rounded-md">Next.js</span>
          <span className="px-4 py-2 bg-gray-700 rounded-md">React.js</span>
          <span className="px-4 py-2 bg-gray-700 rounded-md">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gray-700 rounded-md">JavaScript</span>
          <span className="px-4 py-2 bg-gray-700 rounded-md">Node.js</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center">💼 Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-gray-800 rounded-lg text-center shadow-lg">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-400 mt-2">Building high-performance websites using Next.js & React.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center shadow-lg">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-gray-400 mt-2">Creating modern, user-friendly interfaces with Tailwind CSS.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center shadow-lg">
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="text-gray-400 mt-2">Improving search engine rankings for better visibility.</p>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center">📂 Portfolios</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2">A modern e-commerce website built with Next.js.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2">A personal blog powered by Markdown and Next.js.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400">📞 Contact</h2>
        <p className="text-lg text-gray-300 mt-2">
          Feel free to reach me via email: <span className="text-yellow-400">your.email@example.com</span>
        </p>
      </section>
    </div>
  );
}
