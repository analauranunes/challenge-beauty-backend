import { object, string } from "yup";

const createUserSchema = {
  schema: {
    body: {
      yupSchema: object().shape({
        name: string().required("Name is required."),
        email: string().email("Email invalid.").required("Email is required"),
        password: string().required("Password is required."),
      }),

      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createUserSchema;
