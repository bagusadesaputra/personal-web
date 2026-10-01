import {
  ArrowRightIcon,
  DownloadIcon,
  MapPinIcon,
  SparklesIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { siteConfig, stats } from "@/lib/content"

function Hero() {
  return (
    <section id="top" className="border-b">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary">
            <SparklesIcon />
            {siteConfig.availability}
          </Badge>

          <div className="flex items-center gap-4">
            <Avatar size="lg">
              <AvatarImage src="/avatar.jpg" alt="" keepMounted />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="text-sm font-medium">{siteConfig.name}</p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPinIcon className="size-4 shrink-0" />
                {siteConfig.location}
              </p>
            </div>
          </div>

          <h1 className="max-w-3xl font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
            Clean Backend. Solid Systems.
          </h1>

          <p className="max-w-2xl text-pretty text-muted-foreground md:text-lg">
            {siteConfig.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#work" />}>
              View my work
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="/cv.pdf" download />}
            >
              <DownloadIcon data-icon="inline-start" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Separator />
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="font-heading text-2xl font-medium md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export { Hero }
