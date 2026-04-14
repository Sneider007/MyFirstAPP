🏙️ Distri Urban

Aplicación web de e-commerce enfocada en la venta de zapatos urbanos y deportivos.
Permite visualizar productos destacados, buscarlos, gestionarlos y realizar simulaciones de compra mediante un formulario de pago digital.




📖 Descripción

Distri Urban es una aplicación desarrollada con tecnologías modernas de frontend que simula una tienda virtual de calzado.

El sistema permite:

-Visualizar productos destacados.
-Buscar productos mediante barra de búsqueda.
-Editar y eliminar productos.
-Simular un proceso de registro y pago digital.
-Está diseñada con una interfaz limpia, moderna y adaptable.



🚀 Características principales

🔎 Barra de búsqueda de productos.
🛒 Carrito de compras con contador dinámico.
👟 Catálogo visual de productos destacados.
✏️ Botones de edición y eliminación de productos.
🧾 Formulario de registro de usuario.
💳 Simulación de pago digital.
📱 Diseño responsive.
🎨 Estética urbana y moderna.



🖥️ Interfaz gráfica

La interfaz está compuesta por:
🔝 Header
-Logo de la tienda.
-Nombre de la marca (Distri Urban).
-Barra de búsqueda.
-Ícono de carrito con contador.

👟 Sección de productos
Tarjetas individuales con:
-Imagen del producto.
-Nombre.
-Marca.
-Precio.
-Botones de editar y eliminar.

🧾 Panel lateral de compra
-Formulario de registro:
-Nombre completo
-Correo electrónico
-Dirección

Sección de pago digital:
-Número de tarjeta
-Fecha de vencimiento
-CVV
-Botón de confirmación de compra.



🏗️ Arquitectura del proyecto

El proyecto sigue una arquitectura modular basada en componentes.

src/
│
├── features/
│   ├── layout/
│   │   └── components/
│   │       └── Header.jsx
│   │
│   ├── products/
│   │   ├── components/
│   │   │   └── ProductCard.jsx
│   │   └── data/
│   │       └── products.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
🔹 Tecnologías utilizadas

React
React Router
Bootstrap
CSS personalizado
Vite

🔹 Patrón utilizado

Arquitectura basada en componentes.
Separación por features.
Reutilización de componentes UI.
Manejo de props para comunicación entre componentes.



⚙️ Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/tu-usuario/distri-urban.git

Instalar dependencias:

npm install

Ejecutar el proyecto:

npm run dev



📌 Datos importantes del autor

Nombre: Didier Londoño
Edad: 16 años
Formación: Media técnica en desarrollo de software
Intereses:

Desarrollo web

Diseño de interfaces

Fútbol

Música

Proyecto académico enfocado en el fortalecimiento de habilidades en desarrollo frontend con React.



📄 Licencia

Este proyecto es de uso académico y educativo.



