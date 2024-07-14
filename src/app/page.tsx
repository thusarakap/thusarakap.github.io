import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/component/navbar";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/scroll-animation";
import { CodepenIcon, DatabaseIcon, FigmaIcon, GitGraphIcon, GithubIcon, LinkIcon, MailOpenIcon, NetworkIcon, PhoneIcon, TestTubeIcon, TypeIcon, WindIcon, ArrowRightIcon } from "@/components/icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thusaraka Palliyeguru | Portfolio</title>
        <meta
          name="description"
          content="Software engineering student with a passion for building web applications."
        />
        <meta property="og:title" content="Thusaraka Palliyeguru | Portfolio" />
        <meta
          property="og:description"
          content="Software engineering student with a passion for building web applications."
        />
        <meta property="og:image" content="/Thusaraka.jpg" />
        <meta property="og:url" content="https://thusarakap.github.io" />
      </Head>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <ScrollAnimation />
          <section id="hero" className="container mx-auto px-4 py-20 md:px-6 heroanimation">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Hello<span className="text-primary/70">,</span> I&apos;m Thusaraka <span className="text-primary/70">:)</span>
                </h1>
                <p className="text-muted-foreground">
                  I&apos;m a software engineering student passionate about building
                  innovative, user-friendly applications with a keen interest in
                  integrating both hardware and software.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://drive.google.com/file/d/1KykMrUPYXU4Yf3_zqw1QTNZxW44Qyv5s/view?usp=sharing"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Resume
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    prefetch={false}
                  >
                    Contact Me
                  </Link>
                </div>
                <Link
                    href="https://github.com/thusarakap"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-accent px-10 py-2 text-2xl font-semibold shadow-sm transition-colors hover:bg-background hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-4"
                    prefetch={false}
                  >
                    <GithubIcon className="h-6 w-6" />

                    Github
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/Thusaraka.jpg"
                  width={400}
                  height={400}
                  alt="Jane Doe"
                  className="max-w-full w-120 h-120 rounded-custom bg-gray-300 shadow-custom"
                />
              </div>
            </div>
          </section>

          <section
            id="about"
            className="container mx-auto px-4 py-20 md:px-6 md:py-24 aboutanimation"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About Me
                </h2>
                <p className="mt-4 text-muted-foreground">
                  I am a passionate software engineering intern with a strong
                  background in web development. I have experience working with
                  various technologies, including React, Node.js, and databases.
                  I am always eager to learn and take on new challenges.
                </p>
                <p className="mt-4 text-muted-foreground">
                  In my free time, I enjoy exploring new technologies, reading
                  about the latest industry trends, and contributing to open-
                  source projects. I am committed to creating user-friendly and
                  accessible web applications that solve real-world problems.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border bg-muted p-4">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="mt-2 text-muted-foreground">
                    BSc in Computer Science (Reading)
                    <br />
                    University of Westminster, 2022-2026
                  </p>
                </div>
                <div className="rounded-lg border bg-muted p-4">
                  <h3 className="text-lg font-semibold">Certifications</h3>
                  <p className="mt-2 text-muted-foreground">
                    Certificate in Networking Basics (CISCO), 2022
                    <br />
                    Certificate in Java Programming (SLIIT), 2022
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="skills"
            className="container flex flex-col items-center justify-center gap-8 py-12 md:py-24 skillsanimation"
          >
            <div className="grid gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I have a diverse set of skills that I&apos;ve developed through my
                education and personal projects.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <CodepenIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">React</h3>
                <p className="text-muted-foreground">
                  Proficient in building responsive and scalable web
                  applications using React.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <NetworkIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Node.js</h3>
                <p className="text-muted-foreground">
                  Proficient in building server-side applications and APIs using
                  Node.js.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <DatabaseIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">Databases</h3>
                <p className="text-muted-foreground">
                  Proficient in working with SQL and NoSQL databases, including
                  PostgreSQL and MongoDB.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <GitGraphIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Git</h3>
                <p className="text-muted-foreground">
                  Experienced in using Git for version control and collaboration.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <CodepenIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">CSS</h3>
                <p className="text-muted-foreground">
                  Experienced in creating responsive and visually appealing
                  designs using CSS.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <TypeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">TypeScript</h3>
                <p className="text-muted-foreground">
                  Proficient in writing code for web applications with TypeScript.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <WindIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                <p className="text-muted-foreground">
                  Experienced in using Tailwind CSS for writing utility-first CSS.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <FigmaIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Figma</h3>
                <p className="text-muted-foreground">
                  Proficient in using Figma for creating user-friendly UI/UX designs.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted">
                <TestTubeIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">Testing</h3>
                <p className="text-muted-foreground">
                  Proficient in writing unit and integration tests using
                  frameworks like Jest and JUnit.
                </p>
              </Card>
            </div>
          </section>
          <section
            id="projects"
            className="container flex flex-col items-center justify-center gap-8 py-12 md:py-24 projectsanimation"
          >
            <div className="grid gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Here are some of the projects I&apos;ve worked on during my education and personal time.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col gap-4 p-6 transition-all hover:bg-muted">
                <Image
                  src="/project1.png"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="rounded-md object-cover"
                />
                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">SoundSculpt</h3>
                  <p className="text-muted-foreground">
                    A desktop application for calibrating speakers by utilising
                    an algorithm and a partner smartphone to obtain frequency
                    response data.
                  </p>
                  <div className="flex gap-2">
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>Electron</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Firebase</Badge>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="https://github.com/thusarakap/SoundSculpt"
                      className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 mt-3 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      prefetch={false}
                    >
                      View Project
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col gap-4 p-6 transition-all hover:bg-muted">
                <Image
                  src="/project2.png"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="rounded-md object-cover"
                />
                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Football Club Info </h3>
                  <p className="text-muted-foreground">
                    A mobile app to display information about football clubs and
                    leagues which fetches data from a REST API.
                  </p>
                  <div className="flex gap-2">
                    <Badge>Kotlin</Badge>
                    <Badge>Jetpack Compose</Badge>
                    <Badge>RESTful</Badge>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="https://github.com/thusarakap/football-club-info"
                      className="inline-flex items-center gap-2 rounded-md bg-secondary mt-3 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      prefetch={false}
                    >
                      View Project
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col gap-4 p-6 transition-all hover:bg-muted">
                <Image
                  src="/project3.png"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="rounded-md object-cover"
                />
                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Propeties.co.uk</h3>
                  <p className="text-muted-foreground">
                    A responsive property-buying website made with search filter
                    functions and product pages with React tabs, plugins and
                    interactive maps.
                  </p>
                  <div className="flex gap-2">
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="https://github.com/thusarakap/properties-uk"
                      className="inline-flex items-center gap-2 rounded-md bg-secondary mt-3 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      prefetch={false}
                    >
                      View Project
                      <ArrowRightIcon className="h-4 w-4 " />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 contactanimation">
            <div className="container mx-auto px-4 md:px-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Feel free to reach out to me if you have any questions :)
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="h-24 py-5">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MailOpenIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a
                        href="mailto:thusaraka@yahoo.co.uk"
                        className="text-muted-foreground hover:underline"
                      >
                        thusaraka@yahoo.co.uk
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-24 py-5">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a
                        href="tel:+94 (74) 120-2084"
                        className="text-muted-foreground hover:underline"
                      >
                        +94 (74) 120-2084
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-24 py-5">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <LinkIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Social</h3>
                      <div className="flex items-center gap-2">
                        <Link
                          href="https://www.linkedin.com/in/thusaraka/"
                          className="text-muted-foreground hover:underline"
                          prefetch={false}
                        >
                          LinkedIn
                        </Link>
                        <Link
                          href="https://www.instagram.com/thusaraka/"
                          className="text-muted-foreground hover:underline"
                          prefetch={false}
                        >
                          Instagram
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <h3 className="text-foreground md:text-xl mt-6 font-semibold">
                Based in Kandy, Sri Lanka
              </h3>
              {/* Google Map Embed */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31660.211944009832!2d80.60518192285858!3d7.294587401966095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1720556395989!5m2!1sen!2slk"
                  loading="lazy"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Thusaraka Palliyeguru . All rights reserved.
              </p>
              {/* <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

