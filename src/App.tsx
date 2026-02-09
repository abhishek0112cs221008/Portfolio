import { Mail, Phone, Linkedin, Github, Award, Star, Target } from 'lucide-react';
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Wikipedia-style layout */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="border-b-2 border-border pb-6 mb-8 relative">
          <div className="absolute top-0 right-0">
            <ThemeSwitcher />
          </div>
          <h1 className="text-5xl font-serif mb-2 text-foreground">Abhishek Patel</h1>

          <p className="text-lg text-muted-foreground italic mb-3">Software Engineering Undergraduate</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="mailto:0112cs221008@gmail.com" className="hover:text-blue-700 flex items-center gap-1">
              <Mail size={16} /> 0112cs221008@gmail.com
            </a>
            <a href="tel:8770321224" className="hover:text-blue-700 flex items-center gap-1">
              <Phone size={16} /> 8770321224
            </a>
            <a href="https://linkedin.com/in/abhishek68" className="hover:text-blue-700 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/abhishek0112cs221008" className="hover:text-blue-700 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </div>
        </header>

        {/* Career Objective */}
        <section className="border-b border-border pb-6 mb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Career Objective
          </h2>
          <div className="text-muted-foreground leading-relaxed text-lg mb-4">
            <p>
              Motivated and detail-oriented <strong className="text-foreground">Software Engineering undergraduate</strong> (B.Tech CSE, 2026) with strong foundations in <strong className="text-foreground">Java, SQL, and Data Structures & Algorithms</strong>. Seeking an opportunity to build scalable, high-performance backend systems and contribute to real-world engineering challenges.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Graduation:</span> 2026
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">DSA:</span> 350+ Problems Solved
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Focus:</span> Backend Development & System Design
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-border pb-6 mb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Education
          </h2>

          <div className="space-y-6">
            {/* B.Tech Card */}
            <div className="border-2 border-blue-200 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">B.Tech in Computer Science & Engineering</h3>
                      <p className="text-muted-foreground font-medium text-sm">Bansal Institute of Science & Technology, Bhopal</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full whitespace-nowrap">
                      2022 - 2026
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-muted-foreground">CGPA</span>
                      <span className="text-2xl font-bold text-blue-700">8.45</span>
                      <span className="text-sm text-muted-foreground">/ 10.0</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full flex items-center justify-end pr-2" style={{ width: '84.5%' }}>
                        <span className="text-white text-xs font-bold">84.5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Core CS</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Software Engineering</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">DSA</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">DBMS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* XII Card */}
            <div className="border-2 border-green-200 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  📚
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">XII (Higher Secondary) - MP Board</h3>
                      <p className="text-muted-foreground font-medium text-sm">Adarsh Narmada Higher Secondary School, Ganeo</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full whitespace-nowrap">
                      2021 - 2022
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-muted-foreground">Percentage</span>
                      <span className="text-2xl font-bold text-green-700">91.00%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full flex items-center justify-end pr-2" style={{ width: '91%' }}>
                        <span className="text-white text-xs font-bold">91%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Physics</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Chemistry</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Mathematics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* X Card */}
            <div className="border-2 border-purple-200 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  📖
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">X (Secondary) - MP Board</h3>
                      <p className="text-muted-foreground font-medium text-sm">Adarsh Narmada Higher Secondary School, Ganeo</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full whitespace-nowrap">
                      2020 - 2021
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-muted-foreground">Percentage</span>
                      <span className="text-2xl font-bold text-purple-700">94.75%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-purple-600 h-3 rounded-full flex items-center justify-end pr-2" style={{ width: '94.75%' }}>
                        <span className="text-white text-xs font-bold">94.75%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-3 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded">
                      🏆 Excellent Performance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="border-b border-border pb-6 mb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming Languages */}
            <div className="border border-border p-4 rounded bg-muted/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="text-blue-600">💻</span> Programming Languages
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-muted-foreground">Java</span>
                    <span className="text-xs text-muted-foreground">Advanced</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Technologies */}
            <div className="border border-border p-4 rounded bg-muted/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="text-green-600">🌐</span> Web Technologies
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-muted-foreground">HTML5 & CSS3</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-muted-foreground">JavaScript</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="border border-border p-4 rounded bg-muted/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="text-purple-600">⚡</span> Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600 text-white rounded text-sm font-medium">Spring Boot</span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded text-sm font-medium">REST APIs</span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded text-sm font-medium">Flutter</span>
              </div>
            </div>

            {/* Database */}
            <div className="border border-border p-4 rounded bg-muted/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="text-orange-600">🗄️</span> Database
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-muted-foreground">MySQL</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-muted-foreground">SQLite</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Tools */}
            <div className="border border-border p-4 rounded bg-muted/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="text-muted-foreground">🛠️</span> Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-white rounded text-sm font-medium">Git</span>
                <span className="px-3 py-1 bg-gray-700 text-white rounded text-sm font-medium">GitHub</span>
                <span className="px-3 py-1 bg-gray-700 text-white rounded text-sm font-medium">IntelliJ IDEA</span>
                <span className="px-3 py-1 bg-gray-700 text-white rounded text-sm font-medium">VS Code</span>
              </div>
            </div>

            {/* Core Concepts */}
            <div className="border border-border p-4 rounded bg-muted/30">
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <span className="text-red-600">🎯</span> Core Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-600 text-white rounded text-sm font-medium">Data Structures & Algorithms</span>
                <span className="px-3 py-1 bg-red-600 text-white rounded text-sm font-medium">OOP</span>
                <span className="px-3 py-1 bg-red-600 text-white rounded text-sm font-medium">Problem Solving</span>
              </div>
            </div>
          </div>
        </section>

        {/* Internship */}
        <section className="border-b border-border pb-6 mb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Internship
          </h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Java Programming Intern</h3>
                <p className="text-muted-foreground font-medium">Algorive Technologies</p>
              </div>
              <span className="text-muted-foreground text-sm">Oct 2025 – Nov 2025</span>
            </div>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Developed backend modules using <strong className="text-foreground">Core Java</strong>, applying OOP and exception handling</li>
              <li>Worked on requirement analysis, modular design, and clean code practices in a real-world codebase</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="border-b border-border pb-6 mb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Projects
          </h2>
          <div className="space-y-6">
            {/* Prime Project */}
            <div className="border-2 border-border p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Prime Project – E-Commerce Platform</h3>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    ✓ Completed
                  </span>
                </div>
                <a href="https://github.com" className="text-blue-700 hover:text-blue-900 text-sm font-medium flex items-center gap-1 bg-blue-50 px-3 py-1 rounded hover:bg-blue-100 transition-colors">
                  <Github size={16} /> View Code
                </a>
              </div>

              <p className="mb-4 text-muted-foreground leading-relaxed">
                A comprehensive full-stack e-commerce platform built with Spring Boot REST APIs, featuring role-based authentication
                and authorization (User/Admin) with secure payment verification workflow.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-foreground text-sm">🔑 Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Product CRUD operations with image upload</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Shopping cart & order management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">UTR-based payment verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Admin dashboard with analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Order status tracking system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Automated email notifications</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground text-sm">💻 Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">Spring Boot</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">REST APIs</span>
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-medium">MySQL</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-medium">Java</span>
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-medium">HTML/CSS</span>
                  <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-xs font-medium">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Expense Tracker */}
            <div className="border-2 border-border p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Expense Tracker App</h3>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    ✓ Completed
                  </span>
                </div>
                <a href="https://github.com" className="text-blue-700 hover:text-blue-900 text-sm font-medium flex items-center gap-1 bg-blue-50 px-3 py-1 rounded hover:bg-blue-100 transition-colors">
                  <Github size={16} /> View Code
                </a>
              </div>

              <p className="mb-4 text-muted-foreground leading-relaxed">
                An offline-first mobile expense tracking application with secure local data storage, designed for personal finance
                management and group expense splitting.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-foreground text-sm">🔑 Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Category-wise expense analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Real-time balance computation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Group expense splitting logic</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Offline-first architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Secure local data storage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-muted-foreground">Visual expense reports</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground text-sm">💻 Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">Flutter</span>
                  <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-medium">Dart</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">SQLite</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="border-b border-border pb-6 mb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Certifications & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LeetCode Achievement */}
            <div className="border-2 border-yellow-200 p-5 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <Award className="text-yellow-600 mt-1 flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">LeetCode Problem Solving</h3>
                  <a href="https://leetcode.com" className="text-blue-700 hover:text-blue-900 text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                    View Profile →
                  </a>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-yellow-700">350+</span>
                  <span className="text-sm text-muted-foreground">Problems Solved</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Strong problem-solving skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Time complexity analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Algorithmic thinking & optimization</span>
                </div>
              </div>
            </div>

            {/* HackerRank Certifications */}
            <div className="border-2 border-blue-200 p-5 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <Star className="text-blue-600 mt-1 flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">HackerRank Certifications</h3>
                  <a href="https://hackerrank.com" className="text-blue-700 hover:text-blue-900 text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                    View Certificates →
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-card rounded border border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">JAVA</span>
                    <span className="text-sm text-muted-foreground">Programming</span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">Basic</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-card rounded border border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">SQL</span>
                    <span className="text-sm text-muted-foreground">Database</span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">Intermediate</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-card rounded border border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xs">DSA</span>
                    <span className="text-sm text-muted-foreground">Problem Solving</span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">Basic</span>
                </div>
              </div>
            </div>

            {/* CoCubes Assessment */}
            <div className="border-2 border-green-200 p-5 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-start gap-3 mb-3">
                <Target className="text-green-600 mt-1 flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">CoCubes National Assessment</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive aptitude and technical evaluation</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-green-700">664</span>
                    <span className="text-2xl text-muted-foreground">/</span>
                    <span className="text-2xl text-muted-foreground">800</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                </div>

                <div className="flex-1">
                  <div className="w-full bg-muted/50 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full flex items-center justify-end pr-2" style={{ width: '83%' }}>
                      <span className="text-white text-xs font-bold">83%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Percentile Score</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="p-2 bg-card rounded border border-green-100">
                  <p className="text-xs text-muted-foreground mb-1">Aptitude</p>
                  <p className="text-lg font-bold text-green-700">Strong</p>
                </div>
                <div className="p-2 bg-card rounded border border-green-100">
                  <p className="text-xs text-muted-foreground mb-1">Technical</p>
                  <p className="text-lg font-bold text-green-700">Good</p>
                </div>
                <div className="p-2 bg-card rounded border border-green-100">
                  <p className="text-xs text-muted-foreground mb-1">Reasoning</p>
                  <p className="text-lg font-bold text-green-700">Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-6">
          <h2 className="text-3xl font-serif border-b-2 border-border pb-2 mb-4 text-foreground">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information Card */}
            <div className="border-2 border-blue-200 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Mail className="text-blue-600" size={24} />
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-card rounded border border-blue-100 hover:border-blue-300 transition-colors">
                  <Mail className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm mb-1">Email</p>
                    <a href="mailto:0112cs221008@gmail.com" className="text-blue-700 hover:text-blue-900 hover:underline text-sm break-all">
                      0112cs221008@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-card rounded border border-green-100 hover:border-green-300 transition-colors">
                  <Phone className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
                    <a href="tel:8770321224" className="text-blue-700 hover:text-blue-900 hover:underline text-sm">
                      +91 8770321224
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="border-2 border-purple-200 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Github className="text-purple-600" size={24} />
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a href="https://linkedin.com/in/abhishek68" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-card rounded border border-blue-100 hover:border-blue-400 hover:shadow-sm transition-all group">
                  <Linkedin className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                    <p className="text-muted-foreground text-xs">linkedin.com/in/abhishek68</p>
                  </div>
                  <span className="text-blue-600 text-sm">→</span>
                </a>

                <a href="https://github.com/abhishek0112cs221008" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-card rounded border border-border hover:border-gray-400 hover:shadow-sm transition-all group">
                  <Github className="text-muted-foreground flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">GitHub</p>
                    <p className="text-muted-foreground text-xs">github.com/abhishek0112cs221008</p>
                  </div>
                  <span className="text-muted-foreground text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Quick Info Card - Spans 2 columns */}
            <div className="md:col-span-2 border-2 border-border p-6 rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">📍 Location & Availability</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-bold text-foreground">Bhopal, MP</p>
                </div>
                <div className="text-center p-4 bg-card rounded border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-bold text-green-700">Available for Opportunities</p>
                </div>
                <div className="text-center p-4 bg-card rounded border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                  <p className="font-bold text-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-400 text-center text-sm text-muted-foreground">
          <p>© 2024 Abhishek Patel. Made with ❤️ using React and TypeScript.</p>
          <p className="mt-1 text-xs">B.Tech CSE Student • Bansal Institute of Science & Technology, Bhopal</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
