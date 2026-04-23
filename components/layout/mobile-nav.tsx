"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants/nav-links";
import { cn } from "@/lib/utils/cn";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 backdrop-blur md:hidden">
      <div className="grid grid-cols-5 gap-1 px-2 py-2">
        {navLinks.slice(0, 5).map((link) => {
          const Icon = link.icon;
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center rounded-xl py-2 text-[11px]",
                isActive ? "text-emerald-400" : "text-zinc-500",
              )}
            >
              <Icon className="mb-1 h-4 w-4" />
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
