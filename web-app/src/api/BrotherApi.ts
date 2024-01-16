// Use a compatible date type for Realtime Database, such as string or number
export type BrotherId = string;

export interface Brother {
    id: BrotherId;
    firstName: string;
    lastName: string;
    graduationDate: string; // Changed to string
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
    jhuEmail: string;
    phoneNumber: string;
    hometown: string;
    imageUrl: string;
    linkedInUrl: string;
    birthdate: string; // Changed to string
    pronouns: string;
}

export interface IBrotherApi {
    getBrothersList: () => Promise<Brother[]>;
    getActiveBrothersList: () => Promise<Brother[]>;

    addBrother: (newBrother: Brother) => Promise<BrotherId>;
    updateBrother: (brother: Brother) => Promise<void>;
    removeBrother: (brotherId: BrotherId) => Promise<void>;
}
