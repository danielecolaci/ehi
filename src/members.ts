export interface Member {
    id: number;
    name: string;
    role: string;
    avatar: string;
}
export const MEMBERS: Member[] = [
    {
        id: 1,
        name: 'Danilo Tramis',
        role: 'Business Developer',
        avatar: 'Team_Danilo'
    },
    {
        id: 2,
        name: 'Davide Russo',
        role: 'Art Director',
        avatar: 'Team_Davide'
    },
    {
        id: 3,
        name: 'Daniele Colaci',
        role: 'Product Designer',
        avatar: 'Team_Daniele'
    },
    {
        id: 4,
        name: 'Andrea Russo',
        role: 'Back-End Developer',
        avatar: 'Team_Andrea'
    },
    {
        id: 5,
        name: 'Loris Parata',
        role: 'Web Developer',
        avatar: 'Team_Loris'
    },
];