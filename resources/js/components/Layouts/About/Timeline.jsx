import React from "react";

const timeline = [
    {
        year: "2020",
        title: "Awal Mula",
        desc: "Berdirinya perusahaan dengan fokus pada marketplace lokal",
    },
    {
        year: "2021",
        title: "Pertumbuhan Pesat",
        desc: "Mencapai 500,000 pengguna aktif dan peluncuran mobile app",
    },
    {
        year: "2022",
        title: "Ekspansi Nasional",
        desc: "Memperluas jangkauan ke seluruh Indonesia",
    },
    {
        year: "2023",
        title: "Inovasi Teknologi",
        desc: "Implementasi AI untuk personalisasi pengalaman berbelanja",
    },
    {
        year: "2024",
        title: "Pencapaian Besar",
        desc: "Mencapai 1 juta pengguna aktif dan pembukaan pusat distribusi baru",
    },
];

const Timeline = () => {
    return (
        <>
            <section className="py-10 px-4 md:px-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
                            Our Journey
                        </span>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900">
                            See How We{"'"}re Progressing
                        </h2>
                        <p className="mt-4 text-gray-500 leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, alias assumenda id necessitatibus
                            similique omnis? Maiores iure molestiae repudiandae
                            nihil minima magnam necessitatibus quas dolorum.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {timeline.map((milestone, index) => (
                            <div
                                key={index}
                                className="relative pl-8 pb-12 border-l-2 border-indigo-200 last:border-0"
                            >
                                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600"></div>
                                <div className="transform hover:-translate-x-2 transition-all duration-300">
                                    <div className="bg-white p-6 rounded-xl shadow-lg">
                                        <h4 className="text-xl font-bold text-indigo-600 mb-2">
                                            {milestone.year}
                                        </h4>
                                        <h5 className="text-lg font-semibold text-gray-900 mb-2">
                                            {milestone.title}
                                        </h5>
                                        <p className="text-gray-600">
                                            {milestone.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;