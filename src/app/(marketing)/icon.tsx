import { ImageResponse } from 'next/og';

// Configuración del tamaño del icono
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// El export default que le falta a tu código
export default function Icon() {
  return new ImageResponse(
    (
      // Aquí puedes diseñar un icono simple con HTML/CSS
      <div
        style={{
          fontSize: 24,
          background: '#22C55E', // Tu verde SúperClean
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 'black',
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  );
}