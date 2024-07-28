import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { SubMenuProps } from "@/dtos/menu.type";

interface MenuProps {
    menu: SubMenuProps
}


export function NavHome({ menu }: MenuProps) {
    return (
        <div className="mx-auto w-11/12 max-w-7xl">
            <div className="sm:hidden flex w-full justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden flex w-24 gap-2 my-6 select-none">
                            <Menu />
                            Menu
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {menu.objects.map((subMenu, i) => (
                            <DropdownMenuItem key={i}>
                                <Link href={`/posts/${subMenu.slug}`} className="min-w-[8rem] font-bold hover:bg-secondary rounded-sm h-10 flex items-center justify-center">
                                    {subMenu.title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <ul className="list-none my-6 hidden sm:flex">
                <li className="flex space-x-2">
                    {menu.objects.map((subMenu, i) => (
                        <Button key={i} variant="secondary" asChild>
                            <Link href={`/posts/${subMenu.slug}`}>{subMenu.title}</Link>
                        </Button>
                    ))}

                </li>
            </ul>
        </div>
    )
}