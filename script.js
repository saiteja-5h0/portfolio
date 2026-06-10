const portfolioData = {
  projects: [
    {
      title: "Child Missing Tracker",
      icon: "🔍",
      description:
        "A full-stack platform with unique-ID registration, secure relational data retrieval, and a management dashboard for missing-child identification and tracking.",
      url: "https://github.com/saiteja-5h0/child_missing_tracker",
      color: "#c7ff42",
    },
    {
      title: "Organ-e",
      icon: "🏥",
      description:
        "An emergency donor-recipient platform with fast medical-record retrieval, validation safeguards, and a mobile-responsive interface.",
      url: "https://github.com/saiteja-5h0/organ-e",
      color: "#a896ff",
    },
    {
      title: "AI Fruit Ripeness",
      icon: "🍎",
      description:
        "A machine-learning image-classification pipeline that processes fruit imagery and uses a convolutional neural network to identify ripeness stages.",
      url: "https://github.com/saiteja-5h0/fruit_ai_project",
      color: "#ff825c",
    },
  ],
  experience: [
    {
      company: "IBM SkillsBuild (AICTE Supported 1M1B)",
      role: "AI for Sustainability Virtual Intern",
      date: "Dec 2025 — Jan 2026",
      summary:
        "Designed Agentic AI and RAG pipelines, applied NLP techniques to improve system accuracy, and produced traceable technical system documentation.",
      tags: ["Agentic AI", "RAG", "NLP", "Documentation"],
    },
    {
      company: "Apex Planet Software Pvt Ltd",
      role: "Web Development Virtual Intern",
      date: "Jul 2025 — Aug 2025",
      summary:
        "Built responsive web components, integrated frontend logic with backend interfaces, tested browser compatibility, and debugged JavaScript performance issues.",
      tags: ["HTML5", "CSS3", "JavaScript", "Git"],
    },
    {
      company: "VaultofCodes (Google for Education Partner)",
      role: "Full Stack Development Virtual Intern",
      date: "Jul 2025 — Aug 2025",
      summary:
        "Contributed to end-to-end applications, implemented SQL connectivity and CRUD operations, and improved stability through edge-case testing and debugging.",
      tags: ["Full Stack", "SQL", "CRUD", "Testing"],
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["JavaScript", "Java", "Python", "C", "SQL"],
    },
    {
      title: "Web Dev",
      items: ["HTML5", "CSS3", "React", "Flask", "Tailwind"],
    },
    {
      title: "AI & ML",
      items: ["Agentic AI", "RAG", "NLP", "OpenCV", "Pandas"],
    },
    {
      title: "Tools & Cloud",
      items: ["MySQL", "MongoDB", "AWS", "GCP", "Git"],
    },
  ],
  education: [
    {
      school: "CMR Institute of Technology",
      course: "B.Tech, Computer Science & Engineering",
      date: "2023 — 2027",
      result: "CGPA: 7.53",
    },
    {
      school: "Sri Chaitanya Jr. Kalasala",
      course: "Intermediate, MPC",
      date: "Completed 2023",
      result: "96.9%",
    },
    {
      school: "Narayana High School",
      course: "SSC, 10th Grade",
      date: "Completed 2021",
      result: "CGPA: 10.0",
    },
  ],
  certifications: [
    "AI Skills Passport - EY & Microsoft",
    "ITSM Fundamentals - ServiceNow",
    "Fundamentals of Sustainability and Technology - IBM SkillsBuild",
    "Enterprise Networking, Security & Automation - Cisco CCNA",
    "SQL Basic Certificate - HackerRank",
    "Python 101 for Data Science - IBM",
    "OPP Python - Infosys Springboard",
    "ACHIEVEMENTS",
    "Agentic AI Badge - IBM SkillsBuild",
    "Prompt Design in Vertex AI - Google Cloud",
    "Multimodal RAG Skill Badge - Google Cloud",
    "Data Analytics Job Simulation - Deloitte Australia",
    "GenAI Powered Data Analytics Job Simulation - TATA",
  ],
};

const projectGrid = document.querySelector("#project-grid");
const experienceList = document.querySelector("#experience-list");
const skillsGrid = document.querySelector("#skills-grid");
const educationList = document.querySelector("#education-list");
const certificationList = document.querySelector("#certification-list");

portfolioData.projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";
  article.style.setProperty("--project-color", project.color);
  article.innerHTML = `
    <a href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.title}">
      <div class="project-header">
        <div class="project-icon-box" style="background-color: ${project.color}22; color: ${project.color}">
          <span>${project.icon}</span>
        </div>
        <div class="project-github">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 .7A11.5 11.5 0 0 0 8.36 23c.58.1.79-.25.79-.56v-2.2c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.7-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.28-1.29-5.28-5.7 0-1.26.45-2.3 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.06.74.8 1.19 1.84 1.19 3.1 0 4.43-2.72 5.4-5.3 5.7.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/>
          </svg>
        </div>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="view-repo">Repository →</span>
      </div>
    </a>
  `;

  // Add listeners to individual card
  article.addEventListener('mouseenter', () => cursorGlow.classList.add('active'));
  article.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));

  projectGrid.appendChild(article);
});

portfolioData.experience.forEach((item, index) => {
  const article = document.createElement("article");
  article.className = "experience-item reveal";
  article.innerHTML = `
    <span class="experience-number">0${index + 1}</span>
    <div>
      <p class="experience-date">${item.date}</p>
      <h3>${item.role}</h3>
      <h4>${item.company} · Remote</h4>
    </div>
    <div>
      <p>${item.summary}</p>
      <div class="project-tags">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `;
  experienceList.appendChild(article);
});

portfolioData.skillGroups.forEach((group, index) => {
  const section = document.createElement("section");
  section.className = "skill-group";
  section.innerHTML = `
    <span class="skill-number">0${index + 1}</span>
    <div>
      <h3>${group.title}</h3>
      <ul class="skill-list">
        ${group.items
      .map((item) => `<li>${item}</li>`)
      .join("")}
      </ul>
    </div>
  `;
  skillsGrid.appendChild(section);
});

portfolioData.education.forEach((item) => {
  const article = document.createElement("article");
  article.className = "education-item";
  article.innerHTML = `
    <p>${item.date}</p>
    <h3>${item.school}</h3>
    <span>${item.course}</span>
    <strong>${item.result}</strong>
  `;
  educationList.appendChild(article);
});

let certIndex = 1;
portfolioData.certifications.forEach((certification) => {
  if (certification === "ACHIEVEMENTS") {
    const separator = document.createElement("div");
    separator.className = "certification-separator reveal";
    separator.innerHTML = `<h3>ACHIEVEMENTS</h3>`;
    certificationList.appendChild(separator);
    return;
  }
  const item = document.createElement("div");
  item.className = "certification-item reveal";

  let formattedCert = certification;
  if (certification.includes(" - ")) {
    const parts = certification.split(" - ");
    formattedCert = `${parts[0]} — <span class="certification-highlight">${parts[1]}</span>`;
  } else if (certification.includes(" — ")) {
    const parts = certification.split(" — ");
    formattedCert = `${parts[0]} — <span class="certification-highlight">${parts[1]}</span>`;
  }

  item.innerHTML = `<span>${String(certIndex).padStart(2, "0")}</span><p>${formattedCert}</p>`;
  certificationList.appendChild(item);
  certIndex++;
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener(
  "pointermove",
  (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  },
  { passive: true },
);

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button, .project-card, .header-cta')) {
    cursorGlow.classList.add('active');
  } else {
    cursorGlow.classList.remove('active');
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
