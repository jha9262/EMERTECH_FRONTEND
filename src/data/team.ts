export interface TeamMember {
  name: string;
  designation: string;
  initials: string;
  email?: string;
  discipline: string;
}

export const TOTAL_TEAM_SIZE = 15;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dishant Shah',
    designation: 'Chief Technology Officer (CTO)',
    initials: 'DS',
    email: 'dishant.shah@emertechelectronics.in',
    discipline: 'Technology Leadership'
  },
  {
    name: 'Dishant Nalwaya',
    designation: 'Senior Software Engineer',
    initials: 'DN',
    discipline: 'Software Engineering'
  },
  {
    name: 'Hemant Harlalka',
    designation: 'Senior Embedded Engineer',
    initials: 'HH',
    discipline: 'Embedded Systems'
  },
  {
    name: 'Mohit Kumar',
    designation: 'Junior IoT Developer',
    initials: 'MK',
    discipline: 'IoT Development'
  },
  {
    name: 'Nitish Kumar',
    designation: 'Backend Developer',
    initials: 'NK',
    discipline: 'Backend Engineering'
  },
  {
    name: 'Aniket Kumar',
    designation: 'Senior Hardware Engineer',
    initials: 'AK',
    discipline: 'Hardware Engineering'
  }
];
