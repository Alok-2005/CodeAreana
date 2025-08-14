// src/components/CodeArena.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import EventSection from "./EventSection";
import Theme from "./Theme";
import Workflow from "./Workflow";
import Form from './Form';
// Gallery import commented out as in original
// import Gallery from './Gallery';

const CodeArena = () => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const themeRef = useRef();
  const workflowRef = useRef();
  const scheduleRef = useRef();
  const prizesRef = useRef();
  const registerRef = useRef();

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Add GSAP animations here as needed for sections
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navbar - Replaced with unified version */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section 
          id="hero"
          ref={heroRef}
        >
          <HeroSection onRegisterClick={scrollToRegister}/>
        </section>

        {/* Event Details */}
        <section 
          id="event"
          ref={aboutRef}
        >
          <EventSection />
        </section>

        {/* Theme */}
        <section 
          id="theme"
          ref={themeRef}
        >
          <Theme />
        </section>

        {/* Workflow */}
        <section 
          id="workflow"
          ref={workflowRef}
        >
          <Workflow />
        </section>

        {/* Schedule Section */}
        <section 
          id="schedule"
          ref={scheduleRef}
          className="py-20 relative"
          style={{
            background: 'linear-gradient(to bottom, rgba(30, 30, 40, 0.9), rgba(15, 15, 25, 1))'
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236d5dfe' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Event <span className="text-indigo-400">Schedule</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 border-l-2 border-indigo-500 border-opacity-30">
                {[
                  {
                    time: "09:00 AM",
                    title: "Registration & Breakfast",
                    desc: "Check-in and fuel up for the day ahead"
                  },
                  {
                    time: "10:00 AM",
                    title: "Opening Ceremony & Theme Brief",
                    desc: "Kickoff event with keynote speakers and problem statements"
                  },
                  {
                    time: "10:30 AM",
                    title: "Hacking Begins",
                    desc: "Start building with mentor support available throughout"
                  },
                  {
                    time: "12:30 PM",
                    title: "Lunch & Tech Talk",
                    desc: "Refuel and learn from industry experts"
                  },
                  {
                    time: "04:00 PM",
                    title: "Project Submission Deadline",
                    desc: "Finalize and submit your projects"
                  },
                  {
                    time: "04:30 PM",
                    title: "Demo & Judging",
                    desc: "Present your solutions to our panel of judges"
                  },
                  {
                    time: "06:00 PM",
                    title: "Closing Ceremony & Awards",
                    desc: "Announcement of winners and closing remarks"
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="schedule-item mb-12 relative pl-8"
                  >
                    <div className="absolute left-[-37px] top-1 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                      </div>
                    </div>
                    
                    <div className="text-indigo-400 font-bold mb-1">{item.time}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section 
          id="prizes"
          ref={prizesRef}
          className="py-20 bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-indigo-400">Prizes</span> & Recognition
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
                Compete for incredible prizes and gain recognition from industry leaders
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="prize-card bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-8 border border-gray-700 transform transition-all hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-indigo-900 bg-opacity-30 rounded-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-amber-300">First Place</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>₹5,000 Cash Prize</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Paid Internship Opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Premium Developer Hardware</span>
                  </li>
                </ul>
              </div>
              
              <div className="prize-card bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-8 border border-gray-700 transform transition-all hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-indigo-900 bg-opacity-30 rounded-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-300">Second Place</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>₹3,000 Cash Prize</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Mentorship Program Access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Exclusive Developer Swag</span>
                  </li>
                </ul>
              </div>
              
              <div className="prize-card bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-8 border border-gray-700 transform transition-all hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-indigo-900 bg-opacity-30 rounded-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-800 to-amber-700 flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-amber-500">Third Place</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>₹2,000 Cash Prize</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Tech Conference Passes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Premium Learning Resources</span>
                  </li>
                </ul>
              </div>
            </div>
            
    
          </div>
        </section>

        {/* Registration Section */}
        <section 
          id="register"
          ref={registerRef}
          className="py-20 relative"
          style={{
            background: 'linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(15, 15, 25, 1))'
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236d5dfe' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-indigo-400">Compete?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
                Form your team (3-4 members, problem statement will be given on the spot, and register today.
                Limited spots available!
              </p>
            </div>
            
            <div className="form-container max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-8 border border-gray-700 shadow-xl">
              <Form />
            </div>
          </div>
        </section>

        {/* Gallery Section (commented out as in original) */}
        {/*
        <section id="gallery">
          <Gallery />
        </section>
        */}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
               
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  CodeCraft
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering the next generation of developers through innovative events and learning opportunities.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-1">PCCOE-Ravet — CodeCraft Club Office</p>
              <p className="text-gray-400 mb-1">
                Email: <a href="mailto:pccoer.ravet@gmail.com" className="text-indigo-400 hover:underline">pccoer.ravet@gmail.com</a>
              </p>
              <p className="text-gray-400">Phone: +91 82372 38080</p>
              
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                {[
                  { icon: 'facebook', color: '#3b5998' },
                  { icon: 'twitter', color: '#1DA1F2' },
                  { icon: 'instagram', color: '#E1306C' },
                  { icon: 'linkedin', color: '#0077B5' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-indigo-600 transition-colors"
                    style={{ backgroundColor: social.color }}
                  >
                    <div className="text-white">{social.icon[0].toUpperCase()}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 CodeCraft x ACM-W — CodeArena 3.0. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeArena;