import Image from 'next/image'
import Nav from "../app/components/navbar"
import Hero from "@/app/components/heropage"
import Login from '@/app/components/loginpage'
import Progress from '@/app/components/progressbar'
import Register from '@/app/components/registrationpage'
import Error from '@/app/components/errorpage'
import Product from '@/app/components/productpage'
import Athelte from './components/atheletepage'

export default function Home() {
  return (
    <div><Nav />
    <Athelte></Athelte>
    </div>
  )
}
