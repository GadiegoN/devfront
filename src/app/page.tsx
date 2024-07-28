import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavHome } from "@/components/nav-home";
import { Services } from "@/components/services";
import { HomeProps } from "@/dtos/home.type";
import { SubMenuProps } from "@/dtos/menu.type";
import { getDataHome, getSubMenu } from "@/lib/get-data";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  const subMenu: SubMenuProps = await getSubMenu()

  return (
    <main className="flex flex-col items-center justify-between gap-4">
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={18} />}
      />

      {
        subMenu.total > 0 && (
          <NavHome menu={subMenu} />
        )
      }

      <Services
        object={object}
      />

      <Footer object={object} />

    </main>
  );
}
