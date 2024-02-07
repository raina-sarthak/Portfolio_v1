import { images } from "../../../next.config"

export default function Progress(){
    return(
        <div>
            <div className="flex justify-center items-center hero bg-cover min-h-screen" style={{ backgroundImage: 'url("/chutiya.jpeg")' }}></div>
            <div className="flex justify-center text-4xl text-amber-200">
                <div className="">KUNAL CHOPRA</div>
                <div className="text-xl mt-20">A FRONTEND DEVELOPER</div>
            </div>
        </div>



    )
}