import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";
import Swal from "sweetalert2";
import FormularioUsuario from "../../Components/Formulario";

export default function Index({ auth }) {
    const [users, setUsers] = useState([]);

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
    }, []);

    useEffect(() => {
        fetch("/api/users") // Asegúrate de reemplazar esto con la URL de tu API
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Imprimir la data en la consola
                setUsers(data);
            })
            .then(() => {
                $(function () {
                    $("#myTable").DataTable();
                });
            });
    }, []);

    const [open, setOpen] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        Swal.fire({
            title: "Enviando datos...",
            allowOutsideClick: false,
            showConfirmButton: false,
            oneBeforeOpen: () => {
                Swal.showLoading();
            },
        });
        // Recopilar los datos del formulario
        const nombre = document.getElementById("nombre").value;
        const Apaterno = document.getElementById("Apaterno").value;
        const Amaterno = document.getElementById("Amaterno").value;
        const correo = document.getElementById("correo").value;
        const nomina = document.getElementById("nomina").value;
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;
        const departamento = document.getElementById("departamento").value;
        const puesto = document.getElementById("puesto").value;

        // Crear el objeto JSON para priv
        const checkedIds = ventas
            .filter((venta) => venta.checked)
            .map((venta) => venta.id);
        const priv = JSON.stringify({
            2: [],
            1: [],
            3: checkedIds,
        });

        // Enviar los datos a la API
        const response = await fetch("/api/newUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                Apaterno,
                Amaterno,
                correo,
                nomina,
                usuario,
                contrasena,
                departamento,
                puesto,
                priv,
            }),
        });

        Swal.close();

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            // Mostrar un SweetAlert si el usuario se creó con éxito
            if (data.success) {
                Swal.fire(
                    "¡Buen trabajo!",
                    "Usuario creado con éxito",
                    "success"
                );
                setOpen(false);
            }
        } else {
            console.error("Error:", response.status, response.statusText);
        }
    }

    return (
        <div className="py-1">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Usuarios
                        </h3>

                        <button
                            id="agrUsuario"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setOpen(true)}
                        >
                            Botón
                        </button>
                        <FormularioUsuario
                            isOpen={open}
                            onClose={() => setOpen(false)}
                        >
                            <label className="text-xl text-center mb-5">
                                Ingresa Nuevo Usuario
                            </label>
                            <form id="userForm mt-5" onSubmit={handleSubmit}>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="nombre"
                                        >
                                            Nombres
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Nombres"
                                            id="nombre"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="Apaterno"
                                        >
                                            Apellido Paterno
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Apellido Paterno"
                                            id="Apaterno"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="Amaterno"
                                        >
                                            Apellido Materno
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Apellido Materno"
                                            id="Amaterno"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="correo"
                                        >
                                            Correo
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Correo"
                                            id="correo"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="nomina"
                                        >
                                            Numero de nomina
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Numero de nomina"
                                            id="nomina"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="usuario"
                                        >
                                            Usuario
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Nombre de usuario"
                                            id="usuario"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="contrasena"
                                        >
                                            Contraseña
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Contraseña"
                                            id="contrasena"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="departamento"
                                        >
                                            ID Departamento
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="departamento"
                                            id="departamento"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mt-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="puesto"
                                        >
                                            ID Puesto
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="puesto"
                                            id="puesto"
                                        />
                                    </div>

                                    {/* Add more inputs here */}
                                </div>
                                <div className="w-all justify-center flex-wrap px-3 mt-3 grid grid-cols-3 gap-4 items-start align-items-center justify-items-start">
                                    {ventas.map((venta) => (
                                        <div className="p-0" key={venta.id}>
                                            <input
                                                type="checkbox"
                                                value={venta.id}
                                                name={venta.nombre}
                                            />
                                            <label htmlFor={venta.id}>
                                                {venta.nombre}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end mt-5">
                                    <button
                                        type="summit"
                                        className="bg-blue-500 hover:bg-blue-700 rounded text-white p-2"
                                    >
                                        Agregar nuevo usuario
                                    </button>
                                </div>
                            </form>
                        </FormularioUsuario>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <table
                            id="myTable"
                            className="min-w-full divide-y divide-gray-200"
                        >
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Puesto
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nomina
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Botones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.idPuesto}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.nomina}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex space-x-4">
                                                    <button
                                                        id="editUsuario"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={() =>
                                                            editUser(user.id)
                                                        }
                                                    >
                                                        Editar
                                                    </button>
                                                    <button
                                                        id="eliUsuario"
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={() =>
                                                            deleteUser(user.id)
                                                        }
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
    function deleteUser(userId) {
        // Aquí puedes llamar a tu API para eliminar el usuario
        // Por ejemplo:
        // fetch(`/api/users/${userId}`, { method: 'DELETE' });
    }

    function editUser(userId) {
        fetch("/api/userInfo/" + userId)
            .then((response) => response.json())
            .then((data) => {
                console.log("Datos de InfoUser:", data);
                // Aquí puedes hacer lo que necesites con los datos de InfoUser
            })
            .catch((error) => {
                console.error("Error al obtener datos de InfoUser:", error);
            });
    }

    const [isFormOpen, setFormOpen] = useState(false);
}
