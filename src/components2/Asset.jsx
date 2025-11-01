import React from 'react'

export default function Asset() {
    return (
        <div>

            <div id="assets-page" class="page">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
                        <div class="mb-4 sm:mb-0">
                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gray-900 mb-1 sm:mb-2">My Collection</h2>
                            <p class="text-sm sm:text-lg lg:text-xl text-gray-600">Manage and showcase your digital assets</p>
                        </div>
                        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3"><button onclick="showPage('create')" class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg text-sm sm:text-base"> Mint NFT </button> <button class="bg-white border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"> Import NFT </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 border border-gray-100">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">
                                        12
                                    </div>
                                    <div class="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                                        Total NFTs
                                    </div>
                                </div>
                                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 border border-gray-100">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-lg sm:text-2xl lg:text-3xl font-bold text-green-600">
                                        $2,847
                                    </div>
                                    <div class="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                                        Total Value
                                    </div>
                                </div>
                                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 border border-gray-100">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">
                                        5
                                    </div>
                                    <div class="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                                        Listed
                                    </div>
                                </div>
                                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 border border-gray-100">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-lg sm:text-2xl lg:text-3xl font-bold text-orange-600">
                                        $1,234
                                    </div>
                                    <div class="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                                        Earned
                                    </div>
                                </div>
                                <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                            <div class="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <div class="flex items-center space-x-2"><label class="text-xs sm:text-sm font-medium text-gray-700">Filter:</label> <select class="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm flex-1 sm:flex-none"> <option>All Items</option> <option>Listed</option> <option>Owned</option> <option>Sold</option> </select>
                                </div>

                            </div>
                        </div>
                        <div class="flex items-center justify-end space-x-2 sm:space-x-3"><button class="p-1.5 sm:p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg></button> <button class="p-1.5 sm:p-2 bg-indigo-100 rounded-lg">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg></button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div class="w-16 sm:w-20 lg:w-24 h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full opacity-80"></div>
                                    <div class="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-5 lg:left-6 w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-cyan-300 rounded-full animate-pulse"></div>
                                    <div class="absolute top-5 sm:top-6 lg:top-8 right-4 sm:right-5 lg:right-6 w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-pink-400 rounded-full animate-pulse"></div>
                                    <div class="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-0.5 sm:h-0.5 lg:h-1 bg-cyan-400"></div>
                                </div>
                                <div class="absolute top-2 sm:top-3 right-2 sm:right-3"><span class="bg-green-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">Listed</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-1 sm:space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-lg font-medium hover:bg-white transition-colors text-xs sm:text-sm"> View </button> <button class="bg-indigo-600/90 backdrop-blur-sm text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-xs sm:text-sm"> Edit </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 sm:p-4">
                            <h3 class="font-bold text-gray-900 mb-1 text-sm sm:text-base">Cyber Genesis #001</h3>
                            <p class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Digital Art Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-xs text-gray-500">
                                        Listed Price
                                    </div>
                                    <div class="font-bold text-indigo-600 text-sm sm:text-base">
                                        53.5 ETH
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-xs text-gray-500">
                                        Last Sale
                                    </div>
                                    <div class="font-bold text-gray-900 text-sm sm:text-base">
                                        45.2 ETH
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 relative overflow-hidden">
                                <div class="absolute inset-0">
                                    <div class="absolute top-12 left-12 w-16 h-16 bg-yellow-300 rounded-full opacity-70 blur-sm"></div>
                                    <div class="absolute top-20 right-12 w-12 h-24 bg-blue-400 rounded-lg opacity-60 transform rotate-45"></div>
                                    <div class="absolute bottom-16 left-16 w-14 h-14 bg-green-400 opacity-50 transform rotate-12"></div>
                                    <div class="absolute top-16 right-20 w-6 h-6 bg-white rounded-full"></div>
                                </div>
                                <div class="absolute top-3 right-3"><span class="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">Owned</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"> List </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Abstract Dreams #247</h3>
                            <p class="text-sm text-gray-600 mb-3">Modern Art Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Floor Price
                                    </div>
                                    <div class="font-bold text-gray-600">
                                        $32,100
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Purchased
                                    </div>
                                    <div class="font-bold text-gray-900">
                                        $28,500
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-900 relative overflow-hidden">
                                <div class="absolute bottom-0 left-0 right-0">
                                    <svg viewbox="0 0 256 160" class="w-full h-24"><polygon points="0,160 64,96 128,112 192,80 256,104 256,160" fill="#1e1b4b" opacity="0.8" /> <polygon points="0,160 48,120 112,128 176,104 224,120 256,112 256,160" fill="#312e81" opacity="0.6" />
                                    </svg>
                                </div>
                                <div class="absolute top-6 left-8 w-1 h-1 bg-white rounded-full"></div>
                                <div class="absolute top-12 right-12 w-1 h-1 bg-white rounded-full"></div>
                                <div class="absolute top-8 right-20 w-1 h-1 bg-white rounded-full"></div>
                                <div class="absolute top-12 right-12 w-8 h-8 bg-yellow-200 rounded-full opacity-90"></div>
                                <div class="absolute top-3 right-3"><span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">Owned</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"> Manage </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Cosmic Valley #089</h3>
                            <p class="text-sm text-gray-600 mb-3">Space Art Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Current Bid
                                    </div>
                                    <div class="font-bold text-blue-600">
                                        $67,800
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Ends In
                                    </div>
                                    <div class="font-bold text-gray-900">
                                        2h 15m
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-emerald-400 to-teal-600 relative overflow-hidden">
                                <div class="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                                    <div class="bg-white opacity-20 rounded-sm"></div>
                                    <div class="bg-white opacity-40 rounded-sm"></div>
                                    <div class="bg-white opacity-60 rounded-sm"></div>
                                    <div class="bg-white opacity-30 rounded-sm"></div>
                                    <div class="bg-white opacity-50 rounded-sm"></div>
                                    <div class="bg-white opacity-70 rounded-sm"></div>
                                    <div class="bg-white opacity-20 rounded-sm"></div>
                                    <div class="bg-white opacity-40 rounded-sm"></div>
                                    <div class="bg-white opacity-60 rounded-sm"></div>
                                    <div class="bg-white opacity-80 rounded-sm"></div>
                                    <div class="bg-white opacity-30 rounded-sm"></div>
                                    <div class="bg-white opacity-50 rounded-sm"></div>
                                    <div class="bg-white opacity-40 rounded-sm"></div>
                                    <div class="bg-white opacity-60 rounded-sm"></div>
                                    <div class="bg-white opacity-20 rounded-sm"></div>
                                    <div class="bg-white opacity-70 rounded-sm"></div>
                                </div>
                                <div class="absolute top-3 right-3"><span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">Sold</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-gray-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"> History </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Pixel Matrix #156</h3>
                            <p class="text-sm text-gray-600 mb-3">Geometric Art Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Sold For
                                    </div>
                                    <div class="font-bold text-green-600">
                                        $41,700
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Profit
                                    </div>
                                    <div class="font-bold text-green-600">
                                        +$12,300
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-b from-amber-200 via-orange-300 to-red-400 relative overflow-hidden">
                                <div class="absolute top-12 left-1/2 transform -translate-x-1/2">
                                    <div class="w-16 h-20 bg-gradient-to-b from-pink-200 to-orange-200 rounded-full"></div>
                                    <div class="absolute top-6 left-5 w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <div class="absolute top-6 right-5 w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-1.5 bg-orange-300"></div>
                                    <div class="absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-red-400 rounded-full"></div>
                                </div>
                                <div class="absolute top-3 right-3"><span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">Listed</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"> Edit </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Portrait Series #034</h3>
                            <p class="text-sm text-gray-600 mb-3">Classic Art Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Listed Price
                                    </div>
                                    <div class="font-bold text-indigo-600">
                                        $89,200
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Views
                                    </div>
                                    <div class="font-bold text-gray-900">
                                        1,247
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-slate-800 to-gray-900 relative overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="w-32 h-32 border-4 border-blue-400 rounded-full relative">
                                        <div class="absolute inset-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                                            NFT
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute top-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <div class="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                <div class="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                <div class="absolute top-3 right-3"><span class="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">Owned</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"> List </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Digital Badge #006</h3>
                            <p class="text-sm text-gray-600 mb-3">Badge Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Floor Price
                                    </div>
                                    <div class="font-bold text-gray-600">
                                        $15,800
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Rarity
                                    </div>
                                    <div class="font-bold text-purple-600">
                                        Rare
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-violet-600 to-purple-800 relative overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="w-24 h-24 bg-gradient-to-br from-pink-400 to-violet-600 rounded-lg transform rotate-45"></div>
                                    <div class="absolute w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg transform -rotate-12"></div>
                                    <div class="absolute w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
                                </div>
                                <div class="absolute top-3 right-3"><span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">Listed</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-yellow-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors"> Complete </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Geometric Fusion #007</h3>
                            <p class="text-sm text-gray-600 mb-3">Abstract Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Mint Progress
                                    </div>
                                    <div class="font-bold text-yellow-600">
                                        $54
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Est. Value
                                    </div>
                                    <div class="font-bold text-gray-900">
                                        $72.40
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div class="relative">
                            <div class="aspect-square bg-gradient-to-br from-rose-400 to-pink-600 relative overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="w-20 h-24 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-lg">
                                        <div class="w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-lg"></div>
                                        <div class="p-3 text-center">
                                            <div class="w-10 h-1 bg-gray-400 rounded mx-auto mb-1"></div>
                                            <div class="w-8 h-1 bg-gray-300 rounded mx-auto mb-2"></div>
                                            <div class="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute top-3 right-3"><span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">Listed</span>
                                </div>
                            </div>
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div class="flex space-x-2"><button class="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"> View </button> <button class="bg-indigo-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"> Edit </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 mb-1">Digital Card #008</h3>
                            <p class="text-sm text-gray-600 mb-3">Card Collection</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="text-sm text-gray-500">
                                        Listed Price
                                    </div>
                                    <div class="font-bold text-indigo-600">
                                        $34.90
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">
                                        Offers
                                    </div>
                                    <div class="font-bold text-gray-900">
                                        3
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-8 sm:mt-12"><button class="bg-gray-100 text-gray-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base"> Load More NFTs </button>
                </div>
            </div>
        </div>
    )
}
