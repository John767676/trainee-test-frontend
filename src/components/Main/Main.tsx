import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import MainItem from "../MainItem/MainItem";
import './main.css'
import {getUsers} from "../../store/userSlice/user-slice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import SkeletonItem from "../Skeleton/SkeletonItem";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import SearchFail from "../SearchFilure/SearchFail";

const Main:React.FC = () => {

    const {items, isLoading, error} = useAppSelector(state => state.user)
    const {filterSearch, filterMenu, filter} = useAppSelector(state => state.filter)
    const dispatch = useAppDispatch()

    const filterItems = filterMenu === 'alphabet' ? items.slice().sort((a,b) => a.firstName.localeCompare(b.firstName)).filter(item => {
        if (filterSearch === '') {
            return item
        } else {
            return item.firstName.toLowerCase().includes(filterSearch.toLowerCase()) ||
                item.lastName.toLowerCase().includes(filterSearch.toLowerCase()) ||
                item.userTag.toLowerCase().includes(filterSearch.toLowerCase())
        }
    }) : (
        items.slice().sort((a,b) => a.birthday.localeCompare(b.firstName)).filter(item => {
            if (filterSearch === '') {
                return item
            } else {
                return item.firstName.toLowerCase().includes(filterSearch.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(filterSearch.toLowerCase()) ||
                    item.userTag.toLowerCase().includes(filterSearch.toLowerCase())
            }
        })
    )

    useEffect(() => {
        dispatch(getUsers(filter))
        const timer = setInterval(() => {
            dispatch(getUsers(filter))
        }, 50000)
        return () => clearInterval(timer)
    }, [filter])

    return (
        <main className='main'>
            {error && <ErrorPage/>}
            {isLoading ? <SkeletonItem count={6}/> :
                (filterItems.length === 0) ? <SearchFail/> :
                    <div className="main__wrapper">
                        {
                            filterItems.map(item => (
                                <MainItem data={item} key={item.id}/>
                            ))
                        }
                    </div>
            }
        </main>
    );
};

export default Main;