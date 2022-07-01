import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Header.styles.css'

export const Header = () => {

    const navigate = useNavigate()

    const handleLogut = () => {
        localStorage.removeItem('logged')
        navigate('/')
    }

    return (
        <header className='header'>
            <span>Go Scrum</span>
            <div onClick={handleLogut}>x</div>
        </header>
    )
}
