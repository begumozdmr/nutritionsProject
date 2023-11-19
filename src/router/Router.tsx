import React from 'react';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/about" element={<About />}>About</Route>
            <Route path="/contact" element={<Contact />}>Contact</Route>
            <Route path="/login" element={<Login />}>Login</Route>
            <Route path="/signUp" element={<SignUp />}>Sign Up</Route>
        </Routes>
    )
}
