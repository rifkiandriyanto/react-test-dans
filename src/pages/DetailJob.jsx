import React from 'react';
import useFetch from '../utils/useFetch';
import Header from '../parts/Header';

import {
  Row,
  Col,
  Spinner,
} from 'reactstrap';
import CardItem from '../components/CardItem';

const DetailJob = (props) => {
  // const [dataId, setDataId] = useState(null);

  const { loading, error, list, jobData } = useFetch(
    false,
    0,
    props.location.state.pageId
  );

  return (
    <div>
      <Header />
      {loading && (
        <div className='mb-5'>
          <Spinner color='secondary' size='sm' className='me-2' />
          <span className='mt-n1'>Loading...</span>
        </div>
      )}
      <div className='w-100 container main'>
        <div className='mt-4'>
          <Row className='mb-5'>
            <Col md='6'>
              <CardItem data={jobData} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailJob;
