import React from 'react'
import { useLocation } from 'react-router-dom';


function RecruiterView() {

    var glov;

    const location=useLocation();
     var auth=location.state.data;
    // console.log(location.state.data);

   var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://jobs-api.squareboat.info/api/v1/recruiters/jobs',
  headers: { 
    'Authorization':auth
  }
};
const tarray=new Array();

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data));
  var data=response.data.data.data;
    console.log(data);
    
for (let index = 0; index < data.length; index++) {
    const element = data[index].title;
    tarray.push(element);

    
}


})
.catch(function (error) {
  console.log(error);
});

// console.log(data);

console.log(tarray)

    return (


         
      <div className='cardrec'>
          bhjvh
         
      
    




    </div>


    

  )
}

export default RecruiterView