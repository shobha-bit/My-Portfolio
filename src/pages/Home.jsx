import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import RetailIQ from '../components/RetailIQ'
import OtherProjects from '../components/OtherProjects'
import Workflow from '../components/Workflow'
import Education from '../components/Education'
import GithubLinks from '../components/GithubLinks'
import Contact from '../components/Contact'
import Reveal from '../components/Reveal'

export default function Home() {
  return (<><Hero /><Reveal><About /></Reveal><Reveal><Skills /></Reveal><RetailIQ /><Reveal><OtherProjects /></Reveal><Reveal><Workflow /></Reveal><Reveal><Education /></Reveal><Reveal><GithubLinks /></Reveal><Reveal><Contact /></Reveal></>)
}
