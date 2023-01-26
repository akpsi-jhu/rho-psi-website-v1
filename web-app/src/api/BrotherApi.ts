import { Timestamp } from "firebase/firestore"

export type BrotherId = string;

export interface Brother {
    id: BrotherId;
    firstName: string;
    lastName: string;
    graduationDate: Timestamp;
    majors: string[];
    minors: string[];
    pledgeClass: string;
    position: string;
    pastPositions: string[];
    career: string;
    exec: boolean;
    active: boolean;
    bio: string;
    email: string;
    phoneNumber: string;
    hometown: string;
}

export interface IBrotherApi {
    getBrothersList: () => Promise<Brother[]>;
    addBrother: (newBrother: Brother) => Promise<BrotherId>;
    updateBrother: (brother: Brother) => Promise<void>;
    removeBrother: (brotherId: BrotherId) => Promise<void>;
}