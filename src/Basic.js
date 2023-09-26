// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } 
from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' ,isactive: false, colors: "",}}
    
      onSubmit={(values) => {
    
        console.log(values);
      }}
    >
      
        <Form>
          <Field type="email" name="email" />
      
          <Field type="password" name="password" />

          <Field type="checkbox" name="isactive"/>

          <Field name="colors" as="select" className="my-select">
   <option value="red">Red</option>
   <option value="green">Green</option>
   <option value="blue">Blue</option>
 </Field>
        
          <button type="submit">
            Submit
          </button>
        </Form>
      
    </Formik>
  </div>
);

export default Basic;