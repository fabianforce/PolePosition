import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class ItemList extends Component {
    
    getSuperheroes(){
        const {menuitemList} = this.props
        return superheroesData = menuitemList.map((heroes, key) => {
            return <Text key={key}>{heroes.item}</Text>
        })
    }
    render(){
        return (
            <View>
                 {this.getSuperheroes()}
            </View>
        )
    }
}
const mapStateToProps= state =>{
    return {menuitemList: state.superheros}
}
export default connect(mapStateToProps)(ItemList)