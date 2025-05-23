import {
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/pages", icon: HomeIcon },
  { name: "About", href: "/pages/about", icon: InformationCircleIcon },
  { name: "Products", href: "/pages/products", icon: ShoppingBagIcon },
  { name: "Premium", href: "/pages/premium", icon: SparklesIcon },
  {
    name: "Blog",
    href: "/blog",
    icon: DocumentDuplicateIcon,
  },
  { name: "Tools", href: "/pages/tools", icon: WrenchScrewdriverIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center rounded-md text-[#536c32] justify-center gap-2 p-3 text-sm font-medium hover:bg-[#a5c37e] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            <p className=" md:hidden">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
