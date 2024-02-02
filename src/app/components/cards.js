import daisyui from "daisyui"

export default function Card(){
    return(
        <div className="flex items-center justify-center ">
            <div className="card w-min glass card-outlined mt-4">
                <figure><img src="/tailwind_logo.webp" alt="Tailwind!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Tailwind</h2>
                    <p>Better than modules</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Experienced</button>
                    </div>
                </div>
            </div>
            <div className="card w-min glass card-outlined mt-4">
                <figure><img src="/tailwind_logo.webp" alt="Tailwind!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Azure</h2>
                    <p>Better than modules</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Experienced</button>
                    </div>
                </div>
            </div>
            <div class="card w-min glass card-outlined mt-4">
                <figure><img src="/tailwind_logo.webp" alt="Tailwind!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">React</h2>
                    <p>Better than modules</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Experienced</button>
                    </div>
                </div>
            </div>
            <div class="card w-min glass  card-outlined mt-4">
                <figure><img src="/tailwind_logo.webp" alt="Tailwind!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">mongoDB</h2>
                    <p>Better than modules</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Experienced</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

