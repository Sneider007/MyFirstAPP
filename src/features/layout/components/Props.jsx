import React from 'react';

function getImageUrl(person) {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
}

function Avatar({ person, size }) {
    return (
        <div
            className="d-flex flex-column align-items-center text-center shadow-sm"
            style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '25px 20px',
                maxWidth: 280,
                transition: 'transform 0.3s ease'
            }}
        >
            {/* Imagen arriba tipo perfil */}
            <img
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: 15,
                    border: '4px solid #f1f1f1'
                }}
            />

            {/* Nombre */}
            <h5 className="fw-bold mb-1">{person.name}</h5>

            {/* Título */}
            <span
                style={{
                    color: '#0d6efd',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    marginBottom: 10
                }}
            >
                {person.title}
            </span>

            {/* Línea decorativa */}
            <div
                style={{
                    width: 40,
                    height: 3,
                    backgroundColor: '#ffc107',
                    margin: '10px 0'
                }}
            />

            {/* Descripción */}
            <p className="text-muted small mb-0">
                {person.description}
            </p>
        </div>
    );
}

export default function Props() {
    return (
        <div className="container py-5">

            <h1 className="text-center mb-3">
                Renderizado de Avatares con Props en React
            </h1>

            <p className="text-center text-muted mx-auto mb-5" style={{ maxWidth: 700 }}>
                Este componente demuestra cómo utilizar props en React para transferir datos
                desde un componente padre hacia componentes hijos de forma eficiente.
            </p>

            {/* Nuevo layout más limpio */}
            <div
                className="d-flex flex-wrap justify-content-center"
                style={{ gap: '40px' }}
            >

                <Avatar
                    size={110}
                    person={{
                        name: 'Katsuko Saruhashi',
                        title: 'Geoquímica',
                        description: 'Primera mujer en ser elegida para la Academia de Ciencias de Japón.',
                        imageId: 'YfeOqp2'
                    }}
                />

                <Avatar
                    size={110}
                    person={{
                        name: 'Aklilu Lemma',
                        title: 'Científico etíope',
                        description: 'Fue reconocido por descubrir un tratamiento natural eficaz contra la esquistosomiasis.',
                        imageId: 'OKS67lh'
                    }}
                />

                <Avatar
                    size={110}
                    person={{
                        name: 'Lin Lanying',
                        title: 'Ingeniera de materiales',
                        description: 'Contribuyó significativamente al desarrollo de la industria de semiconductores en China.',
                        imageId: '1bX5QH6'
                    }}
                />

            </div>
        </div>
    );
}       