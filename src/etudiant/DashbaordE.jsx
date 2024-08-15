import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DashbaordE() {
    const [utilisateur,setUtilisateur]=useState([])
    const [candidature,setCandidature]=useState({})
    useEffect(()=>{
        fetch('https://abdeslamiachraf.github.io/host_api/api.json').
        then(res=>res.json())
        .then(res=>setUtilisateur(res.candidature))
    },[])
    const {id}=useParams()
    useEffect(()=>{
        const candidaturef=utilisateur.find((v)=>v.idu==id)
        setCandidature(candidaturef)
    },[utilisateur,id])
    if(candidature){
        const candidaturef={...candidature}
        console.log(candidaturef)
        const {nom,prenom,age,sexe,filiere,groupe,nbreAbsence,pays,email,absences}=candidaturef
   
  return (
    <div class="w-full relative shadow-2xl rounded  overflow-hidden">
    <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
      <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0"/>
      <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
         {
          sexe=="femme"?
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="h-24 w-24 object-cover rounded-full"/>
          :
          <img src="../../../../../../homme.jpeg" class="h-24 w-24 object-cover rounded-full"/>
          
         }
        <h1 class="text-2xl font-semibold"> {nom} {prenom}  </h1>
        <h4 class="text-sm font-semibold">{filiere}</h4>
      </div>
    </div>
    <div class="grid grid-cols-12 bg-white ">
  
      <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
  
        <a href="#" class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</a>
  
        <a href="#" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Nombre de L'absence {nbreAbsence}</a>
  
        <a href="#" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">{pays} </a>
  
      </div>
  
      <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
        <div class="px-4 pt-4">
          <form action="#" class="flex flex-col space-y-8">
  
            <div>
              <h3 class="text-2xl font-semibold">Basic Information</h3>
              <hr/>
            </div>
  
            <div class="form-item">
              <label class="text-xl ">Full Name</label>
              <input type="text" value={`${nom} ${prenom}`} class="w-full appearance-none text-cyan-500 text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled/>
            </div>
  
            <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
  
              <div class="form-item w-full">
                <label class="text-xl ">Username</label>
                <input type="text" value={nom} class="w-full appearance-none text-cyan-500  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled/>
              </div>
  
              <div class="form-item w-full">
                <label class="text-xl ">Email</label>
                <input type="text" value={email} class="w-full appearance-none text-cyan-500  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled/>
              </div>
              <div class="form-item w-full">
                <label class="text-xl ">Pays</label>
                <input type="text" value={pays} class="w-full appearance-none text-cyan-500  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled/>
              </div>
              <div class="form-item w-full">
                <label class="text-xl ">Sexe</label>
                <input type="text" value={sexe} class="w-full appearance-none text-cyan-500  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled/>
              </div>
            </div>
  
            <div>
              <h3 class="text-2xl font-semibold ">More About Me</h3>
              <hr/>
            </div>
  
            <div class="form-item w-full">
              <label class="text-xl ">Groupe :{groupe}</label>
              {
                absences?
              
                    <table
                        class="w-full border-2 text-sm text-left rtl:text-right text-blue-600 dark:houda "
                    >
                        <thead>
                            <tr className='broder-2'>
                                <th scope="col">Id</th>
                                <th scope="col">Type de Absence</th>
                                <th scope="col">Data de absence</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                absences.map((valeur)=>{
                                    return <tr class="">
                                    <td> {valeur.ida} </td>
                                    <td> {valeur.dateA} </td>
                                    <td> {valeur.typeA} </td>

                                </tr>
                                })
                            }
                           
                        </tbody>
                    </table>
                :null
                
              }
              
            </div>
  
          
  
          </form>
        </div>
      </div>
  
  
    </div>
  </div>
  )
 }
}
