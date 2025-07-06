// components/team-data.ts

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Kiran",
    role: "Badminton Head Coach",
    image: "/images/jane.jpg",
    twitter: "https://twitter.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
  },
  {
    name: "Ramesh",
    role: "Swimming Head Coach",
    image: "/images/john.jpg",
    twitter: "https://twitter.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
  },
    {
        name: "Arjun",
        role: "Yoga Head Coach",
        image: "/images/alice.jpg",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://linkedin.com/in/alicejohnson",
    },
    {
        name: "Dr. Rangala Babu Rao",
        role: "Chess Head Coach",
        image: "/images/bob.jpg",
        twitter: "https://twitter.com/bobbrown",
        linkedin: "https://linkedin.com/in/bobbrown",
    },
    {
        name: "Dr. Pujitha",
        role: "Senior Dietitian",
        image: "/images/eva.jpg",
        twitter: "https://twitter.com/evagreen",
        linkedin: "https://linkedin.com/in/evagreen",
    },
    {
        name: "Raghuram",
        role: "Table Tennis Coach",
        image: "/images/charlie.jpg",
        twitter: "https://twitter.com/charlieblack",
        linkedin: "https://linkedin.com/in/charlieblack",
    },
    {
        name: "Lavan",
        role: "Toddler Swimming Coach",
        image: "/images/diana.jpg",
        twitter: "https://twitter.com/dianaprince",
        linkedin: "https://linkedin.com/in/dianaprince",
    },
    {
        name: "Vappangi Srikanth",
        role: "Chess Coach",
        image: "/images/frank.jpg",
        twitter: "https://twitter.com/frankcastle",
        linkedin: "https://linkedin.com/in/frankcastle",
    },
    {
        name: "Dr Duke Saran",
        role: "Physiotherapy",
        image: "/images/grace.jpg",
        twitter: "https://twitter.com/gracelee",
        linkedin: "https://linkedin.com/in/gracelee",
    },
];
