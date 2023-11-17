import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useAppSelector} from "./hooks/useAppSelector";
import Modal from "./components/Modal/Modal";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {

    const {isOpen} = useAppSelector(state => state.filter)

    {document.body.style.overflow=isOpen ? 'hidden' : ''}

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><Header/><Main/></>}/>
                <Route path='/:id' element={<DetailPage/>}/>
            </Routes>
        </BrowserRouter>
        {isOpen && <Modal/>}
    </div>
    );
}

export default App;
