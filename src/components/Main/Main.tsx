import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import MainItem from "../MainItem/MainItem";
import './main.css'

const Main:React.FC = () => {

    const {items, isLoading, error} = useAppSelector(state => state.user)

    return (
        <main className='main'>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <div className="main__wrapper">
                {items ? (
                    items.map(item => (
                        <MainItem data={item} key={item.id} />
                    ))
                ) : null}
            </div>
        </main>
    );
};

export default Main;