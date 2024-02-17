const shortId = require('shortid');
const URL =require("../models/url")
async function GenerateShorturl(req,res) { 
  const body =req.body ; 
  if(!body.url) return res.status(400).json({error:"url is required"}) ; 
const shortid= shortId(7);  
await URL.create( { 
  shortid: shortid , 
  originalurl: body.url,  
  visithistory:[] ,
}) ; 
return res.json({id:shortid}) ;   } 


module.exports ={
  GenerateShorturl
} 
