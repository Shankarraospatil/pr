import { useState } from "react";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleLogin = async (e) => {
e.preventDefault();


try {

  const res = await fetch("http://localhost:8088/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  const data = await res.json();

  if(res.ok){
    setMessage("Login Successful: " + data.name);
    localStorage.setItem("jwt_token", data.token);
  }else{
    setMessage(data.error || "Login failed");
  }

} catch(err){
  setMessage("Server error");
}


};

return (


<div style={{padding:"40px"}}>

  <h2>Login</h2>

  <form onSubmit={handleLogin}>

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />

    <br/><br/>

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />

    <br/><br/>

    <button type="submit">Login</button>

  </form>

  <p>{message}</p>

</div>


);
}

export default Login;
