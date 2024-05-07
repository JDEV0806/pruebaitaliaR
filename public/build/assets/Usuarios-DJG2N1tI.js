import{r as l,j as e}from"./app-Cu5QFIpX.js";import{$ as m,S as o}from"./sweetalert2.all-BPyCEskY.js";function P({auth:v}){const[f,g]=l.useState([]),[j,h]=l.useState([]);return l.useEffect(()=>{fetch("/api/users").then(t=>t.json()).then(t=>{console.log(t),g(t)}).then(()=>{m(function(){m("#myTable").DataTable()})})},[]),l.useEffect(()=>{fetch("/api/v_pventas").then(t=>t.json()).then(t=>{h(t),console.log("Datos de ventas:",t),document.getElementById("agrUsuario").addEventListener("click",()=>{o.fire({title:"Agregar usuario",width:"900px",html:`
                <form id="userForm" style="width:95%;">
                    <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">
                        Nombres
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombres" id="nombre">
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Apaterno">
                        Apellido Paterno
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Apellido Paterno" id="Apaterno">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Amaterno">
                        Apellido Materno
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Apellido Materno" id="Amaterno">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mt-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="correo">
                        Correo
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Correo" id="correo">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mt-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nomina">
                        Numero de nomina
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Numero de nomina" id="nomina">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mt-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="usuario">
                        Usuario
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre de usuario" id="usuario">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mt-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contrasena">
                        Contraseña
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Contraseña" id="contrasena">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mt-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="departamento">
                        ID Departamento
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="departamento" id="departamento">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mt-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="puesto">
                        ID Puesto
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="puesto" id="puesto">
                    </div>
                    <!-- Add more inputs here -->
                    </div>
                    <label class="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-1 mt-2" for="datos">
                        Paginas con acceso
                    </label>
                    <div class="justify-center flex-wrap px-3 mt-3 grid grid-cols-3 gap-4 items-start align-items-center justify-items-start">

                    ${t.map(a=>`
                    <div class="p-0">
                        <input type="checkbox" value="${a.id}" name="${a.nombre}">
                        <label for="${a.id}">${a.nombre}</label>
                    </div>
                    `).join("")}
                </div>
                </form>
                `,confirmButtonText:"Guardar",focusConfirm:!1,preConfirm:()=>{const a=o.getPopup().querySelector("#nombre").value,s=o.getPopup().querySelector("#Apaterno").value,r=o.getPopup().querySelector("#Amaterno").value,n=o.getPopup().querySelector("#correo").value,c=o.getPopup().querySelector("#nomina").value,i=o.getPopup().querySelector("#usuario").value,d=o.getPopup().querySelector("#contrasena").value,p=o.getPopup().querySelector("#departamento").value,u=o.getPopup().querySelector("#puesto").value,b=o.getPopup().querySelectorAll('input[type="checkbox"]:checked'),y=Array.from(b).map(w=>parseInt(w.value)),x={2:[],1:[],3:y};return console.log(x),(!a||!s||!r||!n||!c||!i||!d||!p||!u)&&o.showValidationMessage("Por favor completa todos los campos"),{nombre:a,Apaterno:s,Amaterno:r,correo:n,nomina:c,usuario:i,contrasena:d,departamento:p,puesto:u,priv:x}}}).then(a=>{a.isConfirmed&&(console.log(a.value),fetch("/api/newUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)}).then(s=>s.json()).then(s=>{console.log("Success:",s),o.fire({icon:"success",title:"Usuario agregado",showConfirmButton:!1,timer:1500})}).catch(s=>{console.error("Error:",s)}))})})}).catch(t=>{console.error("Error al obtener datos de ventas:",t)})},[]),l.useEffect(()=>{},[]),e.jsx("div",{className:"py-1",children:e.jsx("div",{className:"mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Usuarios"}),e.jsx("button",{id:"agrUsuario",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Botón"})]}),e.jsx("div",{className:"px-4 py-5 sm:px-6",children:e.jsxs("table",{id:"myTable",className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Puesto"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nomina"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:f.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.idPuesto}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.nomina})]},t.id))})]})})]})})})}export{P as default};
