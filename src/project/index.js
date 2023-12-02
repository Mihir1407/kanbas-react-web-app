import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="signin" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account/:id" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;

