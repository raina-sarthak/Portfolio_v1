import Image from 'next/image'

export default function Hero(){
    return(
        <div className="bg-warmGray-9000 min-h-screen pt-36 mx-28">
          <div className="pt-16">
            <div class=" max-h-11 w-1/2 diff aspect-auto">
                  <div className="diff-item-1">
                      <div className="bg-trueGray-200 text-primary-content text-4xl font-black grid place-content-center">hey, i'm sarthak</div>
                  </div>
                  <div className="diff-item-2">
                      <div className="bg-trueGray-200 text-4xl font-black grid place-content-center">hey, i'm sarthak</div>
                  </div>
                  <div className="diff-resizer "></div>
            </div>
            <p className="text-2xl text-trueGray-200 subpixel-antialiased flex justify-left ">just curing my curiosities through designs and prototypes. </p>
          </div>
        </div>
    )
}