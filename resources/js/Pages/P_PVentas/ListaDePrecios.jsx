import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
export default function Index({ auth }) {
    useEffect(() => {
        // Abrir la página en otra pestaña al cargar el componente
    }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

    return (
        <div className="py-1">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="bg-transparent overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-0 text-gray-900">Lista de preciosss</div>
                </div>
            </div>
        </div>
    );
}
