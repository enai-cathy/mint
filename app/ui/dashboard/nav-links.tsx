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
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/about", icon: InformationCircleIcon },
  { name: "Products", href: "/products", icon: ShoppingBagIcon },
  { name: "Premium", href: "/premium", icon: SparklesIcon },
  {
    name: "Blog",
    href: "/blog",
    icon: DocumentDuplicateIcon,
  },
  { name: "Tools", href: "/tools", icon: WrenchScrewdriverIcon },
  { name: "Contact Us", href: "/contact", icon: EnvelopeIcon },
];

export default function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className="group flex h-[48px] grow items-center justify-center md:justify-start gap-2 p-3 text-sm font-medium rounded-md text-[#536c32] hover:text-white hover:bg-[#a5c37e] transition-all duration-300 ease-in-out md:flex-none md:p-2 md:px-3"
          >
            {/* Icon with subtle hover bounce */}
            <LinkIcon className="w-6 transition-transform duration-300 group-hover:-translate-y-[2px]" />
            {/* Desktop text with animated underline */}
            <span className="hidden md:inline-block relative">
              {link.name}{" "}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            {/* mobile text fallback */}
            <span className="md:hidden">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
