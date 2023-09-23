import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social, EducationType } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchEducation } from "../utils/fetchEducation";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  school: EducationType[];
};



const Home = ({ projects, skills, pageInfo, experiences, socials, school }: Props) => {
  return (
    <>
      <Head>
        <title>Diana Zawislak - Portfolio</title>
        <meta name="description" content="Welcome to Diana Zawislak's portfolio." />
        <meta name="keywords" content="Diana Zawislak, portfolio, web development, coding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7bff05]/50 bg-[rgb(55,53,53)] text-white z-0">
        <Header socials={socials} />

        {/* Hero Banner Section */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        {/* About Section */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

       {/* Projects Section */}
       <section id="projects" className="snap-start">
          <Projects projects={projects} />
       </section>


        {/* Education Section */}
        <section id="education" className="snap-center">
          <Education school={school} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        {/* Experience Section */}
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

              

        {/* Contact Me Section */}
        <section id="contact" className="snap-start">
          <ContactMe pageInfo={pageInfo} />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="/logo1.png"
                alt=""
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo | null = await fetchPageInfo();

  if (!pageInfo) {
    return {
      notFound: true,
    };
  }

  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const school: EducationType[] = await fetchEducation();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      school,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 0,
  };
};

