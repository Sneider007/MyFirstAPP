export const Content = () => {

  const base = import.meta.env.BASE_URL;

  const productos = [
    {
      id: 1,
      nombre: "Nike TN",
      marca: "Nike",
      precio: 189,
      img: `${base}img/Nike1.jpg`,
    },
    {
      id: 2,
      nombre: "Adidas Superstar",
      marca: "Adidas",
      precio: 210,
      img: `${base}img/adidas1.jpg`,
    },
    {
      id: 3,
      nombre: "Hugo Boss",
      marca: "Hugo Boss",
      precio: 320,
      img: `${base}img/hugoboss1.jpg`,
    },
    {
      id: 4,
      nombre: "Creative Recreation Dion Low",
      marca: "Creative Recreation",
      precio: 150,
      img: `${base}img/creative1.jpg`,
    },
    {
      id: 5,
      nombre: "Jordan Retro 4",
      marca: "Jordan",
      precio: 250,
      img: `${base}img/jordan1.jpg`,
    },
    { 
      id: 6,
      nombre: "Adidas Grand Court Lifestyle",
      marca: "Adidas",
      precio: 175,
      img: `${base}img/adidas2.jpg`,
    },
  ];

  return (
    <main className="container-fluid px-4 pb-5 flex-grow-1" style={{ paddingTop: "20px" }}>
      <div className="row g-4">

        <div className="col-lg-8">
          <h4 className="text-warning mb-3">Zapatos destacados</h4>

          <div className="row">
            {productos.map((p) => (
              <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                <div className="card h-100 shadow bg-dark text-light">

                  <img
                    src={p.img}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt={p.nombre}
                  />

                  <div className="card-body d-flex flex-column">
                    <h6 className="mb-1">{p.nombre}</h6>
                    <small className="text-info">{p.marca}</small>

                    <p className="fw-bold text-success mb-2">
                      ${p.precio} USD
                    </p>

                    <div className="d-flex gap-2 mt-auto">
                      <button className="btn btn-warning btn-sm flex-fill">
                        Comprar
                      </button>

                      <button className="btn btn-outline-light btn-sm flex-fill">
                        Detalles
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL DERECHO */}
        <div className="col-lg-4">
          <div className="bg-white rounded shadow p-4">

            <h5 className="mb-3">Registro</h5>

            <input className="form-control mb-2" placeholder="Nombre completo" />
            <input className="form-control mb-2" placeholder="Correo electrónico" />
            <input className="form-control mb-3" placeholder="Dirección" />

            <hr />

            <h6>Pago digital</h6>

            <input className="form-control mb-2" placeholder="Número de tarjeta" />

            <div className="row">
              <div className="col-6">
                <input className="form-control mb-2" placeholder="MM/AA" />
              </div>
              <div className="col-6">
                <input className="form-control mb-2" placeholder="CVV" />
              </div>
            </div>

            <button className="btn btn-success w-100 mt-2">
              Confirmar compra
            </button>

          </div>
        </div>

      </div>
    </main>
  );
};