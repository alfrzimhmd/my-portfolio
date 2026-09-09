// src/data/cv.ts
import { CVData } from '../types';

export const cvData: CVData = {
  personalInfo: {
    name: "Alfarizi Muhammad",
    role: "Web Developer & Software Developer • Information Technology Student",
    subtitle: "Software Engineer & Mobile Multiplatform Developer",
    email: "alfrzimhmd.2603@gmail.com",
    location: "Salatiga, Indonesia",
    github: "github.com/alfarizi-dev",
    linkedin: "linkedin.com/in/mhmd-alfrzi-80b15334b",
    website: "alfarizi.workspace.dev",
    availability: "Open for Software Engineering Internships & Collaboration",
  },
  summary:
    "Saya adalah mahasiswa Teknologi Informasi yang mendedikasikan waktu untuk mendalami rekayasa perangkat lunak modern. Fokus pengembangan mencakup arsitektur backend berbasis Laravel dan database relasional MySQL, antarmuka responsif, serta aplikasi mobile multiplatform menggunakan Flutter. Memiliki ketertarikan pada clean code, struktur basis data yang terorganisir, serta penerapan teknologi AI praktis seperti machine learning on-device untuk menyelesaikan permasalahan nyata.",
  education: [
    {
      institution: "Universitas Islam Negeri (UIN) Salatiga",
      degree: "S1 – Teknologi Informasi (Bachelor of Information Technology)",
      period: "2023 – Present",
      coursework: [
        "Algoritma & Struktur Data",
        "Pemrograman Berorientasi Objek",
        "Sistem Basis Data & SQL Relasional",
        "Rekayasa Perangkat Lunak",
        "Pemrograman Web (PHP, Laravel, JavaScript)",
        "Pemrograman Mobile (Flutter, Dart)",
        "Jaringan Komputer & Keamanan Sistem",
        "Artificial Intelligence & Machine Learning",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript ES6+", "Flutter", "React.js"],
    },
    {
      category: "Backend",
      skills: ["PHP", "Laravel", "MySQL", "MariaDB", "RESTful API", "Sanctum Auth"],
    },
    {
      category: "Programming",
      skills: ["Dart", "JavaScript", "PHP", "Python", "TypeScript"],
    },
    {
      category: "Tools & AI",
      skills: ["Git", "GitHub", "VS Code", "Figma", "TensorFlow Lite", "Postman"],
    },
  ],
  projects: [
    {
      title: "SmartFarm",
      tech: "Flutter · Dart · TensorFlow Lite · Python · SQLite",
      role: "Mobile Developer & Machine Learning Integrator",
      description:
        "Mobile application yang membantu pengguna memperoleh informasi tanaman, rekomendasi tanaman, panduan perawatan, serta diagnosis penyakit tanaman berbasis AI secara on-device.",
      highlights: [
        "Integrasi on-device inference TensorFlow Lite untuk klasifikasi penyakit daun secara offline.",
        "Arsitektur state management yang modular dengan persistensi lokal SQLite.",
      ],
    },
    {
      title: "UMKM Digital Helper",
      tech: "Flutter · Laravel · MySQL · REST API · Sanctum Auth",
      role: "Fullstack Developer",
      description:
        "Aplikasi untuk membantu UMKM mengelola transaksi harian, inventaris stok, katalog produk digital, dan pencatatan arus kas keuangan secara digital.",
      highlights: [
        "Membangun REST API performan tinggi dengan autentikasi Laravel Sanctum.",
        "Sinkronisasi real-time multiplatform antara web dashboard dan mobile app.",
      ],
    },
    {
      title: "Manajemen Tugas Harian",
      tech: "Laravel · PHP · MySQL · Blade · Tailwind CSS",
      role: "Web Developer & Database Designer",
      description:
        "Web application untuk mengelola tugas harian menggunakan konsep CRUD komprehensif, filtering prioritas, dan database relational yang terstruktur rapi.",
      highlights: [
        "Perancangan skema database ter-normalisasi dengan indexing optimal pada MySQL.",
        "Interface responsif yang fluid menggunakan Tailwind CSS dan asynchronous request.",
      ],
    },
    {
      title: "Sistem Manajemen Transaksi",
      tech: "Laravel · PHP · MySQL · Chart.js · Tailwind CSS",
      role: "Fullstack Developer",
      description:
        "Web application untuk pencatatan transaksi kasir, inventaris produk, perhitungan HPP, laba rugi, serta dashboard analitik visual bisnis.",
      highlights: [
        "Kalkulasi margin keuntungan otomatis dan rekap laporan finansial periodik.",
        "Visualisasi metrik penjualan interaktif dengan Chart.js dan query agregasi SQL.",
      ],
    },
  ],
  experience: [
    {
      role: "Information Technology Student & Junior Developer",
      organization: "UIN Salatiga",
      period: "2023 – Present",
      description:
        "Menempuh pendidikan sarjana di Program Studi S1 Teknologi Informasi. Aktif mempelajari prinsip rekayasa perangkat lunak, pemrograman berorientasi objek, struktur data, serta pengembangan aplikasi web dan mobile.",
      highlights: [
        "Mempertahankan capaian akademik kuat dalam mata kuliah inti software engineering.",
        "Mengeksplorasi penelitian teknis mandiri dalam reverse engineering APK dan optimasi database.",
      ],
    },
    {
      role: "Staff / Anggota Divisi Pengembangan",
      organization: "HMPS Teknologi Informasi",
      period: "2024 – Present",
      description:
        "Berperan aktif dalam kegiatan Himpunan Mahasiswa Program Studi Teknologi Informasi untuk mendorong literasi digital dan kemampuan coding di kalangan mahasiswa.",
      highlights: [
        "Menginisiasi workshop coding praktis dan sesi sharing problem solving algoritma.",
        "Mengelola infrastruktur digital dan repositori internal organisasi.",
      ],
    },
    {
      role: "Freelance & Independent Project Developer",
      organization: "Project Experience / Self-Directed",
      period: "2024 – 2025",
      description:
        "Mengerjakan solusi perangkat lunak kustom untuk usaha lokal dan proyek mandiri guna menguji kemampuan problem-solving pada skenario nyata.",
      highlights: [
        "Mengembangkan platform manajemen inventori dan kasir digital untuk bisnis lokal.",
        "Menerapkan metodologi iterative development dengan feedback pengguna langsung.",
      ],
    },
  ],
};

// Export default juga untuk fleksibilitas
export default cvData;