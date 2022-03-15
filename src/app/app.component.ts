import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  toDoList:any[]=[]
  inProgressList:any[]=[]
  done:any[]=[]
  difficulty: any;

  addTask(name:string,difficulty:string){
    
    this.toDoList.push({id:this.toDoList.length,name,difficulty})
  }
  removeTask(id:number){

    this.toDoList=this.toDoList.filter(item=>item.id!==id)
  }
  moveTask(id:number){
    
    const item = this.toDoList.find((e)=>e.id==id)
    this.inProgressList.push({...item,id:this.toDoList.length})
    this.toDoList=this.toDoList.filter((e)=>e.id!==id)


  }
  moveTaskDone(id:number){
    
    const item = this.inProgressList.find((e)=>e.id==id)
    this.done.push({...item,id:this.done.length,})
    this.inProgressList=this.inProgressList.filter((e)=>e.id!==id)

  }
  moveTaskBackProgress(id:number,){
    
    const item = this.done.find((e)=>e.id==id)
    this.inProgressList.push({...item,id:this.inProgressList.length})
    this.done=this.done.filter((e)=>e.id!==id)

  }

  moveTaskBackToDo(id:number){
    
    const item = this.inProgressList.find((e)=>e.id==id)
    this.toDoList.push({...item,id:this.toDoList.length})
    this.inProgressList=this.inProgressList.filter((e)=>e.id!==id)

  }





}
