import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#902BB4',
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
    backgroundColor: '#FFA800',
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
    color: '#FFA800',
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
  spacer: {
    width: 25,
  },
  hiddenLogo: {
    alignSelf: 'center',
  },
});

export default styles;
