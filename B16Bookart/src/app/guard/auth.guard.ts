import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,  } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { map } from 'rxjs/operators';
import { RouteGuradService } from '../shared/route-gurad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authService: any;
  username!: boolean;
constructor(private auth: AppRoutingModule,  private router: Router, private service:RouteGuradService){}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.service.loggedIn()){
        this.router.navigate(["/login"])
        return false;
      }
    return true;
   
 
    }
  
}


