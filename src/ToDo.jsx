import PropTypes from "prop-types";

// const ToDo = ({ task }) => {
//   return (
//     <div>
//       <li>Task: {task}</li>
//     </div>
//   );
// };


// Conditional Rendaring 1
// const ToDo = ({ task, isDone }) =>  {
//   if (isDone === true)  {
//     return <li>Finished:  {task}</li>
//   }
//   else {
//     return <li>Work on: {task}</li>
//   }
// };

// Conditional Rendering 2
// const ToDo = ({ task, isDone }) => {
//   if (isDone) {
//     return <li>Finished: {task}</li>
//   }
//   return <li>Work on: {task}</li>
// };
 
// Conditional Rendering 3 (Ternary Operator)
// const ToDo = ({ task, isDone }) => {
//   return <li> {isDone? 'Finished' : 'Work on'} : {task}</li>
//  };

// Conditional Rendering 4 with &&
const ToDo = ({ task, isDone }) => {
  return (
    <li>{task} { isDone && ': Done' }</li>
  )
};
 
// Conditional Rendering 5 with ||
const ToDo = ({ task, isDone }) => {
  return (
    <li>
      {task} {isDone || ': Do it'}
    </li>
  );
};


ToDo.propTypes = {
  task: PropTypes.object.isRequired,
  isDone: PropTypes.bool, 
}

export default ToDo;