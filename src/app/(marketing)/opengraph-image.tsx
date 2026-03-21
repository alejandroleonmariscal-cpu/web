import { ImageResponse } from 'next/og';

// Configuración de la imagen
export const alt = 'SúperClean - Lavandería y Planchaduría';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      // Diseño de la imagen de previsualización (OpenGraph)
      <div
        style={{
          background: '#020617', // Tu azul profundo
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Círculo de fondo decorativo (Efecto burbuja) */}
        <div 
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '500px',
            height: '500px',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '500px',
          }} 
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <div style={{ 
            background: '#22C55E', 
            width: '80px', 
            height: '80px', 
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '50px',
            fontWeight: '900',
            color: 'white'
          }}>
            S
          </div>
          <h1 style={{ 
            fontSize: '100px', 
            fontWeight: '900', 
            color: 'white', 
            margin: 0,
            letterSpacing: '-0.05em'
          }}>
            SÚPER<span style={{ color: '#22C55E' }}>CLEAN</span>
          </h1>
        </div>
        
        <p style={{ 
          fontSize: '32px', 
          color: 'rgba(255, 255, 255, 0.6)', 
          fontWeight: '300',
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          Lavandería & Planchaduría Profesional
        </p>

        {/* Badge de Tepic */}
        <div style={{
          marginTop: '40px',
          padding: '10px 30px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '100px',
          color: '#93C5FD',
          fontSize: '20px',
          fontWeight: 'bold',
        }}>
          TEPIC, NAYARIT
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}