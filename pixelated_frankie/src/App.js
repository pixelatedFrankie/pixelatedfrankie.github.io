// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home'; // Assuming you have a Home page

import logo from './logo.svg';
import './css/styles.css'
import Navbar from './components/common/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className="section-container">
        <h1>This is an h1</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos facere voluptatum fuga impedit. Voluptatibus modi possimus animi amet obcaecati corporis officiis iste ea repudiandae? Possimus odit nam dolore quis?</p>
        <p>Sint, explicabo voluptates nostrum rem alias beatae cumque maiores libero quos minima, facere totam dignissimos, eveniet autem quis laborum! Corrupti illo consequatur molestiae quod modi ea! Maiores rem nesciunt sit.</p>
        <p>Repudiandae aspernatur, reiciendis eos magnam at fugit accusamus ducimus impedit deleniti cupiditate totam, provident vero omnis blanditiis inventore excepturi est velit consequuntur praesentium quas. Magnam laborum exercitationem debitis corporis minima?</p>
        <p>Odio soluta aspernatur aliquid cum suscipit amet natus hic, distinctio voluptas omnis? Consequatur error pariatur architecto maiores voluptatibus asperiores doloremque amet deleniti, tempore, ratione saepe quas eveniet perspiciatis officiis quisquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos facere voluptatum fuga impedit. Voluptatibus modi possimus animi amet obcaecati corporis officiis iste ea repudiandae? Possimus odit nam dolore quis?</p>
        <p>Sint, explicabo voluptates nostrum rem alias beatae cumque maiores libero quos minima, facere totam dignissimos, eveniet autem quis laborum! Corrupti illo consequatur molestiae quod modi ea! Maiores rem nesciunt sit.</p>
        <p>Repudiandae aspernatur, reiciendis eos magnam at fugit accusamus ducimus impedit deleniti cupiditate totam, provident vero omnis blanditiis inventore excepturi est velit consequuntur praesentium quas. Magnam laborum exercitationem debitis corporis minima?</p>
        <p>Odio soluta aspernatur aliquid cum suscipit amet natus hic, distinctio voluptas omnis? Consequatur error pariatur architecto maiores voluptatibus asperiores doloremque amet deleniti, tempore, ratione saepe quas eveniet perspiciatis officiis quisquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos facere voluptatum fuga impedit. Voluptatibus modi possimus animi amet obcaecati corporis officiis iste ea repudiandae? Possimus odit nam dolore quis?</p>
        <p>Sint, explicabo voluptates nostrum rem alias beatae cumque maiores libero quos minima, facere totam dignissimos, eveniet autem quis laborum! Corrupti illo consequatur molestiae quod modi ea! Maiores rem nesciunt sit.</p>
        <p>Repudiandae aspernatur, reiciendis eos magnam at fugit accusamus ducimus impedit deleniti cupiditate totam, provident vero omnis blanditiis inventore excepturi est velit consequuntur praesentium quas. Magnam laborum exercitationem debitis corporis minima?</p>
        <p>Odio soluta aspernatur aliquid cum suscipit amet natus hic, distinctio voluptas omnis? Consequatur error pariatur architecto maiores voluptatibus asperiores doloremque amet deleniti, tempore, ratione saepe quas eveniet perspiciatis officiis quisquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos facere voluptatum fuga impedit. Voluptatibus modi possimus animi amet obcaecati corporis officiis iste ea repudiandae? Possimus odit nam dolore quis?</p>
        <p>Sint, explicabo voluptates nostrum rem alias beatae cumque maiores libero quos minima, facere totam dignissimos, eveniet autem quis laborum! Corrupti illo consequatur molestiae quod modi ea! Maiores rem nesciunt sit.</p>
        <p>Repudiandae aspernatur, reiciendis eos magnam at fugit accusamus ducimus impedit deleniti cupiditate totam, provident vero omnis blanditiis inventore excepturi est velit consequuntur praesentium quas. Magnam laborum exercitationem debitis corporis minima?</p>
        <p>Odio soluta aspernatur aliquid cum suscipit amet natus hic, distinctio voluptas omnis? Consequatur error pariatur architecto maiores voluptatibus asperiores doloremque amet deleniti, tempore, ratione saepe quas eveniet perspiciatis officiis quisquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos facere voluptatum fuga impedit. Voluptatibus modi possimus animi amet obcaecati corporis officiis iste ea repudiandae? Possimus odit nam dolore quis?</p>
        <p>Sint, explicabo voluptates nostrum rem alias beatae cumque maiores libero quos minima, facere totam dignissimos, eveniet autem quis laborum! Corrupti illo consequatur molestiae quod modi ea! Maiores rem nesciunt sit.</p>
        <p>Repudiandae aspernatur, reiciendis eos magnam at fugit accusamus ducimus impedit deleniti cupiditate totam, provident vero omnis blanditiis inventore excepturi est velit consequuntur praesentium quas. Magnam laborum exercitationem debitis corporis minima?</p>
        <p>Odio soluta aspernatur aliquid cum suscipit amet natus hic, distinctio voluptas omnis? Consequatur error pariatur architecto maiores voluptatibus asperiores doloremque amet deleniti, tempore, ratione saepe quas eveniet perspiciatis officiis quisquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos facere voluptatum fuga impedit. Voluptatibus modi possimus animi amet obcaecati corporis officiis iste ea repudiandae? Possimus odit nam dolore quis?</p>
        <p>Sint, explicabo voluptates nostrum rem alias beatae cumque maiores libero quos minima, facere totam dignissimos, eveniet autem quis laborum! Corrupti illo consequatur molestiae quod modi ea! Maiores rem nesciunt sit.</p>
        <p>Repudiandae aspernatur, reiciendis eos magnam at fugit accusamus ducimus impedit deleniti cupiditate totam, provident vero omnis blanditiis inventore excepturi est velit consequuntur praesentium quas. Magnam laborum exercitationem debitis corporis minima?</p>
        <p>Odio soluta aspernatur aliquid cum suscipit amet natus hic, distinctio voluptas omnis? Consequatur error pariatur architecto maiores voluptatibus asperiores doloremque amet deleniti, tempore, ratione saepe quas eveniet perspiciatis officiis quisquam.</p>
      </div>
    </div>
  );
}

export default App;