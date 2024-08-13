import { Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2">privacy Policy</Typography>
      </Box>
      <Box height={20} />
      <Box
        sx={{
          mx: 20,
        }}
      >
        <Typography variant="subtitle1">
          Kami membuat aplikasi Ini sebagai aplikasi Gratis. LAYANAN ini
          disediakan oleh Kami tanpa biaya dan dimaksudkan untuk digunakan
          sebagaimana adanya.
          <br />
          Halaman ini digunakan untuk memberi tahu pengunjung mengenai kebijakan
          saya dengan pengumpulan, penggunaan, dan pengungkapan Informasi
          Pribadi jika ada yang memutuskan untuk menggunakan Layanan saya.
          <br />
          Jika Anda memilih untuk menggunakan Layanan saya, maka Anda menyetujui
          pengumpulan dan penggunaan informasi sehubungan dengan kebijakan ini.
          Informasi Pribadi yang saya kumpulkan digunakan untuk menyediakan dan
          meningkatkan Layanan. Saya tidak akan menggunakan atau membagikan
          informasi Anda kepada siapa pun kecuali sebagaimana dijelaskan dalam
          Kebijakan Privasi ini.
          <br />
          Istilah yang digunakan dalam Kebijakan Privasi ini memiliki arti yang
          sama dengan Syarat dan Ketentuan kami, yang dapat diakses di sini
          kecuali ditentukan lain dalam Kebijakan Privasi ini
        </Typography>
      </Box>
    </Box>
  );
}
