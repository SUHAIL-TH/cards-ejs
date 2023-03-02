const express=require("express")
const path=require("path")


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let products = [
   
    {
      name: "one plus 10 pro",
      catogory: "Mobile",
      description: " 6 GB RAM 256 GB storage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDKU7htHDqh6KD24klLLEOmZIJvVxaQmPtg&usqp=CAU",
    },
    {
      name: "samsung s22-ultra",
      catogory: "Mobile",
      description: " 6 GB RAM 128 GB storage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1du9Faez_er5KQZNJFN7n2-EkGY5c57W5g&usqp=CAU",
    },
    {
      name: "google pixel 4",
      catogory: "Mobile",
      description: "6 GB RAM 128 GB storage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJUy17cGWSXli63HpuXAxpSFzlKYHX6xm0X5UJj6Fw08759IweD4wOP-f8UmlehhPkuU&usqp=CAU",
    },
    
    {
      name: "Samsung galaxy A12",
      catogory: "Mobile",
      description: "\n 6 GB RAM 256 GB storage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOPa_gIYdaQ_rf0ck483Sx5v8Zo7xOSDgIw&usqp=CAU",
    },
    {
      name: "IQOO 9",
      catogory: "Mobile",
      description: " 6 GB RAM 128 GB storage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuPlmYiq5zZQvYyxlz-IMWMJgCEhwSt9j6g&usqp=CAU",
    },
   

  ];

app.get("/",(req,res)=>{
    res.render("index",{products})
})
app.get("/index",(req,res)=>{
    res.render("index2",{products})
})
app.get("/index1",(req,res)=>{
  res.render("index3",{products})
})
app.listen(4000,()=>{
    console.log("server started",{products});

})