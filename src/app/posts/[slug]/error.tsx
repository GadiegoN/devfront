"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error() {
    return (
        <div className="h-custom flex justify-center items-center flex-col">
            <h1 className="text-xl font-bold">Ops... Pagina não encontrada</h1>
            <Button variant="link">
                <Link href="/">Voltar para o inicio</Link>
            </Button>
        </div>
    )
}