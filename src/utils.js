// Be sure to wrap component in withRouter and pass history from props
export const navTo = (path, history) => {
  history.push(path);
};
