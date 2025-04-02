// src/components/IndicadorRiesgo.js
import React from 'react';

const IndicadorRiesgo = ({ value1, value2, value3 }) => {
  // Fórmula sugerida: Media cúbica normalizada
  const calculateRisk = () => {
    const product = value1 * value2 * value3;
    const cubeRoot = Math.pow(product, 1/3);
    return Math.min(Math.max(cubeRoot, 1), 10); // Asegurar rango 1-10
  };

  const result = calculateRisk();
  
  // Determinar nivel de riesgo y colores
  const getRiskData = () => {
    if (result >= 7) return {
      level: 'Alto Riesgo',
      color: '#ff6467', // Rojo suave accesible
    };
    if (result >= 4) return {
      level: 'Medio Riesgo',
      color: '#fdc700', // Naranja coral
    };
    return {
      level: 'Bajo Riesgo',
      color: '#00d492', // Verde claro
    };
  };

  const riskData = getRiskData();

  return (
    <div style={{ 
      backgroundColor: riskData.color,
      borderRadius: '8px',
      padding: '1.5rem',
      margin: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '0.9rem',
        color: '#333',
        marginBottom: '0.5rem'
      }}>
        Valoración de riesgo
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <h3 style={{
          margin: 0,
          color: '#1c1e21',
          fontSize: '1.5rem'
        }}>
          {riskData.level}
        </h3>
      </div>

      <div style={{
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#555'
      }}>
        Puntuación: {result.toFixed(2)}
      </div>
    </div>
  );
};

export default IndicadorRiesgo;