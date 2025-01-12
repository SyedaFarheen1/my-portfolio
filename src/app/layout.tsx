"use client";
import "./globals.css";
import React, { useState } from "react";

const TABS = ["About Me", "Projects", "Contact Me", "Blogs"];

export default function RootLayout() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <html lang="en">
      <body>
        <div className="tab-container">
          {/* Tab Headers */}
          <div className="tabs">
            {TABS.map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "About Me" && <AboutMe />}
            {activeTab === "Projects" && <Projects />}
            {activeTab === "Contact Me" && <ContactMe />}
            {activeTab === "Blogs" && <Blogs />}
          </div>
        </div>
      </body>
    </html>
  );
}

// Placeholder components
function AboutMe() {
  return <h1>About Me Section</h1>;
}

function Projects() {
  return <h1>Projects Section</h1>;
}

function ContactMe() {
  return <h1>Contact Me Section</h1>;
}

function Blogs() {
  return <h1>Blogs Section</h1>;
}
