import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import * as userReducer from "../../../../redux/users/users.slice";
import {Link} from "react-router-dom";


export const Home: React.FC = () => {

    const userState = useSelector((state: RootState) => {
        return state[userReducer.userFeatureKey];
    });

    // const {isAuthenticated} = userState;

    return (
        <>
            <div className="landing">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">

                        <div>
                            {
                                    <Link to={'/users/login'}>
                                        <button className="btn btn-warning ms-2">Login</button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;