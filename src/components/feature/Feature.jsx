import './feature.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';

const Feature = () => {
  return (
    <div className='feature'>
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertIcon fontSize='small' />
        </div>
        <div className="bottom">
          <div className="featureChart">
            <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
          </div>
            <p className="title">
              Total Sales for today
            </p>
            <p className="amount">
              $1,000,000
            </p>
            <p className="desc">
              Previous Transaction Processing, Last Payment may not be inclided
            </p>
        </div>
    </div>
  )
}

export default Feature