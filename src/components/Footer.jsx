import React from 'react'
import './styles/footer.css'
import cover from '../assets/images/jdm-cover.jpeg'
import { PlayCircleFilledRounded, Repeat, Shuffle, SkipNext, SkipPrevious } from '@mui/icons-material'
import { LinearProgress } from '@mui/material'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img src={cover} alt="" />
            <div className='album-info'>
                <p>Crystals</p>
                <span>RAVE</span>
            </div>
        </div>
        <div className='footer__center'>
            <div className="footer__center--top">
                <Shuffle/>
                <SkipPrevious/>
                <PlayCircleFilledRounded fontSize='large'/>
                <SkipNext/>
                <Repeat/>
            </div>
            <div className="footer__center--bottom">
                <LinearProgress variant='determinate' value={30} color='primary'/>
            </div>
        </div>
        <div className='footer__right'>
            <p>volume controls</p>
        </div>
    </div>
  )
}

export default Footer