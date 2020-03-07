import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log("Cockpit.js useEffect");
    toggleBtnRef.current.click();
    return () => {
      console.log('Cockpit.js useEffect cleanup work');
    }
  }, []);

  useEffect(() => {
    console.log("Cockpit.js 2nd useEffect");
    return () => {
      console.log('Cockpit.js 2nd useEffect cleanup work');
    }
  })

  const assignedClasses = [];

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This works.</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.click}>
        View/Hide persons
      </button>
        <button onClick={context.login}>
          Login
      </button>
    </div>
  );
};

export default React.memo(Cockpit);