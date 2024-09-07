import { useState } from "react";

export const BuscarCharacters = ({ handleBuscar }) => {
    const [buscarPer, setBuscarPer] = useState("");

    const handleEncontrar = (e) => {
        e.preventDefault();
        handleBuscar(buscarPer);
    }

    return (
        <>
            
            <div className="mt-1 container d-flex flex-row justify-content-center alig-items-center w-50">
            <form class="d-flex" role="search" onSubmit={handleEncontrar}>
                <input class="form-control me-2" type="search" placeholder="Ingrese el nombre aqui" aria-label="Search" onChange={(e) => setBuscarPer(e.target.value)}/>
                <button class="btn btn-outline-light" type="submit">BUSCAR</button>
            </form>
            </div>
            
        </>
    );
}