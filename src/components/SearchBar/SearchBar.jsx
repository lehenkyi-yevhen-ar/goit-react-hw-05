import { Formik, Form, Field } from "formik"
import s from './SearchBar.module.css'

const SearchBar = ({handleChangeQuery} ) => {
    const initialValues={query: '',};
    const handleSumbit = values => {
        console.log(values);
        handleChangeQuery(values.query)
        
    }
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSumbit}>
        <Form>
            <Field className={s.field} name='query' />
            <button className={s.btn}
            type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchBar
