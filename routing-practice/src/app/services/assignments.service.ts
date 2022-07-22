import { EventEmitter, Injectable } from "@angular/core";
import { Assignment } from "../models/assignment.model";

@Injectable()
export class AssignmentsService {
    assignments: Assignment[] = [
        new Assignment(1, 'Actividad 1', new Date(2022,7,22)),
        new Assignment(2, 'Actividad 2', new Date(2022,7,23)),
        new Assignment(3, 'Actividad 3', new Date(2022,7,24))
    ];

    assignmentsAdded = new EventEmitter<Assignment[]>();

    constructor () { }

    addAssignment(assignment: Assignment) {
        this.assignments.push(assignment);
        this.assignmentsAdded.emit(this.assignments.slice());
    }

    getAssignmnets() {
        return this.assignments.slice();
    }
}