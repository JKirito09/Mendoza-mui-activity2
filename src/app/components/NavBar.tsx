"use client";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">✦</div>
            <ul className="nav-links">
                 <Link href="/">
                <li>
                   Home
                </li>
                </Link>
                <Link href="/destination">
                <li>
                    Destination
                </li>
                </Link>
                <Link href="/crew">
                <li>
                    Crew
                </li>
                </Link>
                <Link href="/technology">
                <li>
                    Technology
                </li>
                </Link>
            </ul>
        </nav>
    );
}
