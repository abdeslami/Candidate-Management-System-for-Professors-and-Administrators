import { useEffect, useState } from "react";

import {Link} from "react-router-dom"

export default function Candidature() {
    const [utilisateurs,setUtilisateur]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setUtilisateur(res.candidature))
    },[])
    const utilisateur=utilisateurs.filter((v)=>
      v.nom.includes(search) || v.prenom.includes(search) || v.filiere.includes(search) || v.groupe.includes(search) || v.sexe.includes(search) || v.email.includes(search) 

)
    
const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
return (
 <div className="flex h-screen bg-gray-100">
        <div className={`md:flex flex-col w-64 bg-gray-800 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
      <div class="flex items-center justify-center h-16 bg-gray-900">
          <span class="text-white font-bold uppercase">Admin Dashboard</span>
      </div>
      <div class="flex flex-col flex-1 overflow-y-auto">
      <nav class="flex-1 px-2 py-4 bg-gray-800">
                  <Link to="/admin/dashboard" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                      <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                      utilisateur 
                  </Link>
                  <Link to="/admin/Candidature" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                      <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                      candidature
                  </Link>
                  <Link
                to="/admin/Absence"
                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
  
                absence
              </Link>
  
              <Link
                to="/admin/Filiere"
                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
  
                filiere
              </Link>
  
              <Link
                to="/admin/rapport"
                class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Rapport
              </Link>
                  
                  
              </nav>
      </div>
  </div>

  <div class="flex flex-col flex-1 overflow-y-auto">
      <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div class="flex items-center px-4">
          <button
                        className="text-gray-500 focus:outline-none focus:text-gray-700"
                        onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle sidebar visibility
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                
                
              <input class="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
          </div>
          <div class="flex items-center pr-4">

              <button
                  class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                  </svg>
              </button>
          </div>
      </div>
      <div class="p-4">
            <h1 class="text-2xl font-bold">Welcome </h1>
            <h1>table de Candidature</h1>
            <button className="border-2 bg-green-600 py-2 px-4 text-white rounded-xl"> 
            <Link to="/admin/Candidature/ajouter" className="decoration-none">Ajouter Candidature</Link>
            </button>
           
<div  class="w-full">
  <div class="col-12">
      <div class="overflow-auto lg:overflow-visible ">
          <table class=" w-full table text-gray-400 border-separate space-y-6 text-sm">
              <thead class="bg-gray-800 text-gray-500">
                  <tr>
                      <th class="p-3">ID</th>
                      <th class="p-3 text-left">Nom & Prenom</th>
                      <th class="p-3 text-left">Sexe</th>
                      <th class="p-3 text-left">Age</th>
                      <th class="p-3 text-left">Email</th>

                      <th class="p-3 text-left">Pays</th>
                      <th class="p-3 text-left">Groupe</th>
                      <th class="p-3 text-left">Filiere</th>
                      <th class="p-3 text-left">Status</th>

                    


                      

                      <th class="p-3 text-left">Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      utilisateur.map((user,indec)=>{
                          return <tr class="bg-gray-800">
                          <td class="p-3">
                              <div class="flex align-items-center">
                                  <img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
                                  <div class="ml-3">
                                      <div class="text-gray-500">{user.id}</div>
                                  </div>
                              </div>
                          </td>
                          <td class="p-3">
                          {user.nom}     {user.prenom} 
                          </td>
                          <td class="p-3 font-bold">
                          {user.sexe}
                          </td>
                          <td class="p-3 font-bold">
                          {user.age}
                          </td>
                          <td class="p-3 font-bold">
                          {user.email}
                          </td>
                          <td class="p-3 font-bold">
                          {user.pays}
                          </td>
                          <td class="p-3 font-bold">
                          {user.groupe}
                          </td>
                          <td class="p-3 font-bold">
                          {user.filiere}
                          </td>
                          <td class="p-3">
                              <span class="bg-green-400 text-gray-50 rounded-md px-2">connect</span>
                          </td>
                          <td class="p-3 ">
                              <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                                  <i class="material-icons-outlined text-base">visibility</i>
                              </a>
                              <a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
                                  <i class="material-icons-outlined text-base">edit</i>
                              </a>
                              <a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
                                  <i class="material-icons-round text-base">delete_outline</i>
                              </a>
                          </td>
                      </tr>
                      })
                  }
                  
              </tbody>
          </table>
      </div>
  </div>
</div>

            
        </div>
    </div>
    
</div>
  )
}
