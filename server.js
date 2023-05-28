const fetch = require('cross-fetch');
const cors=require('cors');
const express=require('express');

const app=express();
app.use(cors());
const port=process.env.PORT || 5000;

app.get('/search',async(req,res)=>{
    const {value}=req.query;
    const response=await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${value}`);
    const data=await response.json();
    res.json(data);
}
);

app.listen(port,()=>{
    console.log('Server is running on port 5000');
}
);
