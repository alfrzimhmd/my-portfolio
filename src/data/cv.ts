// src/data/cv.ts
import { CVData } from '../types';

export const cvData: CVData = {
  personalInfo: {
    name: "Alfarizi Muhammad",
    role: "Web Developer & Software Developer • Information Technology Student",
    subtitle: "Software Engineer & Reverse Engineering",
    email: "mhmdalfrzi.03@gmail.com",
    location: "Batang, Jawa Tengah, Indonesia",
    github: "github.com/alfrzimhmd",
    linkedin: "linkedin.com/in/mhmd-alfrzi-80b15334b",
    website: "alfarizimuhammad.vercel.app",
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
      title: "StudyMate - Student Productivity Platform",
      tech: "Flutter · Dart · SQLite · Google Drive API · Provider",
      role: "Mobile Developer",
      description:
        "Aplikasi produktivitas mahasiswa yang mengintegrasikan jadwal akademik, manajemen tugas, catatan markdown, dan timer Pomodoro dalam satu platform offline-first dengan backup cloud.",
      highlights: [
        "Arsitektur offline-first dengan SQLite untuk persistensi lokal dan sinkronisasi Google Drive.",
        "Timer Pomodoro dengan foreground service Android untuk akurasi background."
      ],
    },
    {
      title: "AirVista - Platform Monitoring Kualitas Udara",
      tech: "React · Vite · Express.js · Leaflet · Google Gemini AI",
      role: "Web Developer",
      description:
        "Platform monitoring kualitas udara realtime yang mengintegrasikan data satelit, algoritma EPA, dan AI untuk analisis lingkungan serta rekomendasi kesehatan.",
      highlights: [
        "Visualisasi peta interaktif dengan Leaflet dan data AQI realtime.",
        "Integrasi Google Gemini AI untuk konsultasi dan analisis prediktif."
      ],
    },
    {
      title: "Sistem KRS - Kartu Rencana Studi",
      tech: "Laravel · PHP · MySQL · Bootstrap · JavaScript",
      role: "Web Developer",
      description:
        "Sistem informasi akademik dengan multi-role (Mahasiswa & Dosen) untuk pengajuan dan persetujuan KRS, dilengkapi statistik akademik dan manajemen mata kuliah.",
      highlights: [
        "Autentikasi multi-role dengan workflow approval terstruktur.",
        "Perancangan skema database relasional untuk relasi mahasiswa-dosen-matakuliah."
      ],
    },
    // {
    //   title: "SmartInventory - Manajemen Stok & Transaksi",
    //   tech: "Flutter · Dart · SQLite · Provider",
    //   role: "Mobile Developer",
    //   description:
    //     "Aplikasi mobile untuk manajemen inventaris dan transaksi dengan sistem pembelian/penjualan terintegrasi, manajemen supplier, dan analisis performa bisnis.",
    //   highlights: [
    //     "Sistem transaksi terintegrasi yang menjaga integritas data stok.",
    //     "Dashboard statistik harian dan analisis transaksi per periode."
    //   ],
    // },
    {
      title: "NutriScan - Deteksi Nutrisi Makanan",
      tech: "Flutter · Dart · TensorFlow Lite · SQLite · BLoC",
      role: "Mobile Developer",
      description:
        "Aplikasi mobile berbasis AI untuk mendeteksi nutrisi makanan melalui scan, dengan target nutrisi harian, riwayat, dan fitur edukasi gizi.",
      highlights: [
        "On-device machine learning dengan TensorFlow Lite untuk deteksi makanan.",
        "State management modular dengan BLoC/Cubit dan persistensi SQLite."
      ],
    },
    // {
    //   title: "Sistem Apotek Online",
    //   tech: "PHP Native · MySQL · HTML · CSS · JavaScript",
    //   role: "Web Developer",
    //   description:
    //     "Website apotek online dengan multi-role (Pegawai & Pelanggan) untuk manajemen obat, transaksi, konsultasi online, dan fitur pengingat obat.",
    //   highlights: [
    //     "Dashboard statistik pemasukan/pengeluaran dan laporan bulanan.",
    //     "Fitur pembelian online, konsultasi, dan rating untuk pelanggan."
    //   ],
    // },
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
    // {
    //   role: "Staff / Anggota Divisi Pengembangan",
    //   organization: "HMPS Teknologi Informasi",
    //   period: "2024 – Present",
    //   description:
    //     "Berperan aktif dalam kegiatan Himpunan Mahasiswa Program Studi Teknologi Informasi untuk mendorong literasi digital dan kemampuan coding di kalangan mahasiswa.",
    //   highlights: [
    //     "Menginisiasi workshop coding praktis dan sesi sharing problem solving algoritma.",
    //     "Mengelola infrastruktur digital dan repositori internal organisasi.",
    //   ],
    // },
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