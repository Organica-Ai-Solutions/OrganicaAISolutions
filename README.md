# Organica AI Solutions

Una plataforma inteligente para la agricultura sostenible y la gestión de recursos naturales.

## Características

- Análisis de Suelos
  - Interpretación de datos de sensores
  - Recomendaciones de nutrientes
  - Monitoreo de pH y minerales
  - Historial de análisis

- Gestión de Cultivos
  - Planificación de siembra
  - Seguimiento de crecimiento
  - Alertas de riego
  - Predicciones de cosecha

- Asistente Virtual
  - Consultas en tiempo real
  - Recomendaciones personalizadas
  - Base de conocimientos agrícolas
  - Integración con Google Gemini Pro

## Stack Tecnológico

- Frontend:
  - React
  - Vite
  - Tailwind CSS
  - React Router

- Backend:
  - Python con Flask
  - SQLite
  - JWT Authentication
  - Google Gemini Pro API

## Inicio Rápido

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install  # Frontend
   pip install -r requirements.txt  # Backend
   ```
3. Configurar variables de entorno
4. Ejecutar servidores de desarrollo:
   ```bash
   npm run dev  # Frontend
   python Organicaai.py  # Backend
   ```

## Estructura del Proyecto

```
organica-ai/
├── src/
│   ├── components/
│   │   ├── chat/
│   │   ├── dashboard/
│   │   └── shared/
│   ├── pages/
│   ├── contexts/
│   ├── services/
│   └── utils/
├── server/
│   ├── routes/
│   ├── models/
│   └── services/
└── database/
    └── schema.sql
```

## Contribuir

Por favor, lee nuestras guías de contribución antes de enviar pull requests.
