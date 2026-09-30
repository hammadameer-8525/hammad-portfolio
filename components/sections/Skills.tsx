import { Braces, Code2, Database, GitBranch, Layers3, Smartphone, TerminalSquare, Workflow, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const nodeNames = ["Java","Python","JavaScript","SQL","HTML5","CSS3","Git & GitHub","MySQL Workbench","VS Code","IntelliJ IDEA"];
const nodeIcons = [Braces,Code2,Braces,Database,Code2,Code2,GitBranch,Database,TerminalSquare,TerminalSquare];
const groups = [
  {title:"Core Development",icon:Code2,tone:"red",items:["Java","Python","OOP"]},
  {title:"Web Engineering",icon:Braces,tone:"blue",items:["HTML5","CSS3","JavaScript"]},
  {title:"Data & Databases",icon:Database,tone:"purple",items:["SQL","Database Management Systems","MySQL Workbench"]},
  {title:"Mobile & Applications",icon:Smartphone,tone:"cyan",items:["Mobile App Development","GUI Development"]},
  {title:"Developer Workflow",icon:Wrench,tone:"warm",items:["IntelliJ IDEA","VS Code","Git & GitHub"]},
  {title:"Software Foundations",icon:Workflow,tone:"silver",items:["Data Structures & Algorithms","Software Requirements Engineering","AI Foundations"]},
];

export default function Skills(){
  const verified = new Set(skills.map(skill=>skill.name));
  return <section id="stack" className="section tech-section"><div className="shell"><div className="section-heading"><p><b>03.</b> TECH ECOSYSTEM</p><h2>Technologies I<br/><span>Build With.</span></h2><small>A practical toolkit for building web, mobile, SaaS, and data-driven products.</small></div><div className="tech-layout"><div className="tech-orbit" aria-label="Technology ecosystem"><div className="orbit-ring ring-one" aria-hidden="true"/><div className="orbit-ring ring-two" aria-hidden="true"/><div className="orbit-core"><Layers3/><strong>HA</strong><span>BUILD SYSTEM</span></div><div className="tech-nodes">{nodeNames.filter(name=>verified.has(name)).map((name,index)=>{const Icon=nodeIcons[index];return <div className={`tech-node node-${index+1}`} key={name}><i><Icon/></i><span>{name}</span></div>})}</div></div><div className="capability-grid">{groups.map((group,index)=>{const Icon=group.icon;return <article className={`capability-card capability-${index+1} tone-${group.tone}`} key={group.title}><div><i><Icon/></i><span>0{index+1}</span></div><h3>{group.title}</h3><ul>{group.items.filter(item=>verified.has(item)).map(item=><li key={item}>{item}</li>)}</ul></article>})}</div></div></div></section>
}
