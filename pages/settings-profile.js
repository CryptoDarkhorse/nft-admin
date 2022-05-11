import UpdateInfo from "../components/form/UpdateInfo";
import Layout from "../components/layout/Layout";
import PersonalInfo from "./../components/form/PersonalInfo";
import UpdateAvatar from "./../components/form/UpdateAvatar";
import SettingsMenu from "./../components/layout/SettingsMenu";

function SettingsProfile() {
    return (
        <>
            <Layout
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Welcome ENFTX Settings Profile page"}
                pageClass={"dashboard"}
                parent={"Settings"}
                child={"Profile"}
            >
                <SettingsMenu />
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">User Profile</h4>
                            </div>
                            <div className="card-body">
                                <UpdateAvatar />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Update Profile</h4>
                            </div>
                            <div className="card-body">
                                <UpdateInfo />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Personal Information</h4>
                            </div>
                            <div className="card-body">
                                <PersonalInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default SettingsProfile;
