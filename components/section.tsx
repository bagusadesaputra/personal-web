import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  className?: string
  containerClassName?: string
  children: React.ReactNode
}

function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16 py-16 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-5xl px-6", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-start gap-3", className)}>
      <Badge variant="secondary">{eyebrow}</Badge>
      <h2 className="font-heading text-2xl font-medium tracking-tight text-balance md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export { Section, SectionHeading }
