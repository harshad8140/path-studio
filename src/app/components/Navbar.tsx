'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50 p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-white font-bold text-2xl">Path Studio</Link>
                <div className="hidden md:flex gap-6 text-white">
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <button onClick={() => setOpen(!open)} className="md:hidden text-white">Menu</button>
            </div>
            {open && (
                <div className="flex flex-col items-center md:hidden bg-black text-white p-4">
                    <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
                    <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
                    <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
