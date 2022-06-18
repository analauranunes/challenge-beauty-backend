import { object, string } from "yup";

const loginSchema = {
  schema: {
    body: {
      yupSchema: object().shape({
        email: string().email("Email invalid.").required("Email is required."),
        password: string().required("Passoword is required."),
      }),

      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default loginSchema;
