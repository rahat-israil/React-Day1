import PropTypes from "prop-types";

// const ToDo = ({ task }) => {
//   return (
//     <div>
//       <li>Task: {task}</li>
//     </div>
//   );
// };


// Conditional Rendaring
const ToDo = ({ task, isDone }) => {
  if (isDone === true) {
    return <li>Finished: {task}</li>
  }
  else {
    return <li>Work on: {task}</li>
  }
};

ToDo.propTypes = {
  task: PropTypes.object.isRequired,
  isDone: PropTypes.bool,
}

export default ToDo;