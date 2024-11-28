import PropTypes from "prop-types";

const ToDo = ({ task }) => {
  return (
    <div>
      <li>Task: {task}</li>
    </div>
  );
};

ToDo.propTypes = {
    task: PropTypes.object.isRequired,
}

export default ToDo;