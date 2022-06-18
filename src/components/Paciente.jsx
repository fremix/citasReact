const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">Freddy</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">17 de Junio de 2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            adipisci fugiat. Ipsam rem, eaque quasi maiores, ut molestias quae,
            velit error cumque eos quo accusantium natus voluptatem soluta
            debitis placeat!
          </span>
        </p>
      </div>
  )
}

export default Paciente
