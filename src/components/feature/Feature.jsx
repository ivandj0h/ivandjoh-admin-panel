import './feature.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
            <p className="summary">
              <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">$10.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">$22.2k</div>
                </div>
              </div>
            </p>
        </div>
    </div>
  )
}

export default Feature