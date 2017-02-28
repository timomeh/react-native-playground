const fs = require('fs')
const name = process.argv[2]

const contents = `// @flow

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'


export default class Playground extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', margin: 40 }}>${name}</Text>
      </View>
    )
  }

}`

fs.mkdirSync(name)
fs.writeFileSync(`./${name}/index.android.js`, contents)
fs.writeFileSync(`./${name}/index.ios.js`, contents)
