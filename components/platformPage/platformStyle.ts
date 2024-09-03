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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#902BB4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
  },
  polygonButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
    padding: 30,
    paddingVertical: 40,
  },
  flatlist: {
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
    marginBottom: -10,
  },
});

export default styles;
