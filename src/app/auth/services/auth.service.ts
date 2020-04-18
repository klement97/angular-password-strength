import { UserModel } from './../models/auth.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/core/enpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data: UserModel) {
    return this.http.post(ENDPOINTS.SIGN_UP, data);
  }
}
