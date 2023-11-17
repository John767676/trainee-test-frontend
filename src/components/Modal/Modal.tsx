import React from 'react';
import { IoMdClose } from "react-icons/io";
import './modal.css'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setFilterMenu, setFilterMenuOpen} from "../../store/filterSlice/filter-slice";
import {useAppSelector} from "../../hooks/useAppSelector";

const Modal: React.FC = () => {

    const dispatch = useAppDispatch()
    const {filterMenu} = useAppSelector(state => state.filter)


    return (
        <div className='modal__background'>
            <div className="modal__container">
                <div className="modal__upper-section">
                    <div className="modal__title">
                        Сортировка
                    </div>
                    <div className="modal__close">
                        <IoMdClose className='modal__close-btn' onClick={() => dispatch(setFilterMenuOpen())} size='24px'/>
                    </div>
                </div>
                <div className="modal__lower-section">
                    <form className='modal__form'>
                        <label>
                            <input type='radio' name='filterSet' value = 'alphabet' onChange={(e) => dispatch(setFilterMenu(e.target.value))} checked={filterMenu === 'alphabet'}/>
                            По алфавиту
                        </label>
                        <label>
                            <input type="radio" name='filterSet' value = 'birthday' onChange={(e) => dispatch(setFilterMenu(e.target.value))} checked={filterMenu === 'birthday'}/>
                            По дню рождения
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;