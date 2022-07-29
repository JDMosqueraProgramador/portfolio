import React from 'react'
import './footer.scss';
import whatsappImg from '../../images/whatsapp.svg';
import linkedinImg from '../../images/linkedin.svg';
import gitlabImg from '../../images/gitlab.svg';
import githubImg from '../../images/github.svg';
import emailImg from '../../images/email.svg';


const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <div className="social-media">

                <a href="https://www.linkedin.com/in/juan-david-mosquera-mu%C3%B1oz-b853b9190/" target="_blank" rel="noreferrer">
                    <img src={linkedinImg} alt="" />
                </a>

                <a href="https://gitlab.com/JDMosquera" target="_blank" rel="noreferrer">
                    <img src={gitlabImg} alt="" />
                </a>
                <a href="https://github.com/JDMosqueraProgramador" target="_blank" rel="noreferrer">
                    <img src={githubImg} alt="" />
                </a>
                <a href="mailto:jdmm360@gmail.com" target="_blank" rel="noreferrer">
                    <img src={emailImg} alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=573103651617&text=Hi,%20I%20want%20to%20make%20a%20project%20with%20you." target="_blank" rel="noreferrer">
                    <img src={whatsappImg} alt="" />
                </a>
            </div>

            <ul>
                <li><a href="#about-me">About me</a></li>
                <li><a href='#experience'>Academic & work</a></li>
                <li><a href='#areas'>Development areas & languages</a></li>
                <li><a href='#projects'>Projects</a> </li>
            </ul>

            <div className='margin-bottom-16'>This site was built with React.</div>
            <span> &copy; Juan David Mosquera Muñoz - {new Date().getFullYear()} </span>
        </footer>
    )
}

export default Footer;