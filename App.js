import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Modal,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { addData, addName, addComment, addLike, dataDelete } from './redux/fb/fb.actions';

const App = ({ addComment, addData, addName, currentComment, currentName, item, addLike, dataDelete }) => {
  const [like, setLike] = React.useState(0);
  const [disLike, setDisLike] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  useEffect(() => {
    console.log("jhbdcjge", modalVisible);
  });
  return (
    <>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
        }}
      />
      <View style={{ width: '90%', height: 50, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', top: '20%' }}>
        <TouchableOpacity style={{ backgroundColor: 'yellow' }} onPress={() => setLike(like + 1)}>
          <Image style={{ width: 35, height: 35, top: 10 }} source={require('./like.png')} />
          <Text style={{ fontSize: 20, color: 'white', left: 50, bottom: 20 }}> {like} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'pink' }} onPress={() => setDisLike(disLike + 1)}>
          <Image style={{ width: 35, height: 35, top: 10 }} source={require('./dislike.png')} />
          <Text style={{ fontSize: 20, color: 'white', left: 50, bottom: 20 }}> {disLike} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'red' }}
          onPress={() => {
            console.log("falslmdkq")

            setModalVisible(true)
          }}
        >

          <Image style={{ width: 35, height: 35, top: 10 }} source={require('./comment.png')} />
        </TouchableOpacity>
        <View>
          <Modal
            animationType="slide"
            // transparent={true}
            visible={modalVisible}>
            <View style={styles.modalView}>
              <View>
                <TouchableHighlight
                  style={{
                    backgroundColor: "green",
                    borderRadius: 20,
                    width: 60,
                    padding: 5,
                    // bottom: '5%',
                    marginLeft: 5,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}> Back </Text>
                </TouchableHighlight>

                <TextInput
                  placeholder="enter your name"
                  onChangeText={text => addName(text)}
                  value={currentName}
                  style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                />
                <TextInput
                  placeholder="enter your comment"
                  onChangeText={text => addComment(text)}
                  value={currentComment}
                  style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
                />

                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    borderRadius: 20,
                    width: 60,
                    padding: 5,
                    marginLeft: 5,
                  }}
                  onPress={() => {
                    let obj1 = {
                      id: Math.random(),
                      currentName: currentName,
                      currentComment: currentComment,
                      like: false,
                    }
                    addData(obj1)
                    addName('')
                    addComment('')
                  }}>
                  <Text style={styles.textStyle}> ADD </Text>

                </TouchableOpacity>
                {
                  console.log(item),

                  item.map(item => {
                    return (
                      <>
                        <Text> {item.currentComment} </Text>
                        <Text> {item.currentName}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            addLike(item.id)
                          }}
                          style={{ backgroundColor: 'white', width: 40, marginLeft: '80%', bottom: '20%' }}>
                          {item.like ? <Image style={{ width: 25, height: 25, top: 10 }} source={require('./fillHeart.png')} /> : <Image style={{ width: 25, height: 25, top: 10 }} source={require('./heart.png')} />}
                        </TouchableOpacity>

                        <TouchableOpacity

                          onPress={() => {
                            console.log("item.id", item.id);
                            dataDelete(item.id)
                          }}
                          style={{ backgroundColor: 'yellow', width: 40, marginLeft: '90%', bottom: '10%' }}>
                          <Image style={{ width: 25, height: 25, top: 10 }} source={require('./delete.png')} />
                        </TouchableOpacity>

                      </>
                    )
                  })
                }

              </View>
            </View></Modal>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tinyLogo: {
    top: 15,
    height: 200,
    width: '100%',
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 90,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
});

const mapStateToProps = state => ({
  currentName: state.demo.currentName,
  currentComment: state.demo.currentComment,
  item: state.demo.item,

});

const mapDispatchToProps = dispatch => ({
  addData: (item) => dispatch(addData(item)),
  addName: (item) => dispatch(addName(item)),
  addComment: (item) => dispatch(addComment(item)),
  addLike: (item) => dispatch(addLike(item)),
  dataDelete: (item) => dispatch(dataDelete(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)