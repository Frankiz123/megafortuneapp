import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 15,
    padding: 15,
    flexGrow: 1,
    paddingTop: 20,
    backgroundColor: '#902BB4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
  },
  polygonButton: {
    position: 'absolute',
    alignSelf: 'flex-start',
    tintColor: '#7209B7',
    bottom: 0,
    padding: 30,
    paddingVertical: 40,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  flatlist: {
    paddingTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dualIconContainer: {
    flexDirection: 'row',
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  messageIcon: {
    width: 27,
    height: 27,
  },
  notificationIcon: {
    width: 26.07,
    height: 27.7,
  },
  paragraph: {
    textAlign: 'center',
    color: '#FFA800',
    paddingBottom: 10,
    fontSize: 12,
  },
  heading: {
    textAlign: 'center',
    color: '#FFA800',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  contactUs: {
    fontWeight: 'bold',
    color: '#FFA800',
    textAlign: 'center',
    fontSize: 21,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    color: '#902BB4',
    textAlign: 'center',
    backgroundColor: '#FFA800',
    width: 322,
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  messageBox: {
    color: '#902BB4',
    textAlign: 'center',
    backgroundColor: '#FFA800',
    width: 322,
    height: 100,
    alignSelf: 'center',
    marginVertical: 15,
    fontSize: 20,
  },
  spacer: {
    width: 25,
    height: 15,
  },
  hiddenLogo: {
    alignSelf: 'center',
  },
});

export default styles;
