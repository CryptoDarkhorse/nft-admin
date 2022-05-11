import Preferences from "../components/form/Preferences";
import Layout from "../components/layout/Layout";
import SettingsMenu from "./../components/layout/SettingsMenu";
function SettingsPreferences() {
    return (
        <>
            <Layout
                 headTitle="Application"
                 pageTitle="Application"
                 pageTitleSub={"Welcome ENFTX Settings Application page"}
                 pageClass={"dashboard"}
                 parent={"Settings"}
                 child={"Application"}
            >
                <SettingsMenu />

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Preperences</h4>
                            </div>
                            <div className="card-body">
                                <Preferences/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default SettingsPreferences;
