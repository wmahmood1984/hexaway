import React from 'react';
import { formatEther } from 'ethers';
import Spinner from './Spinner'; // adjust import if needed

export default function HexawayPackages({ packages, Package, downlines, handleUpdate, loading }) {

  // Helper function to determine upgrade eligibility
  const canUpgrade = (i) => {
    const pkg = packages[i];
    const hasTeam = downlines.indirect.length >= pkg.team;
    const hasPrevPackage = Number(Package.id) === i - 1;
    const alreadyActive = Number(Package.id) >= i;

    // WELCOME package (index 0) is always available initially
    if (i === 0) return Number(Package.id) === 0 || Number(Package.id) === -1;

    // For higher packages, require previous one + team criteria
    return hasPrevPackage && hasTeam && !alreadyActive;
  };

  // Helper to generate button text dynamically
  const getButtonText = (i) => {
    if (loading) return (<><Spinner size={20} color="#fff" /><span>Processing...</span></>);
    if (Package.id == i) return `Active`;

    const pkg = packages[i];
    const remaining = pkg.team - downlines.indirect.length;

    if (!canUpgrade(i)) {
      if (Number(Package.id) < i - 1) return `Buy previous package first`;
      if (remaining > 0) return `Need ${remaining} team members`;
    }
    return `Upgrade`;
  };

  // Package data for consistent styling
  const gradients = [
    { from: 'from-blue-50', to: 'to-blue-100', hover: 'hover:border-blue-300', text: 'text-blue-800', value: 'text-blue-600' },
    { from: 'from-green-50', to: 'to-green-100', hover: 'hover:border-green-300', text: 'text-green-800', value: 'text-green-600' },
    { from: 'from-purple-50', to: 'to-purple-100', hover: 'hover:border-purple-300', text: 'text-purple-800', value: 'text-purple-600' },
    { from: 'from-yellow-50', to: 'to-yellow-100', hover: 'hover:border-yellow-300', text: 'text-yellow-800', value: 'text-yellow-600' },
    { from: 'from-red-50', to: 'to-red-100', hover: 'hover:border-red-300', text: 'text-red-800', value: 'text-red-600' },
    { from: 'from-indigo-50', to: 'to-indigo-100', hover: 'hover:border-indigo-300', text: 'text-indigo-800', value: 'text-indigo-600' },
  ];

  const names = ['WELCOME', 'DI', 'TRI', 'TETRA', 'PENTA', 'HEXA'];

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Hexaway Packages</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`package-card bg-gradient-to-br ${gradients[i].from} ${gradients[i].to} p-4 sm:p-6 rounded-xl text-center border-2 border-transparent ${gradients[i].hover} transition-all`}
          >
            <h4 className={`font-bold text-base sm:text-xl ${gradients[i].text} mb-2`}>{names[i]}</h4>
            <div className={`text-2xl sm:text-3xl font-bold ${gradients[i].value} my-2 sm:my-3`}>
              ${formatEther(pkg.price)}
            </div>
            <div className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Limit: {formatEther(pkg.limit)}
            </div>
            <button
              disabled={!canUpgrade(i)}
              style={
                !canUpgrade(i)
                  ? { backgroundColor: 'grey', color: 'white', cursor: 'not-allowed' }
                  : {}
              }
              onClick={() => canUpgrade(i) && handleUpdate(pkg)}
              className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-lg hover:bg-purple-700 text-sm sm:text-base transition-colors font-medium"
            >
              {getButtonText(i)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
