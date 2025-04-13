import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HighlightsPage() {
  // Event data
  const events = [
    {
      id: 1,
      title: "Envision 1.0",
      date: "March 15, 2024",
      location: "Main Auditorium, Chandigarh University",
      description:
        "The inaugural event of our Engineering Community, featuring keynote speakers from leading tech companies and interactive sessions on emerging technologies.",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 250,
      highlights: [
        "Keynote speech by industry leaders",
        "Panel discussion on future of engineering",
        "Interactive Q&A session",
        "Networking opportunities",
      ],
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 2,
      title: "Tekathon Bootcamp",
      date: "April 10, 2024",
      location: "Innovation Lab, Block B1",
      description:
        "A comprehensive bootcamp to prepare students for the Smart India Hackathon, covering ideation, prototyping, and presentation skills.",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 120,
      highlights: [
        "Hands-on workshops on problem-solving",
        "Mentorship from previous hackathon winners",
        "Team formation activities",
        "Mock hackathon challenge",
      ],
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 3,
      title: "National Engineer's Day Celebration",
      date: "September 15, 2024",
      location: "Central Lawn, Chandigarh University",
      description:
        "A day-long celebration honoring the contributions of engineers to society, featuring project exhibitions, technical competitions, and cultural performances.",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 350,
      highlights: [
        "Project exhibition by students",
        "Technical paper presentation competition",
        "Industry-academia interaction session",
        "Cultural performances celebrating engineering",
      ],
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 4,
      title: "Spheron Bootcamp: Aptos Workshop",
      date: "October 5, 2024",
      location: "Computer Science Department, Block B1",
      description:
        "An intensive workshop on building applications on the Aptos blockchain, covering fundamentals, smart contracts, and decentralized application development.",
      image: "/aptos.jpg",
      attendees: 80,
      highlights: [
        "Introduction to blockchain technology",
        "Hands-on session with Aptos blockchain",
        "Smart contract development workshop",
        "Building and deploying a simple dApp",
      ],
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 5,
      title: "Meet and Greet: Community Outreach",
      date: "November 12, 2024",
      location: "Student Center, Chandigarh University",
      description:
        "A networking event designed to connect community members, recognize volunteers, and distribute certificates for their contributions to various community initiatives.",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 150,
      highlights: [
        "Recognition ceremony for volunteers",
        "Certificate distribution",
        "Networking sessions",
        "Future opportunities discussion",
      ],
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 6,
      title: "AI/ML Workshop Series",
      date: "December 8, 2024",
      location: "AI Lab, Block C2",
      description:
        "A comprehensive workshop series on artificial intelligence and machine learning, covering fundamental concepts, algorithms, and practical applications in various domains.",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 100,
      highlights: [
        "Introduction to AI/ML concepts",
        "Hands-on training with popular frameworks",
        "Real-world problem solving",
        "Project showcase by participants",
      ],
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
  ]

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
              <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">
                Team
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Event Highlights</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive showcase of our community's events, activities, and achievements.
                </p>
              </div>
            </div>

            <div className="mt-16 space-y-16">
              {events.map((event) => (
                <div key={event.id} className="border-b pb-16 last:border-0">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={event.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <Badge className="mb-2">{new Date(event.date).getFullYear()}</Badge>
                      <h2 className="text-3xl font-bold">{event.title}</h2>

                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="mr-2 h-4 w-4" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{event.description}</p>

                      <div>
                        <h3 className="font-semibold mb-2">Event Highlights:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {event.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {event.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            width={300}
                            height={200}
                            alt={`${event.title} gallery image ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
