import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class validatecanActivate implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        return true;
    }
}