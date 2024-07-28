"use client"
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Header() {
    const [top, setTop] = useState(true)

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    }, [top])

    return (
        <div className={top ? "w-full shadow-xl" : "w-full shadow-xl z-50 fixed bg-background/70 backdrop-blur-sm"}>
            <div>
                <div className="w-11/12 mx-auto max-w-7xl h-20 flex justify-center sm:justify-between">
                    <div className="hidden sm:flex items-center">
                        <Link href="/">
                            <h1 className="font-bold text-2xl select-none">DevFront</h1>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Button variant="link" asChild>
                            <Link href="/">Home</Link>
                        </Button>
                        <Button variant="link" asChild>
                            <Link href="#services">Serviços</Link>
                        </Button>
                        <Button variant="link" asChild>
                            <Link href="#contact">Contatos</Link>
                        </Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}