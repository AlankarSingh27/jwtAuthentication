import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./modules/layout/pages/home/Home";
import NotFound404 from "./modules/layout/pages/not-found/NotFound404";
import {ToastContainer} from "react-toastify";
import LoginUser from "./modules/users/pages/LoginUser";
import RegisterUser from "./modules/users/pages/RegisterUser";
import {AppDispatch, useAppDispatch} from "./redux/store";
import {TokenUtil} from "./util/TokenUtil";
import * as userActions from "./redux/users/users.actions";
import Admin from "./modules/layout/pages/admin/Admin";

const App: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();


    useEffect(() => {
        if (TokenUtil.isLoggedIn()) {
            dispatch(userActions.getUserInfoAction());
        }
    }, [])

    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/admin'} element={<Admin/>}/>
                    <Route path={'/users/login'} element={<LoginUser/>}/>
                    <Route path={'/users/register'} element={<RegisterUser/>}/>
                    <Route path={'*'} element={<NotFound404/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
