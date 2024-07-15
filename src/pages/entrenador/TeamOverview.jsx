import React from 'react';

const TeamOverview = () => {
  const players = Array(12).fill({ name: 'Nombre' });

  const handlePlayerClick = (player) => {
    // Handle player click event
    console.log('Player clicked:', player.name);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col md:flex-row bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-6xl">
        
        {/* Left Section */}
        <div className="md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 pb-4 md:pb-0 md:pr-4">
          <img src="/team-logo.png" alt="Team Logo" className="w-32 md:w-48 h-32 md:h-48 mx-auto mb-4 md:mb-6"/>
          <div className="text-center text-sm md:text-lg text-black">
            <p className="mb-2 md:mb-4"><strong>Nombre</strong><br />Tin Tin Colombia</p>
            <p className="mb-2 md:mb-4"><strong>Entrenador</strong><br />Ernesto Motosierra</p>
            <p className="mb-2 md:mb-4"><strong>Jugadores</strong><br />13</p>
            <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
              Ver formación
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 md:pl-4">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {players.map((player, index) => (
              <div
                key={index}
                className="border-2 p-2 md:p-4 rounded-lg text-center cursor-pointer hover:bg-gray-200"
                onClick={() => handlePlayerClick(player)}
              >
                <img src="/player-icon.png" alt="Player Icon" className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-2"/>
                <p className="text-xs md:text-base">{player.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Edit Icon */}
        <div className="absolute top-0 right-0 m-2 cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-600 hover:text-gray-800" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M15.232 5.232l3.536 3.536M9 13.5V17h3.5l9-9a2.828 2.828 0 00-4-4l-9 9z" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;





