import {Helper} from "./helper"
export interface HelpRequest {
    id: number;
    name: string;
    address: string;
    created_at: string;
    date_start: string;
    organisation_id: number;
    number_requested_helpers:number
    skills: Skill[];
    requested_helpers: Helper[];
    confirmed_helpers: Helper[];
    denied_helpers: Helper[];
}

export interface Skill {
    id: number;
    name: string;
}

export interface AvailableSkill {
    skill: Skill;
    count: number;
}

export interface HelpRequestHelpers {
    count: number;
    skills: AvailableSkill[];
}
export interface OrganizationInfo {
    id:number;
    name:string;
    description:string;
    email:string;
    phone:string;
    address:string;


}
