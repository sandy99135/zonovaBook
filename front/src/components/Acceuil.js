import React, { Component } from 'react'
import './acceuil.css'

import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import Modal from './modal';
export default class Acceuil extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            profil: [],
            nom:"",
            prenom:"",
            email:"",
            telephone:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    componentDidMount() {
        
        axios.get("http://localhost:8080/book1.json").then(res => {
     
   this.setState({ profil: res.data })
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
    
        
        return (
            
              <div id="DD">
            <div id="descript">
                <div  className="container sort">
                    <div className=" row">
                        <div className="col-md-3">
                        <h2>Sort by</h2> 
                        <select onChange={this.handleChange2}name="select3" id="select3">
                            <option value="name1">author name</option>
                            <option value="name" >Name</option>
                             </select>
                        </div>
                   
                        <div  className="col-md-3">
                        <h2>Filter by</h2>  <span>Genre:</span>
                        <select onChange={this.handleChange}name="select" id="select">
                            <option value="tout" >All</option>
                            <option value="horror" >horror</option>
                            <option value="Fantastic">Fantastic</option>
                            <option value="finance">finance</option>
                            <option value="last friday"> last friday finance</option>
                            <option value="hallowen" >Hallowen horror</option>
                        </select>                     
                        </div>
                        <div  className="col-md-3">
                        <h2>Gender:</h2>
                            <select onChange={this.handleChange}name="select1" id="select1">
                                <option value="tout" >All</option>
                                <option value="man" >Man</option>
                                <option value="woman">woman</option>
                            </select>
                            </div>
        
                    </div>
               
                </div>
           {this.state.profil.length>0 ?(this.state.profil.sort((a,b)=>{
               var x,y
            if(document.getElementById("select3").options[document.getElementById("select3").selectedIndex].value=="name1"){
                x=a.author.name.toLowerCase()
                y=b.author.name.toLowerCase()
            }
            if(document.getElementById("select3").options[document.getElementById("select3").selectedIndex].value=="name"){
                x=a.name.toLowerCase()
                y=b.name.toLowerCase()
            }
                  
                    if(x<y){
                        return -1
                    }
                     if(x>y){
                         return 1
                     }
                     return 0
                }).filter(a=>{
               if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="tout"&& document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="tout"){
                   return a
               }
               else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="tout"&& document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="man"){
                return  a.author.gender==="man"
               }
               else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="tout"&& document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="woman"){
                return  a.author.gender==="woman"
               }
               else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value!=="tout"&& document.getElementById("select").options[document.getElementById("select").selectedIndex].value!=="hallowen" &&document.getElementById("select").options[document.getElementById("select").selectedIndex].value!=="last friday"&& (document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="tout")){
                return a.genre===document.getElementById("select").options[document.getElementById("select").selectedIndex].value  
               }
               else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="hallowen" && document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="tout"){
                
                    return a.date.indexOf("10/31")!==-1 
                
                
               }
               else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="last friday" && document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="tout"){
    return new Date(a.date).getDay()==5 && new Date(new Date(a.date).getFullYear(),new Date(a.date).getMonth()+1,0).getDate()-6<new Date(a.date).getDate()
           }
           else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="last friday" && document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="woman"){
            return new Date(a.date).getDay()==5 && new Date(new Date(a.date).getFullYear(),new Date(a.date).getMonth()+1,0).getDate()-6<new Date(a.date).getDate() &&  a.author.gender==="woman"
                   }
                   else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="last friday" && document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="man"){
                    return new Date(a.date).getDay()==5 && new Date(new Date(a.date).getFullYear(),new Date(a.date).getMonth()+1,0).getDate()-6<new Date(a.date).getDate() &&  a.author.gender==="man"
                           }
               else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="hallowen" && document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="woman"){
                
                return a.date.indexOf("10/31")!==-1 && a.author.gender==="woman"
            
            
           }
           else if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value=="hallowen" && document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value=="man"){
                
            return a.date.indexOf("10/31")!==-1 && a.author.gender==="man"
        
        
       }
               else{
                return (a.genre===document.getElementById("select").options[document.getElementById("select").selectedIndex].value && a.author.gender===document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value)
               }
               }).map(prof=>{   
      return(

  <div id="atelier"> 
      <div class=" cardbody card-body">
             <p class="card-text"><strong>Title :</strong> {prof.name}</p>
             <p class="card-text"><strong>Author:</strong>{prof.author.name}</p>
             <p class="card-text"><strong>Gender:</strong>{prof.author.gender}</p>
             <p class="card-text"><strong>Genre :</strong>{prof.genre}</p>
             <p class="card-text"><strong>Publish at  :</strong>{prof.date}</p>
            
  </div > 
      
     </div>
      )})):""} 
           </div>

    </div>
              
            
        )
    }
}
