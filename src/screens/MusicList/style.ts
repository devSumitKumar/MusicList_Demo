import {StyleSheet} from 'react-native';

export const useStyle = () => {
const style = StyleSheet.create({

itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },

  gradientOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0.6,
  },
  labelContainer: {
    padding: 12,
    minHeight: 48,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212529',
    textAlign: 'left',
    lineHeight: 20,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
  },

});

return style;
};



export default useStyle;
