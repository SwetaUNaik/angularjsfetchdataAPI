import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export class Friend {
  constructor(
    public id: number,
    public description: string,
    public price:number,
    public category:string,
    
    

  ) {
  }
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friends:Friend[] | undefined;
  
  constructor(private httpClient:HttpClient) {
  }
 

  ngOnInit(): void {
    this.getFriends();
  }
  
  getFriends(){
    this.httpClient.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    )
   

}
}
