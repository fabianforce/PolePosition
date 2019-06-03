import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class ItemList extends Component {
    
    getMemuItems(){
        const {menuitemList} = this.props
        return superheroesData = menuitemList.map((items, key) => {
            return <Text key={key}>{items.item}</Text>
        })
    }
    render(){
        return (
            <View>
                 {this.getMemuItems()}
            </View>
        )
    }
}
const mapStateToProps= state =>{
    return {menuitemList: state.superheros}
}
export default connect(mapStateToProps)(ItemList)