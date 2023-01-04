exports.create = ({ response, message, data = [] }) => {
  response.send({
    message: message ? message : "Data creation process was successful!",
    status: 201,
    success: true,
    results: data
  });
}

exports.retrive = ({
  response,
  status,
  message,
  data,
  count = 0,
  success = true,
}) => {
  response.send({
    message: message ? message : "Data retrive process was successful!",
    status: status ? status : 200,
    success: success,
    results: data,
    count: count
  });
}

exports.update = ({
  response,
  message,
  success = true,
  data = []
}) => {
  response.send({
    message: message ? message : "Data update process was successful!",
    status: 200,
    success: success,
    results: data
  });
}

exports.delete = ({
  response,
  message,
  success = true
}) => {
  response.send({
    message: message ? message : "Data dalete process was successful!",
    status: 200,
    success: success,
  });
}

exports.error = ({
  response,
  status,
  message
}) => {
  response.status(status).send({
    status: status,
    success: false,
    message: message ? message : "Internal Server Error!",
  });
}

exports.signIn = ({ response, token }) => {
  response.send({
    message: "SignIn process was successful!",
    status: 200,
    token: token,
    success: true,
  });
}

exports.signUp = ({ response }) => {
  response.send({
    message: "SignUp process was successful!",
    status: 200,
    success: true,
  });
}

exports.signout = ({ response }) => {
  response.send({
    message: "SignOu process was successful!",
    status: 200,
    success: true,
  });
}