export default function Historia() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Historia</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bebidasfull</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Nosotros somos Bebidasfull y les vamos a contar la gran historia de éxito y superación de esta empresa.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              La historia comienza hace varios años, cuando Federico Schujman, un apasionado de las bebidas exóticas, decidió emprender su propio negocio de distribución de bebidas. Con mucho esfuerzo y dedicación, logró establecer su pequeña empresa en San Miguel de Tucumán, y decidió llamarla "Bebidasfull".

La distribuidora se destacó desde el principio por su amplia variedad de bebidas, desde refrescos clásicos hasta jugos tropicales y licores importados. Federico siempre se aseguró de buscar productos únicos y de alta calidad para satisfacer los gustos más exigentes de sus clientes.

Con el tiempo, el negocio creció y Federico decidió involucrar a sus amigos en la empresa. Lucas, un emprendedor y amante de la innovación, se convirtió en la mano derecha de su amigo. Juntos, expandieron la distribuidora a nuevos territorios, llegando a abastecer no solo San Miguel de Tucumán, sino también ciudades cercanas.

Lucas se destacó por su habilidad para identificar nuevas tendencias en el mercado de bebidas. Introdujo bebidas energéticas, aguas saborizadas y productos orgánicos en el catálogo de Bebidasfull, atrayendo a una audiencia más amplia y diversa.

La distribuidora se convirtió en un punto de referencia para los habitantes de la ciudad y más allá.

Con el paso del tiempo, Bebidasfull continuó creciendo y se aventuró en el mundo en línea, ofreciendo su catálogo de bebidas a través de una tienda virtual.

Hoy en día, Bebidasfull es reconocida como una distribuidora líder en la región, con una reputación de calidad y variedad. Su éxito se debe en gran parte al espíritu emprendedor de Federico y la visión innovadora de Lucas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

