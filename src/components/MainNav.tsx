import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const links = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Nosotros",    href: "#nosotros" },
  { label: "Servicios",   href: "#servicios" },
  { label: "Cursos",      href: "#cursos" },
  { label: "Facturación", href: "#facturacion" },
  { label: "Emprende",    href: "#emprende" },
  { label: "Blog",        href: "#blog" },
  { label: "Contacto",    href: "#contacto" },
]

export default function MainNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {links.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              href={href}
              className={navigationMenuTriggerStyle()}
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}