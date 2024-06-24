import React,{useEffect, useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useMenu} from './MenuContext';




const Menu = () => {
    const {isOpen} = useMenu();
    const menu = useRef<HTMLDivElement>(null);

    const {contextSafe} = useGSAP({scope: menu});

    useGSAP(() => {
        const ctx = gsap.context(() => {
          if (isOpen) {
            gsap.to(menu.current, { x: 0, duration: 0.5, ease: 'power3.out' });
          } else {
            gsap.to(menu.current, { x: '-100%', duration: 0.5, ease: 'power3.in' });
          }
        }, menu);
    
        return () => {
          ctx.revert();
        };
      }, [isOpen, menu]);

      
    return (
        <div ref={menu}className='menu'>
        </div>
        
    )
}

export default Menu;