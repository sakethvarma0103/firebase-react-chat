import React from 'react'

const Login = () => {
  return (
    <div>
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">RJF Chat</span>
            <span className="title">Login</span>
            <form>
                <input required type="email" placeholder="Email" />
                <input required type="password" placeholder="Password" />
                <button >Login </button>
                {/* {loading && "Uploading and compressing the image please wait..."}
                {err && <span>Something went wrong</span>} */}
            </form>
            <p>
                You don't have an account?<br/>
                <a href="/register">Register Now!</a>
            </p>
        </div>
    </div>
</div>
  )
}

export default Login
