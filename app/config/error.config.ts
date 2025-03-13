/* eslint-disable indent */
export const ERRORS = {
  DEFAULT: {
    DEFAULT: {
      field: "",
      errorMessage: "Something went wrong. Please contact support.",
    },
    // 400s
    400: {
      field: "",
      errorMessage: "Request is not valid. Please contact support.",
    },
    401: {
      field: "",
      errorMessage: "Unauthorized access. Please contact support.",
    },
    404: {
      field: "",
      errorMessage: "Can't find requested resource. Please contact support.",
    },

    // 500s
    500: {
      field: "",
      errorMessage: "Internal server error. Please try again later",
    },
    501: {
      field: "",
      errorMessage: "Service unavailable. Please try again later",
    },
  },
  AUTH_MODULE: {
    DEFAULT: {
      400: {
        "MS-4001": {
          field: "",
          errorMessage: "User is not valid. please contact support.",
        },
      },
      500: {
        "MS-5000": {
          field: "",
          errorMessage: "SMS Gateway error. Please try again later",
        },
      },
    },
    registerUser: {
      409: {
        "Invalid Request": {
          errorMessage:
            // eslint-disable-next-line quotes
            "Email already registered, if you can't remember you password, please email us on support@carofi.app",
          type: "warning",
          field: "email",
        },
      },
    },
    signUpUser: {
      409: {
        "Invalid Request": {
          errorMessage:
            // eslint-disable-next-line quotes
            "Email already registered, if you can't remember you password, please email us on support@carofi.app",
          type: "warning",
          field: "email",
        },
      },
    },
    loginUser: {
      409: {
        "Invalid Request": {
          errorMessage: "Incorrect email or password, please try again.",
          type: "warning",
          field: "email",
        },
      },
      400: {
        "Invalid Request": {
          errorMessage: "Incorrect email or password, please try again.",
          type: "warning",
          field: "email",
        },
      },
    },
  },
  MERCHANT_MODULE: {
    DEFAULT: {
      field: "",
      errorMessage: "Something went wrong. Please contact support.",
    },
    // 400s
    400: {
      field: "",
      errorMessage: "Request is not valid. Please contact merchant support.",
    },
    401: {
      field: "",
      errorMessage: "Unauthorized access. Please contact support.",
    },
    404: {
      field: "",
      errorMessage: "Can't find requested resource. Please contact support.",
    },

    // 500s
    500: {
      field: "",
      errorMessage: "Internal server error. Please try again later",
    },
    501: {
      field: "",
      errorMessage: "Service unavailable. Please try again later",
    },
  },
  CUSTOMERS_MODULE: {
    createCustomerPersonalData: {
      409: {
        "Bad Request": {
          errorMessage: "Customer with this email already exists",
        },
      },
    },
  },
}
