import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, FlatList, Animated } from 'react-native';
import SocialNetworkItem from './SocialNetworkItem';

const SocialNetworkSlider = ({data}) => {
    const scrollX = new Animated.Value(0);

    if (data && data.length) {
        return (
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
                return <SocialNetworkItem item={item.item} />;
            }}
            onScroll={Animated.event([
                {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}
            />
        </View>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        //height:50,
        flex:1,
    }
});

export default SocialNetworkSlider;