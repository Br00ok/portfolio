// nav item component with link and hover effect with href and name props
import React from "react";
import Link from "next/link";

export default function NavItem({
  href,
  name,
}: Readonly<{
  href: string;
  name: string;
}>) {
  return (
    <Link href={href} className="hover:-translate-y-1 duration-300">
      {name}
    </Link>
  );
}
