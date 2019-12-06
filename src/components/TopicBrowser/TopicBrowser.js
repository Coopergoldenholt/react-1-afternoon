import React, { Component } from "react";
import EvenandOdd from "../Topics/EvenAndOdd"
import FilterObject from "../Topics/FilterObject"
import FilterString from "../Topics/FilterString"
import Palindrome from "../Topics/Palindrome"
import Sum from "../Topics/Sum"


export default class TopicBrowser extends Component {
  render() {
    return (
    <div>
      <EvenandOdd/>
      <FilterObject/>
      <FilterString/>
      <Palindrome/>
      <Sum/>
    </div>
        )
  }
}
