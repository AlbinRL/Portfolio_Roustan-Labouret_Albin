'use client';
import React from 'react';
import Navigation from '@/components/Navigation';

export default function Projets() {
  const projets = [
    {
      titre: "Portfolio Personnel",
      description: "Un portfolio moderne développé avec Next.js et Tailwind CSS",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      image: "/portfolio.jpg" // Vous pourrez ajouter vos propres images plus tard
    },
    // Vous pourrez ajouter d'autres projets ici
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Mes Projets
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Emplacement pour l'image du projet */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {projet.titre}
                </h3>
                <p className="text-gray-600 mb-4">
                  {projet.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 