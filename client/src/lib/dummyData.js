import { Edit } from "lucide-react";
import ATS from "../../src/assets/events/annualtechsummit.jpeg";
import IDSD from "../../src/assets/events/sport-text-with-children-banner-design_1308-132419.jpg";
import EOYAE from "../../src/assets/events/IMG_0109-700x700.jpg";
import GRF from "../../src/assets/events/graduaterecruitmentfair.jpeg";
import FYPDS from "../../src/assets/events/finalyearproject.jpeg";
import EOSBN from "../../src/assets/events/camping-under-the-stars-1024x683.jpg"
import EM from "../../src/assets/listings/9781137031204.jpg"
import CHEMTEXT from "../../src/assets/listings/chemtext.jpeg"
import HP from "../../src/assets/listings/61IKsr8Y5uL._AC_UF1000,1000_QL80_.jpg"
import PRINTER from "../../src/assets/listings/1.jpg"
import MATHSETS from "../../src/assets/listings/mathset.jpeg"
import READINGTABLE from "../../src/assets/listings/81fwQ6zH7FL.jpg"
export const dontMissItems = [
  {
    title: "Tech Fest 2026",
    meta: "Tomorrow . 10am",
  },
  {
    title: "Google Scholarship",
    meta: "Closes in 2 days",
  },
  {
    title: "Career Fair",
    meta: "Saturday . 9am",
  },
];

export const feedItems = [
  {
    type: "event",
    title: "Annual Tech Summit 2026",
    description:
      "Join us for a day of talks, workshops and networking with top tech professionals.",
    meta: ["June 15 2026", "Sapetro"],
    action: "RSVP",
  },
  {
    type: "opportunity",
    title: "Google Generation Scholarship 2026",
    description:
      "Up to $20,000 for undergraduate students studying computer science.",
    meta: ["Scholarship", "2 days left"],
    action: "Apply",
  },
  {
    type: "listing",
    title: "Engineering Mathematics Textbook - $3,500",
    description: "Stroud 7th Edition, good condition, minor highlights.",
    meta: ["Textbook", "Good condition"],
    action: "View",
  },
];

export const events = [
  {
    id: 1,
    title: "Annual Tech Summit 2026",
    category: "Tech",
    description:
      "Join us for a full day of inspiring talks, hands-on workshops, and unmatched networking with top tech professionals, founders, and recruiters from across the industry.",
    date: "June 15",
    day: "Saturday",
    time: "10:00 AM",
    location: "Sapetro",
    organizer: "Tech Society",
    attendees: 142,
    rsvped: false,
    image: ATS,
  },
  {
    id: 2,
    title: "Inter-Department Sports Day",
    category: "Sports",
    description:
      "A full day of inter-departmental sporting competitions including football, athletics and table tennis. Come support your department!",
    date: "June 17",
    day: "Monday",
    time: "8:00AM",
    location: "Unity Field",
    organizer: "Student Union",
    attendees: 89,
    rsvped: false,
    image: IDSD,
  },
  {
    id: 3,
    title: "End of Year Art Exhibiton",
    category: "Cultural",
    description:
      "A showcase of the best student artwork from across the year - paintings, sculptures, photography and digital art on display.",
    date: "June 20",
    day: "Thursday",
    time: "2:00 PM",
    location: "Boja Theatre",
    organizer: "Theater Art Students",
    attendees: 54,
    rsvped: true,
    image: EOYAE,
  },
  {
    id: 4,
    title: "Graduate Recruitment Fair",
    category: "Career",
    description:
      "Meet recruiters from top companies hiring graduates. Bring your CV and dress professionally, this could be your foot in the door.",
    date: "June 22",
    day: "Saturday",
    time: "9:00AM",
    location: "Event Hall",
    organizer: "Career Centre",
    attendees: 210,
    rsvped: false,
    image: GRF,
  },
  {
    id: 5,
    title: "Final Year Project Defence Seminar",
    category: "Academic",
    description:
      "A preparatory seminar for final year students on how to present and defend your project before the department panel.",
    date: "June 25",
    day: "Tuesday",
    time: "11:00AM",
    location: "NLT",
    organizer: "CS Department",
    attendees: 76,
    rsvped: false,
    image: FYPDS,
  },
  {
    id: 6,
    title: "End of Semester Bonfire Night",
    category: "Social",
    description:
      "Close out the semester with music, food and a bonfire. Free entry for all students with a valid ID.",
    date: "June 28",
    day: "Friday",
    time: "7:00PM",
    location: "Sport Field",
    organizer: "Social Committee",
    attendees: 312,
    rsvped: false,
    image: EOSBN,
  },
];
export const eventCategories = [
  "All",
  "Academic",
  "Social",
  "Career",
  "Sports",
  "Cultural",
  "Tech",
];

export const opportunities = [
  {
    id: 1,
    title: "Google Generation Scholarship 2026",
    type: "Scholarship",
    description:
      "Up to $10,000 for undergraduate students studying computer science or related fields.",
    deadline: "2 days left",
    urgent: true,
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Microsoft Software Engineering Intern (Summer 2026)",
    type: "Internship",
    description:
      "12 weeks paid internship at Microsoft. Work on real products used by millions. Open to penultimate year students.",
    deadline: "5 days left",
    urgent: true,
    link: "https://example.com",
  },
  {
    id: 3,
    title: "NLNG Science & Technology Scholarship",
    type: "Competition",
    description:
      "Full Scholarship for final year students in STEM fields, including mentorship and industry exposure.",
    deadline: "12 days left",
    urgent: false,
    link: "https://example.com",
  },
  {
    id: 4,
    title: "ALX Africa Software Engineering Fellowship",
    type: "Fellowship",
    description:
      "12 month intensive software engineering fellowship with stipend and career placement support across Africa",
    deadline: "Closes July 30",
    urgent: false,
    link: "https://example.com",
  },
];
export const opportunityTypes = [
  "All",
  "Internship",
  "Scholarships",
  "Competitions",
  "Fellowships",
  "Volunteer",
];

export const listings = [
  {
    id: 1,
    title: "Engineering Mathematics - Stroud 7th Edition",
    description:
      "Stroud Engineering Mathematics 7th Edition. Good condition, minor highlights inside. Perfect for 200-level engineering students. No missing pages.",
    price: 3500,
    category: "Textbooks",
    condition: "Good",
    seller: "Amara o.",
    postedAt: "2 days ago",
    status: "active",
    sellerUniversity: "Redeemer's University",
    image:EM
  },
  {
    id: 2,
    title: "HP Pavillion Laptop core i5, 8GB RAM",
    description:
      "HP Pavillion i5 laptop in great working condition. Core i5 10th gen, 8GB RAM, 256GB SSD. Battery life still strong. Selling because I'm upgrading. Includes charger and original bag.",
    price: 85000,
    category: "Gadgets",
    condition: "Used",
    seller: "Kola A.",
    postedAt: "3 days ago",
    status: "active",
    sellerUniversity: "Redeemer's University",
    image:HP
  },
  {
    id: 3,
    title: "Organic Chemistry Textbook",
    description:
      "Organic Chemistry textbook, well used but all pages intact. Great for revision and past questions practice.",
    price: 2000,
    category: "Textbooks",
    condition: "Good",
    seller: "Fatima B.",
    postedAt: "1 week ago",
    status: "sold",
    sellerUniversity: "Redeemer's University",
    image:CHEMTEXT
  },
  {
    id: 4,
    title: "Canon printer",
    description:
      "Canon printer in excellent working condition. Prints and scans without issues. Comes with one extra ink cartridge.",
    price: 12000,
    category: "Gadgets",
    condition: "Used",
    seller: "Tunde M.",
    postedAt: "Today",
    status: "active",
    sellerUniversity: "Redeemer's University",
    image:PRINTER
  },
  {
    id: 5,
    title: "Maths Set and Drawing Instruments",
    description:
      "Brand new maths set with compass, protractor, rulers and set squares. Never used, still in original packaging.",
    price: 800,
    category: "Stationery",
    condition: "New",
    seller: "Yemi T",
    postedAt: "Today",
    status: "active",
    sellerUniversity: "Redeemer's University",
    image:MATHSETS
  },
  {
    id: 6,
    title: "Reading Table",
    description:
      "Comfortable reading table, great for the hostel or off-campus room. No tears or damage.",
    price: 7500,
    category: "Furniture",
    condition: "Used",
    seller: "Chidi O.",
    postedAt: "Yesterday",
    status: "active",
    sellerUniversity: "Redeemer's University",
    image:READINGTABLE
  },
];
export const listingCategories = [
  "All",
  "Textbooks",
  "Gadgets",
  "Furniture",
  "Clothing",
  "Stationery",
  "Others",
];

export const clubs = [
  {
    id: 1,
    name: "Tech Society",
    description:
      "The largest tech club on campus. Workshops, hackathons, and industry connections",
    category: "Tech",
    members: 342,
    joined: true,
    events: [
      {
        title: "Annual Tech Summit 2026",
        date: "June 15",
        location: "Auditorium A",
      },
      {
        title: "Intro to Machine Learning Workshop",
        date: "June 20",
        location: "CS Lab 2",
      },
    ],
  },
  {
    id: 2,
    name: "Drama & Arts Club",
    description:
      "Bringing stories to life through theatre,film, and visual arts.",
    category: "Arts",
    members: 128,
    joined: false,
    events: [
      {
        title: "End of Semester Play Auditions",
        date: "June 18",
        location: "Boja Art Theatre",
      },
    ],
  },
  {
    id: 3,
    name: "Finance & Investment Clubs",
    description:
      "Learning investing, personal finance, and connect with finance professionals.",
    category: "Career",
    members: 89,
    joined: false,
    events: [
      {
        title: "Stock Market Basics Seminar",
        date: "June 19",
        location: "Sapetro",
      },
    ],
  },
  {
    id: 4,
    name: "Football Club",
    description: "Weekly training sessions and inter-university tournaments.",
    category: "Sports",
    members: 215,
    joined: false,
    events: [
      {
        title: "Inter-Department Sports Day",
        date: "June 17",
        location: "School Field",
      },
    ],
  },
  {
    id: 5,
    name: "Photography Society",
    description:
      "Capture campus life. Monthly photowalks, exhibitions and editing workshops.",
    category: "Arts",
    members: 76,
    joined: false,
    events: [
      {
        title: "Golden Hour Photowalk",
        date: "June 21",
        location: "NLT",
      },
    ],
  },
  {
    id: 6,
    name: "Model United Nations",
    description:
      "Debate global issues, develop diplomacy skills, compete nationally.",
    category: "Academic",
    members: 64,
    joined: false,
    events: [
      {
        title: "MUN Conference Prep Session",
        date: "June 23",
        location: "3-in-1 Lecture Room",
      },
    ],
  },
];
export const clubCategories = [
  "All",
  "Academic",
  "Tech",
  "Sports",
  "Arts",
  "Social",
  "Career",
];

export const notices = [
  {
    id: 1,
    title: "Single room available in off-campus flat - Moremi Area",
    body: "Looking for a female roommate. Furnished room available from July 1st. N4,500/month inclusive of water. Quiet environment, 5 mins walk from campus gate.",
    category: "Accommodation",
    poster: "Amara O.",
    postedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Found: Black Laptop Bag Near Library",
    body: "Found a black HP laptop bag near the main library entrance. Contains charger and some notes. Owner should contact me to describe contents and claim.",
    category: "Lost & Found",
    poster: "Kola A.",
    postedAt: "5 hours ago",
  },
  {
    id: 3,
    title: "CSC 402 Exam Timetable Change. Please Note",
    body: "The CSC 402 final exam has been moved from June 18 to June 21. New venue is LT 1. Please inform your coursemates. Official notice to follow from the department.",
    category: "Academic",
    poster: "Jesupemi A.",
    postedAt: "Yesterday",
  },
  {
    id: 4,
    title: "Anyone know a good printing shop near school?",
    body: "Looking for a reliable printing shop close to campus. Need to print and bind a 100 page project report urgently. Recommendations welcome!",
    category: "General",
    poster: "Tunde M.",
    postedAt: "2 days ago",
  },
];
export const noticeCategories = [
  "All",
  "Accommodation",
  "Lost & Found",
  "Academic",
  "General",
];

export const resources = [
  {
    id: 1,
    title: "CSC 402 - Compiler Design Past Questions 2020-2024",
    type: "Past Questions",
    courseCode: "CSC 402",
    department: "Computer Science",
    uploader: "Jesupemi A.",
    uploadedAt: "2 days ago",
  },
  {
    id: 2,
    title: "MTH 201 - Comprehensive Notes on Calculus & Series",
    type: "Notes",
    courseCode: "MTH 201",
    department: "Mathematics",
    uploader: "Amara O.",
    uploadedAt: "1 week ago",
  },
  {
    id: 3,
    title: "MGT 301 - Full Lecture Slides, Semester 2",
    type: "Slides",
    courseCode: "MGT 301",
    department: "Management Science",
    uploader: "Tunde M.",
    uploadedAt: "3 days ago",
  },
  {
    id: 4,
    title: "CHE 302 - Thermodynamics Quick Summary Sheet",
    type: "Summary",
    courseCode: "CHE 302",
    department: "Chemical Engineering",
    uploader: "Kola A.",
    uploadedAt: "5 days ago",
  },
  {
    id: 5,
    title: "EEE 401 - Power Systems Past Questions 2018-2023",
    type: "Past Questions",
    courseCode: "EEE 401",
    department: "Electrical Engineering",
    uploader: "Fatima B.",
    uploadedAt: "1 week ago",
  },
];
export const resourceTypes = [
  "All",
  "Past Questions",
  "Slides",
  "Notes",
  "Summary",
];

export const notifications = [
  {
    id: 1,
    icon: "calendar",
    title: "Tech Summit is tomorrow!",
    body: "Don't forget that the Annual Tech Summit 2026 starts at 10am at Auditorium A",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    icon: "clock",
    title: "Deadline alert: Google Scholarship",
    body: "The Google Generation Scholarship closes in 2 days.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    icon: "users",
    title: "New member in Tech Society",
    body: "Amara Okafor just joined Tech Society",
    time: "Yesterday",
    read: true,
  },
  {
    id: 4,
    icon: "package",
    title: "New listing: Laptop for sale",
    body: "A new gadget was listed in the Marketplace - HP Pavillion N85,000",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    icon: "sparkles",
    title: "Welcome to Unify!",
    body: "Your account is set up. Explore events, clubs and opportunities on your campus.",
    time: "1 week ago",
    read: true,
  },
];
