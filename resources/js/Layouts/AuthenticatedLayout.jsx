import React, { useState, useEffect } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Index from "@/Pages/P_PVentas/Dashboard";
import ListaP from "@/Pages/P_PVentas/ListaDePrecios";
import Proyectos from "@/Pages/P_PVentas/Proyectos";
import Folios from "@/Pages/P_PVentas/Folios";
import Clientes from "@/Pages/P_PVentas/Clientes";
import Asesor from "@/Pages/P_PVentas/Asesor";
import Productos from "@/Pages/P_PVentas/Productos";
import DetallesP from "@/Pages/P_PVentas/DetallesYProductos";
import ImagenesF from "@/Pages/P_PVentas/ImagenesYFotos";
import VideosAS from "@/Pages/P_PVentas/VideosArmandoSilleria";
import Comercializacion from "@/Pages/P_PVentas/Comercializacion";
import Oficial from "@/Pages/P_PVentas/Oficial";
import Complementos from "@/Pages/P_PVentas/Complementos";
import Inventarios from "@/Pages/P_PVentas/Inventarios";
import ConsultarTOP from "@/Pages/P_PVentas/Top50";
import ConsultarEG from "@/Pages/P_PVentas/ExistenciasGenerales";
import ConsultarES from "@/Pages/P_PVentas/ExistenciasSilleria";

export default function Authenticated({ user, header, children }) {
    const priv = JSON.parse(user.priv);

    const [selectedView, setSelectedView] = useState(null); // Estado para almacenar la vista seleccionada

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    // Función de controlador de evento para manejar el clic en el div específicos
    const handleAClickVistas = (valor) => {
        // Aquí puedes realizar cualquier acción que desees cuando se haga clic en el div
        console.log("URL DE VISTA DESTINO: " + valor);

        setSelectedView(valor);
    };

    const handleAClickAplicativos = (valor) => {
        // Aquí puedes realizar cualquier acción que desees cuando se haga clic en el div
        console.log("URL DE APLICATIVO DESTINO: " + valor);
    };

    const [ventas, setVentas] = useState([]);

    const [aplicativos, setAplicativos] = useState([]);

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener los datos de aplicativos
        fetch("/api/PVenta")
            .then((response) => response.json())
            .then((data) => {
                setAplicativos(data);
            })
            .catch((error) => {
                console.error("Error al obtener datos de ventas:", error);
            });
        // Realizar la solicitud HTTP para obtener los datos de ventas
        fetch("/api/v_pventas")
            .then((response) => response.json())
            .then((data) => {
                setVentas(data);
            })
            .catch((error) => {
                console.error("Error al obtener datos de ventas:", error);
            });
    }, []);

    useEffect(() => {
        fetch(`/api/user/${user.id}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className="max-w-full min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div class="shrink-0 flex p-0 -m-6">
                                <img
                            class="w-5-6 h-9     m-auto ml-0"
                                    src="img/logocompletonegro.png"
                                    alt="LINEA ITALIA"
                                />
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative -m-6">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className=" text-xs inline-flex items-center px-3 py-2 border border-transparent  leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Mi Perfil
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Cerrar Sesión
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        ></ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-gray shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <div className="flex min-h-screen bg-gray-200">
                <div className="flex flex-col w-auto bg-white">
                    <div className="flex-1 overflow-y-auto">
                        <h1 className="border-gray-60 border-b p-2 mt-3 font-bold text-xs">
                            APLICATIVOS
                        </h1>
                        <ul className="p-1 mt-0 font-light text-xs cursor-pointer">
                            {aplicativos.map((aplicativo, index) => {
                                // Comprueba si el usuario tiene acceso a este aplicativo
                                if (priv.hasOwnProperty(aplicativo.id) && aplicativo.id !== 3) {
                                    return (
                                        <li key={index}>
                                            <a
                                                onClick={() =>
                                                    handleAClickAplicativos(
                                                        aplicativo.url
                                                    )
                                                }
                                                className="text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 block"
                                                data-id={aplicativo.id}
                                            >
                                                {aplicativo.nombre}
                                            </a>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                        <h1 className="border-gray-60 border-b p-2 mt-3 font-bold text-xs">
                            MENÚ PRINCIPAL
                        </h1>

                        <ul className="p-1 mt-0 font-light  text-xs cursor-pointer">
                            {ventas.map((venta, index) => {
                                // Comprueba si el usuario tiene acceso a esta vista
                                if (
                                    priv[venta.id_aplicativo] &&
                                    priv[venta.id_aplicativo].includes(venta.id)
                                ) {
                                    return (
                                        <li key={index}>
                                            <a
                                                onClick={() =>
                                                    handleAClickVistas(
                                                        venta.url
                                                    )
                                                }
                                                className="text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 block"
                                                data-id={venta.id}
                                                data-aplicativo_id={
                                                    venta.id_aplicativo
                                                }
                                            >
                                                {venta.nombre}
                                            </a>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="p-4">
                        <main>
                            {selectedView === "index" && <Index />}
                            {selectedView === "listaP" && <ListaP />}
                            {selectedView === "proyectos" && <Proyectos />}
                            {selectedView === "folios" && <Folios />}
                            {selectedView === "clientes" && <Clientes />}
                            {selectedView === "asesor" && <Asesor />}
                            {selectedView === "productos" && <Productos />}
                            {selectedView === "detallesP" && <DetallesP />}
                            {selectedView === "imagenesF" && <ImagenesF />}
                            {selectedView === "videosAS" && <VideosAS />}
                            {selectedView === "comercializacion" && (
                                <Comercializacion />
                            )}
                            {selectedView === "oficial" && <Oficial />}
                            {selectedView === "complementos" && (
                                <Complementos />
                            )}
                            {selectedView === "inventarios" && <Inventarios />}
                            {selectedView === "consultarTOP" && (
                                <ConsultarTOP />
                            )}
                            {selectedView === "consultarEG" && <ConsultarEG />}
                            {selectedView === "consultarES" && <ConsultarES />}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
