import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =useForm();

function onSubmit(){
  console.log("Submitting the form",data);
}
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First Name: </label>
      <input {...register('firstName')}/>
    </div>
    <br/>
    <div>
      <label>Middle Name: </label>
      <input {...register('MiddleName')}/>
    </div>
    <br/>
    <div>
      <label>Last Name: </label>
      <input {...register('LastName')}/>
    </div>
    <br />
    <input type='submit' />
   </form>
  )
}

export default App
