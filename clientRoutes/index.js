import { Route } from "./Route";
import Login from "../components/modals/Login";
import { Register } from "../components/modals/Register";
import { ParthnersRequest } from "../components/modals/ParthnersRequest";
import { Preorder } from '../components/modals/Preorder';

const ClientRoutes = () => {
    if(typeof window === "undefined") return <></>; //hash routs don't working on server
    return(
        <>
            <Route path="#login" component={Login} />
            <Route path="#register" component={Register} />
            <Route path="#parthners_request" component={ParthnersRequest} />
            <Route path="#preorder-" component={Preorder} />
        </>
    );
}
export default ClientRoutes;