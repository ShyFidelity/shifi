
import '../../styles/portCard.css'
import Snake from '../images/snakeBG.svg'
import Project from '../projects/Card'
import Weather from '../images/weatherSS.png';
import '../../styles/Portfolio.css'



const projects = [
  {
    title: 'Ouroboros', 
    img: Snake, 
    alt: 'snake colorful graphic',
    description: 'mental health app',
    link: 'https://ouroboros-ml-jf-ni.herokuapp.com/',
    github: 'https://github.com/ShyFidelity/Ouroboros',
    id: 1
  }, 
  {
    title: 'What\'s the Weather', 
    img: Weather, 
    alt: 'screenshot of weather app',
    description: 'weather app',
    link: 'https://ouroboros-ml-jf-ni.herokuapp.com/',
    github: 'https://github.com/ShyFidelity/Ouroboros',
    id: 2
  }, 
  {
    title: 'What\'s the Weather', 
    img: Weather, 
    alt: 'screenshot of weather app',
    description: 'weather app',
    link: 'https://ouroboros-ml-jf-ni.herokuapp.com/',
    github: 'https://github.com/ShyFidelity/Ouroboros',
    id: 2
  }, 
  {
    title: 'What\'s the Weather', 
    img: Weather, 
    alt: 'screenshot of weather app',
    description: 'weather app',
    link: 'https://ouroboros-ml-jf-ni.herokuapp.com/',
    github: 'https://github.com/ShyFidelity/Ouroboros',
    id: 2
  }, 




]

export default function Portfolio() {
  return (
    <div className="page">
      <h1>NEWS NEWS NEWS</h1>
    <div className = "cardContainer">
      {projects.map((work) => (
        <Project title={work.title} img={work.img} alt={work.alt} description={work.description} link={work.link} github={work.github}key={work.id} />
      ))}
    </div>
    </div>
  );
}

