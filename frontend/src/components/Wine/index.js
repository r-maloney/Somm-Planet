import "./Wine.css";

const Wine = ({ wine }) => {
  return (
    <div className='wine__details-group'>
      <div className='wine__details-avatar'>
        <img src='/images/wine-glass-icon.png' alt='wine glass icon' />
      </div>
      <ul className='wine__details'>
        <li className='wine__name wine__detail'>{wine.name}</li>
        {wine.winery && (
          <li className='wine__winery wine__detail'>
            {" "}
            <div className='wine__label'>Winery:</div> {wine.winery}
          </li>
        )}
        {wine.vintage && (
          <li className='wine__vintage wine__detail'>
            {" "}
            <div className='wine__label'>Vintage:</div> {wine.vintage}
          </li>
        )}
        {wine.type && (
          <li className='wine__type wine__detail'>
            {" "}
            <div className='wine__label'>Type:</div> {wine.type}
          </li>
        )}
        {wine.varietal && (
          <li className='wine__varietal wine__detail'>
            {" "}
            <div className='wine__label'>Varietal:</div> {wine.varietal}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Wine;
