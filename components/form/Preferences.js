import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    language: "",
    currency: "",
    theme: "",
    timeZone: "",
};

const PreferencesSchema = Yup.object().shape({
    language: Yup.string().required("Language is required"),
    currency: Yup.string().required("Currency is required"),
    theme: Yup.string().required("Theme is required"),
    timeZone: Yup.string().required("Timezone is required"),
});

function Preferences() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={PreferencesSchema}
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
                                    Language Default
                                </label>
                                <Field
                                    name="language"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.language && touched.language
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
                                    name="language"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Currency</label>
                                <Field
                                    name="currency"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.currency && touched.currency
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option value="">USD</option>
                                    <option value="">Euro</option>
                                    <option value="">BDT</option>
                                </Field>
                                <ErrorMessage
                                    name="currency"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Theme</label>
                                <Field
                                    name="theme"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.theme && touched.theme
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option value="">Light</option>
                                    <option value="">Dark</option>
                                    <option value="">Blue</option>
                                </Field>
                                <ErrorMessage
                                    name="theme"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                <label className="form-label">Time Zone</label>
                                <Field
                                    name="timeZone"
                                    as="select"
                                    className={
                                        "form-control" +
                                        (errors.timeZone && touched.timeZone
                                            ? " is-invalid"
                                            : "")
                                    }
                                >
                                    <option>
                                        (GMT-12:00) International Date Line West
                                    </option>
                                    <option>
                                        (GMT-11:00) Midway Island, Samoa
                                    </option>
                                    <option>(GMT-10:00) Hawaii</option>
                                    <option>(GMT-09:00) Alaska</option>
                                    <option>
                                        (GMT-08:00) Pacific Time (US & Canada)
                                    </option>
                                </Field>
                                <ErrorMessage
                                    name="timeZone"
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
export default Preferences;
