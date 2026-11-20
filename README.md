# Solana Wallet Watch

Alat cek sederhana untuk alamat Solana `3xpbEZL92NFCKM8tLSWhVQzU7BmN6Snw5gsTkmHFnXgn`.

**Penting: GitHub tidak bisa memperbaiki wallet Solana.**
GitHub hanya tempat menyimpan kode. Tidak ada yang bisa mengubah seed phrase,
mengganti alamat, atau membatalkan transaksi Solana lewat GitHub.
Repo ini hanya menyimpan hasil pengecekan dan alat untuk mengecek ulang alamat
ini kapan saja, memakai alamat publik saja.

## Hasil cek 2026-11-20

- Saldo: **0,00091523 SOL** (tidak berubah sejak 2025-09-25)
- Akun token SPL: **0** — tidak ada izin / delegate token yang aktif
- Transaksi terakhir yang ditandatangani pemilik: **2025-09-25**,
  keluar sekitar **0,0059 SOL** ke dua alamat lain. Itu kemungkinan
  transaksi dari link hacker yang di-sign waktu itu.
- Setelah itu, tidak ada lagi transaksi yang ditandatangani pemilik
  sampai November 2026. Transaksi 2026-02-14 dan 2026-08-29 bukan
  ditandatangani pemilik dan tidak mengurangi SOL.
- Sign jahat hanya berlaku sekali. Sign itu tidak memberi hacker
  akses selamanya ke SOL, kecuali seed phrase-nya juga bocor.
- Pemilik menyatakan tidak pernah memberikan seed phrase ke orang lain,
  hanya klik link lalu connect + approve / sign.

## Kesimpulan

Alamat ini kemungkinan besar masih bisa dipakai lagi, karena pengurasan
terjadi sekali pada September 2025. Tapi tetap hati-hati:

1. Jangan langsung isi 0,1 SOL. Tes dulu dengan jumlah kecil, misal 0,01 SOL.
2. Cek lagi dengan `node check.mjs`. Kalau saldo tes tetap aman, baru isi lebih besar.
3. Jangan pernah kirim seed phrase atau private key ke siapa pun,
   termasuk ke chat, ke website, atau ke repo ini.
4. Jangan klik lagi link hacker itu.

## Cara pakai

```bash
node check.mjs
```

Butuh Node 18+. Tidak ada dependency, tidak ada seed, tidak ada private key
di repo ini. Script ini hanya membaca data publik dari Solana RPC.
