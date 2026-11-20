// Solana Wallet Watch — cek alamat publik saja, TANPA seed / private key.
// Jangan pernah menaruh seed phrase atau private key di repo ini.
// Cara pakai: node check.mjs
// Butuh Node 18+ (fetch bawaan). Tidak ada dependency.

const ADDRESS = "3xpbEZL92NFCKM8tLSWhVQzU7BmN6Snw5gsTkmHFnXgn";
const RPC = "https://api.mainnet-beta.solana.com";

async function rpc(method, params) {
  const res = await fetch(RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json", connection: "close" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.result;
}

const lamportsToSol = (n) => (n / 1e9).toFixed(9);

console.log("Alamat:", ADDRESS);
console.log("Waktu cek:", new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }), "WIB");
console.log("");

const balance = await rpc("getBalance", [ADDRESS]);
console.log("Saldo SOL:", lamportsToSol(balance.value), "SOL");

const tokens = await rpc("getTokenAccountsByOwner", [
  ADDRESS,
  { programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" },
  { encoding: "jsonParsed" },
]);
console.log("Akun token SPL:", tokens.value.length, "(0 = tidak ada izin/delegate token yang aktif)");

const sigs = await rpc("getSignaturesForAddress", [ADDRESS, { limit: 5 }]);
console.log("");
console.log("5 transaksi terakhir:");
for (const s of sigs) {
  const d = s.blockTime
    ? new Date(s.blockTime * 1000).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
    : "-";
  console.log("-", d, s.signature.slice(0, 12) + "...", s.err ? "GAGAL" : "ok");
}

console.log("");
console.log("Catatan hasil cek 2026-11-20:");
console.log("- Terakhir dikuras sekali pada 2025-09-25, sekitar 0,0059 SOL, lewat transaksi yang ditandatangani pemilik.");
console.log("- Setelah itu tidak ada transaksi yang ditandatangani pemilik sampai Nov 2026.");
console.log("- Sign jahat itu hanya berlaku sekali, bukan akses selamanya.");
console.log("- Sebelum isi besar, tes dulu dengan jumlah kecil (misal 0,01 SOL) dan cek lagi dengan script ini.");
console.log("- JANGAN pernah isi wallet ini kalau seed-nya pernah dibagikan ke orang / website.");
