import styles from './Person.module.css';
import React from 'react';

class Person extends React.Component {

  render() {
    console.log(styles);
    return (
      <div>
        <h1 className={styles.fullName}>FullName: Nguyen Van A</h1>
      </div >
    );
  }
}

export default Person;



