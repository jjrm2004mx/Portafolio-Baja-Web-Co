import { Outlet } from 'react-router-dom'
import { DemoNavigation } from './DemoNavigation'

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <DemoNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-navy-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 BAJA WEB CO. - Soluciones Web Profesionales
          </p>
        </div>
      </footer>
    </div>
  )
}
