import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long"),
});
