import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import AnimateOnScroll from "../components/AnimateOnScroll";
import {
  SiMongodb,
  SiMysql,
  SiReact,
  SiExpress,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";
import DropLab from "../assets/DropLab.png";
import MusicShop from "../assets/MusicShop.png";
import FashionVibes from "../assets/FashionVibes.png";
import OnlineEducation from "../assets/OnlineEducation.png";
import Khadameni from "../assets/Khadamni.png";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // ✅ move useNavigate here
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const projects = [
    {
      name: "DropLab",
      stack: "Symfony PHP",
      description: t("droplabDesc"),
      link: "",
      image: DropLab,
    },
    {
      name: "MusicShop",
      stack: "MERN Stack",
      description: t("musicshopDesc"),
      link: "",
      image: MusicShop,
    },
    {
      name: "Khadameni",
      stack: "MERN Stack",
      description: t("khadameniDesc"),
      link: "",
      image: Khadameni,
    },
    {
      name: "FashionVibes",
      stack: "HTML, CSS",
      description: t("staticProjectDesc"),
      link: "https://your-static-project.vercel.app",
      image: FashionVibes,
    },
    {
      name: "Online Education",
      stack: "MERN Stack",
      description: t("onlineEducationDesc"),
      link: "",
      image: OnlineEducation,
    },
  ];

  return (
    <div className="home-page">
      {/* Header Section */}
      <AnimateOnScroll animation="fade-up" className="header-wrapper">
        <section className="header-section">
          <div className="header-left">
            <h1>Ahmed Nasri</h1>
            <p>{t("description")}</p>
            <button
              className="contact-button"
              onClick={() => navigate("/Portfolio/contact")}
            >
              {t("contactMe")}
            </button>
          </div>
          <div className="header-right">
            <div className="avatar-placeholder">
              <img src={avatar} alt="Avatar" className="avatar-circle" />
            </div>
            <button
              className="download-cv"
              onClick={() => {
                const link = document.createElement("a");
                const base = import.meta.env.BASE_URL || "/";
                link.href = `${base}cv.pdf`;

                link.target = "_blank";
                link.rel = "noopener noreferrer";

                link.download = "cv.pdf";
                link.click();
              }}
            >
              {t("downloadCV")}
            </button>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Projects Section */}
      <AnimateOnScroll
        animation="fade-up"
        className="projects-section-wrapper anim-delay-1"
      >
        <section className="projects-section">
          <h2>{t("projects")}</h2>
          <div className="row">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Talents Section */}
      <AnimateOnScroll
        animation="pop"
        className="talents-section-wrapper anim-delay-2"
      >
        <section className="talents-section">
          <h2>{t("skills")}</h2>
          <div className="talents-content">
            <div className="talent-category">
              <h3>
                <i className="bi bi-database"></i> {t("databaseManagement")}
              </h3>
              <ul>
                <li>
                  <SiMysql className="tech-icon" /> MySQL
                </li>
                <li>
                  <SiMongodb className="tech-icon" /> MongoDB
                </li>
              </ul>
            </div>
            <div className="talent-category">
              <h3>
                <i className="bi bi-gear"></i> {t("frameworks")}
              </h3>
              <ul>
                <li>
                  <SiReact className="tech-icon" /> React
                </li>
                <li>
                  <SiExpress className="tech-icon" /> Express.js
                </li>
              </ul>
            </div>
            <div className="talent-category">
              <h3>
                <i className="bi bi-code"></i> {t("programmingLanguages")}
              </h3>
              <ul>
                <li>
                  <SiJavascript className="tech-icon" /> JavaScript
                </li>
                <li>
                  <SiPython className="tech-icon" /> Python
                </li>
                <li>
                  <FaJava className="tech-icon" /> Java
                </li>
              </ul>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Contact Section */}
      <AnimateOnScroll
        animation="fade-up"
        className="contact-section-wrapper anim-delay-3"
      >
        <section className="contact-section">
          <h2>{t("contact")}</h2>
          <div className="contact-container">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                // Basic client-side validation
                const emailRe = /\S+@\S+\.\S+/;
                if (!formData.name || !formData.email || !formData.message) {
                  setFormStatus(
                    t("pleaseFillRequired") || "Please fill required fields."
                  );
                  return;
                }
                if (!emailRe.test(formData.email)) {
                  setFormStatus(
                    t("invalidEmail") || "Please enter a valid email."
                  );
                  return;
                }

                // Attempt to send via EmailJS if configured via Vite env vars
                const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
                const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
                const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

                const templateParams = {
                  from_name: formData.name,
                  company: formData.company,
                  from_email: formData.email,
                  message: formData.message,
                  to_email: "ahmednasrism@gmail.com",
                };

                if (serviceID && templateID && publicKey) {
                  // Debug: log presence of env vars and template params (do not expose secret in UI)
                  console.log("EmailJS config present:", {
                    serviceIDExists: !!serviceID,
                    templateIDExists: !!templateID,
                    publicKeyExists: !!publicKey,
                  });
                  console.log("EmailJS templateParams:", templateParams);

                  setFormStatus(t("sending") || "Sending...");
                  emailjs
                    .send(serviceID, templateID, templateParams, publicKey)
                    .then((result) => {
                      console.log("EmailJS success:", result.text);
                      setFormStatus(
                        t("messageSent") || "Message sent — thank you!"
                      );
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        message: "",
                      });
                    })
                    .catch((err) => {
                      // EmailJS returns HTTP errors with status/text on the error object; log them for debugging
                      console.error("EmailJS error:", err);
                      try {
                        // some errors expose 'status' and 'text'
                        console.error("EmailJS status:", err.status);
                        console.error(
                          "EmailJS text:",
                          err.text || err.message || err
                        );
                      } catch (_) {
                        /* ignore */
                      }

                      setFormStatus(
                        t("sendError") ||
                          `Could not send message (code: ${
                            err && err.status ? err.status : "unknown"
                          }). You can email me directly at ahmednasrism@gmail.com.`
                      );
                    });
                } else {
                  // Fallback: open mail client with prefilled message (user must send manually)
                  const subject = encodeURIComponent(
                    `Portfolio contact from ${formData.name}`
                  );
                  const body = encodeURIComponent(
                    `${formData.message}\n\nCompany: ${formData.company}\nEmail: ${formData.email}`
                  );
                  const mailto = `mailto:ahmednasrism@gmail.com?subject=${subject}&body=${body}`;
                  window.location.href = mailto;
                  setFormStatus(
                    t("openedMailClient") || "Opened your mail client."
                  );
                }
              }}
            >
              <input
                type="text"
                name="name"
                aria-label="Name"
                placeholder={t("your Name") || "Your name"}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <input
                type="text"
                name="company"
                aria-label="Company"
                placeholder={t("company") || "Company (optional)"}
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />

              <input
                type="email"
                name="email"
                aria-label="Email"
                placeholder={t("your Email") || "Your email"}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <textarea
                name="message"
                aria-label="Message"
                placeholder={t("your Message") || "Your message"}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="full"
                rows={6}
              />

              <div className="form-actions full">
                <button type="submit" className="submit-button">
                  {t("sendMessage") || "Send message"}
                </button>
                {formStatus && <p className="form-status">{formStatus}</p>}
              </div>
            </form>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
