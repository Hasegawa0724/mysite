import React from 'react';
// import neko from './neko01.jpg';
import NekoChan from './components/NekoChan';
import './App.css';

const nekoChanlist =[
  {name:'ねこちゃん！'},
  {name:'のらねこちゃん'},
  {name:'ねむねこちゃん'},
  {name:'けんかねこちゃん'},
  {name:'こねこちゃん'},
  {name:'ろしあんぶるーちゃん'},
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: nekoChanlist[0].name,
      image: 1,
      // current: 1
    }
  }
  handleClick(name,image){
    this.setState({
      name: name,
      image: image,
      // current: image,
    });
  }
  render() {
    return(
      <div className="App">
        <h1>MySite</h1>
        <p>Github Pagesのテストです</p>
        <ul>
        {nekoChanlist.map((nekoChanItem,index) => {
          return(
            <NekoChan
              key = {index}
              index = {index + 1}
              name = {nekoChanItem.name}
              onClick = {() => this.handleClick(nekoChanItem.name,index+1)}
              current = {this.state.image}
            />
          )
        })}
        </ul>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/img/neko0${this.state.image}.jpg`} alt={this.state.name} />
          <figcaption>{this.state.name}</figcaption>
        </figure>
      </div>
    );
  }

}

export default App;
