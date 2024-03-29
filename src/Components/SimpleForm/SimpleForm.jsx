

const SimpleForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log('form submitted');
  }

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="phone" id="" />
        <br />
        <input type="submit" value="Submit" />
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
};

export default SimpleForm;