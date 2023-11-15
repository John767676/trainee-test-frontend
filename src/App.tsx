import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {getUsers} from "./store/userSlice/user-slice";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";

function App() {

    const dispatch = useAppDispatch()
    const {filter} = useAppSelector(state => state.filter)

    useEffect(() => {
        dispatch(getUsers(filter))
    }, [filter])

    return (
    <div className="App">
        <Header />
        <Main />
    </div>
    );
}

export default App;
