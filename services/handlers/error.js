export const statusCodeErrorHandler = (code) => {
  switch (code) {
    case 401: {
      responseHandler(res, options);
      break;
    }
    case 403: {
      alertHandler('error', accessDenied);
      break;
    }
    case 404: {
      alertHandler('error', accessDenied);
      break;
    }
    case 500: {
      alertHandler('error', notFound);
      break;
    }
    default:
      return alertHandler('error', res.status);
  }
};
