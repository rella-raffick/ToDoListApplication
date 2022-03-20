import { Optional } from "@angular/core";

export interface Json{
    taskName : string,
    creationTime : Date,
    status : string,
    id: Optional,
    taskCategory : string
}