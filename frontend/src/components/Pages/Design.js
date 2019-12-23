import React from "react";
import '../../css/Design.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function Design() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/goodDesign">How it show look</Link>
          </li>
          <li>
            <Link to="/actualDesign">How it really looks like</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/goodDesign">
            <GoodDesign />
          </Route>
          <Route path="/actualDesign">
            <ActualDesign />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }

  function GoodDesign() {
    return (
      <div>
        <h2>goodDesign</h2>
        <img src={require('../../images/goodDesign.PNG')}></img>
      </div>
    );
  }
  
  function ActualDesign() {
    return (
      <div>
        <h2>actualDesign</h2>
        <div>
        <div>
          <span className="NearHome">Near Home</span>
          <svg src="../../images/rectangle.svg"
              class="Rectangle"/>
        </div>
        <div className="SecondRow">
          <span className="SecondRowItem">Акции</span>
          <span className="SecondRowItem">Супермаркет</span>
          <span className="SecondRowItem">Бренды</span>
          <span className="SecondRowItem">Продукты</span>
          <span className="SecondRowItem">Контакты</span>
          <span className="SecondRowItem">Наше приложение</span>
        </div>
        

      </div>
      </div>
    );
  }