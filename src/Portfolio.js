import React, { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="text-center p-8 bg-gray-800 text-white">
        <img
          src="/profile.jpg"
          alt="Nitish Reddy"
         className="w-[300px] h-[300px] object-cover object-top rounded-full mx-auto mb-4 border-4 border-white shadow-lg"


        />
        <h1 className="text-3xl font-bold">Nitish Reddy Sude</h1>
        <p>Computer Science with AI & ML | Neil Gogte Institute of Technology</p>
        <p>
          Email: <a className="text-blue-400" href="mailto:nitishreddy.sude@gmail.com">nitishreddy.sude@gmail.com</a> |
          Phone: +91 8019723762
        </p>
        <p>
          <a className="text-blue-400" href="https://github.com/nitishreddy2003" target="_blank">GitHub</a> |
          <a className="text-blue-400" href="https://linkedin.com/in/nitishreddy2003" target="_blank">LinkedIn</a>
        </p>
        <button onClick={toggleDarkMode} className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <section>
          <h2 className="text-xl font-semibold border-b pb-2">About Me</h2>
          <p className="mt-2">Hardworking and dedicated developer with experience in machine learning, full-stack web development, and test automation. Passionate about building intelligent systems and efficient web applications.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
          <p className="mt-2">
            <strong>BE in Computer Science with AI & ML</strong><br />
            Neil Gogte Institute of Technology (2021 – 2025)<br />
            GPA: 8.1 / 10
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>AccelQ – Associate Software Engineer Intern</strong> (Jan 2025 – Jun 2025)<br />Worked on UI validation, DOM traversal, API integration, and automation workflows using a low-code platform.</li>
            <li><strong>Prasunet Company – Machine Learning Intern</strong> (Aug 2024 – Sep 2024)<br />Built ML models for house price prediction, clustering, and image classification using SVM, CNN.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>WanderCrib – Travel App</strong>: <a className="text-blue-500" href="https://github.com/nitishreddy2003/WanderCrib-Travel-Website" target="_blank">GitHub</a><br />Full-stack booking platform with user auth, filters, REST API, EJS rendering.</li>
            <li><strong>Electronic Affidavit – Face Recognition</strong>: <a className="text-blue-500" href="https://github.com/nitishreddy2003/Face_Recognition" target="_blank">GitHub</a><br />Face recognition system using YOLOv5, CNNs, built with MERN stack.</li>
            <li><strong>Helmet Detection & Traffic Control</strong>: <a className="text-blue-500" href="https://github.com/nitishreddy2003/Helmet_detection" target="_blank">GitHub</a><br />YOLOv5-based real-time helmet detection system for traffic monitoring.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Languages: Java, Python, JavaScript</li>
            <li>Web Development: HTML, CSS, React, Node.js</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>ML/DL: EDA, Feature Engineering, CNNs, ANNs</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Relevant Coursework</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>AI, Machine Learning, DBMS</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Certifications</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>Helmet Detection Project Certification – Neil Gogte Institute of Technology</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b pb-2">Contact Me</h2>
          <p className="mt-4 text-lg">Feel free to reach out via email or phone:</p>
          <p className="mt-2">📧 <a className="text-blue-500" href="mailto:nitishreddy.sude@gmail.com">nitishreddy.sude@gmail.com</a></p>
          <p className="mt-1">📞 +91 8019723762</p>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; 2025 Nitish Reddy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
