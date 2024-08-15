import { fireEvent } from "@testing-library/react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


export default function AjouterCandidature() {
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [sexe,setSexe]=useState('')
    const [age,setAge]=useState('')
    const [pays,setPays]=useState('')
    const [filiere,setFiliere]=useState('')
    const [groupe,setGroupe]=useState('')
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');





    const [utilisateur,setUtilisateur]=useState([])
    const id=Math.floor(Math.random()*100000);
    useEffect(()=>{
        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setUtilisateur(res.candidature))
    },[])
    function handleAjouter(e){
        e.preventDefault();
        // fetch('http://localhost:3001/utilisateur',{
        //     method:"POST",
        //     body:JSON.stringify(({
        //         id:id,
        //         username:username,
        //         password:password,
        //         role:"etudiant"
        //     }))
        // })
        // fetch('http://localhost:3001/candidature',{
        //     method:"POST",
        //     body:JSON.stringify(({
        //         nom:nom,
        //         prenom:prenom,
        //         age:age,
        //         sexe:sexe,
        //         email:email,
        //         pays:pays,
        //         filiere:filiere,
        //         groupe:groupe,
        //         absences:[],
        //         nbreAbsence:0,
            
        //         idu:id,
        //     }))
        // })
        alert("candidature bien ajouter")
    }
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
            <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div class="mt-10 text-center font-bold">Formulaire Candidature</div>
  <div class="mt-3 text-center text-4xl font-bold">Ajouter Candidature</div>
  <div class="p-8">
    <form onSubmit={handleAjouter}>
    <div class="flex gap-4">
      <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="nom *" required />
      <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="prenom *" required />
    </div>
    <div class="flex gap-4">
      <input type="text" value={sexe} onChange={(e)=>setSexe(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="sexe *" required />
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="age *" required />
    </div>
    <div class="flex gap-4">
      <input type="text" value={pays} onChange={(e)=>setPays(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="pays *" required />
      <input type="text" value={filiere} onChange={(e)=>setFiliere(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="filiere *" required />
    </div>
    <div class="flex gap-4">
      <input type="text" value={groupe} onChange={(e)=>setGroupe(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="groupe *" required />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="email *" required />
    </div>
    <div class="flex gap-4">
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="username *" required />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="password *" required />
    </div>
    
    
    
    <div class="text-center mt-10">
      <button type="submit" class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">ajouter </button>
    </div></form>
  </div>
</div>


            
        </div>
    </div>
    
</div>
  )
}
