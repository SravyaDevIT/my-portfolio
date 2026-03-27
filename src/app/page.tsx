export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="p-6 flex justify-between">
        <h1 className="text-2xl font-bold">Sravya.dev</h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-bold mb-6">
          Full-Stack Developer<br />Building AI-Powered Web Apps
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          CSE Graduate • Fast Learner • Remote-ready from India
        </p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/SravyaDevIT" 
             className="bg-white text-black px-8 py-3 rounded-full font-medium">
            View GitHub
          </a>
          <a href="#" className="border border-white px-8 py-3 rounded-full font-medium">
            Download Resume
          </a>
        </div>
      </main>
    </div>
  );
}