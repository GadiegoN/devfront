import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { PostsProps } from "@/dtos/post.type"
import { getItemBySlug } from "@/lib/get-data"
import { Phone } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const { objects }: PostsProps = await getItemBySlug(slug)
            .catch((error) => {
                return {
                    title: "Front-End",
                    description: "Freelancer front-end",
                }
            })

        return {
            title: `Front-End - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            keywords: ["dev", "front", "end", "frontend", "desenvolvimento", objects[0].title, objects[0].slug],
            openGraph: {
                title: `Freelancer Front-End - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }


    } catch (error) {
        return {
            title: "Front-End",
            description: "Freelancer front-end",
        }
    }
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {

    const { objects }: PostsProps = await getItemBySlug(slug)

    return (
        <div>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={18} />}
            />

            <div className="flex flex-col justify-between items-center mx-auto w-11/12 max-w-7xl my-12 gap-8">
                <section className="flex w-full md:justify-between flex-col md:flex-row gap-4 md:gap-12">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-center md:text-start text-3xl ">{objects[0].metadata.description.title}</h2>
                        <p className="text-justify">{objects[0].metadata.description.text}</p>
                        {objects[0].metadata.description.button_active && (
                            <Link target="_blank" href={objects[0].metadata.description.button_url}>
                                <Button>
                                    {objects[0].metadata.description.button_title}
                                </Button>
                            </Link>
                        )}
                    </div>
                    <div className="relative w-full md:w-[600px] h-[350px] md:h-[450px] flex justify-center pb-32">
                        <Image
                            alt="Imagem ilustrativa sobre os sewrviços."
                            src={objects[0].metadata.description.banner.url}
                            priority
                            quality={100}
                            fill={true}
                            sizes="auto"
                            // width={600}
                            // height={400}
                            className="h-[350px] min-w-[300px] md:w-[600px] rounded-lg md:h-[450px] object-cover relative bg-fixed"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}