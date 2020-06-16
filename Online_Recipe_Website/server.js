"use strict";
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const recipeDetails = require('./recipeDetails');
const { v4: uuidv4 } = require('uuid');

app.use(cookieParser());
app.use(express.static('./public'));


app.get('/session', (req, res) => {
    const uid = req.cookies.uid;
    if(!uid) {
      res.status(401).json({ code: 'provide-error'});
      return;
    }
    res.sendStatus(200);
});

app.get('/recipe', (req, res) => {
    res.json(recipeDetails.recipeList);
});
  
app.post('/session', express.json(), (req, res) => {
    const username = req.body.username;
    if(username === 'dog') {
       res.status(403).json({ code: 'Bad-login'});
       return;
    }
    const uid = uuidv4();
    recipeDetails.users[uid] = { username};
    res.cookie('uid', uid);
    
    res.sendStatus(200);
});

app.post('/newRecipe', express.json(), (req, res) => {
   
    const uid = req.cookies.uid;
    const newTitle = req.body.newTitle;
    const newIngredients = req.body.newIngredients;
    const newInstruction = req.body.newInstruction;
    
    if(newTitle && newIngredients && newInstruction) {
        const newRecipe= {Author:recipeDetails.users[uid].username, title:newTitle, ingredients:newIngredients , instructions:newInstruction};
        recipeDetails.recipes.push(newRecipe);
        recipeDetails.recipeList[recipeDetails.recipes.length] = {Author:recipeDetails.users[uid].username, title:newTitle};
        res.status(200).json(newRecipe);
        return;
    }
    res.status(403).json({ code: 'Fields are missing'});
    return;
  
});

app.get('/recipeDetails/:id', express.json(), (req, res) => {
   
    const id = req.params.id;
    res.status(200).json(recipeDetails.recipes[id-1]);
});


app.delete('/logout', (req, res) => {
     
    const uid = req.cookies.uid;
    delete recipeDetails.users[uid];
    res.clearCookie('uid');
    return res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`) );