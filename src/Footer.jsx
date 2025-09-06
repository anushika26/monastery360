// Footer.jsx
import { Mail, MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-300 py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold">
              पे
            </div>
            <h2 className="text-xl font-semibold">Pemayantse Monastery</h2>
          </div>
          <p className="text-sm text-gray-400">
            The Perfect Sublime Lotus - A sacred Buddhist monastery serving as a
            spiritual beacon in the Himalayas for over 300 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Experience</a></li>
            <li><a href="#" className="hover:text-orange-400">Visit Info</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Visit Information */}
        <div>
          <h3 className="font-semibold text-white mb-3">Visit Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Clock size={16}/> 7:00 AM - 6:00 PM</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Pelling, West Sikkim</li>
            <li className="flex items-center gap-2"><Phone size={16}/> Entry: ₹10-20</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> 2,085m above sea level</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16}/> info@pemayantse.org
          </p>
          <p className="mt-4 text-xs text-gray-400">
            For guided tours and special events, please contact the monastery office.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-400">
        <p>© 2024 Pemayantse Monastery. All rights reserved. | Built with respect for Buddhist traditions</p>
        <p className="mt-1 text-gray-500">May all beings be happy and free from suffering</p>
      </div>
    </footer>
  );
}
