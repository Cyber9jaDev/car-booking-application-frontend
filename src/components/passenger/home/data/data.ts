import image1 from "../../../../assets/images/team1.jpg";
import image2 from "../../../../assets/images/team2.jpg";
import image3 from "../../../../assets/images/team3.jpg";
import image4 from "../../../../assets/images/team4.jpg";

type TestimonialType = { 
  img: string;
  name: string;
  date: string;
  text: string;
}


const testimonialData: TestimonialType = [
  {
    img: image1.src,
    name: "John Doe",
    date: "4 days ago",
    text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  },
  {
    img: image2.src,
    name: "Paul Walker",
    date: "2 days ago",
    text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  },
  {
    img: image3.src,
    name: "James Bond",
    date: "3 days ago",
    text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  },
  // {
  //   img: image4,
  //   name: "Jason Scott",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image3,
  //   name: "Antoine Malone",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image3,
  //   name: "Johnny Depp",
  //   date: "5 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image3,
  //   name: "Kyle Walker",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image1,
  //   name: "Virgil Van Dijk",
  //   date: "2 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image2,
  //   name: "Jordan Henderson",
  //   date: "3 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image4,
  //   name: "Joe Gomez",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image2,
  //   name: "Steven Gerrard",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image1,
  //   name: "Lionel Messi",
  //   date: "5 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image2,
  //   name: "Christian Simon",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image3,
  //   name: "Peter Crouch",
  //   date: "2 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image4,
  //   name: "Alberto Danielle",
  //   date: "3 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image1,
  //   name: "Roberto David",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image2,
  //   name: "Sebastian Peter",
  //   date: "4 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
  // {
  //   img: image1,
  //   name: "John Paul",
  //   date: "5 days ago",
  //   text: "This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed. This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed This is where the story about the feature is discussed",
  // },
];