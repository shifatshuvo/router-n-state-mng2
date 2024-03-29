import useInputState from "../hooks/useInputState";

const HookForm = () => {

  // const [name, handleNameChange] = useInputState('Shifat');
  const emailState = useInputState('Shifat@gmail.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('form data', name);
    console.log(emailState.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" id="email" />
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;