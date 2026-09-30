import { Award, BookOpen, GraduationCap } from "lucide-react";
import { achievement, certifications, education } from "@/lib/data";

export default function Credentials() {
  return <section id="education" className="section credentials-section"><div className="shell">
    <div className="section-heading"><p><b>04.</b> CREDENTIALS</p><h2>Learning backed by<br/><span>real milestones.</span></h2></div>
    <div className="credential-grid">
      <article className="credential-card education-credential"><GraduationCap/><p>EDUCATION</p><h3>{education.degree}</h3><strong>{education.institution}</strong><span>{education.period}</span><small>{education.status}</small></article>
      <article className="credential-card achievement-credential"><Award/><p>ACHIEVEMENT</p><h3>1st Place</h3><strong>Speed Programming Competition</strong><span>{achievement.institution}</span><small>{achievement.description}</small></article>
      <article id="certificates" className="credential-card certificate-credential"><BookOpen/><p>CERTIFICATES</p>{certifications.map(c=><div className="certificate-item" key={c.title}><h3>{c.title}</h3><span>{c.issuer}</span></div>)}</article>
    </div>
  </div></section>;
}
