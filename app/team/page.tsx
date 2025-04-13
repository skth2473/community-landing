import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  // Team members data organized by departments
  const teamMembers = {
    leadership: [
      {
        name: "Dr. Puneet Kumar",
        role: "Faculty Advisor",
        image: "/PuneetSir.jpeg",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Er. Himanshi",
        role: "Faculty Co-Advisor",
        image: "/Himanshi.jpeg",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Sarthak Kumar Thakur",
        role: "Secretary",
        image: "/IMG20240427164023.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/sarthak-kumar-thakur-097498231/",
          twitter: "https://x.com/Sarthak09847929",
          github: "https://github.com/skth2473",
        },
      },
      {
        name: "Anirudh Vikalp",
        role: "Joint Secretary",
        image: "/Anirudh.jpeg",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    technical: [
      {
        name: "Lavanya Sood",
        role: "Joint Secretary",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Mehak Kaur",
        role: "Joint Secretary",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Technical Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Backend Developer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    events: [
      {
        name: "Karan Joshi",
        role: "Events Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Events Team",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Events Team",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Events Team",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    design: [
      {
        name: "Karan",
        role: "Design Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "UI/UX Designer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Graphic Designer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Design Team",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    marketing: [
      {
        name: "Team Member",
        role: "Marketing Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Social Media Manager",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Marketing Team",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    outreach: [
      {
        name: "Team Member",
        role: "Outreach Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Community Manager",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Partnerships Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Outreach Team",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    content: [
      {
        name: "Team Member",
        role: "Content Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Technical Writer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Blog Manager",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    volunteers: [
      {
        name: "Team Member",
        role: "Volunteer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Volunteer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Volunteer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Team Member",
        role: "Volunteer",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
    // Add more departments as needed to reach 48 members total
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  width={40}
                  height={40}
                  alt="Engineering Community Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">Engineering Community</span>
              </div>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2 md:space-x-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/highlights" className="text-sm font-medium transition-colors hover:text-primary">
                Highlights
              </Link>
              <Button size="sm" className="hidden md:flex" asChild>
                <Link href="https://cuintranet.in/">Join Us</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Complete Team</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated individuals who make our Engineering Community thrive.
                </p>
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Leadership Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.leadership.map((member, index) => (
                  <Card key={`leadership-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Technical Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.technical.map((member, index) => (
                  <Card key={`technical-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Events Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Events Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.events.map((member, index) => (
                  <Card key={`events-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Design Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Design Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.design.map((member, index) => (
                  <Card key={`design-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Marketing Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Marketing Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.marketing.map((member, index) => (
                  <Card key={`marketing-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Outreach Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Outreach Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.outreach.map((member, index) => (
                  <Card key={`outreach-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Content Team */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Content Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.content.map((member, index) => (
                  <Card key={`content-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Volunteers */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Volunteers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamMembers.volunteers.map((member, index) => (
                  <Card key={`volunteers-${index}`} className="overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="mt-2 flex space-x-2">
                        <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Engineering Community. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Developed by{" "}
              <Link href="https://www.linkedin.com/in/sarthak-kumar-thakur" className="font-medium hover:text-primary">
                Sarthak Kumar Thakur
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
