export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Sravya.dev</h1>
          <div className="space-x-8 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Full-Stack Developer<br />
          Building AI-Powered Web Apps
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          CSE Graduate (2015) • Fast learner with strong coding skills in JavaScript, React, Next.js & Python.<br />
          Restarting my tech career with focus on Web Development + Artificial Intelligence + Data Science.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/SravyaDevIT" 
            target="_blank"
            className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition"
          >
            View GitHub
          </a>
         <a 
            href="#" 
            className="border border-white px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Quick Note */}
      <div className="text-center text-gray-500 text-sm pb-12">
        Portfolio under active development — New AI projects coming soon!
      </div>
    </div>
  );
}