import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { ContadorPage } from '@/demos/contador/ContadorPage'
import { BarberyPage } from '@/demos/barberia/page'
import { RestaurantPage } from '@/demos/restaurante/page'
import { RealEstatePage } from '@/demos/inmobiliaria/page'
import { AbogadoPage } from '@/demos/abogado/AbogadoPage'
import GimnasioPage from '@/demos/gimnasio/page'
import SpaPage from '@/demos/spa/page'
import ViajesPage from '@/demos/viajes/page'
import LegalPage from '@/demos/legal/page'
import LuxeEstatePage from '@/demos/realestate/page'
import BarbershopPage from '@/demos/barbershop/page'
import EstudioPage from '@/demos/estudio/page'
import Estudio2Page from '@/demos/estudio2/page'
import RiveraContadoresPage from '@/demos/rivera-contadores/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Estudio2Page />,
      },
      {
        path: 'demos/contador',
        element: <ContadorPage />,
      },
      {
        path: 'demos/barberia',
        element: <BarberyPage />,
      },
      {
        path: 'demos/restaurante',
        element: <RestaurantPage />,
      },
      {
        path: 'demos/inmobiliaria',
        element: <RealEstatePage />,
      },
      {
        path: 'demos/abogado',
        element: <AbogadoPage />,
      },
      {
        path: 'demos/gimnasio',
        element: <GimnasioPage />,
      },
      {
        path: 'demos/spa',
        element: <SpaPage />,
      },
      {
        path: 'demos/viajes',
        element: <ViajesPage />,
      },
      {
        path: 'demos/legal',
        element: <LegalPage />,
      },
      {
        path: 'demos/realestate',
        element: <LuxeEstatePage />,
      },
      {
        path: 'demos/barbershop',
        element: <BarbershopPage />,
      },
      {
        path: 'demos/rivera-contadores',
        element: <RiveraContadoresPage />,
      },
      {
        path: 'estudio',
        element: <EstudioPage />,
      },
      {
        path: 'studio2',
        element: <Estudio2Page />,
      },
    ],
  },
])
