import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown } from "lucide-react";
import { Instagram } from "lucide-react";

import { Calendar, Users, Code, Lightbulb, ChevronRight, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Engineering Community</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2 md:space-x-6">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#events" className="text-sm font-medium transition-colors hover:text-primary">
                Events
              </Link>
              <Link href="#team" className="text-sm font-medium transition-colors hover:text-primary">
                Team
              </Link>
              <Link href="#highlights" className="text-sm font-medium transition-colors hover:text-primary">
                Highlights
              </Link>
              <Button size="sm" className="hidden md:flex">
                Join Us
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">Engineering Community</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Engineers to Build, Lead, and Innovate
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We aim to create a vibrant ecosystem where aspiring engineers collaborate, learn, and lead impactful
                    tech initiatives. From hackathons to workshops, our goal is to bridge the gap between theory and
                    real-world application.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                    <Link href="https://cuintranet.in/">Join Our Community</Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* 
              <div className="mx-auto w-[400px] h-[550px] overflow-hidden rounded-xl lg:order-last">
  <Image
    src="/logo.png"
    width={400}
    height={550}
    alt="Engineering students collaborating on a project"
    className="w-full h-full object-contain"
  />
</div>
 */}
              <div className="mx-auto w-[400px] h-[550px] overflow-hidden rounded-xl lg:order-last">
                <Image
                  src="/logo.png"
                  width={400}
                  height={550}
                  alt="Engineering students collaborating on a project"
                  className="mx-auto h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Vision</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Building the next generation of engineering leaders through hands-on experience, mentorship, and
                  community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 border-primary/20 transition-all hover:border-primary/50">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Build</h3>
                  <p className="text-muted-foreground">
                    Gain practical experience through hackathons, projects, and workshops led by industry experts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 transition-all hover:border-primary/50">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Lead</h3>
                  <p className="text-muted-foreground">
                    Develop leadership skills by organizing events, mentoring peers, and leading technical teams.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 transition-all hover:border-primary/50">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Lightbulb className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Innovate</h3>
                  <p className="text-muted-foreground">
                    Transform ideas into reality through innovation challenges and access to cutting-edge resources.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the passionate individuals leading our engineering community.
                </p>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-2">
                  Our leadership team brings diverse expertise and fresh perspectives to drive innovation and growth
                  within our community. Each member is committed to creating valuable experiences and opportunities for
                  all our members.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="\PuneetSir.jpeg"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Dr. Puneet Kumar </h3>
                  <p className="text-sm text-muted-foreground">Faculty Advisor</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="Himanshi.jpeg"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Er. Himanshi</h3>
                  <p className="text-sm text-muted-foreground">Faculty Co-Advisor</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="\IMG20240427164023.jpg"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Sarthak Kumar Thakur</h3>
                  <p className="text-sm text-muted-foreground">Secretary</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="Anirudh.jpeg"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Anirudh Vikal</h3>
                  <p className="text-sm text-muted-foreground"> Joint Secretary</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold"> Lavanya Sood</h3>
                  <p className="text-sm text-muted-foreground">Joint Secretary</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Mehak Kaur</h3>
                  <p className="text-sm text-muted-foreground">Joint Secretary</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold"> Karan Joshi </h3>
                  <p className="text-sm text-muted-foreground">Events Coordinator</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>


              <Card className="overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Team member"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Karan</h3>
                  <p className="text-sm text-muted-foreground">Designing Lead</p>
                  <div className="mt-2 flex space-x-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-4">
                Meet the Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="highlights" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Past Highlights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A glimpse of our community's achievements and memorable moments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Past event highlight"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">Envision 1.0 - 2024</Badge>
                  <h3 className="font-bold">Inaurgation of our Community</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Launched our community with a grand event.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Past event highlight"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">Tekathon Bootcamp</Badge>
                  <h3 className="font-bold">Aarambh </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Nurtured Students for the Smart India Hackathon.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Past event highlight"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">Engineer's Day</Badge>
                  <h3 className="font-bold">National Engineer's Day</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Celebrated National Engineers Day.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Past event highlight"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">Spheron Bootcamp</Badge>
                  <h3 className="font-bold">Aptos Workshop</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hosted Event on how to Build at Aptos Blockchain.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/aptos.jpg"
                    width={300}
                    height={200}
                    alt="Past event highlight"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">Meet and greet</Badge>
                  <h3 className="font-bold">Community Outreach Program</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    facilitated volunteers with certificates.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Past event highlight"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">AIML Workshop</Badge>
                  <h3 className="font-bold"></h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Exhibited student projects to industry professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-4">
                View All Highlights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to join our engineering community?
                  </h2>
                  <p className="md:text-xl">
                    Become part of a network of passionate engineers building the future together.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <span>Access to exclusive workshops and events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <span>Networking opportunities with industry professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <span>Hands-on experience with cutting-edge technologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <span>Leadership and professional development</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                    Join Us Today
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-primary/20">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Image
                  src="\Join-Now.png"
                  width={600}
                  height={400}
                  alt="join Now"
                  className="mx-auto h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">Leadership Timeline</h2>

            {/* Faculty Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Faculty Advisor */}
              {/* Faculty Advisor Section */}
              <div className="bg-[#121218] border border-[#2c2c3a] rounded-lg p-6 shadow-sm mb-8 max-w-md mx-auto text-gray-100">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Faculty Advisor</h3>
                <div className="space-y-4 text-gray-100">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-blue-300">Dr. Garima Thakur</p>
                      <p className="text-sm text-gray-400">June 2024 – January 2025</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-300 h-6 ml-1.5"></div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-blue-300">Dr. Puneet Kumar</p>
                      <p className="text-sm text-gray-400">January 2025 – Present</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Faculty Co-Advisor */}
              {/* Faculty Co-Advisor Section */}
              <div className="bg-[#121218] border border-[#2c2c3a] rounded-lg p-6 shadow-sm mb-8 max-w-md mx-auto text-gray-100">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Faculty Co-Advisor</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1e1e2f] border border-[#3e3e55] rounded-lg p-4 shadow-sm w-full max-w-xs text-gray-100">
                      <p className="font-medium text-blue-300">Er. Himanshi</p>
                      <p className="text-sm text-gray-400">June 2024 – Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-6">
              <ArrowDown className="text-blue-500 h-10 w-10" />
            </div>

            {/* Secretary Section */}
            <div className="bg-[#121218] border border-[#2c2c3a] rounded-lg p-6 shadow-sm mb-8 max-w-md mx-auto text-gray-100">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Secretary</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1e1e2f] border border-[#3e3e55] rounded-lg p-4 shadow-sm w-full max-w-xs text-gray-100">
                    <p className="font-medium text-purple-300">Sarthak Kumar Thakur</p>
                    <p className="text-sm text-gray-400">August 2024 – Present</p>
                    <div className="flex gap-2 mt-1">
                      <a href="https://github.com/sarthak" target="_blank"><Github className="h-4 w-4 text-gray-500 hover:text-purple-400 transition" /></a>
                      <a href="https://linkedin.com/in/sarthak" target="_blank"><Linkedin className="h-4 w-4 text-gray-500 hover:text-purple-400 transition" /></a>
                      <a href="https://instagram.com/sarthak" target="_blank"><Instagram className="h-4 w-4 text-gray-500 hover:text-purple-400 transition" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-6">
              <ArrowDown className="text-indigo-500 h-10 w-10" />
            </div>

            {/* Joint Secretaries Header */}
            <h3 className="text-xl font-semibold text-center text-purple-300 mb-6">Joint Secretaries</h3>

            {/* Timeline */}
            <div className="relative text-gray-800">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-300"></div>

              <div className="space-y-8 relative">
                {/* Anirudh - Jan 2025 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-800 text-white text-sm font-medium px-3 py-1 rounded-full z-10">January 2025</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-start-1">
                    <div className="bg-[#1e1e2f] border border-[#3e3e55] rounded-lg p-4 shadow-sm w-full max-w-xs mr-auto text-gray-100">
                      <p className="font-medium text-purple-300">Anirudh Vikalp</p>
                      <p className="text-sm text-gray-400">January 2025 – Present</p>
                      <div className="flex gap-2 mt-1">
                        <a href="https://github.com/anirudh" target="_blank"><Github className="h-4 w-4 text-gray-500" /></a>
                        <a href="https://linkedin.com/in/anirudh" target="_blank"><Linkedin className="h-4 w-4 text-gray-500" /></a>
                        <a href="https://instagram.com/anirudh" target="_blank"><Instagram className="h-4 w-4 text-gray-500" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mehak - Feb 2025 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-800 text-white text-sm font-medium px-3 py-1 rounded-full z-10">February 2025</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-start-2">
                    <div className="bg-[#1e1e2f] border border-[#3e3e55] rounded-lg p-4 shadow-sm w-full max-w-xs mr-auto text-gray-100">
                      <p className="font-medium text-purple-300">Mehak</p>
                      <p className="text-sm text-gray-400">February 2025 – Present</p>
                    </div>
                  </div>
                </div>

                {/* Lavanya - Dec 2024 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-800 text-white text-sm font-medium px-3 py-1 rounded-full z-10">December 2024</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-start-1">
                    <div className="bg-[#1e1e2f] border border-[#3e3e55] rounded-lg p-4 shadow-sm w-full max-w-xs ml-auto text-gray-100">
                      <p className="font-medium text-purple-300">Lavanya Sood</p>
                      <p className="text-sm text-gray-400">December 2024 – Present</p>
                    </div>
                  </div>
                </div>

                {/* Barenya - June 2024 to Jan 2025 */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-800 text-white text-sm font-medium px-3 py-1 rounded-full z-10">June 2024</div>
                </div>

                {/* <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-start-2">
                    <div className="bg-[#1e1e2f] border border-[#3e3e55] rounded-lg p-4 shadow-sm w-full max-w-xs mr-auto text-gray-100">
                      <p className="font-medium text-purple-300">Barenya Behra</p>
                      <p className="text-sm text-gray-400">June 2024 – January 2025</p>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>

          </div>
        </section>

      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Engineering Community</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering the next generation of engineers to build, lead, and innovate.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium">Quick Links</h3>
                <nav className="mt-4 flex flex-col gap-2">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Events
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Team
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Join Us
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-medium">Contact</h3>
                <nav className="mt-4 flex flex-col gap-2">
                  <Link
                    href="mailto:secretary.cuenggcommunity@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Gmail
                  </Link>
                  <Link
                    href="https://maps.google.com/?q=Block B1, Chandigarh University"
                    className="text-sm text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Block B1
                  </Link>
                  <Link
                    href="https://maps.google.com/?q=Chandigarh University"
                    className="text-sm text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chandigarh University
                  </Link>
                </nav>
              </div>

            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Engineering Community. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Developed by{" "}
                <Link href="https://www.linkedin.com/in/sarthak-kumar-thakur" className="font-medium hover:text-primary" target="_blank" rel="noopener noreferrer">
                  Sarthak Kumar Thakur
                </Link>
                <span className="ml-2 inline-flex gap-2">
                  <Link href="https://github.com/skth2473" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/sarthak-kumar-thakur-097498231/" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link href="https://x.com/Sarthak09847929" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </span>
              </p>
            </div>

            <nav className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Code of Conduct
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
