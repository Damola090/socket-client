import { useContext } from 'react';

import './LeftSide.css';

import { } from '../../Store/Context'

import Header from '../Header';

function LeftSide({ user }) {

    return (
        <div className='leftside_main_container'>
            <Header />
            <div className='leftside_main_list'>
                {user && user.map(singleUser => (
                    <div key={singleUser.id} className='leftside_main_list-item'>
                        <h2 className='leftside_main_list-item_name'>{singleUser.username}</h2>
                        <p className='leftside_main_list-item_msg'>Latest Message</p>
                    </div>
                ))}


                {/* <div className='leftside_main_list-item'>
                    <h2 className='leftside_main_list-item_name'>Mutiat Orunsholu</h2>
                    <p className='leftside_main_list-item_msg'>Latest Message</p>
                </div>

                <div className='leftside_main_list-item'>
                    <h2 className='leftside_main_list-item_name'>Mutiat Orunsholu</h2>
                    <p className='leftside_main_list-item_msg'>Latest Message</p>
                </div>

                <div className='leftside_main_list-item'>
                    <h2 className='leftside_main_list-item_name'>Mutiat Orunsholu</h2>
                    <p className='leftside_main_list-item_msg'>Latest Message</p>
                </div> */}
            </div>
        </div>
    )
}

export default LeftSide;


