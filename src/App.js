import React from 'react';
import Rides from './Rides';
import NavBarPage from './NavBarPage';
import styles from './App.module.css';

function App() {
  return  <div><NavBarPage/>
            <div className={styles.row}>
              <div className="col-md-4"></div>
              <div className={styles.rides}><h2 className={styles.title}>My rides</h2><Rides/></div> 
            </div>
          </div>;
}
 
export default App;