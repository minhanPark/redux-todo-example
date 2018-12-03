import Input from "./Input";
import { connect } from "react-redux";
import { setInput, submit } from "../../actions";

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  setInput: value => dispatch(setInput(value)),
  submit: text => dispatch(submit(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
