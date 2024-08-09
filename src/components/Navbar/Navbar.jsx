"use client";
import Link from 'next/link';

export default function Navbar() {
    const data = [
        {
            title: "Home",
            path: "#"
        },
        {
            title: "About",
            path: "#"
        },
        {
            title: "Contact",
            path: "#"
        }
    ];

    return (
        <nav className="flex uppercase items-center justify-between w-screen p-8">
            <h1 className="font-extrabold text-4xl">Thanachot P.</h1>
            <ul className="flex font-extrabold space-x-6 text-2xl">
                {data.map((element, index) => (
                    <li key={index}>
                        <Link href={element.path} className="hover:text-gray-400">
                            {element.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
