export default function Login(){
    return(
        <div class="bg-[url('https://images.unsplash.com/photo-1544631008-534b4b6c1215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2506&q=80')] bg-cover max-h-auto">
            <div className="mx-auto my-48 flex w-full max-w-sm flex-col gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold text-inherit">Sign In</h1>
                    <p className="text-sm">Sign in to access your account</p>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">LogIn ID</label>
                        <input placeholder="Type here" type="email" className="input max-w-full" />
                        <label className="form-label">
                            <span className="form-label-alt text-inherit">Please enter a valid email id or phone number.</span>
                        </label>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Password</label>
                        <div className="form-control">
                            <input placeholder="Type here" type="password" className="input max-w-full" />
                        </div>
                    </div>
                    <div className="form-field">
                        <div className="form-control justify-between">
                            <div className="flex gap-2 text-white">
                                <input type="checkbox" className="checkbox" />
                                <a href="#">Remember me</a>
                            </div>
                            <label className="form-label">
                                <a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
                            </label>
                        </div>
                    </div>
                    <div className="form-field pt-5">
                        <div className="form-control justify-between">
                            <button type="button" className="btn btn-primary w-full">Sign in</button>
                        </div>
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <a className="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}