import { Section, SectionHeading } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { skillGroups } from "@/lib/content"

const groupDescriptions: Record<string, string> = {
  
}

function Skills() {
  return (
    <Section id="skills" className="border-b">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for"
          description="A working set rather than an exhaustive list — grouped by where they show up in my work."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>
                  {groupDescriptions[group.title]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { Skills }
