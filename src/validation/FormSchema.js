import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("First name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large"], "Size is required!"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  peppers: yup.boolean(),
  meatballs: yup.boolean(),
  special: yup.string(),
});

export default formSchema;
