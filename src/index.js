import Image from 'next/image'
import Nav from "../app/components/navbar"
import Hero from "@/app/components/heropage"
import Search from './components/searchbar'
import Progress from '@/app/components/progressbar'
import Contact from '@/app/components/contact'
import Project from '@/app/components/project'
import Card from '@/app/components/cards'
import Athelete from './components/atheletepage'

export default function Home() {
  return (
    <div className="">
      <><Nav></Nav><Hero></Hero><Project></Project><Card></Card><Contact></Contact></>
    </div>
  )
}
