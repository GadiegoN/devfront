import { HomeProps } from "@/dtos/home.type";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Services({ object }: HomeProps) {
    return (
        <div className="flex flex-col justify-between items-center mx-auto w-11/12 max-w-7xl my-12 gap-8">
            <section className="flex w-full md:justify-between flex-col md:flex-row gap-4 md:gap-12">
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-center md:text-start text-3xl ">Sobre</h2>
                    <p className="text-justify">{object.metadata.about.description}</p>
                </div>
                <div className="relative w-full md:w-[600px] h-[350px] md:h-[450px] flex justify-center pb-32">
                    <Image
                        alt="Imagem ilustrativa sobre a empresa."
                        src={object.metadata.about.banner.url}
                        priority
                        quality={100}
                        width={600}
                        height={450}
                        className="h-[350px] min-w-[300px] md:w-[600px] rounded-lg md:h-[450px] object-cover relative bg-fixed"
                    />
                </div>
            </section>

            <h2 id="services" className="uppercase font-bold text-xl">Conheça nossos serviços</h2>

            <section className="w-full mx-auto">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-10/12 mx-auto max-w-7xl"
                >
                    <CarouselContent>
                        {object.metadata.services.map((service, i) => (
                            <CarouselItem key={i} className="md:basis-1/2">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col bg-primary rounded-lg items-center aspect-square p-px gap-2">
                                            <Image
                                                alt="Imagem do serviço."
                                                src={service.image.url}
                                                priority
                                                quality={100}
                                                width={600}
                                                height={450}
                                                className="h-[350px] min-w-[300px] md:w-[600px] rounded-t-lg md:h-[450px] object-cover relative bg-fixed"
                                            />
                                            <p className="p-2 text-xl text-center font-semibold">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    )
}