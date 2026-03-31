'use client';
import React from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl text-gray-600">
            Développeur passionné par la création d'applications web modernes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              À propos de moi
            </h2>
            <p className="text-gray-600">
              Je suis un développeur web enthousiaste, spécialisé dans la création d'expériences numériques 
              innovantes. Mon objectif est de combiner créativité et expertise technique pour donner vie à 
              des projets ambitieux.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Voir mes projets
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                Mon parcours
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mes compétences</h3>
            <div className="space-y-3">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'].map((skill) => (
                <div key={skill} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="ml-4 min-w-[100px]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 