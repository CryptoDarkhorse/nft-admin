import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postal: "",
};

const PersonalInfoSchema = Yup.object().shape({
    fullName: Yup.string().required("Full is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    address: Yup.string().required("Present Address is required"),
    city: Yup.string().required("City is required"),
    postal: Yup.string().required("Post code is required"),
    country: Yup.string().required("country is required"),
});

function PersonalInfo() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={PersonalInfoSchema}
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
                                <label className="form-label">Full Name</label>
                                <Field
                                    name="fullName"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.fullName && touched.fullName
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="fullName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.email && touched.email
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Address</label>
                                <Field
                                    name="address"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.address && touched.address
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">City</label>
                                <Field
                                    name="city"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.city && touched.city
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Post Code</label>
                                <Field
                                    name="postal"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.postal && touched.postal
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="postal"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Country</label>
                                <Field
                                    name="country"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.country && touched.country
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option value="Bangladesh">
                                        Bangladesh
                                    </option>
                                    <option value="United States">
                                        United States
                                    </option>
                                    <option value="United Kingdom">
                                        United Kingdom
                                    </option>
                                </Field>
                                <ErrorMessage
                                    name="country"
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
export default PersonalInfo;
