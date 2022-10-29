import { useState } from 'react';
import logo from './img/logo.png'
import './navbar.css'

export default function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");


        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
       
            <div className="nav" >
                    <div className='resp'>
                        <div className='imagem'>< img className='imagem_logo' src={logo} alt="" /></div>
                    </div>
                    <a href="#" className="nav__brand">
                    </a>
                    <ul className={active}>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /quem somos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /o que fazemos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /plan news
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /nossos clientes
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /contato
                            </a>
                        </li>
                        <div className='inovar'>
                            <p>
                                Que tal inovar com a gente?  &rarr;
                            </p>
                        </div>
                    </ul>
                    <div className='resp'>
                        <div onClick={navToggle} className={icon}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
            
                    </div>
            
            
            
                <nav className='seg'>
                    <div className='imagem'>< img className='imagem_logo1' src={logo} alt="" /></div>
                    <a href="#" className="nav__brand">
                    </a>
                    <ul className={active}>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /quem somos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /o que fazemos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /plan news
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /nossos clientes
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /contato
                            </a>
                        </li>
                        <div className='inovar'>
                            <p>
                                Que tal inovar com a gente?  &rarr;
                            </p>
                        </div>
                    </ul>
            
            
                </nav>

                <nav className='seg'>
                    <div className='imagem'>< img className='imagem_logo1' src={logo} alt="" /></div>
                    <a href="#" className="nav__brand">
                    </a>
                    <ul className={active}>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /quem somos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /o que fazemos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /plan news
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /nossos clientes
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                /contato
                            </a>
                        </li>
                        <div className='inovar'>
                            <p>
                                Que tal inovar com a gente?  &rarr;
                            </p>
                        </div>
                    </ul>
            
            
                </nav>
 
            
            </div>
      

    )
}