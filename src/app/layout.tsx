import '@/src/app/globals.css'; 
import { Inter } from 'next/font/google';
import { Header } from '@/components/ui/Header'; // Importa tu nuevo Header
import { Footer } from '@/components/ui/Footer'; // Importa tu nuevo Footer

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#020617] text-white overflow-x-hidden`}>
        {/* El Header flota sobre todo el contenido */}
        <Header />
        
        {/* El children es tu página (page.tsx) con todas las secciones que hicimos */}
        <main>
          {children}
        </main>

        {/* El Footer cierra siempre al final de cualquier página */}
        <Footer />
      </body>
    </html>
  );
}