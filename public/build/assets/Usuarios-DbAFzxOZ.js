import{j as e,r as c}from"./app-HIpIFBPn.js";import{$ as I,S as l}from"./autoprefixer-BB7S7lhs.js";function F({isOpen:g,onClose:x,children:h}){return e.jsx("div",{onClick:x,className:`fixed inset-0 flex justify-center items-center transition-colors z-10 ${g?"visible bg-black/20":"invisible"}`,children:e.jsx("div",{onClick:a=>a.stopPropagation(),className:`overflow-y-auto max-w-[95%] max-h-[70vh] bg-white rounded-xl shadow p-6 transition-all ${open?"scale-100 opacity-100":"scale-125 opacity-0"}`,children:h})})}function M({isOpen:g,onClose:x,children:h}){return e.jsx("div",{onClick:x,className:`fixed inset-0 flex justify-center items-center transition-colors z-10 ${g?"visible":"invisible"}`,children:e.jsx("div",{onClick:a=>a.stopPropagation(),className:`overflow-y-auto max-w-[95%] max-h-[70vh] bg-white rounded-xl shadow p-6 transition-all ${open?"scale-100 opacity-100":"scale-125 opacity-0"}`,children:h})})}function q({auth:g}){const[x,h]=c.useState([]),[a,k]=c.useState([]),[A,C]=c.useState([]),[B,U]=c.useState([]);c.useState([]),c.useEffect(()=>{fetch("/api/v_pventas").then(t=>t.json()).then(t=>{C(t),U(t)}).catch(t=>{console.error("Error al obtener los datos de ventas:",t)})},[]),c.useEffect(()=>{fetch("/api/users").then(t=>t.json()).then(t=>{h(t)}).then(()=>{I(function(){I("#myTable").DataTable()})})},[]);const[S,b]=c.useState(!1),[O,E]=c.useState(!1);async function D(t){t.preventDefault(),l.fire({title:"Enviando datos...",allowOutsideClick:!1,showConfirmButton:!1,oneBeforeOpen:()=>{l.showLoading()}});const o=document.getElementById("nombre").value,s=document.getElementById("Apaterno").value,u=document.getElementById("Amaterno").value,p=document.getElementById("correo").value,m=document.getElementById("nomina").value,w=document.getElementById("usuario").value,y=document.getElementById("contrasena").value,j=document.getElementById("departamento").value,v=document.getElementById("puesto").value;let r=[];document.querySelectorAll(".checks").forEach(n=>{if(n.checked){const f=Number(n.value);r.includes(f)||r.push(f)}});const N=JSON.stringify({2:[],1:[],3:r});console.log(r);const i=await fetch("/api/newUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:o,Apaterno:s,Amaterno:u,correo:p,nomina:m,usuario:w,contrasena:y,departamento:j,puesto:v,priv:N})});if(l.close(),i.ok){const n=await i.json();console.log(n),n.success&&(l.fire("¡Buen trabajo!","Usuario creado con éxito","success"),b(!1),document.getElementById("nombre").value="",document.getElementById("Apaterno").value="",document.getElementById("Amaterno").value="",document.getElementById("correo").value="",document.getElementById("nomina").value="",document.getElementById("usuario").value="",document.getElementById("contrasena").value="",document.getElementById("departamento").value="",document.getElementById("puesto").value="")}else console.error("Error:",i.status,i.statusText)}async function P(t){t.preventDefault(),l.fire({title:"Editando datos...",allowOutsideClick:!1,showConfirmButton:!1,oneBeforeOpen:()=>{l.showLoading()}});const o=a.name,s=a.apellidopaterno,u=a.apellidomaterno,p=a.email,m=a.nomina,w=a.usuario,y=a.idDepartamento,j=a.idPuesto,v=document.getElementById("usuid").value;let r=[];document.querySelectorAll(".checks2").forEach(n=>{if(n.checked){const f=Number(n.value);r.includes(f)||r.push(f)}});const N=JSON.stringify({2:[],1:[],3:r});console.log(r),console.log(JSON.stringify({nombre:o,Apaterno:s,Amaterno:u,correo:p,nomina:m,usuario:w,departamento:y,puesto:j,priv:N}));const i=await fetch("/api/editUser/"+v,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:o,Apaterno:s,Amaterno:u,correo:p,nomina:m,usuario:w,departamento:y,puesto:j,priv:N})});if(l.close(),i.ok){const n=await i.json();console.log(n),n.success&&(l.fire("¡Buen trabajo!","Usuario Actualizado con éxito","success"),b(!1))}else console.error("Error:",i.status,i.statusText)}function T(t){l.fire({title:"¿Estás seguro?",text:"Esta acción no se puede deshacer",icon:"warning",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar",dangerMode:!0}).then(o=>{o.isConfirmed?fetch("/api/userInfo/"+t).then(s=>s.json()).then(s=>{console.log("Datos de InfoUser:",s);const u=JSON.parse(s.id);fetch("/api/deleteUser/"+u,{method:"DELETE"}).then(()=>{l.fire("Usuario eliminado correctamente",{icon:"success"})}).catch(p=>{console.error("Error al eliminar usuario:",p)})}).catch(s=>{console.error("Error al obtener datos de InfoUser:",s)}):l.fire("Eliminación cancelada")})}function J(t){fetch("/api/userInfo/"+t).then(o=>o.json()).then(o=>{console.log("Datos de InfoUser:",o);const u=JSON.parse(o.priv)[3];document.querySelectorAll(".checks2").forEach(m=>{u.includes(Number(m.value))?m.checked=!0:m.checked=!1}),k(o)}).catch(o=>{console.error("Error al obtener datos de InfoUser:",o)})}const d=t=>{const{name:o,value:s}=t.target;k({...a,[o]:s}),console.log(a)};return e.jsx("div",{className:"py-1",children:e.jsx("div",{className:"mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[e.jsxs("div",{className:"px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Usuarios"}),e.jsx("button",{id:"agrUsuario",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:()=>b(!0),children:"Botón"}),e.jsxs(F,{isOpen:S,onClose:()=>b(!1),children:[e.jsx("label",{className:"text-xl text-center mb-5",children:"Ingresa Nuevo Usuario"}),e.jsxs("form",{id:"userForm mt-5",onSubmit:D,children:[e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"nombre",children:"Nombres"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Nombres",id:"nombre"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"Apaterno",children:"Apellido Paterno"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Apellido Paterno",id:"Apaterno"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"Amaterno",children:"Apellido Materno"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Apellido Materno",id:"Amaterno"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"correo",children:"Correo"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Correo",id:"correo"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"nomina",children:"Numero de nomina"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Numero de nomina",id:"nomina"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"usuario",children:"Usuario"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Nombre de usuario",id:"usuario"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"contrasena",children:"Contraseña"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Contraseña",id:"contrasena"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"departamento",children:"ID Departamento"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"departamento",id:"departamento"})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"puesto",children:"ID Puesto"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"puesto",id:"puesto"})]})]}),e.jsx("div",{className:"w-all justify-center flex-wrap px-3 mt-3 grid grid-cols-3 gap-4 items-start align-items-center justify-items-start",children:A.map(t=>e.jsxs("div",{className:"p-0",children:[e.jsx("input",{type:"checkbox",className:"checks",value:t.id,name:t.nombre}),e.jsx("label",{htmlFor:t.id,children:t.nombre})]},t.id))}),e.jsx("div",{className:"flex justify-end mt-5",children:e.jsx("button",{type:"summit",className:"bg-blue-500 hover:bg-blue-700 rounded text-white p-2",children:"Agregar nuevo usuario"})})]})]})]}),e.jsx("div",{className:"px-4 py-5 sm:px-6",children:e.jsxs("table",{id:"myTable",className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Puesto"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nomina"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Botones"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:x.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.idPuesto}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.nomina}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{id:"editUsuario",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{J(t.id),E(!0)},children:"Editar"}),e.jsxs(M,{isOpen:O,onClose:()=>E(!1),children:[e.jsx("label",{className:"text-xl text-center mb-5",children:"Editar Usuario"}),e.jsxs("form",{id:"userForm mt-5",onSubmit:P,children:[e.jsxs("div",{className:"flex flex-wrap -mx-3",children:[e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"nombre",children:"Nombres"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Nombres",id:"nombre2",name:"name",value:a.name,onChange:d})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"Apaterno",children:"Apellido Paterno"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Apellido Paterno",id:"Apaterno2",name:"apellidopaterno",value:a.Apaterno,onChange:d})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"Amaterno",children:"Apellido Materno"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Apellido Materno",id:"Amaterno2",name:"apellidomaterno",value:a.Amaterno,onChange:d})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"correo",children:"Correo"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Correo",id:"correo2",name:"email",value:a.email,onChange:d})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"nomina",children:"Numero de nomina"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Numero de nomina",id:"nomina2",name:"nomina",value:a.nomina,onChange:d})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"usuario",children:"Usuario"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Nombre de usuario",id:"usuario2",name:"usuario",value:a.usuario,onChange:d}),e.jsx("input",{id:"usuid",value:a.id,hidden:!0})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"departamento",children:"ID Departamento"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"departamento",id:"departamento2",name:"idDepartamento",value:a.idDepartamento,onChange:d})]}),e.jsxs("div",{className:"w-full md:w-1/2 px-3 mt-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"puesto",children:"ID Puesto"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"puesto",id:"puesto2",name:"idPuesto",value:a.idPuesto,onChange:d})]})]}),e.jsx("div",{className:"w-all justify-center flex-wrap px-3 mt-3 grid grid-cols-3 gap-4 items-start align-items-center justify-items-start",children:B.map(o=>e.jsxs("div",{className:"p-0",children:[e.jsx("input",{type:"checkbox",className:"checks2",value:o.id,name:o.nombre}),e.jsx("label",{htmlFor:o.id,children:o.nombre})]},o.id))}),e.jsx("div",{className:"flex justify-end mt-5",children:e.jsx("button",{type:"summit",className:"bg-blue-500 hover:bg-blue-700 rounded text-white p-2",children:"Editar usuario"})})]})]}),e.jsx("button",{id:"eliUsuario",className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>T(t.id),children:"Eliminar"})]})})]},t.id))})]})})]})})})}export{q as default};
