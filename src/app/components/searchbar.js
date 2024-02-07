export default function Search(){
    return( 
        <div className="fixed inset-0 flex items-center justify-center bg-red z-50">
            <input type="text" placeholder="SR" className="input input-bordered w-full max-w-4xl" disabled></input> 
        </div>
    )
}