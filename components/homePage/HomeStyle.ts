import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#902BB4',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 36,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileButtonContainer: {
    width: 80,
  },
  luckyPartnerText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    color: '#902BB4',
  },
  officialDistributorText: {
    textAlign: 'center',
    color: 'red',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  paragraph: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
  },
  openText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  chatNowText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    padding: 5,
  },
  headerLogoImage: {},
  headerLogoImageSmall: {
    height: 100,
    width: 136,
  },
  bodyLandscape: {
    width: '100%',
    top: '40%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'flex-end',
    flexGrow: 1,
    paddingTop: 10,
    backgroundColor: '#FFA800',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body: {
    width: '100%',
    top: '22%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'flex-end',
    flexGrow: 1,
    paddingTop: 10,
    backgroundColor: '#FFA800',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    height: 700,
  },
  bodyBlock: {
    flexDirection: 'column',
  },
  bodyBlock2: {
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
  },
  titleAndInviteContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: '#FFA800',
    fontWeight: 'bold',
    fontSize: 25,
  },
  divider: {
    height: 6,
    width: '100%',
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
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
    height: 25,
  },
  spacer2: {
    width: 25,
    height: 15,
  },
});

export default styles;
