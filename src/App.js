import React from 'react';
import './App.css';
import {
    squared,
    arrowGreating3,
    arrowGreating2,
    arrowGreating,
    createGreating,
    deliverBoy
} from './lessons/lesson1';

import {
  message,
  message2,
  message3,
  varTest,
  letTest,
  varFunc,
  letFunc
} from'./lessons/lesson2';

import {
  greet,
  greet2,
  greet3,
  receive
} from './lessons/lesson3'

import {
  VALUE,
  VALUE2,
  VALUE3
} from './lessons/lesson4'

import {
  person,
  team
} from './lessons/lesson5'

import {
  car,
  car2,
  car3,
  car4
} from './lessons/lesson6'

import {
  data,
  firstArr,
  firstArr2,
  add
} from './lessons/lesson7'

import {
  greeting,
  addition,
  message8
} from './lessons/lesson8'

import {
  generateObj,
  firstColor,
  fifthColor,
  people
} from './lessons/lesson9'

import * as addNumbers from './lessons/lesson10'
import './lessons/lesson12'
import './lessons/lesson13'
import './lessons/lesson14'
import './lessons/lesson15'
import './lessons/lesson16'

let {name, state} = generateObj()

let {name:firstName9, state:location} = generateObj();

let [,John] = people

const phoneNum = ({phone}) => phone

function App() {
  return (
    <div className="lessons">
      <div className="lesson"><p>Lesson 1 -arrow function</p>
        <div>{`createGreating function: ${createGreating("Hello"," Roman")}`}</div>
        <div>{`arrowGreating: ${arrowGreating("Hello"," Maxi")}`}</div>
        <div>{`arrowGreating2: ${arrowGreating2("Hello"," Dolly")}`}</div>
        <div>{`arrowGreating3: ${arrowGreating3("Hello"," Adam")}`}</div>
        <div>{`Score 2x2: ${squared(2)}`}</div>
        <div>{`deliverBoy in console`}{deliverBoy.receive()}</div>
      </div>
      <div className="lesson"><p>Lesson 2 - let keyword</p>
        <div>{`Message after var: ${message}`}</div>
        <div>{`Message after add function greet: ${message2}`}</div>
        <div>{`Message after let: ${message3}`}</div>
        <div>var test in console {varTest()}</div>
        <div>let test in console{letTest()}</div>
        <div>varFunc in console{varFunc()}</div>
        <div>letFunc in console{letFunc()}</div>
      </div>
      <div className="lesson"><p>Lesson 3 - default values</p>
        <div>greet func in console {greet()}</div>
        <div>greet2 func in console {greet2("hello")}</div>
        <div>greet3 func in console {greet3("Hello","Bill")}</div>
        <div>receive func in console {receive()}</div>
      </div>
      <div className="lesson"><p>Lesson 4 - const</p>
        <div>var changed value = {VALUE}</div>
        <div>const value2 = {VALUE2}</div>
        <div>const value3 object in console: bar: 'foo' {console.log(VALUE3)}</div>
      </div>
      <div className="lesson"><p>Lesson 5 - shorthand properties</p>
        <div>person values in console (firstName, lastName) {console.log(person)}</div>
        <div>team values in console (firstName, lastName, mascot) {console.log(team)}</div>
      </div>
      <div className="lesson"><p>Lesson 6 - object enhancements</p>
        <div>object car: {car.color} and {car.speed}</div>
        <div>object car2: {car2.color} and {car2.speed} and {car2.go()}</div>
        <div>object car3: {car3.color} and {car3.speed} and {car3.go2()}</div>
        <div>object car4: {car4.color} and {car4.speed} and {car4.go()}</div>
      </div>
      <div className="lesson"><p>Lesson 7 - spread operator</p>
      {console.log("lesson 7")}
        <div>show data in console {console.log(data)}</div>
        <div>show data with spread in console {console.log(...data)}</div>
        <div>show array after push in console {console.log(firstArr)}</div>
        <div>show array after spread push in console {console.log(firstArr2)}</div>
        <div>add func = {add(...firstArr)}</div>
      </div>
      <div className="lesson"><p>Lesson 8 - template literals</p>
        {console.log("lesson 8")}
        <div>{`show greeting after template literals ${greeting}`}</div>
        <div>{`show addition after template literals ${addition}`}</div>
        <div>show message after template literals in console {console.log(message8)}</div>
      </div>
      <div className="lesson"><p>Lesson 9 - destructuring assignment</p>
        {console.log("lesson 9")}
        <div>generate obj state: {state} </div>
        <div>generate obj name: {name} </div>
        <div>generate obj location: {location} </div>
        <div>generate obj firstName9: {firstName9} </div>
        <div>show fisrt color: {firstColor} </div>
        <div>show fifth color: {fifthColor} </div>
        <div>names in console
          {
            people.forEach(({firstName}) => console.log(firstName))
          }
        </div>
        <div>{console.log(phoneNum(John))}</div>
      </div>
      <div className="lesson"><p>Lesson 10 - modules</p>
        {console.log("lesson 10")}
        <div>sumTwo 2 + 5 = {addNumbers.sumTwo(2,5)}</div>
        <div>sumTwo 2 + 5 + 3 = {addNumbers.sumThree(2,5,3)}</div>
      </div>
    </div>
  );
}


export default App;
