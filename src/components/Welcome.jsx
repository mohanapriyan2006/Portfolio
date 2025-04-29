import React from 'react'
import avatar from '../assets/avatar.png'
import '../styles/Welcome.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Welcome = ({ setIsTab, time, loading, setLoading }) => {

    return (
        <div onClick={() => setIsTab(true)} className="back">
            <div className='welcome-div'>
                {loading && <Skeleton height={150} width={150} circle={true} />}
                <img src={avatar} alt='Welcome-img' onLoad={() => setLoading(false)} />
                <div className="content">
                    <h2>Congratulations, You Found <b style={{ color: '#0283fc' }}>Me!</b></h2>
                    <p>Among the millions of pixels on the web, you’ve landed right here — and that’s no accident.</p>
                    <p>Get ready to explore a world of <b>passion</b>, <b>projects</b>, and <b>possibilities</b>.</p>
                </div>
            </div>
            <p style={{ marginTop: "30px" }}>Tab to <b>Close</b> ({time}s).</p>
        </div>

    )
}

export default Welcome;