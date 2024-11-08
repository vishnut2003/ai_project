// const featuredItems = [
//   {
//     title: "Why we are discontinuing company sources and moving forward with squads",
//     description: "Learn why daily.dev is discontinuing company sources and how squads offer a",
//     imageUrl: "/BlogsPage/1.jpg"
//   },{
//     title: "Why we are discontinuing company sources and moving forward with squads",
//     description: "Learn why daily.dev is discontinuing company sources and how squads offer a superior way for companies to engage with the developer community and gain organic exposure. Highlights from the 2024 Stack Overflow Developer Survey Highlights from the 2024 Stack Overflow Developer Survey The 2024 Stack Overflow Developer Survey gathered insights from over 65,000",
//     imageUrl: "/BlogsPage/2.png"
//   },{
//     title: "Why we are discontinuing company sources and moving forward with squads",
//     description: "Learn why daily.dev is discontinuing company sources and how squads offer a superior way for companies to engage with the developer community and gain organic exposure. Highlights from the 2024 Stack Overflow Developer Survey Highlights from the 2024 Stack Overflow Developer Survey The 2024 Stack Overflow Developer Survey gathered insights from over 65,000",
//     imageUrl: "/BlogsPage/3.png"
//   },
// 


//https://vansh.gogalax.in/wp-json/wp/v2/posts?per_page=5&page=1&orderby=date


import axios, { AxiosResponse } from "axios";
export  interface postItem {
  date: string,
  title:{rendered: string},
  excerpt:{rendered: string},

}

export default function fetchPost(){
  
  return new Promise((resolve,reject)=>{
    
    const url = "https://vansh.gogalax.in/wp-json/wp/v2/posts";
    console.log(url)
    axios.get(url).then((response : AxiosResponse)=>{
      resolve(response.data);
    })
    
  })
}