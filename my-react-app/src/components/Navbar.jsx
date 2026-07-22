import {useEffect,  useState , useRef } from 'react';
import OverlayMenu from './OverlayMenu';
import Logo from '../assets/logo.png';
import { TiThMenuOutline } from "react-icons/ti";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible , setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerID = useRef(null);

useEffect(() => {
  const homeSection = document.querySelector("#home");
  const observer = new IntersectionObserver(
  ([entry]) => {
    if(entry.isIntersecting){
      setForceVisible(true);
      setVisible(true);
    }
    else{
      setForceVisible(false);
    }

  },{threshold  : 0.1}
  )
  if(homeSection) observer.observe(homeSection);
  return () => {
    if(homeSection) observer.unobserve(homeSection);
  }
}, [])

useEffect(() => {
  const handleScroll = () => {
    if(forceVisible){
      setVisible(true);
      return
    }
    const currentScrollY = window.scrollY;
    if(currentScrollY > lastScrollY.current && currentScrollY > 100){
      setVisible(false);
    }else{
      setVisible(true);
      if (timerID.current) clearTimeout(timerID.current);
      timerID.current = setTimeout(() => {
        setVisible(false);
      }, 2000)
      }
      lastScrollY.current = currentScrollY;
    }
  window.addEventListener('scroll', handleScroll, {passive: true});

  return() => {
    window.removeEventListener("scroll", handleScroll)
    if(timerID.current) clearTimeout(timerID.current);
  }

},[forceVisible])

  return(
    <>
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 z-50 transition-transform duration-300 ${visible ?  "translate-y-0": "-translate-y-full"}`}>
{/* /logo */}
<div className="flex items-center gap-2">
  <img src={Logo} alt="Logo" className="h-10 w-auto object-contain"/>
  <div className="text-2xl font-bold text-white hidden sm:block">Dhanashree</div>
</div>


{/* menu button click handler */}
<div className="absolute left-1/2  -translate-x-1/2">
<button onClick={() => setMenuOpen(prev => !prev)}  
  className="text-white text-3xl cursor-pointer" 
  aria-label="Open Menu">
  <TiThMenuOutline />
</button>
</div>

{/* Right button */}
{/* <div className="hidden  lg:block"> 
<a href="#Contact" 
className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90  transition-opacity duration-300">
  Reach Out
</a>
</div> */}
  </nav>
  <OverlayMenu isOpen = {menuOpen} onClose={() => setMenuOpen(false)}/>
  </>
)
};