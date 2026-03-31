import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Mon Portfolio
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Accueil
          </Link>
          <Link href="/parcour" className="hover:text-gray-300">
            Parcours
          </Link>
          <Link href="/projets" className="hover:text-gray-300">
            Projets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
