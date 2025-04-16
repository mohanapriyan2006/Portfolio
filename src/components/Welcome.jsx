import React from 'react'
import avatar from '../assets/avatar.png'
import '../styles/Welcome.css';

const Welcome = ({setIsTab}) => {
    return (
        <div onClick={() => setIsTab(true)} className="back">
            <div className='welcome-div'>
                <img src={avatar} alt='Welcome-img' />
                <div className="content">
                    <h2>Congratulations, You Found <b style={{ color: '#0283fc' }}>Me!</b></h2>
                    <p>Among the millions of pixels on the web, you’ve landed right here — and that’s no accident.</p>
                    <p>Get ready to explore a world of <b>passion</b>, <b>projects</b>, and <b>possibilities</b>.</p>
                </div>
            </div>
            <p style={{marginTop: "30px"}}>Tab to <b>Close</b></p>
        </div>

    )
}

export default Welcome;