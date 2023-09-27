import React from "react";
import { Formik, Form, Field, FieldArray, getIn } from "formik";

import * as yup from "yup";
import { generate } from "shortid";


const validationSchema = yup.object().shape({
  people: yup.array().of(
    yup.object().shape({
      firstName: yup.string().max(10),
      lastName: yup.string().max(10)
    })
  ),
  dogs: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Required")
    })
  )
});

const Input = ({ field, form }) => {
  console.log(form.errors);
  const errorMessage = getIn(form.errors, field.name);
  return (
    <>
      <input {...field} />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};

const MyEmp = () => {
  return (
    <div style={{ textAlign: "" }}>
      <Formik
        initialValues={{
          people: [{ id: "5", firstName: "Mau",
           lastName: "Moro" }],
          dogs: [{ id: "3", name: "Boby" }]
        }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {/*values comes from formik*/}
        {({ values, handleSubmit, handleChange, errors }) => (
          <Form onSubmit={handleSubmit}>
            <FieldArray name="people">
              {({ remove, push }) => (
                <div>
                  {values.people.map((p, index) => {
                    /*to get the error message*/
                    // const name = `people[${index}].lastName`;
                    // const errorMessage = getIn(errors, name);
                    return (
                      <div key={p.id}>
                        <Field
                          name={`people[${index}].firstName`}
                          component={Input}
                        />
                        <Field
                          name={`people[${index}].lastName`}
                          component={Input}
                        />
                        <div onClick={() => remove(index)}>X</div>
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() =>
                      push({ id: generate(), firstName: "", lastName: "" })
                    }
                  >
                    Add to list
                  </button>
                </div>
              )}
            </FieldArray>
            <FieldArray name="dogs">
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { dogs } = values;
                console.log(dogs);
                return (
                  <div>
                    {values.dogs.map((d, index) => {
                      return (
                        <div>
                          <Field
                            name={`dogs[${index}].name`}
                            component={Input}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            </FieldArray>
            <div>
              <button type="submit">Submit</button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyEmp;
