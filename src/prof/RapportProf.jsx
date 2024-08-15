import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function RapportProf() {
    const [ide,setId]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility


    const [utilisateur,setUtilisateur]=useState([])
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setUtilisateur(res.candidature))

        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setUsers(res.utilisateur))
    },[])
    

    const findprof=users.find((v)=>v.role=="prof")
    if(findprof){
        function handleSubmit(e){
            e.preventDefault()
            // fetch("http://localhost:3001/rapport/", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         id: Math.floor(Math.random() * 1000),
            //         iduti:findprof.id,
            //         username:findprof.username,
            //         subject: subject,
            //         message: message,
            //         date_envoy: new Date().getUTCFullYear()
            //     })
            // })
            alert('rapport bien envoyé')
        }
    

        return (
         <div className="flex h-screen bg-gray-100">
                <div className={`md:flex flex-col w-64 bg-gray-800 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div class="flex items-center justify-center h-16 bg-gray-900">
            <span class="text-white font-bold uppercase">Prof Dashboard</span>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4 bg-gray-800">
             
             <Link to="/prof/dashboard" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
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
           to="/prof/dashboard/message"
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
           Boite de message
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
        <div class="p-4  ">

            


            <div class="max-w-2xl mx-auto p-4">
    <form onSubmit={handleSubmit}>
    <h1 class="text-2xl font-bold">Rapport </h1>

        <div class="mb-6">
            <label for="title" class="block text-lg font-medium text-gray-800 mb-1">Subject</label>
            <input type="text" id="title" value={subject} onChange={(e)=>setSubject(e.target.value)} name="title" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required/>
        </div>

        <div class="mb-6">
            <label for="content" class="block text-lg font-medium text-gray-800 mb-1">Message</label>
            <textarea id="content" value={message} onChange={(e)=>setMessage(e.target.value)}  name="content" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="6" required></textarea>
        </div>

    

        <div class="flex justify-end">
            <button type="submit" class="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Submit</button>
        </div>
    </form>
</div>

        </div>
    </div>
    
</div>
  )}
}
