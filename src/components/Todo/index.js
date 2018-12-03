import Todo from "./Todo";
import { setDelete } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todoList: state.todo
});

const mapDispatchToProps = dispatch => ({
  setDelete: index => dispatch(setDelete(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
