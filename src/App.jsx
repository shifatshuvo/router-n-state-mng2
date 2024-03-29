
import './App.css'
// import RefForm from './Components/SimpleForm/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import HookForm from './HookForm/HookForm'
// import ReusableForm from './ReuseableForm/ReusableForm'
// import StatefulForm from './StatefulForm/StatefulForm'
import GrandPa from './Components/GrandPa/GrandPa';

function App() {

  // const handleSignUpSubmit = (data) => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = (data) => {
  //   console.log('Update profile data', data);
  // }

  return (
    <>
      <h1>Form</h1>
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm
        formTitle={'Sign Up'} 
        handleSubmit={handleSignUpSubmit} >
          <div>
            <h2>Sign Up</h2>
            <p>Please Sign up now</p>
          </div>
      </ReusableForm> */}

      {/* <ReusableForm 
        formTitle={'Profile Update'} 
        handleSubmit={handleUpdateProfile} 
        submitBtnText={'Update'} >
          <div>
            <h2>Update Profile</h2>
            <p>Keep Updated</p>
          </div>
      </ReusableForm> */}

      <GrandPa />
    </>
  )
}

export default App
