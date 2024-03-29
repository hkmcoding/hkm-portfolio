import Head from "next/head"
import Container from "../components/Container"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"

const Index = () => {
  return (
    <>
      <Head>
        <title>HKM | Portfolio</title>
        <meta name="description" content="HKM Mujib is a Frontend Developer in the greater NY area. Visit his portfolio to see some of the projects he has worked on!" />
        <meta property="og:title" content="HKM Mujib | Portfolio"/>
        <meta property="og:url" content="https://hmujib.com"/>
        <meta property="og:image" content="https://hmujib.com/social-share.png"/>
        <meta property="og:description" content="HKM is a Frontend Developer in the greater NY area. Visit his portfolio to see some of the projects he has worked on!"/>
        <meta property="og:type" content="website"/>
        <meta property="twitter:title" content="HKM | Portfolio"/>
        <meta property="twitter:url" content="https://hmujib.com"/>
        <meta property="twitter:image" content="https://hmujib.com/social-share.png"/>
        <meta property="twitter:description" content="HKM is a Frontend Developer in the greater NY area. Visit his portfolio to see some of the projects he has worked on!"/>
        <meta property="twitter:type" content="website"/>
      </Head>
      <Container>
        <Hero />

        {data.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              projectTitle={project.name}
              projectDetails={project.details}
              projectImage={project.previewImage} 
              slug={project.slug}
              url={project.link} />
          )
        })}

      </Container>
    </>
  )
}

export default Index 
