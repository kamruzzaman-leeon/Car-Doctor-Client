import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,service_id,title,img,price,description,facility}=service
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
  <figure className='px-10 pt-10 h-full'><img src={img} alt={title} /></figure>
  <div className="card-body font-bold">
    <h2 className="card-title text-2xl ">{title}</h2>
    <p className='text-primary '>Price: ${price}</p>
   <Link></Link>
  </div>
</div>
    );
};
ServiceCard.propTypes={
    service:PropTypes.object
}
export default ServiceCard;