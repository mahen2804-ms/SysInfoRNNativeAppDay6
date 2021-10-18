<<<<<<< HEAD
import { values } from 'json-server-auth';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { gestureHandlerRootHOC, RectButton } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from "react-native-modal";
import Typography from '../Typography';
import styles from "./styles";

const ImagePickerModelView = gestureHandlerRootHOC(({ onPress }) => {
    return (
        <>
            <View style={styles.box}>
                <Typography variant="h1"> Select Image </Typography>
            </View>
            <RectButton style={styles.box} onPress={() => onPress('Camera')}>
                <Text style={styles.demo} > Take Photo... </Text>
            </RectButton>
            <RectButton style={styles.box} onPress={() => onPress('Library')}>
                <Text style={styles.demo}> Choose from Library... </Text>
            </RectButton>
            <RectButton style={styles.box}>
                <Text style={styles.demo}> Choose file from Custom Option </Text>
            </RectButton>
            <RectButton style={styles.box} onPress={() => onPress('cancel')}>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.demo}> CANCEL</Text>
                </View>
            </RectButton>
        </>

    );
}, {
    backgroundColor: "#fff",
    flex: 0,

});

class ImagePicker extends PureComponent {
    state = {
        isModelVisible: false,
    };
    toggleImagePicker = () => {
        this.setState(({ isModelVisible }) => ({
            isModelVisible: !isModelVisible
        }));
    };
    render() {
        const { isModelVisible } = this.state;
        return (
            <Modal isVisible={isModelVisible}>
                <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 10, }}>
                    <ImagePickerModelView onPress={type => {
                        switch (type) {
                            case 'Camera':
                                launchCamera({
                                    mediaType: 'photo',
                                    cameraType: 'front',
                                }, res => {
                                    // console.warn(res);
                                    this.props.onImageSelect(res);
                                    this.toggleImagePicker();

                                });
                                break;
                            case 'Library':
                                launchImageLibrary({
                                    mediaType: 'photo',
                                }, res => {
                                    // console.warn(res);
                                    this.props.onImageSelect(res);
                                    this.toggleImagePicker(res);
                                });
                                break;
                            default:
                            case 'cancel':
                                this.toggleImagePicker();
                                break;
                        }
                    }} />
                </View>
            </Modal>
        )
    }
=======
import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {gestureHandlerRootHOC, RectButton} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Divider from '../Divider';
import Typography from '../Typography';
import styles from './styles';

const ImagePickerModelView = gestureHandlerRootHOC(
  ({onPress}) => {
    return (
      <>
        <View style={styles.box}>
          <Typography variant="h3" style={{color: 'dodgerblue'}}>
            Select Avatar
          </Typography>
        </View>
        <Divider style={{backgroundColor: 'dodgerblue'}} />
        <RectButton style={styles.box} onPress={() => onPress('camera')}>
          <Typography variant="body1">Select From Camera...</Typography>
        </RectButton>
        <RectButton style={styles.box} onPress={() => onPress('library')}>
          <Typography variant="body1">Select From Library...</Typography>
        </RectButton>
        <RectButton style={styles.box} onPress={() => onPress('cancel')}>
          <Typography variant="body1">Cancel</Typography>
        </RectButton>
      </>
    );
  },
  {
    backgroundColor: '#fff',
    flex: 0,
  },
);

class ImagePicker extends PureComponent {
  state = {
    isModelVisible: false,
  };

  toggleImagePicker = () => {
    this.setState(({isModelVisible}) => ({
      isModelVisible: !isModelVisible,
    }));
  };

  render() {
    const {isModelVisible} = this.state;
    return (
      <Modal isVisible={isModelVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingVertical: 10,
          }}>
          <ImagePickerModelView
            onPress={type => {
              switch (type) {
                case 'camera':
                  launchCamera(
                    {
                      mediaType: 'photo',
                      cameraType: 'front',
                    },
                    res => {
                      this.props.onImageSelect(res);
                      this.toggleImagePicker();
                    },
                  );
                  break;
                case 'library':
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                    },
                    res => {
                      this.props.onImageSelect(res);
                      this.toggleImagePicker();
                    },
                  );
                  break;

                default:
                  this.toggleImagePicker();
                  break;
              }
            }}
          />
        </View>
      </Modal>
    );
  }
>>>>>>> aceac507ff0a1817282f5b67984daa575e946082
}

export default ImagePicker;
