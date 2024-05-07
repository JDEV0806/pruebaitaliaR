import React from "react";
import { useState, useEffect } from "react";

function FormularioUsuario({ isOpen, onClose, children }) {
    // if (!isOpen) {
    //     return null;
    // }
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener los datos de ventas
        fetch("/api/v_pventas")
            .then((response) => response.json())
            .then((data) => {
                setVentas(data);
                console.log("Datos de ventas:", data);
            })
            .catch((error) => {
                console.error("Error al obtener los datos de ventas:", error);
            });
    }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

    // Aquí va el código de tu formulario

    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${
                isOpen ? "visible bg-black/20" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`overflow-y-auto max-w-[95%] max-h-[70vh] bg-white rounded-xl shadow p-6 transition-all ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export default FormularioUsuario;
