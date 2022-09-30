import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import reactlogo from './reactlogo.png'
import bslogo from './bslogo.png'
import csslogo from './csslogo.png'
import htmllogo from './htmllogo.png'
import jslogo from './jslogo.png'
import twlogo from './twlogo.png'


const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {/* {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain skill_card'>
            {skill}
          </li>
        ))} */}
        <li className='skills__list-item btn btn--plain skill_card'>
            <img className='img-skill' src={htmllogo} alt='' />
        </li>
        <li className='skills__list-item btn btn--plain skill_card'>
            <img className='img-skill' src={csslogo} alt='' />
        </li>
        <li className='skills__list-item btn btn--plain skill_card'>
            <img className='img-skill' src={jslogo} alt='' />
        </li>
        <li className='skills__list-item btn btn--plain skill_card'>
            <img className='img-skill' src={bslogo} alt='' />
        </li>
        <li className='skills__list-item btn btn--plain skill_card'>
            <img className='img-skill' src={twlogo} alt='' />
        </li>
        <li className='skills__list-item btn btn--plain skill_card'>
            <img className='img-skill' src={reactlogo} alt='' />
        </li>
      </ul>
    </section>
  )
}

export default Skills
