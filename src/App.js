import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./component/layout/publicLayout";
import { AUTH_ROUTE } from "./route/routes";


function App() {
  const [isPublic, setIsPblic] = useState(true);       

  return (
    <div className="App">
      <BrowserRouter>
        {isPublic ? (
          <PublicLayout>
            <Routes>
              {AUTH_ROUTE.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </PublicLayout>
        ) : (
          <>Private</>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

// Complete Git and GitHub Tutorial for Beginners == Apna College   
// What is Git | Complete Tutorial for Beginners in Hindi | GIT == WsCube Tech
// What is GIT in Hindi | Github & Gitlab in Hindi | Introduction to Git in Hindi with Live Example== Thapa Technical
// How To Host React JS Website Live for Free using GitHub in 2020

// https://git-scm.com/
  // git tool software vcs history track krne 
  // github website store code using git (folder : repository)
  // add => commit

  // git config --global user.name "ketan045"
  // git config --global user.email "ketankalsariya0902@gmail.com"
  // git config --list


  // may be write see hidden file = Get-ChildItem -Attributes !Directory,!Hidden

  // cd ->change directory
  // ls ->list files

  // 1...git status (git init apply)

  // 2...git add . kri dhidhu to stage maate ready that git commit -m "meaning full message which changes in file"

  // github remote git hub pr mukva maate git push origin main  or short git push -u origin main (when type it then only git push)
  // git remote -v
  // git init remote maate 
  // when create direct github then 
  // and remote thi local maa leva maate aaaa( git remote add origin https://github.com/ketan0045/localrepo.git)
  // git remote -v

  // make new folder in vs code to push github
  // git remote add origin "link"(like git remote add origin https://github.com/ketan0045/localrepo.git)

  // branch name rename == git branch -M "Here new name"

  // (work flow  :  github repo -> clone -> changes -> add -> commit -> push)

  // git checkout "Here branch name"
  // git checkout -b Here new branch Herename (no semicolon)  (crate new branch)
  // (git checkout -b feature2)
  // git branch -d feature2 (same brach means working branch then not delete other are delete)
 

  // check brach and merge combine all branch
  // (git status check and chages seen )

  // undoing changes (add .)
  // git reset file (one hoy to ) and git reset (vadhare hoy to (aaj use krvu))

  // add thay jay and commit pn thy jay :git reset HEAD~1
  // add thay jay and commit pn thy jay vadhrr : git reset --hard 223a68c8ed6c210123ecefdc27a5bced14a1db00

  



