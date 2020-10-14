import React,{Component} from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import $ from 'jquery';
import Career from './components/Career';
import Apply from './components/Apply';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Career" component={Career} />
                    <Route exact path="/Apply" component={Apply} />
                </Switch>
            </Router>
        )
    }
}

export default App;