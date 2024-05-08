import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";
import Swal from "sweetalert2";
import FormularioUsuario from "../../Components/Formulario";
import FormularioUsuarioEditar from "../../Components/Formulario-editUser";
import { info } from "autoprefixer";
export default function Index({ auth }) {
    const [users, setUsers] = useState([]);

    const [InfoUser, setInfoUser] = useState([]); // Aquí se almacenarán los datos de InfoUser
    const [ventas, setVentas] = useState([]);
    const [ventas2, setVentas2] = useState([]);
    const [idsToCheck, setIdsToCheck] = useState([]);
    useEffect(() => {
        // Realizar la solicitud HTTP para obtener los datos de ventas
        fetch("/api/v_pventas")
            .then((response) => response.json())
            .then((data) => {
                setVentas(data);
                setVentas2(data);
            })
            .catch((error) => {
                console.error("Error al obtener los datos de ventas:", error);
            });
    }, []);

    useEffect(() => {
        fetch("/api/users") // Asegúrate de reemplazar esto con la URL de tu API
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .then(() => {
                $(function () {
                    $("#myTable").DataTable();
                });
            });
    }, []);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
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

        let checkedIds = [];
        document.querySelectorAll(".checks").forEach((checkbox) => {
            if (checkbox.checked) {
                // Convertir el valor del checkbox a número y agregarlo a checkedIds2
                const checkboxValue = Number(checkbox.value);
                // Solo agregar el valor si no está ya en el array
                if (!checkedIds.includes(checkboxValue)) {
                    checkedIds.push(checkboxValue);
                }
            }
        });

        const priv = JSON.stringify({
            2: [],
            1: [],
            3: checkedIds,
        });
        console.log(checkedIds);

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
                document.getElementById("nombre").value = "";
                document.getElementById("Apaterno").value = "";
                document.getElementById("Amaterno").value = "";
                document.getElementById("correo").value = "";
                document.getElementById("nomina").value = "";
                document.getElementById("usuario").value = "";
                document.getElementById("contrasena").value = "";
                document.getElementById("departamento").value = "";
                document.getElementById("puesto").value = "";
            }
        } else {
            console.error("Error:", response.status, response.statusText);
        }
    }

    async function handleSubmitEdit(event) {
        event.preventDefault();

        Swal.fire({
            title: "Editando datos...",
            allowOutsideClick: false,
            showConfirmButton: false,
            oneBeforeOpen: () => {
                Swal.showLoading();
            },
        });
        // Recopilar los datos del formulario
        const nombre2 = InfoUser.name;
        const Apaterno2 = InfoUser.apellidopaterno;
        const Amaterno2 = InfoUser.apellidomaterno;
        const correo2 = InfoUser.email;
        const nomina2 = InfoUser.nomina;
        const usuario2 = InfoUser.usuario;
        // const contrasena2 = document.getElementById("contrasena2").value;
        const departamento2 = InfoUser.idDepartamento;
        const puesto2 = InfoUser.idPuesto;
        const usuid = document.getElementById("usuid").value;

        // Crear el objeto JSON para priv
        let checkedIds2 = [];
        document.querySelectorAll(".checks2").forEach((checkbox) => {
            if (checkbox.checked) {
                // Convertir el valor del checkbox a número y agregarlo a checkedIds2
                const checkboxValue = Number(checkbox.value);
                // Solo agregar el valor si no está ya en el array
                if (!checkedIds2.includes(checkboxValue)) {
                    checkedIds2.push(checkboxValue);
                }
            }
        });

        const priv2 = JSON.stringify({
            2: [],
            1: [],
            3: checkedIds2,
        });
        console.log(checkedIds2);
        // Enviar los datos a la API
        console.log(
            JSON.stringify({
                nombre: nombre2,
                Apaterno: Apaterno2,
                Amaterno: Amaterno2,
                correo: correo2,
                nomina: nomina2,
                usuario: usuario2,
                // contrasena: contrasena2,
                departamento: departamento2,
                puesto: puesto2,
                priv: priv2,
            })
        );

        const response = await fetch("/api/editUser/" + usuid, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: nombre2,
                Apaterno: Apaterno2,
                Amaterno: Amaterno2,
                correo: correo2,
                nomina: nomina2,
                usuario: usuario2,
                // contrasena: contrasena2,
                departamento: departamento2,
                puesto: puesto2,
                priv: priv2,
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
                    "Usuario Actualizado con éxito",
                    "success"
                );
                setOpen(false);
            }
        } else {
            console.error("Error:", response.status, response.statusText);
        }
    }

    function deleteUser(userId) {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("/api/userInfo/" + userId)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Datos de InfoUser:", data);
                        const id = JSON.parse(data.id);
                        //quiero otro fetch a la api de eliminar y que le pase el id
                        fetch("/api/deleteUser/" + id, {
                            method: "DELETE",
                        })
                            .then(() => {
                                Swal.fire("Usuario eliminado correctamente", {
                                    icon: "success",
                                });
                            })
                            .catch((error) => {
                                console.error(
                                    "Error al eliminar usuario:",
                                    error
                                );
                            });
                    })
                    .catch((error) => {
                        console.error(
                            "Error al obtener datos de InfoUser:",
                            error
                        );
                    });
            } else {
                Swal.fire("Eliminación cancelada");
            }
        });
    }

    function editUser(userId) {
        fetch("/api/userInfo/" + userId)
            .then((response) => response.json())
            .then((data) => {
                console.log("Datos de InfoUser:", data);
                const priv = JSON.parse(data.priv);
                const idsToCheck = priv["3"];

                const checkboxes = document.querySelectorAll(".checks2");

                // Iterar sobre los checkboxes
                checkboxes.forEach((checkbox) => {
                    // Si el valor del checkbox está en idsToCheck, marcarlo
                    if (idsToCheck.includes(Number(checkbox.value))) {
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                });
                setInfoUser(data);
                // Aquí puedes hacer lo que necesites con los datos de InfoUser
            })
            .catch((error) => {
                console.error("Error al obtener datos de InfoUser:", error);
            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfoUser({
            ...InfoUser,
            [name]: value,
        });

        console.log(InfoUser);
    };
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
                                                className="checks"
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
                                                        onClick={() => {
                                                            editUser(user.id);
                                                            setOpen2(true);
                                                        }}
                                                    >
                                                        Editar
                                                    </button>
                                                    <FormularioUsuarioEditar
                                                        isOpen={open2}
                                                        onClose={() =>
                                                            setOpen2(false)
                                                        }
                                                    >
                                                        <label className="text-xl text-center mb-5">
                                                            Editar Usuario
                                                        </label>
                                                        <form
                                                            id="userForm mt-5"
                                                            onSubmit={
                                                                handleSubmitEdit
                                                            }
                                                        >
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
                                                                        id="nombre2"
                                                                        name="name"
                                                                        value={
                                                                            InfoUser.name
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-3">
                                                                    <label
                                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                        for="Apaterno"
                                                                    >
                                                                        Apellido
                                                                        Paterno
                                                                    </label>
                                                                    <input
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                        type="text"
                                                                        placeholder="Apellido Paterno"
                                                                        id="Apaterno2"
                                                                        name="apellidopaterno"
                                                                        value={
                                                                            InfoUser.Apaterno
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        } // Manejador de cambio
                                                                    />
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                                                                    <label
                                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                        for="Amaterno"
                                                                    >
                                                                        Apellido
                                                                        Materno
                                                                    </label>
                                                                    <input
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                        type="text"
                                                                        placeholder="Apellido Materno"
                                                                        id="Amaterno2"
                                                                        name="apellidomaterno"
                                                                        value={
                                                                            InfoUser.Amaterno
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
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
                                                                        id="correo2"
                                                                        name="email"
                                                                        value={
                                                                            InfoUser.email
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-3 mt-3">
                                                                    <label
                                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                        for="nomina"
                                                                    >
                                                                        Numero
                                                                        de
                                                                        nomina
                                                                    </label>
                                                                    <input
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                        type="text"
                                                                        placeholder="Numero de nomina"
                                                                        id="nomina2"
                                                                        name="nomina"
                                                                        value={
                                                                            InfoUser.nomina
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
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
                                                                        id="usuario2"
                                                                        name="usuario"
                                                                        value={
                                                                            InfoUser.usuario
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                    />
                                                                    <input
                                                                        id="usuid"
                                                                        value={
                                                                            InfoUser.id
                                                                        }
                                                                        hidden
                                                                    />
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-3 mt-3">
                                                                    <label
                                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                        for="departamento"
                                                                    >
                                                                        ID
                                                                        Departamento
                                                                    </label>
                                                                    <input
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                        type="text"
                                                                        placeholder="departamento"
                                                                        id="departamento2"
                                                                        name="idDepartamento"
                                                                        value={
                                                                            InfoUser.idDepartamento
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-3 mt-3">
                                                                    <label
                                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                        for="puesto"
                                                                    >
                                                                        ID
                                                                        Puesto
                                                                    </label>
                                                                    <input
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                        type="text"
                                                                        placeholder="puesto"
                                                                        id="puesto2"
                                                                        name="idPuesto"
                                                                        value={
                                                                            InfoUser.idPuesto
                                                                        }
                                                                        onChange={
                                                                            handleInputChange
                                                                        }
                                                                    />
                                                                </div>

                                                                {/* Add more inputs here */}
                                                            </div>
                                                            <div className="w-all justify-center flex-wrap px-3 mt-3 grid grid-cols-3 gap-4 items-start align-items-center justify-items-start">
                                                                {ventas2.map(
                                                                    (
                                                                        ventilla
                                                                    ) => (
                                                                        <div
                                                                            className="p-0"
                                                                            key={
                                                                                ventilla.id
                                                                            }
                                                                        >
                                                                            <input
                                                                                type="checkbox"
                                                                                className="checks2"
                                                                                value={
                                                                                    ventilla.id
                                                                                }
                                                                                name={
                                                                                    ventilla.nombre
                                                                                }
                                                                            />
                                                                            <label
                                                                                htmlFor={
                                                                                    ventilla.id
                                                                                }
                                                                            >
                                                                                {
                                                                                    ventilla.nombre
                                                                                }
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="flex justify-end mt-5">
                                                                <button
                                                                    type="summit"
                                                                    className="bg-blue-500 hover:bg-blue-700 rounded text-white p-2"
                                                                >
                                                                    Editar
                                                                    usuario
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </FormularioUsuarioEditar>
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

    const [isFormOpen, setFormOpen] = useState(false);
}
