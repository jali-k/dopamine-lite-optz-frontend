import { Class } from "./class.types";
import {ILecture} from "./lecture.types"
import {INote} from "./note.types"

export interface ClassDetails {
    lectures: ILecture[];
    notes: INote[];
    classDetails: Class;
  }
