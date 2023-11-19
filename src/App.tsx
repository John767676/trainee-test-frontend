import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useAppSelector} from "./hooks/useAppSelector";
import Modal from "./components/Modal/Modal";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import ErrorFind from "./pages/ErrorFind/ErrorFind";

function App() {

    const {isOpen} = useAppSelector(state => state.filter)

    {document.body.style.overflow=isOpen ? 'hidden' : ''}

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/*<Route path='*' element={<ErrorFind/>} />*/}
                    <Route path='/' element={<><Header/><Main/></>}/>
                    <Route path='/:id' element={<DetailPage/>} errorElement={<ErrorFind/>}/>
                </Routes>
            </BrowserRouter>
            {isOpen && <Modal/>}
        </div>
    );
}

export default App;
