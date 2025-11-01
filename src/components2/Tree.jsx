import React from 'react'

export default function Tree() {
    return (
        <div>

            <div id="teamtree-page" class="page">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8">Team Tree Structure</h2>
                    <div class="bg-white rounded-xl shadow-lg p-4 sm:p-8 overflow-x-auto">
                        <div class="text-center mb-8">
                            <div class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full mb-4 shadow-lg"><span class="text-2xl font-bold">YOU</span>
                            </div>
                            <div class="text-lg font-semibold">
                                Your Account
                            </div>
                            <div class="text-sm text-gray-600">
                                Root Level
                            </div>
                            <div class="text-xs text-indigo-600 font-medium">
                                Total Network: 17 Members
                            </div>
                        </div>
                        <div class="mb-12">
                            <h3 class="text-2xl font-bold text-center mb-6 text-gray-800 bg-gradient-to-r from-green-50 to-green-100 py-3 rounded-lg border border-green-200">Direct Referrals</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                                <div class="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg"><span class="font-bold">A1</span>
                                    </div>
                                    <div class="font-semibold">
                                        Sarah Chen
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        Package: HEXA
                                    </div>
                                    <div class="text-sm text-green-600 font-medium">
                                        Active
                                    </div>
                                    <div class="text-xs text-gray-500 mt-1">
                                        Direct Referral #1
                                    </div>
                                </div>
                                <div class="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg"><span class="font-bold">B1</span>
                                    </div>
                                    <div class="font-semibold">
                                        Mike Johnson
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        Package: PENTA
                                    </div>
                                    <div class="text-sm text-green-600 font-medium">
                                        Active
                                    </div>
                                    <div class="text-xs text-gray-500 mt-1">
                                        Direct Referral #2
                                    </div>
                                </div>
                                <div class="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                                    <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg"><span class="font-bold">C1</span>
                                    </div>
                                    <div class="font-semibold">
                                        Emma Davis
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        Package: TETRA
                                    </div>
                                    <div class="text-sm text-green-600 font-medium">
                                        Active
                                    </div>
                                    <div class="text-xs text-gray-500 mt-1">
                                        Direct Referral #3
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-8">
                            <h3 class="text-2xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-blue-50 to-blue-100 py-3 rounded-lg border border-blue-200">Matrix Tree</h3>
                            <div class="text-center mb-6">
                                <h4 class="text-xl font-semibold text-gray-700 bg-gradient-to-r from-indigo-50 to-indigo-100 py-2 px-4 rounded-lg inline-block border border-indigo-200">Indirect Referrals</h4>
                            </div>
                            <div class="mb-8">
                                <h5 class="text-lg font-semibold text-center mb-6 text-gray-700 bg-purple-50 py-2 rounded-lg">Level 1 </h5>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
                                    <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                        <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow"><span class="text-sm font-bold">M1</span>
                                        </div>
                                        <div class="text-sm font-semibold">
                                            Alex Kim
                                        </div>
                                        <div class="text-xs text-gray-600">
                                            Package: TRI
                                        </div>
                                        <div class="text-xs text-green-600">
                                            Active
                                        </div>
                                    </div>
                                    <div class="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
                                        <div class="w-14 h-14 bg-gradient-to-br from-red-400 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow"><span class="text-sm font-bold">M2</span>
                                        </div>
                                        <div class="text-sm font-semibold">
                                            Lisa Wang
                                        </div>
                                        <div class="text-xs text-gray-600">
                                            Package: PENTA
                                        </div>
                                        <div class="text-xs text-green-600">
                                            Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <h5 class="text-lg font-semibold text-center mb-6 text-gray-700 bg-green-50 py-2 rounded-lg">Level 2 </h5>
                                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 max-w-4xl mx-auto">
                                    <div class="text-center p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
                                        <div class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow"><span class="text-xs font-bold">M3</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Tom Brown
                                        </div>
                                        <div class="text-xs text-gray-600">
                                            DI
                                        </div>
                                    </div>
                                    <div class="text-center p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                                        <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow"><span class="text-xs font-bold">M4</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Ana Lopez
                                        </div>
                                        <div class="text-xs text-gray-600">
                                            TETRA
                                        </div>
                                    </div>
                                    <div class="text-center p-3 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200">
                                        <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow"><span class="text-xs font-bold">M5</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            John Smith
                                        </div>
                                        <div class="text-xs text-gray-600">
                                            TRI
                                        </div>
                                    </div>
                                    <div class="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                        <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow"><span class="text-xs font-bold">M6</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Kate Wilson
                                        </div>
                                        <div class="text-xs text-gray-600">
                                            DI
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <h5 class="text-lg font-semibold text-center mb-6 text-gray-700 bg-yellow-50 py-2 rounded-lg">Level 3 </h5>
                                <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 lg:gap-3">
                                    <div class="text-center p-2 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M7</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            David Lee
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            DI
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg border border-violet-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M8</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Maria Garcia
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            TRI
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M9</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Ryan Taylor
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            WELCOME
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg border border-rose-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M10</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Sophie Chen
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            DI
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M11</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            James Miller
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            TRI
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-lime-50 to-lime-100 rounded-lg border border-lime-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M12</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Nina Patel
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            TETRA
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg border border-sky-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M13</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Carlos Rodriguez
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            DI
                                        </div>
                                    </div>
                                    <div class="text-center p-2 bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-lg border border-fuchsia-200">
                                        <div class="w-10 h-10 bg-gradient-to-br from-fuchsia-400 to-fuchsia-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 shadow"><span class="text-xs font-bold">M14</span>
                                        </div>
                                        <div class="text-xs font-semibold">
                                            Rachel Green
                                        </div>
                                        <div class="text-xs text-gray-500">
                                            WELCOME
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 pt-8 border-t border-gray-200 max-w-md mx-auto">
                            <div class="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                                <div class="text-2xl font-bold text-green-600">
                                    3
                                </div>
                                <div class="text-sm text-gray-600 font-medium">
                                    Direct
                                </div>
                                <div class="text-xs text-gray-500">
                                    Referrals
                                </div>
                            </div>
                            <div class="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200">
                                <div class="text-2xl font-bold text-indigo-600">
                                    17
                                </div>
                                <div class="text-sm text-gray-600 font-medium">
                                    Total Team
                                </div>
                                <div class="text-xs text-gray-500">
                                    All Levels
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 pt-8 border-t border-gray-200">
                            <h4 class="text-lg font-semibold text-center mb-6 text-gray-800">Team Performance Summary</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                                    <div class="text-xl font-bold text-emerald-600">
                                        16
                                    </div>
                                    <div class="text-sm text-gray-600 font-medium">
                                        Active Members
                                    </div>
                                    <div class="text-xs text-emerald-600">

                                    </div>
                                </div>
                                <div class="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                                    <div class="text-xl font-bold text-orange-600">
                                        $1,847
                                    </div>
                                    <div class="text-sm text-gray-600 font-medium">
                                        Team Volume
                                    </div>
                                    <div class="text-xs text-orange-600">

                                    </div>
                                </div>
                                <div class="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200">
                                    <div class="text-xl font-bold text-pink-600">
                                        $493.85
                                    </div>
                                    <div class="text-sm text-gray-600 font-medium">
                                        Your Earnings
                                    </div>
                                    <div class="text-xs text-pink-600">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
