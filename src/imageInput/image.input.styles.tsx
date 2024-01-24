import { makeStyles, createStyles } from '@mui/styles';
import CloseSvg from 'app/assets/svg/close.svg';

export default makeStyles(() =>
    createStyles({
      imageContainer: {
        position: 'relative',
        flexWrap: 'nowrap',
        marginRight: '1em'
      },
      imageBox: {
        position: 'relative',
        cursor: 'pointer'
      },
      image: {
        width: 220,
        height: 220,
        objectFit: 'cover',
        border: `1px dashed blue`,
        borderRadius: 6
      },
      imageLabel: {
        fontSize: 14,
        margin: '2px 10px 0 0'
      },
      deleteIcon: {
        position: 'absolute',
        width: 25,
        height: 25,
        top: 12,
        right: 15,
        zIndex: 1000,
        background: `center / 100% no-repeat blue url(${CloseSvg})`,
        borderRadius: '50%'
      }
    }),
  { name: 'ImageInput' }
);
