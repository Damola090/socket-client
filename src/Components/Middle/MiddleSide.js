
import Button from '../Button';
import './MiddleSide.css';

function MiddleSide() {

    return (
        <div className="middleside_container_box">
            <div className='middleside_inner_container_box'>
                <div className='middleside_header'>
                    <h1>Mutiat Orunsholu</h1>
                </div>
                <div className='middleside_body'>
                    <div className='middleside_body-leftmsg'>
                        <p>Dont Come home today again babe</p>
                    </div>
                    <div className='middleside_body-rightmsg'>
                        <p>where are u guys</p>
                    </div>
                </div>
                <div className='middleside_footer'>
                    <div className='middleside_footer_input'>
                        <input className='input_field' name='message' />
                    </div>
                    <div className='middleside_footer_button'>
                        <Button>Message</Button>
                        <Button>Location</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSide;

