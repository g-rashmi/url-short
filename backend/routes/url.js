const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { GenerateShorturl } = require("../controllers/url");
router.post("/", GenerateShorturl);
router.get("/t", async (req, res) => {
  const allurl = await URL.find({});

  res.end(`<html><head></head><body>
  <ol>${allurl
    .map((u) => {
      return `<li> ${u.originalurl} - ${u.shortid}</li>`;
    })
    .join("")}</ol>
  
  </body></html>`);
});

router.get("/id/:shortid", async (req, res) => {
  const shortid = req.params.shortid;

  const entry = await URL.findOneAndUpdate(
    { shortid: shortid },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  // if (entry) {
  //   console.log("Entry not found for shortid:", entry.shortid);
  //   return res.status(404).send("URL not found");
  // }

  const originalurl = entry.originalurl;
  console.log(entry);
  console.log(originalurl);
  res.redirect({originalurl });
});

module.exports = router;
