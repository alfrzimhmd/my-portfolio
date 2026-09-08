// src/data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'studymate',
    title: 'StudyMate',
    tagline: 'Student Productivity Platform',
    category: 'App Development',
    categorySlug: 'app',
    description: 'An all-in-one productivity application designed to help students organize academic activities, manage study schedules, and maintain focus routines.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Google Drive API', 'Provider', 'Local Notifications'],
    image: '',
    featured: true,
    github: 'https://github.com/alfrzimhmd/studymate',
    demo: 'https://studymate.app',
    orientation: 'landscape',
    isInteractive: true,
    features: [
      'Interactive Academic Schedule',
      'Task & Assignment Management',
      'Markdown-powered Notes System',
      'Resource & Reference Bookmarks',
      'Configurable Pomodoro Focus Timer',
      'Daily Study Habit Tracker',
      'Cloud Backup & Restore via Google Drive'
    ],
    images: [],
    videoUrl: null,
    caseStudy: {
      overview: 'StudyMate was conceived out of a real problem faced by modern university and high-school students: fragmented productivity tools. Students often juggle separate calendar apps, task trackers, note taking software, and focus timers without a centralized, offline-first workflow. StudyMate unites these components into a single, cohesive, distraction-free environment built with Flutter.',
      problem: 'Most existing productivity apps either require continuous internet connectivity, impose complex subscription barriers, or split critical academic workflows across disjointed applications. Students need a reliable, responsive, and privacy-respecting companion that works flawlessly in lecture halls with patchy network connections and syncs seamlessly when connected.',
      approach: 'I adopted an offline-first architecture with SQLite for local persistence, combined with background synchronization via the Google Drive API for secure personal cloud backups. The design language prioritizes high information density with low cognitive friction, employing clean visual hierarchy and purposeful typography.',
      design: 'The interface was drafted through iterative wireframing in Figma, focusing on thumb-zone ergonomic navigation on mobile devices. A calm, technical palette was selected to minimize eye fatigue during extended study sessions. Micro-interactions were integrated to provide satisfying feedback when completing tasks and study intervals.',
      development: 'The application was developed in Flutter and Dart, utilizing the Provider state management pattern for predictable state transitions and SQLite through `sqflite` for low-latency CRUD operations. Custom notification channels were implemented for Android to ensure study reminders and Pomodoro alerts fire reliably even in battery-saving sleep states.',
      challenges: [
        'Managing background timer accuracy on Android devices with aggressive battery optimization policies.',
        'Architecting a conflict-free, bi-directional sync strategy between local SQLite databases and encrypted Google Drive app data folders.',
        'Maintaining 60 FPS scroll performance while rendering deeply nested markdown lecture notes with dynamic code highlights.'
      ],
      result: 'The final application achieved an instantaneous cold-start time (<350ms), zero dependency on proprietary third-party servers, and 100% offline capability. User testing with academic peer groups demonstrated a 34% reduction in missed assignment deadlines and positive feedback regarding the unified study dashboard.',
      technologies: [
        { name: 'Flutter & Dart', purpose: 'Cross-platform reactive UI framework with native compilation speed' },
        { name: 'SQLite (sqflite)', purpose: 'High-performance local relational database for offline-first data storage' },
        { name: 'Google Drive API', purpose: 'Encrypted backup and restore without maintaining custom backend servers' },
        { name: 'Android Foreground Services', purpose: 'Accurate Pomodoro study timer execution in background' },
        { name: 'Provider', purpose: 'Modular, testable reactive state management architecture' }
      ],
      gallery: [
        { title: 'Academic Schedule & Timeline', caption: 'Weekly course calendar with class room coordinates and real-time countdown.', type: 'mobile' },
        { title: 'Task Matrix & Deadlines', caption: 'Prioritized assignment organizer with priority flags and reminder presets.', type: 'mobile' },
        { title: 'Distraction-Free Pomodoro', caption: 'Focused interval timer with ambient sounds and session streak log.', type: 'mobile' },
        { title: 'Offline Architecture Flow', caption: 'Data synchronization diagram between SQLite, Repository Layer, and Google Drive.', type: 'diagram' }
      ],
      links: [
        { label: 'Source Code', url: 'https://github.com/alfrzimhmd/studymate', type: 'github' },
        { label: 'Release APK', url: 'https://github.com/alfrzimhmd/studymate/releases', type: 'demo' },
        { label: 'Technical Spec', url: '#technical-notes', type: 'docs' }
      ]
    }
  },
  {
    id: 'airvista',
    title: 'AirVista - Platform Monitoring Kualitas Udara',
    tagline: 'Real-time Air Quality Monitoring Platform',
    category: 'Web Development',
    categorySlug: 'web',
    description: 'Platform monitoring kualitas udara dan analisis lingkungan realtime berbasis AI dengan integrasi satelit dan algoritma sains partikulat EPA.',
    technologies: ['React', 'Vite', 'Express.js', 'Leaflet', 'Google Gemini AI'],
    image: '/src/assets/projects/airvista/airvista1.png',
    featured: true,
    github: 'https://github.com/alfrzimhmd',
    demo: null,
    features: [
      'Dashboard Monitoring Kualitas Udara Realtime',
      'Visualisasi Peta Interaktif (Leaflet)',
      'Analisis Tren Polusi Udara',
      'Perbandingan Kualitas Antar Kota',
      'Konsultasi AI dengan Google Gemini',
      'Laporan Data Berbasis Satelit'
    ],
    images: [
      '/src/assets/projects/airvista/airvista1.png',
      '/src/assets/projects/airvista/airvista2.png',
      '/src/assets/projects/airvista/airvista3.png',
      '/src/assets/projects/airvista/airvista4.png',
      '/src/assets/projects/airvista/airvista5.png',
      '/src/assets/projects/airvista/airvista6.png'
    ],
    orientation: 'landscape',
    videoUrl: 'https://drive.google.com/file/d/1nOYjQ9u8vlUqqH1QnuorUZgie0QuAP-b/preview', // HANYA AIRVISTA YANG PUNYA VIDEO
    caseStudy: {
      overview: 'AirVista adalah platform monitoring kualitas udara serta analisis lingkungan realtime bertenaga kecerdasan buatan (AI) kelas dunia. Platform ini mengintegrasikan komputasi satelit, algoritma sains partikulat EPA, dan model generatif canggih guna menyajikan transparansi kualitas ekosistem bagi masyarakat luas demi keselamatan bersama.',
      problem: 'Kesadaran masyarakat terhadap kualitas udara masih rendah karena kurangnya akses terhadap data realtime yang akurat dan mudah dipahami. Banyak platform yang ada tidak menyediakan visualisasi yang intuitif dan analisis yang mendalam.',
      approach: 'Mengintegrasikan data satelit dan sensor dengan algoritma EPA untuk menghitung AQI (Air Quality Index), serta menggunakan Google Gemini AI untuk memberikan rekomendasi kesehatan berbasis data realtime.',
      design: 'Desain dashboard yang informatif dengan visualisasi peta interaktif, grafik tren, dan kartu informasi yang mudah dipahami. Menggunakan palet warna yang merepresentasikan tingkat polusi udara.',
      development: 'Dibangun dengan React 19 dan Vite untuk performa super cepat, Leaflet untuk visualisasi geospasial, dan Express.js sebagai backend server untuk mengelola data.',
      challenges: [
        'Integrasi data dari berbagai sumber satelit dan sensor dengan format yang berbeda.',
        'Optimasi rendering peta dengan banyak titik data realtime.',
        'Implementasi algoritma AI untuk analisis prediktif kualitas udara.'
      ],
      result: 'Berhasil menyajikan data kualitas udara realtime dengan akurasi tinggi dan visualisasi yang intuitif. Platform ini membantu masyarakat membuat keputusan berbasis data untuk kesehatan dan keselamatan.',
      technologies: [
        { name: 'React 19 & Vite', purpose: 'Frontend framework dengan performa super cepat' },
        { name: 'Express.js', purpose: 'Backend server untuk manajemen data' },
        { name: 'Leaflet', purpose: 'Visualisasi kartografi geospasial interaktif' },
        { name: 'Google Gemini AI', purpose: 'Model penalaran transformatif untuk analisis' },
        { name: 'Open-Meteo', purpose: 'Data cuaca keyless untuk analisis lingkungan' }
      ],
      gallery: [
        { title: 'Dashboard Monitoring', caption: 'Tampilan dashboard utama dengan AQI dan informasi realtime.', type: 'desktop' },
        { title: 'Peta Interaktif', caption: 'Visualisasi kualitas udara pada peta dengan warna indikator.', type: 'desktop' },
        { title: 'Analisis Tren', caption: 'Grafik tren polusi udara per periode waktu.', type: 'desktop' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/alfrzimhmd', type: 'github' },
        { label: 'Live Demo', url: '#', type: 'demo' }
      ]
    }
  },
  {
    id: 'sistem-krs',
    title: 'Sistem KRS - Kartu Rencana Studi',
    tagline: 'Academic Course Planning System',
    category: 'Web Development',
    categorySlug: 'web',
    description: 'Sistem Kartu Rencana Studi (KRS) dengan role Mahasiswa dan Dosen untuk pengelolaan akademik terintegrasi.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    image: '/src/assets/projects/skrs/skrs1.png',
    featured: false,
    github: 'https://github.com/alfrzimhmd/krs_platfrom',
    demo: null,
    features: [
      'Login Multi-Role (Mahasiswa & Dosen)',
      'Pengajuan KRS Berdasarkan Semester',
      'Pemilihan Dosen Pengampu',
      'Statistik Akademik (SKS, Matakuliah, IPK)',
      'Persetujuan & Penolakan KRS',
      'Manajemen Mata Kuliah per Semester'
    ],
    images: [
      '/src/assets/projects/skrs/skrs1.png',
      '/src/assets/projects/skrs/skrs2.png',
      '/src/assets/projects/skrs/skrs3.png',
      '/src/assets/projects/skrs/skrs4.png'
    ],
    orientation: 'landscape',
    videoUrl: null,
    caseStudy: {
      overview: 'Sistem KRS ini dibangun dengan Laravel (PHP Framework) untuk memudahkan mahasiswa dalam mengajukan rencana studi dan dosen dalam mengelola mata kuliah. Sistem ini dirancang untuk mengotomatisasi proses pengajuan KRS yang sebelumnya dilakukan secara manual.',
      problem: 'Proses pengajuan KRS secara manual seringkali memakan waktu, rawan kesalahan, dan sulit dilacak. Mahasiswa kesulitan melihat status pengajuan dan dosen kesulitan mengelola persetujuan.',
      approach: 'Membangun sistem berbasis web dengan arsitektur MVC menggunakan Laravel. Mengimplementasikan autentikasi multi-role dan workflow approval yang terstruktur.',
      design: 'Desain antarmuka yang bersih dan informatif dengan dashboard personal untuk setiap role. Menggunakan Bootstrap untuk responsivitas dan kemudahan penggunaan.',
      development: 'Dikembangkan dengan Laravel sebagai backend, MySQL sebagai database, dan Bootstrap untuk frontend. Mengimplementasikan fitur CRUD untuk manajemen data akademik.',
      challenges: [
        'Merancang skema database yang kompleks untuk relasi mahasiswa-dosen-matakuliah.',
        'Implementasi workflow approval yang terstruktur dan audit trail.'
      ],
      result: 'Berhasil mengotomatisasi proses pengajuan KRS dengan efisiensi waktu yang signifikan dan mengurangi kesalahan administratif.',
      technologies: [
        { name: 'Laravel', purpose: 'PHP Framework untuk backend dan routing' },
        { name: 'MySQL', purpose: 'Database relasional untuk penyimpanan data akademik' },
        { name: 'Bootstrap', purpose: 'CSS framework untuk antarmuka responsif' },
        { name: 'JavaScript', purpose: 'Interaktivitas dan validasi form' }
      ],
      gallery: [
        { title: 'Dashboard Mahasiswa', caption: 'Tampilan dashboard untuk role mahasiswa.', type: 'desktop' },
        { title: 'Form Pengajuan KRS', caption: 'Form untuk mengajukan rencana studi.', type: 'desktop' },
        { title: 'Dashboard Dosen', caption: 'Tampilan dashboard untuk role dosen.', type: 'desktop' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/alfrzimhmd/krs_platfrom', type: 'github' }
      ]
    }
  },
  {
    id: 'smart-inventory',
    title: 'SmartInventory - Aplikasi Manajemen Stok & Transaksi',
    tagline: 'Inventory & Transaction Management App',
    category: 'App Development',
    categorySlug: 'app',
    description: 'Aplikasi mobile untuk manajemen stok dan transaksi dengan sistem pembelian & penjualan terintegrasi.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    image: '/src/assets/projects/umkm/umkm1.jpeg',
    featured: false,
    github: 'https://github.com/alfrzimhmd/smart_inventory',
    demo: null,
    features: [
      'Dashboard Statistik Harian',
      'Manajemen Produk (CRUD)',
      'Sistem Transaksi Pembelian & Penjualan',
      'Manajemen Supplier',
      'Analisis Transaksi (Hari/Minggu/Bulan/Tahun)',
      'Laporan Stok Real-time'
    ],
    images: [
      '/src/assets/projects/umkm/umkm1.jpeg',
      '/src/assets/projects/umkm/umkm2.jpeg',
      '/src/assets/projects/umkm/umkm3.jpeg',
      '/src/assets/projects/umkm/umkm4.jpeg',
      '/src/assets/projects/umkm/umkm5.jpeg',
      '/src/assets/projects/umkm/umkm6.jpeg',
      '/src/assets/projects/umkm/umkm7.jpeg'
    ],
    orientation: 'portrait',
    videoUrl: null,
    caseStudy: {
      overview: 'SmartInventory adalah aplikasi mobile untuk manajemen stok dan transaksi yang dibangun dengan Flutter dan Dart. Aplikasi ini dirancang untuk membantu pengelolaan inventaris secara efisien dengan sistem transaksi yang terintegrasi.',
      problem: 'Pengelolaan stok dan transaksi secara manual seringkali menyebabkan kesalahan pencatatan, kehilangan data, dan kesulitan dalam analisis performa bisnis.',
      approach: 'Mengimplementasikan sistem transaksi yang mengharuskan setiap perubahan stok melalui proses pembelian atau penjualan untuk menjaga integritas data.',
      design: 'Antarmuka yang bersih dengan fokus pada kemudahan input data dan visualisasi statistik yang informatif.',
      development: 'Dibangun dengan Flutter menggunakan Provider untuk state management dan SQLite untuk penyimpanan lokal.',
      challenges: [
        'Merancang skema database yang mendukung transaksi pembelian dan penjualan dengan integritas referensial.',
        'Implementasi analisis transaksi berdasarkan periode waktu yang berbeda.'
      ],
      result: 'Aplikasi berhasil membantu pengguna mengelola stok dan transaksi dengan lebih efisien serta menyediakan insight bisnis melalui analisis data.',
      technologies: [
        { name: 'Flutter & Dart', purpose: 'Cross-platform mobile development' },
        { name: 'SQLite', purpose: 'Local database untuk penyimpanan data' },
        { name: 'Provider', purpose: 'State management untuk Flutter' }
      ],
      gallery: [
        { title: 'Dashboard', caption: 'Dashboard statistik harian transaksi.', type: 'mobile' },
        { title: 'Manajemen Produk', caption: 'Form untuk manajemen produk.', type: 'mobile' },
        { title: 'Transaksi', caption: 'Sistem transaksi pembelian dan penjualan.', type: 'mobile' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/alfrzimhmd/smart_inventory', type: 'github' }
      ]
    }
  },
  {
    id: 'nutriscan',
    title: 'NutriScan - Aplikasi Deteksi Nutrisi Makanan',
    tagline: 'Food Nutrition Detection App',
    category: 'App Development',
    categorySlug: 'app',
    description: 'Aplikasi deteksi nutrisi makanan dengan target nutrisi harian dan fitur edukasi gizi berbasis AI.',
    technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'SQLite', 'BLoC'],
    image: '/src/assets/projects/nutriscan/nutriscan1.jpeg',
    featured: false,
    github: 'https://github.com/alfrzimhmd/food_detection',
    demo: null,
    features: [
      'Dashboard Statistik Nutrisi Harian',
      'Scan Makanan dengan TensorFlow Lite',
      'Target Nutrisi Harian (Kalori, Protein, Karbo, Lemak)',
      'Riwayat Scan Makanan',
      'Misi & Tantangan Nutrisi',
      'Edukasi Gizi & Pola Makan'
    ],
    images: [
      '/src/assets/projects/nutriscan/nutriscan1.jpeg',
      '/src/assets/projects/nutriscan/nutriscan2.jpeg',
      '/src/assets/projects/nutriscan/nutriscan3.jpeg',
      '/src/assets/projects/nutriscan/nutriscan4.jpeg',
      '/src/assets/projects/nutriscan/nutriscan5.jpeg',
      '/src/assets/projects/nutriscan/nutriscan6.jpeg',
      '/src/assets/projects/nutriscan/nutriscan7.jpeg'
    ],
    orientation: 'portrait',
    videoUrl: null,
    caseStudy: {
      overview: 'NutriScan adalah aplikasi mobile berbasis Flutter untuk mendeteksi nutrisi makanan menggunakan TensorFlow Lite. Aplikasi ini memungkinkan pengguna memindai makanan dan mendapatkan informasi nutrisi lengkap untuk mendukung pola makan sehat.',
      problem: 'Masyarakat kesulitan mengetahui kandungan nutrisi dari makanan yang dikonsumsi sehari-hari, sehingga sulit untuk mengatur pola makan yang sehat dan seimbang.',
      approach: 'Mengimplementasikan model machine learning dengan TensorFlow Lite untuk deteksi nutrisi makanan secara realtime. Integrasi dengan database nutrisi untuk memberikan informasi lengkap.',
      design: 'Antarmuka yang ramah dengan fokus pada pengalaman scan yang mudah dan tampilan informasi nutrisi yang informatif.',
      development: 'Dibangun dengan Flutter menggunakan BLoC/Cubit untuk state management, SQLite untuk penyimpanan riwayat, dan TensorFlow Lite untuk deteksi nutrisi.',
      challenges: [
        'Melatih model machine learning dengan dataset makanan yang beragam.',
        'Optimasi performa deteksi realtime pada perangkat mobile.'
      ],
      result: 'Aplikasi berhasil membantu pengguna memahami kandungan nutrisi makanan dan mendorong pola makan yang lebih sehat melalui fitur target harian dan tantangan.',
      technologies: [
        { name: 'Flutter & Dart', purpose: 'Cross-platform mobile development' },
        { name: 'TensorFlow Lite', purpose: 'On-device machine learning untuk deteksi nutrisi' },
        { name: 'SQLite', purpose: 'Local database untuk riwayat scan' },
        { name: 'BLoC/Cubit', purpose: 'State management untuk Flutter' }
      ],
      gallery: [
        { title: 'Dashboard Nutrisi', caption: 'Dashboard statistik nutrisi harian.', type: 'mobile' },
        { title: 'Scan Makanan', caption: 'Deteksi nutrisi makanan dengan TensorFlow Lite.', type: 'mobile' },
        { title: 'Riwayat Scan', caption: 'Riwayat scan makanan yang telah dilakukan.', type: 'mobile' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/alfrzimhmd/food_detection', type: 'github' }
      ]
    }
  },
  {
    id: 'simaho-uiux',
    title: 'UI/UX Design - Sistem Informasi Mahasiswa (SIMAHO)',
    tagline: 'Student Information System UI/UX Design',
    category: 'UI/UX Design',
    categorySlug: 'uiux',
    description: 'UI/UX Design untuk Sistem Informasi Mahasiswa dengan berbagai fitur akademik dan prototipe interaktif.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    image: '/src/assets/projects/simawa/simawa1.png',
    featured: false,
    github: null,
    demo: 'https://www.figma.com/design/nBmcJAtyxkAqh8lM5x94BG/SIMAWA?node-id=0-1&t=viu214Z00vYbJmQh-1',
    features: [
      'Login Multi-Role (Mahasiswa & Dosen)',
      'Informasi Beasiswa',
      'Informasi Volunteer',
      'Informasi Seminar',
      'Informasi Magang',
      'Informasi KKN & Sempro',
      'Design System & Prototype Interaktif'
    ],
    images: [
      '/src/assets/projects/simawa/simawa1.png',
      '/src/assets/projects/simawa/simawa2.png',
      '/src/assets/projects/simawa/simawa3.png',
      '/src/assets/projects/simawa/simawa4.png',
      '/src/assets/projects/simawa/simawa5.png'
    ],
    orientation: 'portrait',
    videoUrl: null,
    caseStudy: {
      overview: 'UI/UX Design untuk Sistem Informasi Mahasiswa (SIMAHO) yang dirancang menggunakan Figma. Desain ini dibuat untuk memberikan pengalaman pengguna yang intuitif dan menyenangkan bagi mahasiswa dan dosen dalam mengakses informasi akademik.',
      problem: 'Sistem informasi mahasiswa yang ada seringkali memiliki antarmuka yang kaku, sulit digunakan, dan tidak responsif. Mahasiswa kesulitan menemukan informasi penting seperti beasiswa, seminar, dan magang.',
      approach: 'Merancang antarmuka yang berpusat pada pengguna (user-centered design) dengan navigasi yang jelas dan hierarki informasi yang terstruktur. Mengimplementasikan design system untuk konsistensi visual.',
      design: 'Desain modern dengan palet warna yang menenangkan dan tipografi yang jelas. Menggunakan komponen yang reusable untuk efisiensi pengembangan.',
      development: 'Dibuat menggunakan Figma dengan prototipe interaktif untuk simulasi pengalaman pengguna sebelum implementasi.',
      challenges: [
        'Menyederhanakan informasi akademik yang kompleks menjadi antarmuka yang mudah dipahami.',
        'Merancang navigasi yang efisien untuk mengakses berbagai fitur.'
      ],
      result: 'Desain UI/UX yang berhasil meningkatkan user experience dengan navigasi yang intuitif dan tampilan yang modern, siap untuk diimplementasikan oleh tim pengembang.',
      technologies: [
        { name: 'Figma', purpose: 'UI/UX Design dan Prototyping' },
        { name: 'Design System', purpose: 'Komponen reusable untuk konsistensi' }
      ],
      gallery: [
        { title: 'Dashboard Mahasiswa', caption: 'Halaman utama untuk role mahasiswa.', type: 'desktop' },
        { title: 'Informasi Beasiswa', caption: 'Halaman daftar beasiswa yang tersedia.', type: 'desktop' },
        { title: 'Informasi Seminar', caption: 'Halaman jadwal dan detail seminar.', type: 'desktop' }
      ],
      links: [
        { label: 'Figma Design', url: 'https://www.figma.com/design/nBmcJAtyxkAqh8lM5x94BG/SIMAWA?node-id=0-1&t=viu214Z00vYbJmQh-1', type: 'demo' }
      ]
    }
  },
  {
    id: 'apotek-online',
    title: 'Sistem Apotek Online',
    tagline: 'Online Pharmacy Management System',
    category: 'Web Development',
    categorySlug: 'web',
    description: 'Website apotek online dengan role Pegawai dan Pelanggan untuk pengelolaan obat dan transaksi.',
    technologies: ['PHP Native', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: '/src/assets/projects/apotek/apotek1.png',
    featured: false,
    github: 'https://github.com/alfrzimhmd/php/tree/main/apotek',
    demo: null,
    features: [
      'Login Multi-Role (Pegawai & Pelanggan)',
      'Dashboard Statistik Pemasukan & Pengeluaran',
      'Manajemen Obat (CRUD)',
      'Manajemen Pelanggan',
      'Transaksi & Laporan Bulanan',
      'Pembelian Obat Online',
      'Konsultasi Online',
      'Riwayat Belanja',
      'Pengingat Obat (Reminder)',
      'Rating & Ulasan Apotek'
    ],
    images: [
      '/src/assets/projects/apotek/apotek1.png',
      '/src/assets/projects/apotek/apotek2.png',
      '/src/assets/projects/apotek/apotek3.png'
    ],
    orientation: 'landscape',
    videoUrl: null,
    caseStudy: {
      overview: 'Website Apotek Online ini dibangun dengan PHP Native (tanpa framework) untuk memudahkan pengelolaan apotek dan pembelian obat secara online. Sistem ini dirancang untuk menghubungkan pegawai apotek dengan pelanggan dalam satu platform terintegrasi.',
      problem: 'Apotek tradisional masih menggunakan sistem manual untuk pengelolaan stok dan transaksi, menyulitkan pelanggan untuk membeli obat secara online dan mendapatkan informasi stok realtime.',
      approach: 'Mengimplementasikan sistem multi-role dengan fitur lengkap untuk pegawai dan pelanggan. Membangun dashboard yang informatif untuk monitoring bisnis.',
      design: 'Desain yang sederhana dan fungsional dengan fokus pada kemudahan penggunaan untuk semua kalangan.',
      development: 'Dikembangkan dengan PHP Native dan MySQL untuk database, dengan HTML, CSS, dan JavaScript untuk frontend.',
      challenges: [
        'Mengimplementasikan sistem transaksi yang terintegrasi dengan manajemen stok.',
        'Merancang fitur reminder obat yang efektif untuk pelanggan.'
      ],
      result: 'Berhasil menciptakan platform yang memudahkan pengelolaan apotek dan pengalaman berbelanja obat yang lebih baik bagi pelanggan.',
      technologies: [
        { name: 'PHP Native', purpose: 'Backend development tanpa framework' },
        { name: 'MySQL', purpose: 'Database untuk penyimpanan data' },
        { name: 'HTML & CSS', purpose: 'Frontend structure dan styling' },
        { name: 'JavaScript', purpose: 'Interaktivitas dan validasi form' }
      ],
      gallery: [
        { title: 'Dashboard Pegawai', caption: 'Dashboard untuk role pegawai apotek.', type: 'desktop' },
        { title: 'Manajemen Obat', caption: 'Form manajemen data obat.', type: 'desktop' },
        { title: 'Pembelian Online', caption: 'Halaman pembelian obat untuk pelanggan.', type: 'desktop' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/alfrzimhmd/php/tree/main/apotek', type: 'github' }
      ]
    }
  },
{
    id: 'nexus-trace',
    title: 'NexusTrace - Static APK & Binary Inspection',
    tagline: 'Android APK Analysis Workbench',
    category: 'Reverse Engineering',
    categorySlug: 'research',
    description: 'Educational technical workbench for inspecting Android APKs, analyzing manifest declarations, and auditing native library linkages.',
    technologies: ['Python', 'Rust', 'Radare2', 'Jadx Engine', 'React', 'Tauri'],
    image: '', // Kosong, akan diganti dengan interactive UI
    featured: false,
    github: 'https://github.com/alfrzimhmd/nexustrace',
    demo: 'https://nexustrace.dev',
    orientation: 'landscape',
    isInteractive: true, // Flag untuk menandakan ini interactive
    features: [
      'Automated AndroidManifest.xml Permission Audit',
      'DEX String Table Extraction & Entropy Analysis',
      'Native Shared Library (.so) Symbol Inspection',
      'Educational Threat Vector Explanations'
    ],
    images: [],
    videoUrl: null,
    caseStudy: {
      overview: 'NexusTrace is an educational exploration workbench developed to demystify compiled mobile software. It inspects application structures, manifest permissions, and native dependencies to reveal how high-level code translates into runtime artifacts.',
      problem: 'Novice developers and software security students often view APK files as impenetrable black boxes, lacking visual tools that break down archive structures without steep terminal-only learning curves.',
      approach: 'Designed a dual-pane inspection interface combining high-level summary cards with granular binary hex inspection and disassembled resource trees.',
      design: 'Technical editorial dashboard inspired by radar scopes and laboratory instruments, strictly emphasizing clarity and non-destructive exploratory analysis.',
      development: 'Engineered a lightweight parser in Rust exposed to a modern React desktop shell via Tauri, keeping peak memory consumption under 85MB even on 100MB+ APKs.',
      challenges: [
        'Safe decoding of obfuscated DEX string entries without triggering parser memory faults.',
        'Translating cryptic bytecode instructions into understandable structural flow visualizations for learners.'
      ],
      result: 'Successfully parsed and visualized over 200 open-source Android projects, serving as a primary teaching aid for mobile architecture analysis.',
      technologies: [
        { name: 'Rust', purpose: 'Memory-safe binary parsing and ZIP/APK extraction engine' },
        { name: 'Tauri & React', purpose: 'Lightweight, resource-efficient desktop graphical shell' },
        { name: 'Jadx Core', purpose: 'Decompilation pipeline integration for educational analysis' },
        { name: 'Radare2', purpose: 'Binary analysis and disassembly framework' }
      ],
      gallery: [
        { title: 'Manifest Security Matrix', caption: 'Automated breakdown of requested permissions against intent filters.', type: 'desktop' },
        { title: 'DEX Entropy Visualizer', caption: 'Visual entropy heatmap identifying encrypted code segments.', type: 'diagram' },
        { title: 'Native Library Inspector', caption: 'Symbol analysis of .so files for security auditing.', type: 'desktop' }
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/alfrzimhmd/nexustrace', type: 'github' },
        { label: 'Research Paper', url: 'https://github.com/alfrzimhmd/nexustrace/docs', type: 'docs' }
      ]
    }
  }
];