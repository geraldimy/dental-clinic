// lib/data.ts — Static content for drg. Gita Dhora dental clinic

export const CLINIC_INFO = {
  doctorName: "drg. Gita Dhora",
  specialty: "Dokter Gigi Umum",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  email: "gita.dhora@gmail.com",
  instagram: "@drg.gitadhora",
  address: "Jl. Kebon Jeruk Raya No. 45",
  city: "Jakarta Barat, DKI Jakarta 11530",
  hours: [
    { day: "Senin – Jumat", time: "09:00 – 17:00" },
    { day: "Sabtu", time: "09:00 – 13:00" },
    { day: "Minggu", time: "Tutup" },
  ],
};

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Edukasi", href: "#edukasi" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    id: "pemeriksaan",
    title: "Pemeriksaan Gigi",
    description:
      "Deteksi dini masalah gigi dan mulut secara menyeluruh sehingga penanganan menjadi lebih efektif dan terjangkau.",
    icon: "search",
    color: "#B58AD9",
  },
  {
    id: "scaling",
    title: "Scaling & Pembersihan",
    description:
      "Membersihkan karang gigi dan plak yang menumpuk untuk menjaga kesehatan gusi dan mencegah periodontitis.",
    icon: "sparkles",
    color: "#9B6EC8",
  },
  {
    id: "tambal",
    title: "Tambal Gigi",
    description:
      "Prosedur tambal gigi estetik berbahan komposit yang sewarna gigi, menyesuaikan kebutuhan setiap pasien dengan hasil natural.",
    icon: "shield",
    color: "#A87DD0",
  },
  {
    id: "cabut",
    title: "Cabut Gigi",
    description:
      "Tindakan pencabutan gigi dilakukan dengan standar prosedur yang tepat untuk meminimalkan rasa tidak nyaman.",
    icon: "zap",
    color: "#C49EE0",
  },
  {
    id: "konsultasi",
    title: "Edukasi & Konsultasi",
    description:
      "Panduan menyeluruh tentang kesehatan gigi dan cara merawat gigi, termasuk untuk anak-anak maupun dewasa.",
    icon: "message-circle",
    color: "#B58AD9",
  },
  {
    id: "preventive",
    title: "Preventive Care",
    description:
      "Membantu pasien membangun kebiasaan perawatan gigi preventif untuk menjaga kesehatan gigi jangka panjang.",
    icon: "heart",
    color: "#9B6EC8",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Komunikatif",
    description:
      "Setiap prosedur dijelaskan dengan bahasa yang mudah dipahami sebelum dilakukan.",
    icon: "message-square",
  },
  {
    title: "Pendekatan Personal",
    description:
      "Setiap pasien diperlakukan secara unik sesuai kebutuhan dan kondisi giginya.",
    icon: "user-check",
  },
  {
    title: "Preventive First",
    description:
      "Mengutamakan pencegahan sebelum tindakan, sehingga masalah gigi tidak berkembang lebih jauh.",
    icon: "shield-check",
  },
  {
    title: "Profesional",
    description:
      "Layanan berstandar tinggi dengan protokol medis yang ketat dan terus diperbarui.",
    icon: "award",
  },
  {
    title: "Nyaman",
    description:
      "Lingkungan praktik yang ramah dan nyaman untuk mengurangi kecemasan pasien.",
    icon: "home",
  },
  {
    title: "Berkualitas",
    description:
      "Komitmen terhadap kualitas perawatan terbaik untuk hasil yang optimal dan tahan lama.",
    icon: "star",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Reservasi Jadwal",
    description: "Pilih waktu yang sesuai melalui WhatsApp atau website kami.",
    icon: "calendar",
  },
  {
    step: 2,
    title: "Pemeriksaan & Konsultasi",
    description:
      "Dokter melakukan pemeriksaan menyeluruh dan mendengarkan keluhan pasien.",
    icon: "stethoscope",
  },
  {
    step: 3,
    title: "Penjelasan Diagnosis",
    description:
      "Hasil pemeriksaan gigi dijelaskan dengan jelas beserta pilihan penanganan.",
    icon: "clipboard-list",
  },
  {
    step: 4,
    title: "Tindakan Perawatan",
    description:
      "Perawatan dilakukan dengan aman, nyaman, dan sesuai standar medis.",
    icon: "activity",
  },
  {
    step: 5,
    title: "Evaluasi & Kontrol",
    description:
      "Edukasi perawatan lanjutan dan penjadwalan kontrol untuk memantau perkembangan.",
    icon: "check-circle",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rina Agustina",
    age: 28,
    avatar: "RA",
    rating: 5,
    review:
      "Saya sangat puas dengan pelayanan drg. Gita. Beliau sangat komunikatif dan menjelaskan prosedur scaling dengan detail. Tidak terasa sakit sama sekali dan hasilnya bersih banget!",
    treatment: "Scaling",
    avatarColor: "#DCC8F2",
  },
  {
    id: 2,
    name: "Budi Santoso",
    age: 35,
    avatar: "BS",
    rating: 5,
    review:
      "Pertama kali ke dokter gigi setelah bertahun-tahun takut, tapi drg. Gita sangat sabar dan menenangkan. Tambal gigi saya sekarang tidak kelihatan sama sekali, warnanya persis sama!",
    treatment: "Tambal Gigi",
    avatarColor: "#C49EE0",
  },
  {
    id: 3,
    name: "Sinta Dewi",
    age: 24,
    avatar: "SD",
    rating: 5,
    review:
      "Dokternya ramah banget! Saya bawa anak saya yang baru 5 tahun dan drg. Gita sangat pandai membuat anak saya nyaman. Rekomen banget untuk keluarga!",
    treatment: "Pemeriksaan",
    avatarColor: "#B58AD9",
  },
  {
    id: 4,
    name: "Ahmad Fauzi",
    age: 42,
    avatar: "AF",
    rating: 5,
    review:
      "Pelayanannya profesional sekali. Saya rutin kontrol tiap 6 bulan dan selalu puas. drg. Gita selalu update dengan teknik terbaru dan penjelasannya sangat mudah dipahami.",
    treatment: "Kontrol Rutin",
    avatarColor: "#9B6EC8",
  },
  {
    id: 5,
    name: "Maya Putri",
    age: 31,
    avatar: "MP",
    rating: 5,
    review:
      "Cabut gigi bungsu saya berjalan sangat lancar. Tidak sesakit yang saya bayangkan! Pemulihan juga cepat karena drg. Gita memberikan instruksi perawatan pasca cabut yang sangat jelas.",
    treatment: "Cabut Gigi",
    avatarColor: "#DCC8F2",
  },
  {
    id: 6,
    name: "Dani Kurniawan",
    age: 29,
    avatar: "DK",
    rating: 5,
    review:
      "Tempat praktiknya bersih dan nyaman, dokternya friendly dan tidak pernah buru-buru. Setiap pertanyaan selalu dijawab dengan sabar. Sudah jadi langganan 2 tahun!",
    treatment: "Scaling & Konsultasi",
    avatarColor: "#A87DD0",
  },
];

export const BLOG_ARTICLES = [
  {
    id: 1,
    title: "5 Kebiasaan yang Merusak Gigi Tanpa Kamu Sadari",
    excerpt:
      "Dari menggigit es batu hingga kebiasaan bruxism, kenali kebiasaan sehari-hari yang tanpa disadari merusak email gigi kamu.",
    image: "/images/blog-habits.png",
    category: "Pencegahan",
    readTime: "5 menit",
    date: "12 Nov 2024",
    slug: "kebiasaan-merusak-gigi",
  },
  {
    id: 2,
    title: "Kapan Harus Scaling? Kenali Tanda-tandanya",
    excerpt:
      "Scaling bukan sekadar membersihkan karang gigi. Pahami kapan waktu yang tepat untuk scaling dan apa manfaatnya bagi kesehatan gusi.",
    image: "/images/blog-scaling.png",
    category: "Perawatan",
    readTime: "4 menit",
    date: "5 Nov 2024",
    slug: "kapan-harus-scaling",
  },
  {
    id: 3,
    title: "Cara Menjaga Kesehatan Gusi agar Tetap Optimal",
    excerpt:
      "Gusi yang sehat adalah fondasi senyum yang indah. Pelajari langkah-langkah sederhana namun efektif untuk menjaga kesehatan gusi.",
    image: "/images/blog-gum-health.png",
    category: "Edukasi",
    readTime: "6 menit",
    date: "28 Okt 2024",
    slug: "menjaga-kesehatan-gusi",
  },
  {
    id: 4,
    title: "Mitos dan Fakta Seputar Tambal Gigi yang Perlu Diketahui",
    excerpt:
      "Banyak pasien takut tambal gigi karena mitos yang beredar. Saatnya kita luruskan fakta sebenarnya tentang prosedur tambal gigi modern.",
    image: "/images/blog-filling.png",
    category: "Edukasi",
    readTime: "5 menit",
    date: "20 Okt 2024",
    slug: "mitos-tambal-gigi",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Apakah scaling merusak gigi dan membuat gigi sensitif?",
    answer:
      "Tidak benar. Scaling justru membersihkan plak dan karang gigi yang menjadi penyebab utama penyakit gusi. Rasa sensitif ringan setelah scaling adalah hal normal dan akan hilang dalam 1-3 hari. Ini bukan karena gigi rusak, melainkan karena akar gigi yang sebelumnya tertutup karang kini terekspos dan perlu waktu adaptasi.",
  },
  {
    id: "faq-2",
    question: "Berapa lama proses tambal gigi berlangsung?",
    answer:
      "Tergantung tingkat keparahan gigi dan jenis tambalan yang digunakan. Secara umum, tambal gigi memerlukan waktu 30–60 menit per gigi. Untuk tambalan komposit (sewarna gigi), proses bisa sedikit lebih lama karena membutuhkan pengerasan lapis per lapis menggunakan sinar UV.",
  },
  {
    id: "faq-3",
    question: "Apakah anak-anak bisa diperiksa di sini?",
    answer:
      "Ya, pemeriksaan gigi anak sangat dianjurkan sejak dini. Idealnya, kunjungan pertama dilakukan saat gigi pertama anak tumbuh atau sekitar usia 1 tahun. drg. Gita memiliki pendekatan yang ramah anak sehingga anak-anak dapat merasa nyaman selama pemeriksaan.",
  },
  {
    id: "faq-4",
    question: "Seberapa sering idealnya kontrol ke dokter gigi?",
    answer:
      "Direkomendasikan kontrol rutin setiap 6 bulan sekali, bahkan jika tidak ada keluhan. Kunjungan rutin memungkinkan deteksi dini masalah gigi sebelum berkembang menjadi kondisi yang lebih serius dan membutuhkan penanganan yang lebih kompleks.",
  },
  {
    id: "faq-5",
    question: "Bagaimana cara membuat reservasi?",
    answer:
      "Reservasi dapat dilakukan melalui WhatsApp di nomor +62 812-3456-7890 atau dengan mengisi form kontak di website ini. Kami akan mengonfirmasi jadwal yang tersedia dan mengingatkan Anda satu hari sebelum kunjungan.",
  },
];
