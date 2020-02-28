import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes, { number, func, string } from 'prop-types';

class Person extends Component {
    render() {
        console.log('Person.js rendering')
        return (
            <Auxiliary>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxiliary>
            );
    }
};

Person.propTypes = {
    click: func,
    name: string,
    age: number,
    changed: func
};

export default withClass(Person, classes.Person);