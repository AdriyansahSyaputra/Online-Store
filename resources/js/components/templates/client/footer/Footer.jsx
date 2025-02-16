import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Company Name
                            </h3>
                            <p className="text-sm">
                                Kami berkomitmen untuk memberikan layanan
                                terbaik dan produk berkualitas untuk semua
                                pelanggan kami.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="hover:text-white">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="hover:text-white">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="hover:text-white">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Layanan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Produk
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Hubungi Kami
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <MapPin size={20} />
                                    <span>Jl. Contoh No. 123, Jakarta</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone size={20} />
                                    <span>+62 123 4567 890</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail size={20} />
                                    <span>info@company.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Newsletter
                            </h3>
                            <p className="text-sm">
                                Berlangganan newsletter kami untuk mendapatkan
                                update terbaru.
                            </p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gray-600"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Copyright Section */}
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-sm">
                            © {new Date().getFullYear()} Company Name. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;