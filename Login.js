import Header from './Header'
import React, { useState } from 'react'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function Login() {

        let info = { name, password }
        console.warn(info)
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">

                <h1>  Login </h1>
                <br />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={Login} className="btn btn-primary" >Login </button>
            </div>
        </>
    );
}
export default Login;  