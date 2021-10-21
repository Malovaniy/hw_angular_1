import { Component, OnInit } from '@angular/core';
import { IObject } from './obj.interface';

@Component({
  selector: 'app-hw-les2',
  templateUrl: './hw-les2.component.html',
  styleUrls: ['./hw-les2.component.css']
})
export class HwLes2Component implements OnInit {
  public obj: IObject ={
      email: ``,
      login:``,
      password: ``
  }

  public arrUsers:Array<IObject> = []
  constructor() {}


  ngOnInit(): void {
  }

  add():void{
    this.arrUsers.push({...this.obj})
    console.log(this.arrUsers);
    this.reset()
  }
  
  delete(): void{

  }



  reset():void{
    this.obj.email =``
    this.obj.login =``
    this.obj.password =``
  }
}



// let f1 = document.forms[`f1`]
// let arr: Array<IObj> = []
// let EditId: number
// let tbl = document.querySelector('.thead')
// let editBtn = document.querySelector('.edit')

// interface IObj {
//     log: string;
//     pas: string;
//     eml: string;
// }

// class Obj implements IObj{
//     constructor(public log : string, public pas: string, public eml:string) {}
// }

// f1.addUserBt.addEventListener(`click`, UserList)
// f1.saveUserBt.addEventListener(`click`, saveEditUser)
// tbl.addEventListener('click', deleteUser)
// editBtn.addEventListener('click',  editUser)

// function UserList():void{
//     if (f1.login.value !==''&&
//     f1.password.value !==''&&
//     f1.email.value !=='') {
//         let obj = new Obj(f1.login.value, f1.password.value, f1.email.value)
//             arr.push(obj)    
//             render()        
//             f1.reset()
//     }
// }

// function render(): void {  
//     tbl.innerHTML = ''
//     arr.forEach((el, i)=> {
//         tbl.innerHTML   += `<tr>
//         <td>${i+1}</td>
//         <td>${el.log}</td>
//         <td>${el.pas}</td>
//         <td>${el.eml}</td>
//         <td><button class="btnEdit" id="${i}"> Edit</button></td>
//         <td class="delBut"><button class="btnDelete" id="${i}">Delete</button></td>
//       </tr>`
//     })
// }

// function deleteUser(e) : void {
//     let event: string = e.path[0].innerHTML
//     if(event ==='Delete') {
//         const id: number = e.path[0].id
//         arr.splice(id ,1)
//         render()
//     }
// }
// function editUser(e) :void {
//     let event = e.target
//     if(event.className === `btnEdit`){     
//         const obj: IObj = arr.find((el, i) => +event.id === i)
//         EditId = event.id
//         f1.login.value = obj.log
//         f1.password.value = obj.pas
//         f1.email.value = obj.eml 
//         toggleForForm(f1.saveUserBt , f1.addUserBt)
//     }

    
// }

// function saveEditUser(e) : void { 
//     if (f1.login.value !==''&&
//     f1.password.value !=='' &&
//     f1.email.value !=='') {
//     let obj = new Obj(f1.login.value, f1.password.value, f1.email.value)
//     arr[EditId] = obj
//     render()
//     toggleForForm(f1.addUserBt, f1.saveUserBt)
//     f1.reset()
//     }
// }

// function toggleForForm(name1, name2): void{
//     name1.style.display = 'block'
//     name2.style.display = 'none'
// }