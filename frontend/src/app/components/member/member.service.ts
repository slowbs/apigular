import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendURL } from 'src/app/app.url';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

//private backendURL: string = 'http://localhost/github/apigular/backend/index.php/api/member';
private backendURL: string = `${backendURL}/api/member`;
//private backendURL: string = 'http://localhost:9000/api/member';
public updateModel: IMember = Object.assign({});
public deleteModel: IMember = Object.assign({});
public deleteAllModel: string[] = [];

  constructor(private httpClient: HttpClient) { }

  /** ดึงข้อมูล Member ทั้งหมด */
  getItems(){
    return this.httpClient.get<IMember[]>(this.backendURL);
  }

  /** Insert ข้อมูล Member */
  postItem(value: IMember){
    //delete value.mem_email;
    return this.httpClient.post(this.backendURL, value);
  }

  /** Update ข้อมูล Member */
  putItem(id: any, value: IMember){
    //value.mem_email = '';
    return this.httpClient.put(this.backendURL, value, { params: { id } });
  }

  /** Deltete ข้อมูล Member */
  deleteItem(id: any){
    return this.httpClient.delete(this.backendURL, { params: { id } });
  }

  /** Delete ข้อมูลครั้งละหลายรายการ */
  deleteAllItem(id: any[]){
    return this.httpClient.delete(this.backendURL, { params: { "id[]" : id } });
  }
}

export interface IMember {
  mem_id?: string;
  mem_name: string;
  mem_email: string;
  mem_address: string;
  mem_phone: string;
  mem_created?: string;
  mem_updated?: string;

  checked?: boolean; //สำหรับ checkbox เมื่อมีการ checkAll
}