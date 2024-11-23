'use client'

import Link from "next/link";
import { useState } from "react";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import "./NavBar.css"

function NavBar() {
    const [ navigation, setNavigation ] = useState<boolean>(false);
    const toggleNavigation = () => setNavigation(!navigation);

    return (
        <>
            <div className="absolute w-full py-10 px-10 flex justify-center sm:justify-end gap-10">
                <Link href="https://github.com/k-h-phillips" target="_blank" className="nav-icon">
                    <LuIcons.LuGithub color="var(--peach)" className="text-[30px] sm:text-[36px]" />
                </Link>
                <Link href="https://www.linkedin.com/in/kirsten-phillips-06845b15b" target="_blank" className="nav-icon">
                    <LuIcons.LuLinkedin color="var(--peach)" className="text-[30px] sm:text-[36px]" />
                </Link>
                <Link href="" onClick={toggleNavigation} className="nav-icon">
                    <Io5Icons.IoMenu color="var(--peach)" className="text-[30px] sm:text-[36px]" />
                </Link>
            </div>
            <nav className={ navigation ? "nav w-full lg:w-1/4" : "nav w-0" }>
                <Link href="" className="absolute z-10 w-full py-10 px-10 flex justify-end">
                    <Io5Icons.IoClose color="var(--peach)" className="nav-icon text-[36px] sm:text-[42px]" onClick={toggleNavigation} />
                </Link>
                <ul className="flex flex-col gap-1 items-center justify-center h-full p-12">
                    <Link href="/resume" className="p-8 nav-link rounded-md" onClick={toggleNavigation}>
                        <h1 className="font-bold text-6xl sm:text-7xl text-center">résumé</h1>
                    </Link>
                    <Link href="/about" className="p-8 nav-link rounded-md" onClick={toggleNavigation}>
                        <h1 className="font-bold text-6xl sm:text-7xl text-center">about</h1>
                    </Link>
                    <Link href="/contact" className="p-8 nav-link rounded-md" onClick={toggleNavigation}>
                        <h1 className="font-bold text-6xl sm:text-7xl text-center">contact</h1>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;