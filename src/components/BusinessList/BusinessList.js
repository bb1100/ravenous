import React from 'react';
import './BusinessList.css';
//import Business component, up 2 files, down 1 into Business folder, then Business.js file
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render(){
        return (
            <div className="BusinessList">
  {this.props.businesses.map(business => {
      return <Business key={business.id} business={business} />;
  })
  }
</div>
        );
    };
};

export default BusinessList;