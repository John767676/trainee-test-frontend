import React from 'react';
import {BiMenuAltRight} from 'react-icons/bi'
import {BsSearch} from  'react-icons/bs'
import './header.css'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setFilter, setFilterSearch, setFilterMenuOpen} from "../../store/filterSlice/filter-slice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDebouncedCallback} from "use-debounce";

const Header:React.FC = () => {

    const dispatch = useAppDispatch()
    const {filter, filterMenu} = useAppSelector(state => state.filter)

    const debounceOnChange = useDebouncedCallback(args => (
        dispatch(setFilterSearch(args))
    ),300)

    interface NavBarTypes {
        title: string,
        filterType: string,
    }

    const navBar:NavBarTypes[] = [
        {
            title: 'Все',
            filterType: 'all'
        },
        {
            title: 'Designers',
            filterType: 'design'
        },
        {
            title: 'Analysts',
            filterType: 'analytics'
        },
        {
            title: 'Managers',
            filterType: 'management'
        },
        {
            title: 'IOS',
            filterType: 'ios'
        },
        {
            title: 'Android',
            filterType: 'android'
        },
    ]

    return (
        <header className='header'>
            <div className="header__wrapper">
                <div className="header__logo">
                    Поиск
                </div>
                <div className="header__input">
                    <BsSearch className='header__search' size='35px' color={'rgb(161, 157, 157'}/>
                    <input className='header__input-field' type='search' name='search' placeholder='Введите имя, тег, почту...' autoComplete={'off'}
                    onChange={e => debounceOnChange(e.target.value)}
                    />
                    <BiMenuAltRight
                        className='header__menu' size='35px' color='rgb(161, 157, 157)'
                        onClick={() => dispatch(setFilterMenuOpen())}
                        style={filterMenu === 'birthday' ? {color: 'purple'} : undefined}
                    />
                </div>
                <div className="header__filters">
                    {navBar.map(el => (
                        <p key={el.filterType} onClick={
                            () => dispatch(setFilter(el.filterType))} style={el.filterType === filter ?
                            ({borderBottom: '2px solid purple', fontWeight: 'bold', color: 'black', marginBottom: '-31px'}) :
                            undefined}>{el.title}
                        </p>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;