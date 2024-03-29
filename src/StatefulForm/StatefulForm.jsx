import { useState } from "react";


const StatefulForm = () => {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 4) {
      setError("Password must be 4 characters or longer")
    } else {
      setError('');
    }
    console.log(name, email, password);
  }

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // }

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <div>
      <h2>Stateful Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
         type="text" name="name" placeholder="Enter name" id="name" />
        <br />
        <input 
          onChange={handleEmailChange}
          type="email" name="email" placeholder="Enter email" id="email" />
        <br />
        <input 
          onChange={handlePasswordChange}
          type="password" name="password" placeholder="Enter password" id="password" required />
        <br />
        <input type="submit" value="Submit" />
        {/* <button>Submit</button> */}
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;