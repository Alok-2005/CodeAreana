"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import EventSection from "./EventSection";
import Theme from "./Theme";
import Workflow from "./Workflow";
import Form from './Form';
import { Timeline } from '../ui/timeline'; // Assuming this is available in the project

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

  // Set the page title and favicon
  useEffect(() => {
    // Set the page title
    document.title = "CodeArena 3.0 - CodeCraft x ACM-W";

    // Dynamically set the favicon
    const favicon = document.querySelector("link[rel~='icon']") || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    favicon.href = '/codearena-favicon.ico'; // Path to CodeArena-specific favicon
    document.head.appendChild(favicon);

    // Cleanup: Restore the default favicon when component unmounts
    return () => {
      const defaultFavicon = document.querySelector("link[rel~='icon']");
      if (defaultFavicon) {
        defaultFavicon.href = '/favicon.ico'; // Restore default favicon
      }
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Add GSAP animations here as needed for sections
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navbar - Replaced with unified version */}
      {/* <Navbar /> */}

      <main>
        {/* Hero Section */}
        <section id="hero" ref={heroRef}>
          <HeroSection onRegisterClick={scrollToRegister}/>
        </section>

        {/* Event Details */}
        <section id="event" ref={aboutRef}>
          <EventSection />
        </section>

        {/* Theme */}
        <section id="theme" ref={themeRef}>
          <Theme />
        </section>

        {/* Workflow */}
        <section id="workflow" ref={workflowRef}>
          <Workflow />
        </section>

        {/* Prizes Section */}
        <section 
          id="prizes"
          ref={prizesRef}
          className="py-20 bg-gray-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30S46.569 60 30 60 0 46.569 0 30 13.431 0 30 0zm0 4C15.663 4 4 15.663 4 30s11.663 26 26 26 26-11.663 26-26S44.337 4 30 4zm0 8c10.493 0 19 8.507 19 19s-8.507 19-19 19-19-8.507-19-19 8.507-19 19-19zm0 4c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 6c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 4c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z' fill='%236d5dfe' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg">
                  Prize Pool
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  ₹10,000
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 font-light">Total Prize Pool</p>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full shadow-md"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-10 border border-indigo-500/30 shadow-xl">
                <div className="text-center mb-10">
                  <div className="inline-block p-6 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-full mb-4 shadow-lg">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-md">
                      <span className="text-3xl">🏆</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    Amazing Rewards Await
                  </h3>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Compete for <span className="text-indigo-400 font-semibold">cash prizes</span>, exclusive opportunities, and recognition to boost your tech career.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    {
                      icon: "💰",
                      title: "Cash Prizes",
                      desc: "₹10K total prize pool distributed among top performers",
                      color: "from-green-400 to-emerald-500"
                    },
                    {
                      icon: "🏢",
                      title: "Internship Offers",
                      desc: "Direct internship opportunities with leading tech companies",
                      color: "from-indigo-400 to-blue-500"
                    },
                    {
                      icon: "🎓",
                      title: "Mentorship Access",
                      desc: "Exclusive mentorship programs with industry veterans",
                      color: "from-blue-400 to-indigo-500"
                    },
                    {
                      icon: "🛍️",
                      title: "Premium Swag",
                      desc: "Exclusive developer merchandise and tech conference passes",
                      color: "from-purple-400 to-pink-500"
                    }
                  ].map((reward, i) => (
                    <div key={i} className="text-center group">
                      <div className="mb-3">
                        <div className={`inline-block p-3 bg-gradient-to-br ${reward.color} bg-opacity-30 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                          <span className="text-2xl block">{reward.icon}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-white">{reward.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{reward.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-indigo-500/30 pt-8">
                  <h4 className="text-xl font-bold text-center mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      Beyond Monetary Rewards
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-indigo-500/20 shadow-md">
                      <div className="text-xl mb-2">🌟</div>
                      <h5 className="font-bold mb-1 text-indigo-300">Industry Recognition</h5>
                      <p className="text-gray-400 text-sm">Get featured on our platforms and industry publications</p>
                    </div>
                    <div className="text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-indigo-500/20 shadow-md">
                      <div className="text-xl mb-2">🤝</div>
                      <h5 className="font-bold mb-1 text-indigo-300">Networking</h5>
                      <p className="text-gray-400 text-sm">Connect with like-minded developers and industry leaders</p>
                    </div>
                    <div className="text-center p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-indigo-500/20 shadow-md">
                      <div className="text-xl mb-2">🚀</div>
                      <h5 className="font-bold mb-1 text-indigo-300">Career Boost</h5>
                      <p className="text-gray-400 text-sm">Stand out with hackathon experience on your portfolio</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-lg text-gray-300 mb-4">Ready to compete for these exciting prizes?</p>
                  <button 
                    onClick={scrollToRegister}
                    className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-bold text-base hover:from-indigo-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg text-white"
                  >
                    Join the Competition
                  </button>
                </div>
              </div>
            </div>
          </div>
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
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Event <span className="text-indigo-400">Schedule</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative w-full">
              <Timeline data={[
                {
                  title: "09:00 AM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Registration & Breakfast
                      </p>
                      <p className="text-xs text-gray-400">
                        Check-in and fuel up for the day ahead
                      </p>
                    </div>
                  ),
                },
                {
                  title: "10:00 AM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Opening Ceremony & Theme Brief
                      </p>
                      <p className="text-xs text-gray-400">
                        Kickoff event with keynote speakers and problem statements
                      </p>
                    </div>
                  ),
                },
                {
                  title: "10:30 AM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Hacking Begins
                      </p>
                      <p className="text-xs text-gray-400">
                        Start building with mentor support available throughout
                      </p>
                    </div>
                  ),
                },
                {
                  title: "12:30 PM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Lunch & Tech Talk
                      </p>
                      <p className="text-xs text-gray-400">
                        Refuel and learn from industry experts
                      </p>
                    </div>
                  ),
                },
                {
                  title: "04:00 PM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Project Submission Deadline
                      </p>
                      <p className="text-xs text-gray-400">
                        Finalize and submit your projects
                      </p>
                    </div>
                  ),
                },
                {
                  title: "04:30 PM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Demo & Judging
                      </p>
                      <p className="text-xs text-gray-400">
                        Present your solutions to our panel of judges
                      </p>
                    </div>
                  ),
                },
                {
                  title: "06:00 PM",
                  content: (
                    <div className="border border-indigo-500/30 rounded-lg p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-md w-full max-w-2xl">
                      <p className="mb-4 text-sm font-normal text-gray-300">
                        Closing Ceremony & Awards
                      </p>
                      <p className="text-xs text-gray-400">
                        Announcement of winners and closing remarks
                      </p>
                    </div>
                  ),
                },
              ]} />
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