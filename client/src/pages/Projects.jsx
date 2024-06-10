import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Explore My Projects! Dive into the innovative and exciting projects I've worked on, showcasing my passion for technology, coding, and AI. 
        Each project reflects my journey and growth as a developer, and I'm excited to share them with you</p>
      <CallToAction />
    </div>
  )
}