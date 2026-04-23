"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants/nav-links";
import { cn } from "@/lib/utils/cn";
import { appConfig } from "@/lib/constants/app-config";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-zinc-950 md:block">
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <div>
          <h2 className="text-lg font-bold tracking-wide text-white">
            {appConfig.name}
          </h2>
          <p className="text-xs text-zinc-500">
            Elite discipline command center
          </p>
        </div>
      </div>

      <nav className="space-y-2 p-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-emerald-500/15 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.12)]"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
