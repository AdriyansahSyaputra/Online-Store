// Data untuk Doughnut Chart (Keuangan)
export const doughnutData = {
    labels: ["Pemasukan", "Pengeluaran", "Profit", "Investasi"],
    datasets: [
        {
            data: [45000, 25000, 15000, 10000],
            backgroundColor: [
                "rgba(34, 197, 94, 0.8)",
                "rgba(239, 68, 68, 0.8)",
                "rgba(59, 130, 246, 0.8)",
                "rgba(168, 85, 247, 0.8)",
            ],
            borderColor: [
                "rgba(34, 197, 94, 1)",
                "rgba(239, 68, 68, 1)",
                "rgba(59, 130, 246, 1)",
                "rgba(168, 85, 247, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

// Data untuk Bar Chart (Orderan)
export const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Completed Orders",
            data: [65, 59, 80, 81, 56, 89],
            backgroundColor: "rgba(34, 197, 94, 0.8)",
        },
        {
            label: "Pending Orders",
            data: [28, 48, 40, 19, 86, 27],
            backgroundColor: "rgba(239, 68, 68, 0.8)",
        },
    ],
};

// Data untuk Line Chart (Produk)
export const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Produk Masuk",
            data: [120, 190, 150, 180, 160, 200],
            borderColor: "rgba(59, 130, 246, 1)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.4,
            fill: true,
        },
        {
            label: "Produk Terjual",
            data: [90, 150, 120, 160, 145, 180],
            borderColor: "rgba(34, 197, 94, 1)",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            tension: 0.4,
            fill: true,
        },
    ],
};

export const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: false,
        },
    },
};

export const barOptions = {
    ...chartOptions,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "rgba(0, 0, 0, 0.1)",
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

export const doughnutOptions = {
    ...chartOptions,
    cutout: "70%",
};
