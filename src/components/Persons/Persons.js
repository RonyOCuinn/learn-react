import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
      // static getDerivedStateFromProps(props, state) {
      //       console.log('Persons.js getDerivedStateFromProps');
      //       return state;
      // }

      // shouldComponentUpdate(nextProps, nextState) {
      //       console.log('Persons.js shouldComponentUpdate');
      //       return (nextProps.persons !== this.props.persons ||
      //             nextProps.changed !== this.props.changed ||
      //             nextProps.clicked !== this.props.clicked);
      // }

      getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('Persons.js getSnapshotBeforeUpdate');
            return { message: 'Snapshot!' }
      }

      render() {
            console.log('Persons.js rendering')
            return this.props.persons.map((person, index) => {
                  return <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)} 
                        />
            }
            )
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
            console.log(snapshot);
            console.log('Persons.js componentDidUpdate');
      }

      componentWillUnmount() {
            console.log('Persons.js componentWillUnmount');
      }

};

export default Persons;