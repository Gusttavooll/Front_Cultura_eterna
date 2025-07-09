"use client";
import Image from "next/image";
import Link from "next/dist/client/link";
import NavItem, { NavItemProps } from "../NavItem";
import "./index.css";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar()
{
const items: NavItemProps[] = 
[
    { url: "/", label: "Início" },
    { url: "/sobre", label: "Sobre" },
    { url: "/contato", label: "Contato" },
    
    
]

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
            <Link href="/" className="logo">
            <Image src={"icon.svg"} alt="Logo" width={50} height={50} className="logo" />
            </Link>
            <ul className={`nav-items${menuOpen ? " active" : ""}`}>
                {items.map((item, index) => (
                    <NavItem 
                    key={index} 
                    url={item.url} 
                    label={item.label}
                    isActive={pathname === item.url}
                    />
                ))}
            </ul> 
            <button
                    className="btn-mobile"
                    aria-label="Abrir menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    ☰
                </button>
            <button className="bnt-default">
                <Link href="/envie">Envie</Link>
            </button>
            </nav>
        </header>
    );
}