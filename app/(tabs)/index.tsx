import React from 'react'
import {StyleSheet, Image } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { ThemedIcon } from '@/components/ThemedIcon';
import { ThemedView } from '@/components/ThemedView';

const HomePage = () => {
    const user = {
        name: 'Munyaradzi',
        avatar: '../assets/images/avatar.png'
    }

    return (
        <ThemedView style={styles.container}>
            {/* the profile picture top dic */}
            <ThemedView style={styles.profileContainer}>
                <Image source={require('../../assets/images/avatar.png')}/>
                <ThemedText style={styles.profileText}>{user.name}</ThemedText>
                <ThemedView style={styles.iconContainer}>
                   <ThemedIcon name='search'/>
                   <ThemedIcon name='notifications'/>
                </ThemedView>
            </ThemedView>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
container: {
display: 'flex',
marginTop: 40,
padding: 20
},
text: {
},
iconContainer: {
display: 'flex',
flexDirection: 'row',
marginLeft: 'auto',
width: 80,
justifyContent: 'space-between'
},
profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
},
profileText: {
marginLeft: 20,
fontSize: 24
}
}) 

export default HomePage