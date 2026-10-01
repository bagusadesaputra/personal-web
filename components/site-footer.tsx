import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { navLinks, siteConfig, socialLinks } from "@/lib/content"

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-0.5">
            <p className="font-heading text-sm font-medium">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={link.href} />}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a href={link.href} target="_blank" rel="noreferrer" />
                }
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
