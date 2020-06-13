export default {
  container: {
    padding: 12,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fullFlexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0
  },

};
