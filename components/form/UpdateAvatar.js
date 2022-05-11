import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    fullName: "",
    photo: "",
};

const UpdateAvatarSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    photo: Yup.string().required("Photo required"),
});

function UpdateAvatar() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={UpdateAvatarSchema}
                onSubmit={(fields) => {
                    alert(
                        "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-12 mb-3">
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
                            <div className="col-xxl-12">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        className="me-3 rounded-circle me-0 me-sm-3"
                                        src="images/profile/3.png"
                                        width="55"
                                        height="55"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <h4 className="mb-0">Jannatul Maowa</h4>
                                        <p className="mb-0">
                                            Max file size is 20mb
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <Field
                                    name="photo"
                                    type="file"
                                    className={
                                        
                                        (errors.photo && touched.photo
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="photo"
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
export default UpdateAvatar;
