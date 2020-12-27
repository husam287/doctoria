import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { tap, take, catchError } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/User.model';



interface AuthSignupData {
    token: string,
    userId: string,
    expireDate: number
}


@Injectable({
    providedIn: 'root'
})
export class SignUpService {


    user = new BehaviorSubject<AuthSignupData>(null); //auth iinfo
    currentUserData = new BehaviorSubject<User>(null); //auth iinfo

    logoutTimer: any; //time

    constructor(private http: HttpClient, private router: Router) { }


    //########## sign up ##########


    signUp(user1: User) {

        return this.http.post('http://localhost:8080/api/users/signup', user1)

    }


    //########## login ##########


    logIn(email: string, password: string) {
        return this.handelAuth(email, password);
    }





    //########## to get a user by id ##########


    getUserInfo(userId: string) {
        return this.http.get<User>('http://localhost:8080/api/' + 'users/' + userId + '/get')

    }



    //########## automatic login ##########


    autoLogIn() {
        const u: {
            token: string,
            expireDate: number,
            userId: string,
        }
            = JSON.parse(localStorage.getItem('userData')); //must get the data like to adjust the user class

        if (!u) return; //if there is no data in the local storage

        const user: AuthSignupData = u;

        if (!user.token) {
            this.logOut();
            return; //if token expires
        }

        this.user.next(user);

        this.getUserInfo(user.userId).subscribe(
            user => {
                this.currentUserData.next(user);
            });
        const tempDate = new Date(user.expireDate);
        this.autoLogOut(tempDate);
    }


    //########## manual log out ##########


    logOut() {
        localStorage.clear();
        this.user.next(null);
        clearTimeout(this.logoutTimer); //clear the time if you log out
        this.router.navigate(['/'])
        this.currentUserData.next(null);

    }


    //########## auto log out function ##########


    autoLogOut(expireDate: Date) {

        this.logoutTimer = setTimeout(() => {
            if (confirm('Please login again')) {
                this.logOut();
            }
        },
        
            expireDate.getTime() - new Date().getTime()
            //expireDate.getTime()
        ); //time to logout automatically

    }


    //########## login function ##########


    private handelAuth(email: string, password: string) {
        return this.http.post<AuthSignupData>('http://localhost:8080/api/users/login', { email: email, password: password })
            .pipe(catchError(this.handelErrors),
                tap(result => {
                    const u = {
                        token: result.token,
                        expireDate: result.expireDate,
                        userId: result.userId
                    }

                    const user: AuthSignupData = u;
                    this.user.next(user);
                    localStorage.setItem('userData', JSON.stringify(user));
                    const tempDate = new Date(user.expireDate);
                    this.autoLogOut(tempDate); //set the autolog out to logout after expire time
                    this.router.navigate(['']);

                    this.getUserInfo(user.userId).subscribe(
                        user => {
                            this.currentUserData.next(user);
                        }
                    )
                })

            )
    }


    //########## Error handel function ########## 


    private handelErrors(error: HttpErrorResponse) {
        if (error.error.message || error.statusText) {
            return throwError(error)
        }
        return throwError('unknown error has been occured')
    }

}​​​​​​