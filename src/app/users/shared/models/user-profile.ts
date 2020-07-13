import { Language } from './language-models/language';
import { workSphere } from './work-spheres/work-sphere';
import { Skill } from './skill-models/skill';
import { Education } from './education-models/education';
import { Certificate } from './certificate-models/certificate';
import { Country } from './education-models/country';

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    personalWebsite: string;
    country: Country;
    email: string;
    createdDate: string;
    profilePicture: string
    languages: [Language];
    skills: [Skill];
    educations: [Education];
    certificates: [Certificate];
}