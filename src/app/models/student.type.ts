export class Student {
    nome: string;
    cognome: string;
    genere: string;
    eta: number;
    location: StudentLocation;
    hobbies: Array<IHobby>;
    hasPets: boolean;
    lingue: Array<ILanguage>;
    esperienze: Array<StudentExperience>;

    constructor(student?: Partial<Student>) {
        this.nome = student?.nome ?? '';
        this.cognome = student?.cognome ?? '';
        this.genere = student?.genere ?? '';
        this.eta = student?.eta ?? 19;
        this.location = student?.location ?? {citta: '', cap: 1, indirizzo: '', provincia: ''};
        this.hobbies = student?.hobbies ?? [] ;
        this.hasPets = student?.hasPets ?? false;
        this.lingue = student?.lingue ?? [];
        this.esperienze = student?.esperienze ?? [];
    }

    toString() {
        return this.nome + ' ' + this.cognome + ' ' + this.genere + ' ' + this.eta + ' ' + this.location + ' ' + this.hobbies + ' ' + this.hasPets + ' '
            + this.lingue + ' ' + this.esperienze;
    }
}

// export type Student = {

//     nome: string;
//     cognome: string;
//     genere: string;
//     eta: number;
//     location: StudentLocation;
//     hobbies: Array<IHobby>;
//     hasPets: boolean;
//     lingue: Array<ILanguage>;
//     esperienze: Array<StudentExperience>;
// }

// export type JobExperiences = {
// experiences: Array<String>;
// }

export type studentswithJobExperiences = Student & JobExperiences;

export type StudentLocation = {
    citta: string;
    cap: number;
    indirizzo: string;
    provincia: string;

}

export interface IStudent {
    nome: string;
    cognome: string;
    genere: "M" | "F";
    eta: number;
    citta?: string;
    hobbies: Array<string>;
    hasPets: boolean;
    lingue: Array<string>;
}

export interface IHobby {
    name: string;
    icon: string;
}

export interface ILanguage {
    name: string;
    icon: string;
}

export interface StudentExperience {
    nome: string;
    descrizione: string;
    inizio: Date;
    fine: Date;
    tags: Array<string>
}

export interface IJobExperiences {
    experiences: Array<string>;

    hasExperiences(): boolean;
    addExperience(experiences: string): number; //arr.push() -> returns new length
    updateExperience(prev_experience: string, new_experience: string): Array<string>;
    deleteExperience(experience: string): Array<string>; //arr.splice -> return deleted element
    getExperienceIndex(experience: string): number;
}

export abstract class AbstractJobExperience implements IJobExperiences {
    experiences: Array<string> = new Array<string>();

    hasExperiences(): boolean {
        return !!this.experiences.length; //truthly or falsy? length === 0? falsy : truthy
    }

    addExperience(experiences: string): number {
        return this.experiences.push(experiences)
    }

    updateExperience(prev_experience: string, new_experience: string): string[] {
        return [];
    }

    deleteExperience(experience: string): string[] {
        const experience_index: number = this.getExperienceIndex(experience);
        if (experience_index >= 0) {
            return this.experiences.splice(experience_index, 1);
        } else {
            throw new Error("Experience doesn't exist");
        }
    }

    getExperienceIndex(experience: string): number {
        return this.experiences.findIndex(exp => exp === experience); //funzione anonima, callback e predicato
    }
}

export class JobExperiences extends AbstractJobExperience {
    constructor(experiences?: Array<string>) {
        super();
        this.experiences.push(...(experiences || []));
    }

    override updateExperience(prev_experience: string, new_experience: string): Array<string> {
        const experience_index: number = this.getExperienceIndex(prev_experience)
        if (experience_index >= 0) {
            return this.experiences.splice(experience_index, 1, new_experience);
        } else {
            throw new Error("Experience not present");
        }
    }
}

export interface IStudentswithJobExperiences extends IStudent, IJobExperiences { };

// type Fish = {
//     swim(): void
// }

// type Bird = {
//     fly(): void
// }

// function isFish(animal: Fish | Bird): animal is Fish{
//     return (animal as Fish).swim !== undefined;
// }