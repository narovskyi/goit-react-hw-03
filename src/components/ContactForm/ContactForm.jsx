import { Formik, Form, ErrorMessage, Field } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import css from './ContactForm.module.css'

const initialValues = {
    name: '',
    number: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!').min(3, 'Name is too short!'),
    number: Yup.string().required('Required!').min(3, 'Number is too short!')
});

export default function ContactForm({ contacts, setContacts }) {
    const addContactHandler = (values, { resetForm }) => {
        const normilizedName = values.name.toLowerCase();
        const sameName = contacts.filter(contact => contact.name.toLowerCase() === normilizedName);
        if (sameName.length > 0) {
            alert(`${sameName[0].name} is already in contacts`);
            return;
        }
        setContacts(prevContacts => [
            ...prevContacts,
            {
                id: nanoid(),
                ...values
            }]);
        resetForm();
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addContactHandler}
            >
                <Form>
                    <div>
                        <Field
                            className={css.input}
                            placeholder="Name"
                            type="text"
                            name="name"
                        />
                        <ErrorMessage
                            className={css.errorNotification}
                            name="name"
                            component='span'
                        />
                    
                    </div>
                    <div>
                        <Field
                            className={css.input}
                            placeholder="Number"
                            type="tel"
                            name="number"
                        />
                        <ErrorMessage
                            className={css.errorNotification}
                            name="number"
                            component='span'
                        />
                    </div>
                    <button className={css.btn} type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    );
}