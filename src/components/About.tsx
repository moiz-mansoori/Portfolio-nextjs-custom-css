import { headerItems, userinfo } from "@/constant/constant"; 
import Image from "next/image"; 

export default function About() { 
  return ( 
    <section id="about" className="container">
      <div className="about-left">
        <h1>About</h1>
        <h2>Who am i?</h2>
        <p dangerouslySetInnerHTML={{ __html: userinfo.about }} />
      </div>
      <div className="about-image">
        <Image 
          src="/itsme.jpg" 
          alt="dp" 
          width={300} 
          height={300} 
          className="mt-10 mb-3" 
        />
        <div className="skills-container">
          {userinfo.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
