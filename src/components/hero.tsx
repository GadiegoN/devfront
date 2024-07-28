import Image from "next/image"
import { Button } from "./ui/button"
import { ReactNode } from "react"

interface HeroProps {
    heading: string
    buttonUrl: string
    buttonTitle: string
    bannerUrl: string
    icon: ReactNode
}

export function Hero({ heading, bannerUrl, buttonTitle, buttonUrl, icon }: HeroProps) {
    return (
        <main className="w-full relative flex flex-col items-center justify-center">
            <div className="absolute flex flex-col w-8/12 max-w-3xl items-center justify-center z-10 gap-3">
                <h1 className="text-3xl md:text-6xl text-center font-bold text-white">{heading}</h1>

                <Button className="gap-2">
                    {icon}
                    <a target="_blank" href={buttonUrl}>{buttonTitle}</a>
                </Button>
            </div>

            <div className="w-full max-h-[400px] bg-black relative">
                <Image
                    alt={heading}
                    src={bannerUrl}
                    priority
                    quality={100}
                    width={1912}
                    height={150}
                    className="w-full max-h-[400px] object-cover opacity-30 relative bg-fixed"
                />
            </div>
        </main>
    )
}