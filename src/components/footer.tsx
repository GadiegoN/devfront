import { HomeProps } from "@/dtos/home.type";
import { Clock, Mail, Map, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer({ object }: HomeProps) {
    return (
        <>
            <footer id="contact" className="flex flex-col justify-between items-center mx-auto w-11/12 max-w-7xl my-12 gap-8">
                <div className="w-full flex flex-col bg-foreground rounded-lg py-8 px-4 text-background gap-8">
                    <h2 className="uppercase font-bold text-center text-xl">Contatos</h2>
                    <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                        <div className="flex items-center gap-2">
                            <Mail size={32} />
                            <div>
                                <strong>Email:</strong>
                                <p>{object.metadata.contact.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={32} />
                            <div>
                                <strong>Telefone:</strong>
                                <p>{object.metadata.contact.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Map size={32} />
                            <div>
                                <strong>Endereço:</strong>
                                <p>{object.metadata.contact.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={32} />
                            <div>
                                <strong>Horario:</strong>
                                <p>{object.metadata.contact.time}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="gap-2">
                    <Phone />
                    <a target="_blank" href={object.metadata.cta_button.url}>{object.metadata.cta_button.title}</a>
                </Button>
            </footer>
        </>
    )
}