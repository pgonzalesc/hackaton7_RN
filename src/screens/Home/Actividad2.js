import React from 'react';
import {StyleSheet, ScrollView, Image, View, Dimensions, Text} from 'react-native';

const {width, height} = Dimensions.get('window');

const Actividad2 = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{padding: 15}}>
                    <Text style={{fontSize: 25, color: 'white'}}>Feed</Text>
                </View>
                <View style={styles.containerHeader}>
                    <Image
                        source={{
                        uri: 'data:image/jpeg;base64,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',
                        }}
                        style={styles.iconCard}
                    />
                    <View style={{padding:20, backgroundColor:'#232591', flexDirection: 'row'}}>
                        <Image 
                        source={{
                            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e78a2945-a806-42c3-bb8e-5b082d873742/d5sgwyu-82353761-bbb4-4fcf-b4b8-abf642c2c847.jpg/v1/fill/w_948,h_843,q_70,strp/woman_profile_study_by_andrecastelo_d5sgwyu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MTEiLCJwYXRoIjoiXC9mXC9lNzhhMjk0NS1hODA2LTQyYzMtYmI4ZS01YjA4MmQ4NzM3NDJcL2Q1c2d3eXUtODIzNTM3NjEtYmJiNC00ZmNmLWI0YjgtYWJmNjQyYzJjODQ3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pXcr2f0Fx6qJVHMzbTw_PAm8U-1vo7EAvGlQ0_at5NY',
                        }}
                        style={{width: 40, height: 40, borderRadius: 25,}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{color:'white', fontWeight: 'bold'}}>Peter Marconi</Text>
                            <Text style={{color:'white', fontWeight: '400', color:'#e1e1e1'}}>Esto es una Descripcion</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.ContainerBody}>
                    <View style={styles.imageItem}>
                        <Image
                            source={{
                            uri: 'https://cdn2.wanderlust.co.uk/media/1028/cropped-shutterstock_497799013.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131915974290000000',
                            }}
                            style={styles.imageBody}
                        />
                        <View style={{padding:20, backgroundColor:'#232591', flexDirection: 'row'}}>
                            <Image 
                            source={{
                                uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e78a2945-a806-42c3-bb8e-5b082d873742/d5sgwyu-82353761-bbb4-4fcf-b4b8-abf642c2c847.jpg/v1/fill/w_948,h_843,q_70,strp/woman_profile_study_by_andrecastelo_d5sgwyu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MTEiLCJwYXRoIjoiXC9mXC9lNzhhMjk0NS1hODA2LTQyYzMtYmI4ZS01YjA4MmQ4NzM3NDJcL2Q1c2d3eXUtODIzNTM3NjEtYmJiNC00ZmNmLWI0YjgtYWJmNjQyYzJjODQ3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pXcr2f0Fx6qJVHMzbTw_PAm8U-1vo7EAvGlQ0_at5NY',
                            }}
                            style={{width: 40, height: 40, borderRadius: 25,}}
                            />
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'white', fontWeight: 'bold'}}>Peter Marconi</Text>
                                <Text style={{color:'white', fontWeight: '400', color:'#e1e1e1'}}>Esto es una Descripcion</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.imageItem}>
                        <Image
                            source={{
                            uri: 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg',
                            }}
                            style={styles.imageBody}
                        />
                        <View style={{padding:20, backgroundColor:'#232591', flexDirection: 'row'}}>
                            <Image 
                            source={{
                                uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e78a2945-a806-42c3-bb8e-5b082d873742/d5sgwyu-82353761-bbb4-4fcf-b4b8-abf642c2c847.jpg/v1/fill/w_948,h_843,q_70,strp/woman_profile_study_by_andrecastelo_d5sgwyu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MTEiLCJwYXRoIjoiXC9mXC9lNzhhMjk0NS1hODA2LTQyYzMtYmI4ZS01YjA4MmQ4NzM3NDJcL2Q1c2d3eXUtODIzNTM3NjEtYmJiNC00ZmNmLWI0YjgtYWJmNjQyYzJjODQ3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pXcr2f0Fx6qJVHMzbTw_PAm8U-1vo7EAvGlQ0_at5NY',
                            }}
                            style={{width: 40, height: 40, borderRadius: 25,}}
                            />
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'white', fontWeight: 'bold'}}>Peter Marconi</Text>
                                <Text style={{color:'white', fontWeight: '400', color:'#e1e1e1'}}>Esto es una Descripcion</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.imageItem}>
                        <Image
                            source={{
                            uri: 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png',
                            }}
                            style={styles.imageBody}
                        />
                        <View style={{padding:20, backgroundColor:'#232591', flexDirection: 'row'}}>
                            <Image 
                            source={{
                                uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e78a2945-a806-42c3-bb8e-5b082d873742/d5sgwyu-82353761-bbb4-4fcf-b4b8-abf642c2c847.jpg/v1/fill/w_948,h_843,q_70,strp/woman_profile_study_by_andrecastelo_d5sgwyu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MTEiLCJwYXRoIjoiXC9mXC9lNzhhMjk0NS1hODA2LTQyYzMtYmI4ZS01YjA4MmQ4NzM3NDJcL2Q1c2d3eXUtODIzNTM3NjEtYmJiNC00ZmNmLWI0YjgtYWJmNjQyYzJjODQ3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pXcr2f0Fx6qJVHMzbTw_PAm8U-1vo7EAvGlQ0_at5NY',
                            }}
                            style={{width: 40, height: 40, borderRadius: 25,}}
                            />
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'white', fontWeight: 'bold'}}>Peter Marconi</Text>
                                <Text style={{color:'white', fontWeight: '400', color:'#e1e1e1'}}>Esto es una Descripcion</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.imageItem}>
                        <Image
                            source={{
                            uri: 'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
                            }}
                            style={styles.imageBody}
                        />
                        <View style={{padding:20, backgroundColor:'#232591', flexDirection: 'row'}}>
                            <Image 
                            source={{
                                uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e78a2945-a806-42c3-bb8e-5b082d873742/d5sgwyu-82353761-bbb4-4fcf-b4b8-abf642c2c847.jpg/v1/fill/w_948,h_843,q_70,strp/woman_profile_study_by_andrecastelo_d5sgwyu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MTEiLCJwYXRoIjoiXC9mXC9lNzhhMjk0NS1hODA2LTQyYzMtYmI4ZS01YjA4MmQ4NzM3NDJcL2Q1c2d3eXUtODIzNTM3NjEtYmJiNC00ZmNmLWI0YjgtYWJmNjQyYzJjODQ3LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pXcr2f0Fx6qJVHMzbTw_PAm8U-1vo7EAvGlQ0_at5NY',
                            }}
                            style={{width: 40, height: 40, borderRadius: 25,}}
                            />
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'white', fontWeight: 'bold'}}>Peter Marconi</Text>
                                <Text style={{color:'white', fontWeight: '400', color:'#e1e1e1'}}>Esto es una Descripcion</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#232567',
    },
    containerHeader: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    
    iconCard: {
        width: width,
        height: height/4,
    },
    ContainerBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    imageItem: {
        flexBasis: '49%'
    },
    imageBody: {
        width: '100%',
        height: 200,
        marginVertical: 4
    },
  });

export default Actividad2;