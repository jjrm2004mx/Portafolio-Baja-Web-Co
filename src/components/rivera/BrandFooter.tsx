export default function BrandFooter() {
  return (
    <footer className="bg-navy-600 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-2 border-white/60 rounded flex items-center justify-center font-bold text-sm font-display">
            R
          </div>
          <div className="leading-tight">
            <div className="font-bold text-sm tracking-wide font-display">RIVERA</div>
            <div className="text-white/60 text-[10px] tracking-[0.15em] font-sans">CONTADORES</div>
          </div>
        </div>
        <p className="text-white/60 text-sm text-center font-sans">
          &copy; {new Date().getFullYear()} Rivera Contadores. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
