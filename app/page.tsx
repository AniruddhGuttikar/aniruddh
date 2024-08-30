import Head from "next/head";

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-primary min-h-screen flex flex-col">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-5 px-8 border-b border-primary border-opacity-70">
        <nav className="flex items-center justify-between space-x-6 divide-x-2 divide-hover divide-opacity-40">
          <h1 className="text-main text-xl font-serif tracking-wide relative">
            Aniruddh Guttikar
          </h1>
          <div className="flex flex-grow justify-between px-6">
            <ul className="flex space-x-6 text-lg">
              <li className="hover:text-hover transition-transform  transform hover:scale-110 hover:shadow-lg">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-hover transition-transform  transform hover:scale-110 hover:shadow-lg">
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li className="hover:text-hover transition-transform  transform hover:scale-110 hover:shadow-lg">
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
            <ul className="flex space-x-6 text-lg">
              <a
                href="https://github.com/AniruddhGuttikar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hover transition-transform  transform hover:scale-110 hover:shadow-lg"
              >
                <IconBrandGithub stroke={2} />
              </a>
              <a
                href="https://www.linkedin.com/in/aniruddh-guttikar-a3185327a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hover transition-transform  transform hover:scale-110 hover:shadow-lg"
              >
                <IconBrandLinkedin />
              </a>
              <a
                href="mailto:aniruddhguttikar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hover transition-transform  transform hover:scale-110 hover:shadow-lg"
              >
                <IconMail />
              </a>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow px-8 py-16">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-main text-5xl font-serif font-bold mb-6">
            hi I'm aniruddh
          </h2>
          <p className="text-xl font-light mb-12">
            I'm a Computer Science Engineering student with a passion for web
            development and a growing interest in machine learning. I love
            crafting websites and diving into the world of algorithms and data.
            When I'm not coding, you might find me listening to music or
            learning about some random stuff (which I never end up using) or
            contemplating the day when our AI overlords decide to take over the
            world, they'll at least appreciate my clean code (hopefully)
          </p>
          {/* <a
            href="#"
            className="bg-[#5a4a42] hover:bg-[#4a3b34] text-[#f4f0ec] py-3 px-8 rounded-full text-lg transition-all duration-200"
          >
            Explore My Work
          </a> */}
        </section>
      </main>

      <footer className="py-6 px-8 border-t border-[#333] text-center">
        <p className="text-sm">Designed and Built by Aniruddh Guttikar</p>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
