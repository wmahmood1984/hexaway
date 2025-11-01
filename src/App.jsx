import React from 'react'
import Nav from './components2/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components2/Home'
import Auth from './components2/Auth'
import Dashboard from './components2/Dashboard'
import Trade from './components2/Trade'
import Create from './components2/Create'
import Asset from './components2/Asset'
import Tree from './components2/Tree'
import History from './components2/History'
import { Toaster } from 'react-hot-toast';

export default function App() {
    return (
        <div>
             <Toaster position="top-right" reverseOrder={false} />
            <Nav />



                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/auth/:id" element={<Auth />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/tree" element={<Tree />} />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/asset" element={<Asset />} />
                    <Route path="/history" element={<History />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>























        </div >
    )
}
