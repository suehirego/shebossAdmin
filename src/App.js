import React, { useContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import NewUser from './pages/newUser/NewUser';
import SingleUser from './pages/singleUser/SingleUser';
import SingleProduct from './pages/singleProduct/SingleProduct';
import NewProduct from './pages/newProduct/NewProduct';
import SingleOrder from './pages/singleOrder/SingleOrder';
import { userInputs } from './formData';
import './style/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import { userColumns, productColumns, orderColumns } from './dataTableSource';

const App = () => {

    const { darkMode } = useContext(DarkModeContext);

    const ProtectedRoute = ({ children }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        }

        return children;
    };




    return (

        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login />} />
                        <Route index element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />

                        <Route path="users">
                            <Route index element={
                                <ProtectedRoute>
                                    <List columns={userColumns} />
                                </ProtectedRoute>
                            } />
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <SingleUser inputs={userInputs} title="Update User"/>
                                </ProtectedRoute>
                            } />
                            <Route path="new" element={
                                <ProtectedRoute>
                                    <NewUser inputs={userInputs} title="Add New User" />
                                </ProtectedRoute>
                            } />
                        </Route>

                        <Route path="products">
                            <Route index element={
                                <ProtectedRoute>
                                    <List columns={productColumns} />
                                </ProtectedRoute>
                            } />
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <SingleProduct />
                                </ProtectedRoute>
                            } />
                            <Route path="new" element={
                                <ProtectedRoute>
                                    <NewProduct />
                                </ProtectedRoute>
                            } />
                        </Route>

                        <Route path="orders">
                            <Route index element={
                                <ProtectedRoute>
                                    <List columns={orderColumns} />
                                </ProtectedRoute>
                            } />
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <SingleOrder />
                                </ProtectedRoute>
                            } />
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
