import{getCustomers,deleteCustomer}from"./API.js";(()=>{const e=document.querySelector("#listado-clientes");e.addEventListener("click",(function(e){if(e.target.classList.contains("delete")){const t=parseInt(e.target.dataset.customer);confirm("Do you really want to delete this customer?")&&deleteCustomer(t)}})),document.addEventListener("DOMContentLoaded",(async function(){(await getCustomers()).forEach((t=>{const{name:a,email:r,tel:n,company:s,id:d}=t,o=document.createElement("TR");o.innerHTML=`\n                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">\n                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${a} </p>\n                    <p class="text-sm leading-10 text-gray-700"> ${r} </p>\n                </td>\n                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">\n                    <p class="text-gray-700">${n}</p>\n                </td>\n                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    \n                    <p class="text-gray-600">${s}</p>\n                </td>\n                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">\n                    <a href="edit-customer.html?id=${d}" class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>\n                    <a href="#" data-customer="${d}" class="text-red-600 hover:text-red-900 delete">Delete</a>\n                </td>\n            `,e.appendChild(o)}))}))})();
//# sourceMappingURL=app.js.map
