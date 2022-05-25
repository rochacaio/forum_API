import { HttpResponse,HttpRequest } from "../protocols/http";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest } from "../helpers/http-helper";

export class SignUpController{
    handle(httpRequest: HttpRequest): HttpResponse{
        const requiredFields = ['name','email','password','passwordConfirmation'];

        for(const fields of requiredFields){
            if(!httpRequest.body[fields]){
                return  badRequest(new MissingParamError(fields))
            }
        }
    }
}