export default function Card(){
    return(
        <div className="container mx-auto pt-12" >
            <div className="flex flex-col gap-3 items-center">
                <p className="text-xl font-bold">Tech Stack</p>
                <p className="text-3xl">What do I know?</p>
                <p className="w-2/3 text-center">Welcome to my tech universe, where innovation meets functionality.From front-end finesse with cutting-edge frameworks like React to robust back-end solutions powered by Node.js, my stack ensures a harmonious blend of performance and user satisfaction. With a keen eye on scalability and efficiency, each component is strategically chosen to bring forth a dynamic and resilient tech ecosystem.</p>
            </div>
            <div className="flex flex-col flex-wrap pt-4">
                <div className="flex flex-wrap justify-center ">
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95 ">
                        <img className="w-12" src="/tailwind_icon.svg" alt="TailwindCSS logo" />
                        <h1 className="text-lg font-medium">TailwindCSS</h1>
                        <p className="text-sm ">The haute couture of web styling, crafting elegant stylesheets with a utility-first approach – ensuring each pixel enjoys its moment on the digital runway.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95">
                        <img className="w-12" src="/javascript_icon.svg" alt="Javascript logo" />
                        <h1 className="text-lg font-medium">JavaScript</h1>
                        <p className="text-sm ">The foundational sorcerer shaping dynamic web experiences, weaving spells that make websites come alive with seamless interactivity.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95">
                        <img className="w-12" src="/nextjs_icon.svg" alt="NextJS logo" />
                        <h1 className="text-lg font-medium">Next.js</h1>
                        <p className="text-sm ">Your React app's trusted ally, adorned with a cape of server-side rendering prowess, ensuring a performant and theatrically engaging user experience.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95">
                        <img className="w-12" src="/nodejs_icon.svg" alt="NodeJS logo" />
                        <h1 className="text-lg font-medium">NodeJS</h1>
                        <p className="text-sm ">The unsung hero backstage, orchestrating servers with precision for scalable, globally-resonant web applications.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95">
                        <img className="w-12" src="/react_icon.svg" alt="React logo" />
                        <h1 className="text-lg font-medium">React</h1>
                        <p className="text-sm ">The virtuoso of modern web design, sculpting component-based masterpieces that elevate user interfaces into a digital Renaissance.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95">
                        <img className="w-12" src="/tailwind_icon.svg" alt="MongoDB logo" />
                        <h1 className="text-lg font-medium">MongoDB</h1>
                        <p className="text-sm ">The avant-garde of databases, rejecting the status quo in favor of a flexible NoSQL paradigm, providing a playground for structured yet adaptable data.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-5 w-1/3 shadow-gray-500 shadow-md rounded-lg transition duration-300 ease-in-out hover:scale-95">
                        <img className="w-12" src="/git_icon.svg" alt="Git logo" />
                        <h1 className="text-lg font-medium">Git</h1>
                        <p className="text-sm ">The guardian of version control, allowing for disciplined time-travel through code history, fostering collaborative coding across the space-time continuum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

