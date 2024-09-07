import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { GridCharacters } from "./GridCharacters";
import Pagination from '@mui/material/Pagination';
import { BuscarCharacters } from "./BuscarCharacters";

export const RickApp = () => {
    const [pagina, setPagina] = useState(1)
    const [buscarPer, setBuscarPer] = useState("");
    const {characters, totalPages} = useCharacters(pagina, buscarPer)

    const handleBuscar = (character) => {
        setBuscarPer(character)
    }

    return (
        <>
            
            <GridCharacters characters={characters} />
            <div className="mt-2">
                <nav className="navbar navbar-dark bg-black fixed-top ">
                    <div className="container-fluid">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGWP-nlDW3n1xbcj-nQILuU1sEzHDJ-k2XA&s" alt="Logo" width="200" height="60" className="d-inline-block align-text-top" />
                    <BuscarCharacters handleBuscar={handleBuscar}/>
                    </div>
                </nav>
            </div>
            <Pagination count={totalPages} page={pagina} onChange={(e, value) => setPagina(value)} color="primary" className="d-flex justify-content-center mt-5"/>

        </>
    )
} 