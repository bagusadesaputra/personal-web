import {
  BriefcaseIcon,
  ClockIcon,
  CodeIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react"

import { Section, SectionHeading } from "@/components/section"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { siteConfig, socialLinks } from "@/lib/content"

const contactDetails = [
  { icon: MailIcon, label: "Email", value: siteConfig.email },
  { icon: MapPinIcon, label: "Location", value: siteConfig.location },
  { icon: ClockIcon, label: "Reply time", value: "Within one business day" },
  ...socialLinks.map((link) => ({
    icon: link.label === "GitHub" ? CodeIcon : BriefcaseIcon,
    label: link.label,
    value: (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        {link.href.replace("https://", "")}
      </a>
    ),
  })),
]

function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind? Reach out directly and I will get back to you."
        />

        <Card>
          <CardHeader>
            <CardTitle>Contact details</CardTitle>
            <CardDescription>Prefer to reach out directly?</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-3">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium break-words">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            {/*<Button
              nativeButton={false}
              render={<a href={`mailto:${siteConfig.email}`} />}
            >
              <MailIcon data-icon="inline-start" />
              Email me
            </Button>*/}
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="/cv.pdf" download />}
            >
              <DownloadIcon data-icon="inline-start" />
              Download CV
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  )
}

export { Contact }
