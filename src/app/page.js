import Image from 'next/image'
import Nav from "../app/components/navbar"
import Hero from "@/app/components/heropage"
import AnimatedCurvedText from './components/animated text'
import Progress from '@/app/components/progressbar'
import Contact from '@/app/components/contact'
import Project from '@/app/components/project'
import Card from '@/app/components/cards'
import Athelte from './components/atheletepage'

export default function Home() {
  return (
    
    <><Nav></Nav><Hero></Hero><Project></Project><Card></Card><Contact></Contact></>
      



  )
}
