import { StandardRole } from "./standard-role";

export interface UserProfile {
    id: number;
    givenName: string;
    middleName: string;
    lastName: string;
    loginCrendentials: string;
    loginPassword: string;
    lastModifiedUserId: string;
    lastModifiedTs: Date;
    stndRole: StandardRole;
}
