import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Compass size={40} className="text-[#7c6ff7] mb-4" strokeWidth={1.5}/>
        <h1 className="font-display font-extrabold text-xl text-[#1a1a2e] mb-2">Page not found</h1>
        <p className="text-sm text-[#6b6b80] mb-6">This page doesn't exist or may have moved.</p>
        <Link to="/" className="bg-[#7c6ff7] text-white text-sm font-semibold px-5 py-2.5 rounded-lg">Back to Home</Link>
    </div>
  )
}

export default NotFound