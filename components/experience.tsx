import { Section, SectionHeading } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/content"
import { cn } from "@/lib/utils"

function Experience() {
  const { items } = experience

  return (
    <Section id="experiences" className="border-b">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />

        <ol className="flex flex-col">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li
                key={`${item.period}-${item.title}`}
                className={cn(
                  "relative flex flex-col gap-2 pl-8",
                  isLast ? "pb-0" : "pb-10"
                )}
              >
                {/* Line from this dot down to the next one; hidden on the last item. */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute top-2.5 bottom-0 left-[5.5px] w-px bg-border"
                  />
                )}
                <span
                  aria-hidden
                  className="absolute top-1 left-0 size-3 rounded-full border-2 border-primary bg-background"
                />

                <p className="text-sm leading-6 font-medium text-muted-foreground">
                  {item.period}
                </p>

                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-medium tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.organisation}
                  </p>
                </div>

                <p className="max-w-2xl text-pretty text-muted-foreground">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}

export { Experience }
