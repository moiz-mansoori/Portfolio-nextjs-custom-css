'use client';
import { useState } from 'react';
import { userinfo } from '@/constant/constant';
import { headerItems } from '@/constant/constant';
import { Navitems } from '@/models/Header';
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [navitem, showNavitems] = useState<boolean>(false);

  return (

    <header className='header'>
    <div className='header__top'>
        <h2 className='header__title'>{userinfo.name}</h2>
        <BiMenu
            size={30}
            className='header__menu-icon'
            onClick={() => showNavitems(prevState => !prevState)}
        />
    </div>
    <div className={`header__nav ${navitem ? 'show' : 'hide'}`}>
        {
            Object.keys(headerItems).map((item) => (
                <ScrollLink
                    to={headerItems[item as keyof Navitems].page}
                    key={headerItems[item as keyof Navitems].label}
                    className='header__nav-link'
                    spy={true}
                    smooth={true}
                >
                    {headerItems[item as keyof Navitems].label}
                </ScrollLink>
            ))
        }
    </div>
</header>

  );
}
