import './App.css';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

function App() {
  return (
    <>
      <h1 className="text-4xl mb-20 text-center font-bold">Day 1</h1>

      <Device name="Rahat" age="24"></Device>
      <Student name="Sara" age="23" grade="13" score="90"></Student>
      <Student name="Jahan" age="24" grade="14" score="95"></Student>
      <Student></Student>
      <ToDo task="Learn React" isDone={true}> </ToDo>
      <ToDo task="Explore React Docomentation" isDone={false}> </ToDo>
    </>
  );
}

function Device(props) {
  return (
    <h1>
      My name is {props.name} & My age is {props.age}
    </h1>
  );
}

function Student({ name = 'Asrafia', age = 25, grade = 15, score = 50 }) {
  return (
    <div className="border-2 border-purple-900 rounded-lg p-10 w-fit mt-5">
      <h1>My name is {name}.</h1>
      <h2>I read in class {grade}.</h2>
      <h2>I am {age} years old.</h2>
      <h2>My average mark is {score}.</h2>
    </div>
  );
}

Device.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.number,
  score: PropTypes.number,
};

export default App;
