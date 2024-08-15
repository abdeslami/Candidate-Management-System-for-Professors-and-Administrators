import { useEffect, useState } from "react";

import {Link} from "react-router-dom"
function RapportA() {
    const [utilisateur,setUtilisateur]=useState([])
    const [candidature,setCandidature]=useState([])
    const [rapport,setRapport]=useState([])

    useEffect(()=>{
        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setUtilisateur(res.utilisateur))
    },[])
    useEffect(()=>{
        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setRapport(res.rapport))
    },[])
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
              <h1 class="text-2xl font-bold">Welcome Page Rapport </h1>
              <div class="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
    <a href="#"
        class="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div
            class="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
            <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                </path>
            </svg>
        </div>
        <div class="flex-1">
            <h5 class="mb-3 text-xl font-bold lg:text-2xl">Rapport plant</h5>
            <p class="mb-6 text-lg text-gray-600"></p>
            <span class="flex items-baseline text-lg font-bold text-indigo-600">
            voir plus
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
        </div>
    </a>
    <a href="#"
        class="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div
            class="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
            <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                </path>
            </svg>
        </div>
        <div class="flex-1">
            <h5 class="mb-3 text-xl font-bold lg:text-2xl">Message</h5>
            <span class="flex items-baseline text-lg font-bold text-indigo-600">
              voir plus
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
        </div>
    </a>
</div>
             
<div className="grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
{
    rapport.map((v,k)=>{
        return <section key={k} class="mb-2 border bg-blue-100 p-4 rounded-lg  ">
        <div class="mx-auto">
            <div class="card md:flex max-w-lg">
                <div class="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                    <img class="object-cover rounded-full" src="https://tailwindflex.com/public/images/user.png" />
                </div>
                <div class="flex-grow text-center md:text-left">
                    <p class="font-bold">{v.username}</p>
                    <h3 class="text-xl heading">{v.subject}</h3>
                    <p class="mt-2 mb-3">{v.message}</p>
                    <div>
                        <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm"> {v.date_envoy} </span>
                        <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">{v.username}</span> 
                    </div>
                </div>
            </div>
        </div>
    </section>
    })
}
</div>
        
          </div>
      </div>
      
  </div>
    );
  }
  
  export default RapportA;
  