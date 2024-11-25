'use client'

import Link from "next/link";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, 
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import * as LuIcons from "react-icons/lu";
import * as Io5Icons from "react-icons/io5";
import React from "react";
import "./NavBar.css";

function NavBar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);
    const menuItems = [
        { menuItem: 'résumé', path: "/resume" },
        { menuItem: 'about', path: "/about" },
        { menuItem: 'contact', path: '/contact' },
    ]
    const menuIcon = isMenuOpen ? 
        <Io5Icons.IoClose color="var(--peach)" size={30} className="nav-icon" /> :
        <Io5Icons.IoMenu color="var(--peach)" size={30} className="nav-icon" />;
    const onMenuItemClick = () => setIsMenuOpen(!isMenuOpen)

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="nav static">
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <h1 className="font-bold text-3xl text-[var(--oyster)]">kp</h1>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link href="https://github.com/k-h-phillips" target="_blank">
                        <LuIcons.LuGithub color="var(--peach)" size={30} className="nav-icon" />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="https://www.linkedin.com/in/kirsten-phillips-06845b15b" target="_blank">
                        <LuIcons.LuLinkedin color="var(--peach)" size={30} className="nav-icon" />
                    </Link>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
                    icon={menuIcon} className="menu-toggle"/>
            </NavbarContent>
            <NavbarMenu className="nav-menu">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className="text-6xl z-[40] nav-link"  onClick={onMenuItemClick}>
                        <Link href={item.path}>
                            <h1>{item.menuItem}</h1>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default NavBar;