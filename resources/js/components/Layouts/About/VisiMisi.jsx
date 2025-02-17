import React from "react";
import { Target, Building2, CheckCircle } from "lucide-react";

const VisiMisi = () => {
    return (
        <>
            <section className="my-20 py-10 px-4 md:px-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform md:rotate-1 opacity-10"></div>
                            <div className="relative p-8 transform md:-rotate-3 bg-white rounded-3xl shadow-lg">
                                <Target className="w-12 h-12 text-indigo-600 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Visi Kami
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    Menjadi platform e-commerce terkemuka di
                                    Asia Tenggara yang menghadirkan revolusi
                                    dalam cara masyarakat berbelanja dan
                                    berbisnis online, dengan fokus pada inovasi
                                    teknologi dan pemberdayaan UMKM.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform md:-rotate-1 opacity-10"></div>
                            <div className="relative p-8 transform md:rotate-3 bg-white rounded-3xl shadow-lg">
                                <Building2 className="w-12 h-12 text-indigo-600 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Misi Kami
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    Membangun ekosistem digital yang inklusif
                                    dan berkelanjutan dengan:
                                    <ul className="mt-4 space-y-2 text-sm md:text-base">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
                                            <span>
                                                Menghadirkan solusi teknologi
                                                terdepan
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
                                            <span>
                                                Memberdayakan UMKM Indonesia
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
                                            <span>
                                                Menciptakan lapangan kerja
                                                berkualitas
                                            </span>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VisiMisi;