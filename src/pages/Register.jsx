import React from 'react'
import Add from '../img/addAvatar.png';
const Register = () => {
    return (
        <div>
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="logo">RJF Chat</span>
                    <span className="title">Register</span>
                    <form>
                        <input required type="text" placeholder="Name" />
                        <input required type="email" placeholder="Email" />
                        <input required type="password" placeholder="Password" />
                        <input required style={{display:"none"}} type="file" id="file" />
                        <label htmlFor="file">
                            <img src={Add} alt="" />
                            <span>Add an avatar</span>
                        </label>
                        <button >Sign up</button>
                        {/* {loading && "Uploading and compressing the image please wait..."}
                        {err && <span>Something went wrong</span>} */}
                    </form>
                    <p>
                        You do have an account?<br/>
                        <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
