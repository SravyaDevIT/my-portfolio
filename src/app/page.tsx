import AIChat from './components/AIChat';

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

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Full-Stack Developer<br />
          Building AI-Powered Web Apps
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          CSE Graduate (2015)<br />
          Node.js, React, Next.js & Python | Focused on Full Stack Development, RAG Systems, AI & Data Science
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/SravyaDevIT" target="_blank" className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition">
            View GitHub
          </a>
          <a href="/Sravya_Chindurupu_Resume_2026.pdf" target="_blank" className="border border-white px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-black transition">
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I am a passionate CSE Graduate who started my journey as a Full-Stack and IoT Developer. 
          After working in public service, I am now actively restarting my career in tech. 
          I love building intelligent web applications and I'm currently focusing on modern full-stack development, 
          RAG systems, AI, and Data Science. Fast learner and problem solver — always excited to ship real projects.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800 bg-gray-900">
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">Frontend: React, Next.js, Tailwind CSS</div>
          <div className="bg-gray-800 p-6 rounded-xl">Backend: Node.js, Python, FastAPI</div>
          <div className="bg-gray-800 p-6 rounded-xl">AI & Data Science: Pandas, scikit-learn, RAG, OpenAI/Gemini</div>
          <div className="bg-gray-800 p-6 rounded-xl">Databases: MongoDB, MySQL, Supabase</div>
          <div className="bg-gray-800 p-6 rounded-xl">Tools: Git, GitHub, Linux</div>
          <div className="bg-gray-800 p-6 rounded-xl">Soft Skills: Fast Learning, Problem Solving</div>
        </div>
      </section>

      {/* Projects Section (Ready for future projects) */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
        <p className="text-gray-400 mb-8">Coming very soon — My first AI-powered projects will be added here in the next few days.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project cards will go here later */}
          <div className="bg-gray-800 p-8 rounded-2xl text-center">
            <p className="text-gray-500">Project 1 • AI Chat Assistant (In Progress)</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl text-center">
            <p className="text-gray-500">Project 2 • Coming Soon</p>
          </div>
        </div>
      </section>

      <div className="text-center text-gray-500 text-sm py-12 border-t border-gray-800">
        Built with Next.js • Actively updating in 2026
      </div>
      <AIChat />
    </div>
  );
}