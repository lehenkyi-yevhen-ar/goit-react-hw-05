import { Formik, Form, Field } from "formik"

const SearchBar = ({handleChangeQuery} ) => {
    const initialValues={query: '',};
    const handleSumbit = values => {
        console.log(values);
        handleChangeQuery(values.query)
        
    }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSumbit}>
        <Form>
            <Field name='query' />
            <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchBar
