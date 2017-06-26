import React, { Component } from 'react';
import './App.css';


// Main component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
           <Article />
          </div>
        </div>
      </div>
    );
  }
}

// Article component
class Article extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        heading: "Fruit",
        article: "Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Accordingly, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings."
        
      };
    }
  
  changeArticle() {
    if(this.state.heading === "Fruit" && this.state.article === "Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Accordingly, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.") {
         this.setState({
           heading: "People",
           article: "A people is a plurality of persons considered as a whole, as is the case with an ethnic group or nation. Collectively, for example, the contemporary Frisians and Danes are two related Germanic peoples, while various Middle Eastern ethnic groups are often linguistically categorized as Semitic peoples. A People's Republic is typically a Marxist or socialist one-party state that claims to govern on behalf of the people even if it in practice often turns out to be a dictatorship state."
          
         });
       } else {
         this.setState({
          heading: "Fruit",
          article: "Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Accordingly, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings."
         });
       }
   
  }
  
  render() {
    const redColor = {
      color: "red"
    };
    
    return (
      <div className="container">
        <div className="row">
          <div className="col">
               <h3>{this.state.heading}</h3>
        <p>{this.state.article}</p>
            <hr/>
            <button onClick={this.changeArticle.bind(this)} className="btn btn-primary">New Article</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
