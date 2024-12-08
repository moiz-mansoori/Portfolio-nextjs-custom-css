'use client' 
import { headerItems, userinfo } from "@/constant/constant"; 
import Image from "next/image"; 
import { Link as ScrollLink } from 'react-scroll';

export default function Intro() { 
  return ( 

    <section id={headerItems.home.page} className="intro">
    <div className="intro__image">
        <Image src="/moiz.jpeg" alt="dp" width={300} height={300} className="intro__dp" />
    </div>
    <div className="intro__text">
        <h1 className="intro__heading">AI Generative Engineer</h1>
        <h1 className="intro__subheading">Hi, I&#39;m , <span className="intro__name">{userinfo.name}</span></h1>
        <p className="intro__description" dangerouslySetInnerHTML={{__html: userinfo.heading}} />
        <ScrollLink to={headerItems.project.page} className="intro__button" spy={true} smooth={true}>Projects</ScrollLink>
    </div>
</section>

  ); 
}
