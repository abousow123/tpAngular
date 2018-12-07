import { Injectable } from "@angular/core";

@Injectable()

export class AboutService{

    contact= {
        name: "abou",
        email: 'sow@gmail.com',
        tel:777987315
    
      }
    
      comments=[
        {date:new Date(), message:"A"},
        {date:new Date(), message:"B"},
        {date:new Date(), message:"C"}
      ];

      addComment(c){
        c.date = new Date() ;
          this.comments.push(c) ;
      }

      getAllComments(){
          return this.comments ;
      }

      getInfo(){
          return this.contact ;
      }

}