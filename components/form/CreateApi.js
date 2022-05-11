import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    generateKey: "",
    confirmKey: "",
};

const CreateApiSchema = Yup.object().shape({
    generateKey: Yup.string().required("Generate Key is required"),
    confirmKey: Yup.string().required("Confirm Key required"),
});

function CreateApi() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={CreateApiSchema}
                onSubmit={(fields) => {
                    alert(
                        "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">
                                    Generate New Key
                                </label>
                                <Field
                                    name="generateKey"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.generateKey &&
                                        touched.generateKey
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="generateKey"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">
                                Confirm Passphrase
                                </label>
                                <Field
                                    name="confirmKey"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.confirmKey &&
                                        touched.confirmKey
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="confirmKey"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2"
                            >
                                Save
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default CreateApi;
