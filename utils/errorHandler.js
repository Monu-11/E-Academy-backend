// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }
// export default ErrorHandler;

//function components
function ErrorHandler(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

export default ErrorHandler;
