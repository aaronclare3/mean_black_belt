import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll(){
    return this._http.get('/api/pet');
  }
  getOne(id){
    return this._http.get(`/api/pet/${id}`);
  }
  editService(forminfo, id){
    return this._http.put(`/api/pet/${id}`, forminfo);
  }
  add(forminfo){
    return this._http.post('/api/pet', forminfo);
  }
  deleteService(id){
    return this._http.delete(`/api/pet/${id}`);

  }
  likepetService(id){
    return this._http.put(`/api/pet/like/${id}`, id)
  }
  // deleteNestedService(nested_id){
  //   return this._http.delete(`/api/pet/${nested_id}`);
  // }
  // addNested(newthingtobeadded, parent_id){
  //   return this._http.post(`/api/pet/${parent_id}`, newthingtobeadded);
  // }
  // editNestedService(form, id){
  //   return this._http.put(`/api/pet/${id}`, form);
  // }
  // voteService(id, idx, bool){
  //   return this._http.put(`/api/pet/upvote/${id}/${idx}/${bool}`, id, idx);
  // }
}
