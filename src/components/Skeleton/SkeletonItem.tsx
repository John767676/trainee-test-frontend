import React from 'react';
import '../MainItem/main-item.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import './skeleton.css'

interface ISkeletonPropsType {
    count: number
}

const SkeletonItem: React.FC<ISkeletonPropsType> = ({count}) => {
    return (
        <>
            {Array(count).fill(0).map((_, i) => (
                <div className='skeleton__item' key={i}>
                    <div className="skeleton__img">
                        <Skeleton circle width={150} height={150} />
                    </div>
                    <div className="skeleton__user">
                        <div className="skeleton__user-name-container">
                            <p className="skeleton__user-name">
                                {/*{firstName + ' ' + lastName}*/}
                                <Skeleton borderRadius='15px' height='25px' width={250}/>
                            </p>
                        </div>
                        <p className="skeleton__user-job">
                            <Skeleton borderRadius='15px'  width={150}/>
                        </p>
                    </div>
                </div>
            ))
            }
        </>
    );
};

export default SkeletonItem;