
import   React, { Component }  from 'react';
import   ReactDOM from 'react-dom';
import   ImageList from './components/image_list'
import   axios from 'axios'

import './main.html';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }


  componentWillMount(){
    console.log('app is about to render');
    axios.get('https://api.imgur.com/3/gallery/hot/viral/1', {
      headers: {
         Authorization: 'Client-ID a8778eb90ff71c7'
      }
      })
        .then(response => this.setState({ images: response.data.data }));
  };
  render() {
    console.log(this.state.images);
    return(
      <div>
        <ImageList key={this.state.images.id} images={this.state.images}/>
      </div>
    );
  };
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});