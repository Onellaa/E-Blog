import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended:true }));

let blogs = [];

app.get("/",(req,res)=>{
// res.render("index.ejs");
const posts = [

  { 
    title: 'Technology'},
  { title: 'Travel'},
  { title: 'Food'},
  { title: 'Lifestyle'}

];
res.render('home.ejs', { posts,blogs });
});


// Route to render the "recent" page with the form
app.get("/recent", (req, res) => {
  const posts = [

    { 
      title: 'Technology'},
    { title: 'Travel'},
    { title: 'Food'},
    { title: 'Lifestyle'}
  
  ];
  res.render("recent.ejs", { blogs: blogs ,posts});
});

// Route to submit the form data and add a new blog
app.post("/add-blog", (req, res) => {
  const { title, content } = req.body;
  blogs.push({ title, content });
  res.redirect("/blogs"); // Only provide the URL here
});

app.get('/about',(req,res)=>{
res.render("about.ejs");
});

app.get('/contact',(req,res)=>{
  res.render("contactus.ejs");
  });
  

app.get("/blogs", (req, res) => {
  const posts = [

    { 
      title: 'Technology'},
    { title: 'Travel'},
    { title: 'Food'},
    { title: 'Lifestyle'}
  
  ];
  res.render("blogs.ejs", { blogs,posts });
});


app.get('/post/:id', (req, res) => {
  const postId = req.params.id;
  
  // Define your posts with their associated images
  const posts = [
    { 
      id: 1, 
      title: 'Technology', 
      image: ['tech1.png', 'tech2.png', 'tech3.png', 'tech4.png', 'tech5.png', 'tech6.png'],
      contents:['A futuristic humanoid robot with advanced features, designed to assist in various industries like healthcare, manufacturing, and customer service.',

        'A visual representation of cyber security threats, featuring code breaking, digital locks, and unauthorized access attempts on a computer screen.',

        ' An illustration of a neural network or brain-like structure, symbolizing AIs learning and decision-making processes, commonly used in data analysis and automation.',

        ' A digital image showcasing interconnected servers or cloud storage, representing the use of remote servers for data storage and processing over the internet.',

        ' A person wearing a VR headset, immersed in a simulated environment, highlighting the use of immersive technologies in gaming, training, and entertainment.',

        ' A graphic showing a chain of interconnected blocks, representing the decentralized and secure nature of blockchain technology used in cryptocurrency and data management.'],
        description: ' Technology is continuously transforming our lives through AI, automation, and connectivity, making tasks faster, easier, and more efficient. From robotics to virtual reality, it’s reshaping industries and enhancing human experiences.'
    },
    { 
      id: 2, 
      title: 'Travel', 
      image: ['travel1.png', 'travel2.png', 'travel3.png', 'travel4.png', 'travel5.png', 'travel6.png'],
      contents:['A hiker standing on a mountain peak, overlooking vast landscapes, representing the thrill of adventure travel and exploring nature.',

        ' A high-end resort with an infinity pool and ocean view, embodying the indulgence and relaxation of luxury travel experiences.',

        ' A person participating in a local festival or tradition, experiencing the cultural richness and heritage of a new place.',

        ' A scenic drive along a coastal highway with a convertible car, representing the freedom and joy of a road trip adventure.',

        '  A traveler walking through a vibrant city street with historical landmarks, capturing the excitement of discovering new cultures and destinations.',
        
        '  A sunlit beach with turquoise water, palm trees, and people relaxing, symbolizing the perfect getaway for relaxation and rejuvenation.'
      ],description: ' Travel has become more accessible and diverse, with technology allowing for seamless booking and exploration of global destinations. Whether for adventure or relaxation, travel offers opportunities to connect with new cultures and experience'
    },
    { 
      id: 3, 
      title: 'Food', 
      image: ['food1.png', 'food2.png', 'food3.png', 'food4.png', 'food5.png', 'food6.png'],
      contents:['A close-up of a decadent chocolate cake with rich frosting, symbolizing indulgence and the sweet side of life.',

        'A bustling food market scene with vendors selling popular street foods, capturing the excitement and variety of local cuisines.',

        '  A bowl of fresh fruits and vegetables, symbolizing a healthy diet focused on nourishing the body with wholesome ingredients.',

        ' A beautifully plated dish with vibrant colors, representing a gourmet meal and the art of culinary presentation.',

        ' A steaming bowl of soup or pasta on a rainy day, evoking feelings of warmth and comfort associated with hearty, homemade dishes.',
        
        '  A person preparing a meal in a cozy kitchen, showcasing the joy and creativity of home-cooked food and family bonding.'],
        description: '  Food  is revolutionizing the way we produce, process, and consume food, with innovations such as lab-grown meat and smart kitchens. These advancements are helping to improve food safety, sustainability, and efficiency in the industry.'
    },
    { 
      id: 4, 
      title: 'Lifestyle', 
      image: ['life1.png', 'life2.png', 'life3.png', 'life4.png', 'life5.png', 'life6.png'],
      contents:[' A peaceful morning scene showing a cup of coffee, a cozy blanket, and a planner, symbolizing the start of a productive day focused on well-being.',

       ' An individual performing yoga on a serene beach, reflecting the growing trend of mindfulness and fitness in daily life.',

        ' A clean, uncluttered living room with neutral tones, representing the minimalist lifestyle, focused on simplicity and less consumption.',

        'A home office setup with plants and soft lighting, illustrating the importance of creating a comfortable space that balances productivity and relaxation.',

        'A scene with eco-friendly products, such as reusable bags and organic food, highlighting the shift towards sustainable and conscious living choices.',
        
        ' A well-dressed individual walking down a city street, showcasing modern fashion trends and personal style in an urban lifestyle setting.'],
        description: '  Modern lifestyles focus on achieving balance, wellness, and sustainability, with many people embracing healthier habits and eco-friendly choices. This shift is evident in trends like fitness routines, mindful living, and minimalist design.'
    }
  ];
  
  // Find the post based on the id
  const post = posts.find(p => p.id == postId);
  
  if (post) {
    res.render('post.ejs', { post });
  } else {
    res.status(404).send("Post not found");
  }
});




app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});