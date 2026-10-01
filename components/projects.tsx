import { ExternalLinkIcon } from "lucide-react"

import { Section, SectionHeading } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/lib/content"

function Projects() {
  return (
    <Section id="work" className="border-b">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I am proud of"
          description="A mix of client work and side projects. Each one taught me something I now use on the next."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.demoHref && (
                  <Button
                    size="sm"
                    variant="outline"
                    nativeButton={false}
                    render={
                      <a
                        href={project.demoHref}
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                  >
                    Live demo
                    <ExternalLinkIcon data-icon="inline-end" />
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  nativeButton={false}
                  render={
                    <a
                      href={project.sourceHref}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Source
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { Projects }
