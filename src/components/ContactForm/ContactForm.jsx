import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FormValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[\d-]+$/, "Must be a number")
    .required("Required"),
});

function ContactForm({ updateContacts }) {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    updateContacts(values);
    actions.resetForm();
  };
  const nameId = useId();
  const telId = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormValidSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={telId}>Number</label>
        <Field className={css.field} type="tel" name="number" id={telId} />
        <ErrorMessage name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
