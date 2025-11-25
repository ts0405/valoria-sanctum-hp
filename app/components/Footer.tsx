"use client";

export default function Footer() {
  return (
    <footer className="bg-black p-6 text-center text-white/80">
      <p>© 2025 Valoria Sanctum. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://x.com/SanctumAtelier" target="_blank" className="hover:text-amber-500">Twitter</a>
        <a href="https://discord.gg/sMc56a88m5" target="_blank" className="hover:text-amber-500">Discord</a>
      </div>
    </footer>
  );
}
