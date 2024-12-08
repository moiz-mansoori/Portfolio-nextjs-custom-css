import { UserObject } from "@/models/User"
import { Navitems } from "@/models/Header"

export const userinfo: UserObject = {
    name : 'Moiz Roshan',
    picture : '',
    heading: 'A passionate and driven student currently pursuing a Bachelors degree in Artificial Intelligence (BSAI) at Dawood University. Alongside my university studies, I am also enrolled in an AI course at GIAIC to deepen my understanding and practical skills in this dynamic field. With a strong interest in emerging technologies, I am committed to continuous learning and innovation, aiming to contribute meaningfully to the tech industry.',
    about: `
        <p> <b>AI Expertise:</b> I specialize in using artificial intelligence to create innovative solutions, including generating images, content, and ideas to help businesses grow and improve.</p>

        <p><b>Commitment to Quality</b>: My goal is to deliver high-quality, reliable AI solutions that solve real-world problems, with a focus on simplicity and effectiveness in every project.</p>
        `,
    skills: ['Next JS', 'DSA', 'OOP', 'Python', 'C++', 'TypeScript', 'HTML', 'Tailwind CSS', 'CSS', 'C'],   
}

export const headerItems : Navitems = {
    home : {label : 'Home', page : 'home'},
    about : {label : 'About', page : 'about'},
    project : {label : 'Projects', page : 'projects'}
}

export const projects = {
    gmail: { image: '/lib.jpeg', name: 'Library Managment System' },
    flipkart: { image: '/quizz.jpeg', name: 'Quiz Game' },
    google: { image: '/health.jpeg', name: 'Health Reminder System' },
    indeed: { image: '/food.jpeg', name: 'Movie Ticket and Food Ordering' },
    crud: { image: '/students.jpeg', name: 'Student Meeting' },
    aws: { image: '/calculator.jpeg', name: 'CountDown Timer' },
};