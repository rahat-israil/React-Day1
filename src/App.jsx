import './App.css'

function App() {

  return (
    <>
      <h1 className='text-4xl mb-20 text-center font-bold'>Day 1</h1>
      <Device name='Rahat' age='24'></Device>
      <Student name='Sara' age='23' grade='13' score='90'></Student>
    </>
  )
}

function Device(props) {
  return (
    <h1>My name is {props.name} & My age is { props.age }</h1>
  )
 }


function Student({ name, age, grade, score }) {
  return (
    <div className='border-2 border-purple-900 rounded-lg p-10 w-fit'>
      <h1>My name is {name}.</h1>
      <h2>I read in class {grade}.</h2>
      <h2>I am {age} years old.</h2>
      <h2>My average mark is {score}.</h2>
    </div>
  );
 }


export default App
