import React, { useState } from 'react'
import Header from './Header'

function Registration() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    function signup() {
        let item = { name, password, email }
        console.warn(item)
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">

                <h1>  SignUp </h1>
                <br />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                <br />
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={signup} className="btn btn-primary" > SignUp</button>
            </div>
        </>
    );
}
export default Registration;        